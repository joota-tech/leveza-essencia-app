import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { useProgress } from "@/lib/use-progress";
import { modulesData, isModuleUnlocked, moduleUnlockRequirement } from "@/lib/modules-data";
import { ArrowLeft, Lock, Sparkles } from "lucide-react";

export const Route = createFileRoute("/modulos/")({
  head: () => ({ meta: [{ title: "Módulos — Reto 21 Días" }] }),
  component: ModulesIndex,
});

function titleSize(title: string) {
  const len = title.length;
  if (len <= 16) return "text-[30px]";
  if (len <= 20) return "text-[26px]";
  if (len <= 24) return "text-[22px]";
  return "text-[19px]";
}

function ModulesIndex() {
  const { progress } = useProgress();
  const done = progress.completedDays.length;

  return (
    <MobileShell>
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-border/60 bg-card/95 px-4 py-3 backdrop-blur-xl">
        <Link to="/" className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1">
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Tu recorrido</p>
          <h1 className="font-serif text-xl leading-none">Módulos premium</h1>
        </div>
      </header>

      <section className="px-6 pt-5">
        <div className="rounded-3xl border border-border/60 bg-gradient-warm p-5 shadow-soft">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Desbloqueo progresivo</p>
          <h2 className="mt-1 font-serif text-lg">Cada 2 días completados, un nuevo módulo se abre 🤍</h2>
          <p className="mt-2 text-xs text-muted-foreground">{done} días completados · {Math.min(8, Math.floor(done / 2) + 1)} de 8 módulos desbloqueados</p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-3 px-6 py-5">
        {modulesData.map((m) => {
          const unlocked = isModuleUnlocked(m.index, done);
          const req = moduleUnlockRequirement(m.index);
          return (
            <ModuleCard key={m.id} m={m} unlocked={unlocked} req={req} doneDays={done} />
          );
        })}
      </section>
    </MobileShell>
  );
}

function ModuleCard({
  m,
  unlocked,
  req,
  doneDays,
}: {
  m: typeof modulesData[number];
  unlocked: boolean;
  req: number;
  doneDays: number;
}) {
  const body = (
    <div className={`relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft ${unlocked ? "premium-glow" : ""}`}>
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={`/modules/${m.id}.jpg`}
          alt={m.title}
          loading="lazy"
          decoding="async"
          width={640}
          height={400}
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-[2px]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/75" />
        <div className="relative flex h-full flex-col justify-between p-5 text-white">
          <div className="flex items-start justify-between">
            <span className="rounded-full bg-white/25 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest backdrop-blur-md">
              Módulo {m.index}
            </span>
            <span className="text-2xl drop-shadow-md" aria-hidden>{m.emoji}</span>
          </div>
          <div className="relative text-center">
            {/* decorative backdrop behind title */}
            <div className="pointer-events-none absolute inset-x-4 -inset-y-4 rounded-3xl bg-gradient-to-t from-black/60 via-black/30 to-transparent blur-md" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            <p className="relative text-[10px] font-medium uppercase tracking-[0.3em] text-white/85">{m.subtitle}</p>
            <h3 className={`relative mt-1.5 font-serif italic leading-[1.05] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] ${titleSize(m.title)}`}>{m.title}</h3>
            <div className="pointer-events-none relative mx-auto mt-2 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-white/60" />
              <span className="h-1.5 w-1.5 rotate-45 bg-white/85" />
              <span className="h-px w-8 bg-white/60" />
            </div>
            {unlocked && (
              <div className="relative mt-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[11px] text-foreground">
                <Sparkles className="h-3 w-3 text-primary" /> Abrir módulo
              </div>
            )}
          </div>
        </div>
      </div>

      {!unlocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-foreground/55 backdrop-blur-[3px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card/95 text-foreground shadow-glow">
            <Lock className="h-5 w-5" />
          </div>
          <span className="rounded-full bg-card/95 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-foreground">
            Faltan {Math.max(0, req - doneDays)} {req - doneDays === 1 ? "día" : "días"}
          </span>
        </div>
      )}
    </div>
  );

  if (!unlocked) return <div aria-disabled>{body}</div>;
  return (
    <Link to="/modulos/$id" params={{ id: m.id }}>
      {body}
    </Link>
  );
}
