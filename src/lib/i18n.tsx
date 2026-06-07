import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dict, type Locale } from "./i18n-dict";

export type { Locale };

const KEY = "desafio21-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const LocaleCtx = createContext<Ctx | null>(null);

function detectInitial(): Locale {
  if (typeof window === "undefined") return "es";
  try {
    const stored = localStorage.getItem(KEY);
    if (stored === "es" || stored === "pt" || stored === "en") return stored;
  } catch {}
  const nav = typeof navigator !== "undefined" ? navigator.language?.slice(0, 2).toLowerCase() : "";
  if (nav === "pt") return "pt";
  if (nav === "en") return "en";
  return "es";
}

function lookup(locale: Locale, key: string): string | undefined {
  const parts = key.split(".");
  let node: unknown = dict[locale];
  for (const p of parts) {
    if (node && typeof node === "object" && p in (node as Record<string, unknown>)) {
      node = (node as Record<string, unknown>)[p];
    } else {
      return undefined;
    }
  }
  return typeof node === "string" ? node : undefined;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    setLocaleState(detectInitial());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem(KEY, l); } catch {}
  }, []);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      let s = lookup(locale, key) ?? lookup("es", key) ?? key;
      if (vars) {
        for (const k of Object.keys(vars)) {
          s = s.replaceAll(`{${k}}`, String(vars[k]));
        }
      }
      return s;
    },
    [locale],
  );

  const value = useMemo<Ctx>(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useT() {
  return useLocale().t;
}

export const LANGUAGES: { code: Locale; label: string; native: string }[] = [
  { code: "es", label: "Español", native: "Español" },
  { code: "pt", label: "Portugués", native: "Português" },
  { code: "en", label: "Inglés", native: "English" },
];
