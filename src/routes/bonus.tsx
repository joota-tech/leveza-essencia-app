import { createFileRoute } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { bonuses, L } from "@/lib/app-data";
import { useLocale } from "@/lib/i18n";
import { Download, Sparkles } from "lucide-react";

export const Route = createFileRoute("/bonus")({
  head: () => ({ meta: [{ title: "Bonos — Reto 21 Días" }] }),
  component: BonusPage,
});

function BonusPage() {
  const { locale, t } = useLocale();

  const handleDownload = (b: (typeof bonuses)[number]) => {
    if (!b.pdf) return;
    const a = document.createElement("a");
    a.href = b.pdf;
    a.download = (b.filename ? L(b.filename, locale) : undefined) ?? `${b.id}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <MobileShell>
      <header className="px-6 pt-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("bonus.eyebrow")}</p>
        <h1 className="mt-1 font-serif text-3xl">{t("bonus.h1")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("bonus.intro")}</p>
      </header>

      <section className="mt-6 space-y-4 px-6">
        {bonuses.map((b, i) => {
          const available = Boolean(b.pdf);
          return (
            <article
              key={b.id}
              className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft animate-float-up"
            >
              <div className="bg-gradient-rose p-5 text-rose-foreground">
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-card/30 px-3 py-1 text-[10px] font-medium backdrop-blur">
                    {t("bonus.bonusBadge", { n: i + 1 })}
                  </span>
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="mt-3 font-serif text-2xl leading-tight">{L(b.title, locale)}</h3>
                <p className="mt-1 text-sm opacity-90">{L(b.subtitle, locale)}</p>
              </div>
              <div className="p-5">
                <ul className="space-y-2">
                  {L(b.items, locale).map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{it}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <button
                    onClick={() => handleDownload(b)}
                    disabled={!available}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-xs font-medium text-primary-foreground shadow-glow transition disabled:opacity-50"
                  >
                    <Download className="h-3.5 w-3.5" /> {available ? t("bonus.downloadAria") : t("bonus.comingSoon")}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </MobileShell>
  );
}
