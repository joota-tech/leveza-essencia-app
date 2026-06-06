import { createFileRoute } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { bonuses } from "@/lib/app-data";
import { Download, FileText, Sparkles, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/bonus")({
  head: () => ({ meta: [{ title: "Bonos — Reto 21 Días" }] }),
  component: BonusPage,
});

function BonusPage() {
  const [openPdf, setOpenPdf] = useState<{ url: string; title: string } | null>(null);

  const handleOpen = (b: (typeof bonuses)[number]) => {
    if (!b.pdf) return;
    setOpenPdf({ url: b.pdf, title: b.title });
  };

  const handleDownload = (b: (typeof bonuses)[number]) => {
    if (!b.pdf) return;
    const a = document.createElement("a");
    a.href = b.pdf;
    a.download = b.filename ?? `${b.id}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <MobileShell>
      <header className="px-6 pt-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contenido exclusivo</p>
        <h1 className="mt-1 font-serif text-3xl">Bonos</h1>
        <p className="mt-2 text-sm text-muted-foreground">Material extra para acelerar tu transformación.</p>
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
                    Bono {i + 1}
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
                  <button
                    onClick={() => handleOpen(b)}
                    disabled={!available}
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-xs font-medium text-primary-foreground shadow-glow transition disabled:opacity-50"
                  >
                    <FileText className="h-3.5 w-3.5" /> {available ? "Abrir" : "Próximamente"}
                  </button>
                  <button
                    onClick={() => handleDownload(b)}
                    disabled={!available}
                    className="flex items-center justify-center rounded-2xl border border-border bg-card px-4 py-3 text-xs font-medium transition disabled:opacity-50"
                    aria-label="Descargar PDF"
                  >
                    <Download className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {openPdf && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background animate-float-up">
          <div className="flex items-center justify-between gap-3 border-b border-border/60 bg-card px-4 py-3">
            <p className="truncate font-serif text-base">{openPdf.title}</p>
            <button
              onClick={() => setOpenPdf(null)}
              className="rounded-full p-2 text-muted-foreground hover:bg-muted"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <iframe src={openPdf.url} title={openPdf.title} className="flex-1 w-full" />
        </div>
      )}
    </MobileShell>
  );
}
