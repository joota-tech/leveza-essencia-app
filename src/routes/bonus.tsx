import { createFileRoute } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { bonuses } from "@/lib/app-data";
import { Download, FileText, Sparkles } from "lucide-react";

export const Route = createFileRoute("/bonus")({
  head: () => ({ meta: [{ title: "Bônus — Desafio 21 Dias" }] }),
  component: BonusPage,
});

function BonusPage() {
  return (
    <MobileShell>
      <header className="px-6 pt-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Conteúdo exclusivo</p>
        <h1 className="mt-1 font-serif text-3xl">Bônus</h1>
        <p className="mt-2 text-sm text-muted-foreground">Material extra para acelerar sua transformação.</p>
      </header>

      <section className="mt-6 space-y-4 px-6">
        {bonuses.map((b, i) => (
          <article
            key={b.id}
            className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft animate-float-up"
          >
            <div className="bg-gradient-rose p-5 text-rose-foreground">
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-card/30 px-3 py-1 text-[10px] font-medium backdrop-blur">
                  Bônus {i + 1}
                </span>
                <Sparkles className="h-4 w-4" />
              </div>
              <h3 className="mt-3 font-serif text-2xl leading-tight">{b.title}</h3>
              <p className="mt-1 text-sm opacity-90">{b.subtitle}</p>
            </div>
            <div className="p-5">
              <ul className="space-y-2">
                {b.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{it}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-2">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-xs font-medium text-primary-foreground shadow-glow">
                  <FileText className="h-3.5 w-3.5" /> Abrir
                </button>
                <button className="flex items-center justify-center rounded-2xl border border-border bg-card px-4 py-3 text-xs font-medium">
                  <Download className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </MobileShell>
  );
}
