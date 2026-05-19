import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { useProgress } from "@/lib/use-progress";
import { ArrowLeft, Trophy, Droplet, Flame, Crown } from "lucide-react";

export const Route = createFileRoute("/evolucao")({
  head: () => ({ meta: [{ title: "Evolução — Desafio 21 Dias" }] }),
  component: EvolucaoPage,
});

function streakFrom(days: number[]) {
  if (!days.length) return 0;
  const set = new Set(days);
  const max = Math.max(...days);
  let s = 0;
  for (let d = max; d >= 1; d--) {
    if (set.has(d)) s++; else break;
  }
  return s;
}

function EvolucaoPage() {
  const { progress } = useProgress();
  const done = progress.completedDays.length;
  const streak = streakFrom(progress.completedDays);
  const perfectWeek = streak >= 7;
  const lost =
    progress.startWeight && progress.goalWeight
      ? Math.max(0, progress.startWeight - progress.goalWeight)
      : null;

  const medals = [
    { id: "7", icon: <Trophy className="h-5 w-5" />, label: "7 dias seguidos", got: streak >= 7 },
    { id: "hydra", icon: <Droplet className="h-5 w-5" />, label: "Rainha da hidratação", got: progress.water >= 8 },
    { id: "14", icon: <Flame className="h-5 w-5" />, label: "Controle total", got: done >= 14 },
    { id: "perfect", icon: <Crown className="h-5 w-5" />, label: "Semana perfeita", got: perfectWeek },
  ];

  return (
    <MobileShell>
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-border/60 bg-card/95 px-4 py-3 backdrop-blur-xl">
        <Link to="/perfil" className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Sua história</p>
          <h1 className="font-serif text-xl leading-none">Evolução</h1>
        </div>
      </header>

      <section className="mx-6 mt-5 grid grid-cols-2 gap-3">
        <StatCard label="Dias concluídos" value={`${done}/21`} />
        <StatCard label="Sequência" value={`${streak}d`} accent />
        <StatCard label="Copos de água" value={`${progress.water}`} />
        <StatCard label="Meta de peso" value={lost ? `-${lost}kg` : "—"} />
      </section>

      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="font-serif text-lg">Sua jornada de 21 dias</h3>
        <div className="mt-4 flex h-28 items-end gap-1">
          {Array.from({ length: 21 }).map((_, i) => {
            const d = i + 1;
            const isDone = progress.completedDays.includes(d);
            return (
              <div
                key={d}
                title={`Dia ${d}`}
                className={`flex-1 rounded-t-lg transition-all ${isDone ? "bg-gradient-rose" : "bg-secondary"}`}
                style={{ height: `${isDone ? 25 + (i * 70) / 21 : 10}%` }}
              />
            );
          })}
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">{Math.round((done / 21) * 100)}% completo</p>
      </section>

      <section className="mx-6 mt-5">
        <h3 className="font-serif text-lg">Suas conquistas</h3>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {medals.map((m) => (
            <div
              key={m.id}
              className={`rounded-3xl border p-4 text-center shadow-soft transition-all ${
                m.got ? "border-primary bg-gradient-rose text-rose-foreground premium-glow" : "border-border/60 bg-card opacity-60"
              }`}
            >
              <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full ${m.got ? "bg-card/30" : "bg-blush text-primary"}`}>
                {m.icon}
              </div>
              <p className="mt-2 font-serif text-sm">{m.label}</p>
              <p className={`mt-1 text-[10px] uppercase tracking-widest ${m.got ? "text-rose-foreground/80" : "text-muted-foreground"}`}>
                {m.got ? "Conquistada" : "Bloqueada"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6 py-6">
        <Link to="/modulos" className="block rounded-3xl bg-primary p-4 text-center text-sm font-medium text-primary-foreground shadow-glow">
          Continuar nos módulos
        </Link>
      </div>
    </MobileShell>
  );
}

function StatCard({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-3xl border border-border/60 p-4 shadow-soft ${accent ? "bg-gradient-rose text-rose-foreground" : "bg-card"}`}>
      <p className={`text-[10px] uppercase tracking-widest ${accent ? "text-rose-foreground/80" : "text-muted-foreground"}`}>{label}</p>
      <p className="mt-1 font-serif text-2xl">{value}</p>
    </div>
  );
}
