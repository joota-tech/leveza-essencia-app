import { useEffect, useState } from "react";

const STORAGE_KEY = "daily-reminder-v1";
const REMINDER_HOUR = 8; // 08:30
const REMINDER_MINUTE = 30;

type State = {
  enabled: boolean;
  lastShownDate: string | null; // YYYY-MM-DD
};

type Mode = "native" | "in-app";

function loadState(): State {
  if (typeof window === "undefined") return { enabled: false, lastShownDate: null };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as State;
  } catch {
    /* ignore */
  }
  return { enabled: false, lastShownDate: null };
}

function saveState(s: State) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function notificationsAvailable(): boolean {
  if (typeof window === "undefined") return false;
  if (!("Notification" in window)) return false;
  // Em iframes com permissions-policy bloqueando, requestPermission lança ou
  // resolve "denied". Detectamos iframe para já cair no modo in-app.
  try {
    if (window.self !== window.top) return false;
  } catch {
    return false;
  }
  return true;
}

export function useDailyReminder(quote: string) {
  const [mode, setMode] = useState<Mode>("in-app");
  const [permission, setPermission] = useState<NotificationPermission | "unsupported">("unsupported");
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (notificationsAvailable()) {
      setMode("native");
      setPermission(Notification.permission);
    } else {
      setMode("in-app");
      setPermission("unsupported");
    }
    const s = loadState();
    setEnabled(s.enabled);
  }, []);

  // Dispara notificação nativa (apenas modo native, granted)
  useEffect(() => {
    if (mode !== "native" || permission !== "granted" || !enabled || !quote) return;

    const showIfMorning = () => {
      const now = new Date();
      const s = loadState();
      const isMorning = now.getHours() >= 5 && now.getHours() < 12;
      if (isMorning && s.lastShownDate !== todayKey()) {
        try {
          new Notification("Desafio 21 Dias 💛", {
            body: quote,
            icon: "/favicon.ico",
            tag: "daily-quote",
          });
          saveState({ enabled: true, lastShownDate: todayKey() });
        } catch {
          /* ignore */
        }
      }
    };

    showIfMorning();

    const now = new Date();
    const next = new Date();
    next.setHours(REMINDER_HOUR, REMINDER_MINUTE, 0, 0);
    if (next.getTime() <= now.getTime()) next.setDate(next.getDate() + 1);
    const delay = next.getTime() - now.getTime();
    const timer = window.setTimeout(showIfMorning, delay);
    return () => window.clearTimeout(timer);
  }, [mode, permission, enabled, quote]);

  const requestPermission = async () => {
    // Modo in-app (preview, iframe, sem suporte): só liga o lembrete in-app
    if (mode === "in-app") {
      setEnabled(true);
      saveState({ enabled: true, lastShownDate: null });
      return;
    }
    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      if (result === "granted") {
        setEnabled(true);
        saveState({ enabled: true, lastShownDate: null });
      } else {
        // Negado: ativa fallback in-app mesmo assim
        setEnabled(true);
        saveState({ enabled: true, lastShownDate: null });
      }
    } catch {
      setEnabled(true);
      saveState({ enabled: true, lastShownDate: null });
    }
  };

  const toggle = (value: boolean) => {
    setEnabled(value);
    saveState({ enabled: value, lastShownDate: loadState().lastShownDate });
  };

  return { mode, permission, enabled, requestPermission, toggle };
}
