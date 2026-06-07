import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { useProgress } from "@/lib/use-progress";
import { ArrowLeft, Globe, Moon, Sun, Type, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import { LANGUAGES, useLocale, type Locale } from "@/lib/i18n";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({ meta: [{ title: "Ajustes" }] }),
  component: ConfiguracoesPage,
});

type Settings = {
  theme: "light" | "dark";
  fontSize: "sm" | "md" | "lg";
  sound: boolean;
};

const KEY = "desafio21-settings";
const defaults: Settings = { theme: "light", fontSize: "md", sound: true };

function ConfiguracoesPage() {
  const { progress, update } = useProgress();
  const [settings, setSettings] = useState<Settings>(defaults);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setSettings({ ...defaults, ...JSON.parse(raw) });
    } catch {}
  }, []);

  const save = (patch: Partial<Settings>) => {
    setSettings((s) => {
      const next = { ...s, ...patch };
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  return (
    <MobileShell>
      <header className="flex items-center gap-3 px-6 pt-10">
        <Link to="/perfil" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary" aria-label={t("common.back")}>
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="font-serif text-2xl">{t("settings.title")}</h1>
      </header>

      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="font-serif text-lg flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> {t("settings.language")}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{t("settings.languageHint")}</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => setLocale(l.code as Locale)}
              className={`flex flex-col items-center justify-center gap-0.5 rounded-2xl border p-3 text-xs transition-colors ${
                locale === l.code ? "border-primary bg-blush text-primary" : "border-border/60 bg-secondary"
              }`}
              aria-pressed={locale === l.code}
            >
              <span className="font-serif text-base">{l.native}</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{l.code}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="font-serif text-lg">{t("settings.yourData")}</h3>
        <div className="mt-4 space-y-3">
          <TextField label={t("settings.name")} value={progress.name} onChange={(v) => update({ name: v })} />
          <div className="grid grid-cols-2 gap-3">
            <NumField label={t("settings.age")} value={progress.age ?? ""} onChange={(v) => update({ age: v || undefined })} />
            <NumField label={t("settings.height")} value={progress.height ?? ""} onChange={(v) => update({ height: Number(v) || undefined })} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <NumField label={t("settings.startWeight")} value={progress.startWeight ?? ""} onChange={(v) => update({ startWeight: Number(v) || undefined })} />
            <NumField label={t("settings.goalWeight")} value={progress.goalWeight ?? ""} onChange={(v) => update({ goalWeight: Number(v) || undefined })} />
          </div>
        </div>
      </section>

      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="font-serif text-lg">{t("settings.appearance")}</h3>
        <div className="mt-4 space-y-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{t("settings.theme")}</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Choice active={settings.theme === "light"} onClick={() => save({ theme: "light" })} icon={<Sun className="h-4 w-4" />} label={t("settings.light")} />
              <Choice active={settings.theme === "dark"} onClick={() => save({ theme: "dark" })} icon={<Moon className="h-4 w-4" />} label={t("settings.dark")} />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{t("settings.fontSize")}</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {(["sm", "md", "lg"] as const).map((s) => (
                <Choice key={s} active={settings.fontSize === s} onClick={() => save({ fontSize: s })} icon={<Type className="h-4 w-4" />} label={s === "sm" ? t("settings.small") : s === "md" ? t("settings.medium") : t("settings.large")} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="font-serif text-lg">{t("settings.sound")}</h3>
        <button onClick={() => save({ sound: !settings.sound })} className="mt-3 flex w-full items-center gap-3 rounded-2xl bg-secondary p-3 text-left">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blush text-primary"><Volume2 className="h-4 w-4" /></div>
          <span className="flex-1 text-sm">{t("settings.soundEffects")}</span>
          <span className={`relative h-6 w-11 rounded-full transition-colors ${settings.sound ? "bg-primary" : "bg-muted"}`}>
            <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-background shadow transition-transform ${settings.sound ? "translate-x-5" : "translate-x-0.5"}`} />
          </span>
        </button>
      </section>

      <p className="mx-6 mt-6 text-center text-xs text-muted-foreground">{t("settings.autoSave")}</p>
    </MobileShell>
  );
}

function TextField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block rounded-2xl bg-secondary p-3">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="mt-1 w-full bg-transparent font-serif text-lg capitalize outline-none" />
    </label>
  );
}

function NumField({ label, value, onChange }: { label: string; value: string | number; onChange: (v: string) => void }) {
  return (
    <label className="block rounded-2xl bg-secondary p-3">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <input type="number" value={value} onChange={(e) => onChange(e.target.value)} className="mt-1 w-full bg-transparent font-serif text-lg outline-none" placeholder="—" />
    </label>
  );
}

function Choice({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button onClick={onClick} className={`flex items-center justify-center gap-2 rounded-2xl border p-3 text-sm transition-colors ${active ? "border-primary bg-blush text-primary" : "border-border/60 bg-secondary"}`}>
      {icon}<span>{label}</span>
    </button>
  );
}
