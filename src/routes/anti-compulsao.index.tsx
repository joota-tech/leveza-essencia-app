import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { Candy, CloudRain, Heart, Moon, RotateCcw, Sparkles, X, type LucideIcon } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { dict } from "@/lib/i18n-dict";

export const Route = createFileRoute("/anti-compulsao/")({
  head: () => ({ meta: [{ title: "Acolher — Anti-Atracón" }] }),
  component: AntiPage,
});

const sectionIcons: Record<string, LucideIcon> = {
  doce: Candy,
  ansiedade: CloudRain,
  emocional: Heart,
  noite: Moon,
  recaida: RotateCcw,
  culpa: Sparkles,
};

function AntiPage() {
  const [open, setOpen] = useState(false);
  const { locale, t } = useLocale();
  const ab = dict[locale].antiBinge;

  const sections = (["doce", "ansiedade", "emocional", "noite", "recaida", "culpa"] as const).map((id) => ({
    id,
    icon: sectionIcons[id],
    title: ab[id].title,
    desc: ab[id].cardDesc,
  }));

  return (
    <MobileShell>
      <header className="px-6 pt-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("antiBinge.eyebrow")}</p>
        <h1 className="mt-1 font-serif text-3xl">{t("antiBinge.h1")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("antiBinge.intro")}
        </p>
      </header>

      <div className="mx-6 mt-6 overflow-hidden rounded-3xl bg-gradient-rose p-6 text-rose-foreground shadow-glow animate-float-up">
        <p className="text-xs uppercase tracking-widest opacity-80">{t("antiBinge.emergencyEyebrow")}</p>
        <h2 className="mt-2 font-serif text-2xl leading-tight">{t("antiBinge.emergencyTitle")}</h2>
        <p className="mt-2 text-sm opacity-90">{t("antiBinge.emergencyBody")}</p>
        <button
          onClick={() => setOpen(true)}
          className="mt-4 w-full rounded-2xl bg-card py-4 text-sm font-medium text-foreground shadow-soft active:scale-[0.98]"
        >
          {t("antiBinge.emergencyBtn")}
        </button>
      </div>

      <section className="mt-6 grid grid-cols-2 gap-3 px-6">
        {sections.map((s) => (
          <Link
            key={s.id}
            to="/anti-compulsao/$id"
            params={{ id: s.id }}
            className="block rounded-3xl border border-border/60 bg-card p-4 shadow-soft transition-all active:scale-[0.98] hover:bg-blush/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blush text-primary">
              <s.icon className="h-4 w-4" />
            </div>
            <h3 className="mt-3 font-serif text-base leading-tight">{s.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
          </Link>
        ))}
      </section>

      <section className="mx-6 mt-6 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="font-serif text-lg">{t("antiBinge.reflectionTitle")}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {t("antiBinge.reflectionBody")}
        </p>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-md animate-float-up rounded-t-3xl bg-card p-6 shadow-glow sm:rounded-3xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-xl">{t("antiBinge.modalTitle")}</h3>
              <button onClick={() => setOpen(false)} className="rounded-full bg-secondary p-2">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3">
              {ab.emergencyMsgs.map((m) => (
                <p key={m} className="rounded-2xl bg-blush p-3 text-sm italic text-foreground">"{m}"</p>
              ))}
            </div>
            <h4 className="mt-5 font-serif text-base">{t("antiBinge.techniquesTitle")}</h4>
            <ul className="mt-2 space-y-2">
              {ab.techniques.map((tItem, i) => (
                <li key={tItem} className="flex items-start gap-3 rounded-2xl bg-secondary p-3 text-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-rose text-xs font-medium text-rose-foreground">{i + 1}</span>
                  {tItem}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpen(false)}
              className="mt-5 w-full rounded-2xl bg-primary py-4 text-sm font-medium text-primary-foreground shadow-glow"
            >
              {t("antiBinge.feelBetterBtn")}
            </button>
          </div>
        </div>
      )}
    </MobileShell>
  );
}
