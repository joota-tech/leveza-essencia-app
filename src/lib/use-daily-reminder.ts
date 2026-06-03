import { useEffect, useState } from "react";

const STORAGE_KEY = "daily-reminder-v1";
const REMINDER_HOUR = 8; // 08:30
const REMINDER_MINUTE = 30;

type State = {
  enabled: boolean;
  lastShownDate: string | null; // YYYY-MM-DD
};

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

export function useDailyReminder(quote: string) {
  const [permission, setPermission] = useState<NotificationPermission | "unsupported">("unsupported");
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      setPermission(Notification.permission);
    }
    const s = loadState();
    setEnabled(s.enabled);
  }, []);

  // Dispara notificação na abertura matinal + agenda a próxima 08:30
  useEffect(() => {
    if (permission !== "granted" || !enabled || !quote) return;

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

    // Agenda próximo disparo às 08:30
    const now = new Date();
    const next = new Date();
    next.setHours(REMINDER_HOUR, REMINDER_MINUTE, 0, 0);
    if (next.getTime() <= now.getTime()) next.setDate(next.getDate() + 1);
    const delay = next.getTime() - now.getTime();
    const timer = window.setTimeout(showIfMorning, delay);
    return () => window.clearTimeout(timer);
  }, [permission, enabled, quote]);

  const requestPermission = async () => {
    if (!("Notification" in window)) return;
    const result = await Notification.requestPermission();
    setPermission(result);
    if (result === "granted") {
      setEnabled(true);
      saveState({ enabled: true, lastShownDate: null });
    }
  };

  const toggle = (value: boolean) => {
    setEnabled(value);
    saveState({ enabled: value, lastShownDate: loadState().lastShownDate });
  };

  return { permission, enabled, requestPermission, toggle };
}
