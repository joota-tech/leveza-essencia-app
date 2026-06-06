import { useEffect, useState } from "react";

const STORAGE_KEY = "daily-reminder-v1";
const DEFAULT_TIME = "08:30";

type State = {
  enabled: boolean;
  lastShownDate: string | null; // YYYY-MM-DD
  time?: string; // HH:MM
};

type Mode = "native" | "in-app";

function loadState(): State {
  if (typeof window === "undefined") return { enabled: false, lastShownDate: null, time: DEFAULT_TIME };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as State;
      return { time: DEFAULT_TIME, ...parsed };
    }
  } catch {
    /* ignore */
  }
  return { enabled: false, lastShownDate: null, time: DEFAULT_TIME };
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

function parseTime(t: string): { h: number; m: number } {
  const [hStr, mStr] = (t || DEFAULT_TIME).split(":");
  const h = Math.max(0, Math.min(23, parseInt(hStr, 10) || 0));
  const m = Math.max(0, Math.min(59, parseInt(mStr, 10) || 0));
  return { h, m };
}

function notificationsAvailable(): boolean {
  if (typeof window === "undefined") return false;
  if (!("Notification" in window)) return false;
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
  const [time, setTimeState] = useState<string>(DEFAULT_TIME);

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
    setTimeState(s.time || DEFAULT_TIME);
  }, []);

  // Dispara notificación nativa (solo modo native, granted)
  useEffect(() => {
    if (mode !== "native" || permission !== "granted" || !enabled) return;

    const body = quote.trim();
    if (!body) return;

    const { h, m } = parseTime(time);

    const showNow = () => {
      const s = loadState();
      if (s.lastShownDate !== todayKey()) {
        try {
          new Notification("Reto 21 Días 💛", {
            body,
            icon: "/favicon.ico",
            tag: "daily-quote",
          });
          saveState({ ...s, enabled: true, lastShownDate: todayKey() });
        } catch {
          /* ignore */
        }
      }
    };

    // Si ya pasó la hora hoy y aún no se mostró, dispara
    const now = new Date();
    const todayTarget = new Date();
    todayTarget.setHours(h, m, 0, 0);
    if (now.getTime() >= todayTarget.getTime()) showNow();

    const next = new Date();
    next.setHours(h, m, 0, 0);
    if (next.getTime() <= now.getTime()) next.setDate(next.getDate() + 1);
    const delay = next.getTime() - now.getTime();
    const timer = window.setTimeout(showNow, delay);
    return () => window.clearTimeout(timer);
  }, [mode, permission, enabled, quote, time]);

  const requestPermission = async () => {
    const cur = loadState();
    if (mode === "in-app") {
      setEnabled(true);
      saveState({ ...cur, enabled: true, lastShownDate: null });
      return;
    }
    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      setEnabled(true);
      saveState({ ...cur, enabled: true, lastShownDate: null });
    } catch {
      setEnabled(true);
      saveState({ ...cur, enabled: true, lastShownDate: null });
    }
  };

  const toggle = (value: boolean) => {
    setEnabled(value);
    const cur = loadState();
    saveState({ ...cur, enabled: value });
  };

  const setTime = (value: string) => {
    const { h, m } = parseTime(value);
    const normalized = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    setTimeState(normalized);
    const cur = loadState();
    saveState({ ...cur, time: normalized, lastShownDate: null });
  };

  return { mode, permission, enabled, time, requestPermission, toggle, setTime };
}
