import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { useProgress } from "@/lib/use-progress";
import { motivationalQuotes } from "@/lib/app-data";
import { modulesData, isModuleUnlocked, moduleUnlockRequirement } from "@/lib/modules-data";
import { ChevronRight, Droplet, Sparkles, Flame, Heart, Lock, MessageCircleHeart, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Início — Desafio 21 Dias" },
      { name: "description", content: "Sua jornada feminina de transformação começa aqui." },
    ],
  }),
  component: HomePage,
});

function titleSize(title: string) {
  const len = title.length;
  if (len <= 16) return "text-[24px]";
  if (len <= 20) return "text-[21px]";
  if (len <= 24) return "text-[19px]";
  return "text-[17px]";
}

function HomePage() {
  const { progress, update, loaded } = useProgress();
  const navigate = useNavigate();
  const [today, setToday] = useState<{ weekday: string; quote: string } | null>(null);

  useEffect(() => {
    if (loaded && !progress.onboarded) navigate({ to: "/onboarding" });
  }, [loaded, progress.onboarded, navigate]);

  useEffect(() => {
    const d = new Date();
    setToday({
      weekday: d.toLocaleDateString("pt-BR", { weekday: "long" }),
      quote: motivationalQuotes[d.getDate() % motivationalQuotes.length],
    });
  }, []);

  const percent = Math.round((progress.completedDays.length / 21) * 100);

  return (
    <MobileShell>
      <header className="px-6 pt-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground min-h-[1rem]">
          {today?.weekday ?? ""}
        </p>
        <h1 className="mt-1 font-serif text-3xl leading-tight">
          Bom dia, <span className="italic text-primary">{progress.name}</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground min-h-[1.25rem]">{today?.quote ?? ""}</p>
      </header>

      {/* Hero progress card */}
      <section className="mx-6 mt-6 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft animate-float-up">
        <div className="relative h-40 w-full">
          <img src={heroImg} alt="Sua jornada" className="absolute inset-0 h-full w-full object-cover" width={1024} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Sua jornada</p>
            <p className="font-serif text-xl">Dia {progress.currentDay} de 21</p>
          </div>
        </div>
        <div className="space-y-3 p-5">
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-gradient-rose transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{percent}% concluído</span>
            <Link
              to="/plano"
              className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-glow"
            >
              Continuar jornada <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="mx-6 mt-5 grid grid-cols-3 gap-3">
        <StatCard icon={<Flame className="h-4 w-4" />} label="Sequência" value={`${progress.completedDays.length}d`} />
        <StatCard icon={<Heart className="h-4 w-4" />} label="Favoritas" value={`${progress.favorites.length}`} />
        <StatCard icon={<Sparkles className="h-4 w-4" />} label="Humor" value="Leve" />
      </section>

      {/* Water tracker */}
      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Hidratação</p>
            <h3 className="font-serif text-lg">{progress.water} / 8 copos</h3>
          </div>
          <button
            onClick={() => update((p) => ({ water: Math.min(8, p.water + 1) }))}
            className="rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-foreground"
          >
            + 1 copo
          </button>
        </div>
        <div className="mt-3 flex gap-1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`flex h-9 flex-1 items-end justify-center rounded-xl border ${
                i < progress.water ? "border-primary bg-gradient-rose" : "border-border bg-secondary"
              }`}
            >
              <Droplet className={`mb-1 h-3 w-3 ${i < progress.water ? "text-rose-foreground" : "text-muted-foreground"}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Premium quick actions */}
      <section className="mx-6 mt-5 grid grid-cols-2 gap-3">
        <Link to="/nutri" className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-rose p-4 text-rose-foreground shadow-glow premium-glow">
          <MessageCircleHeart className="h-5 w-5" />
          <p className="mt-3 font-serif text-base leading-tight">Converse com a Nutri</p>
          <p className="mt-0.5 text-[11px] opacity-90">Suporte feminino 24h</p>
        </Link>
        <Link to="/evolucao" className="rounded-3xl border border-border/60 bg-card p-4 shadow-soft">
          <TrendingUp className="h-5 w-5 text-primary" />
          <p className="mt-3 font-serif text-base leading-tight">Sua evolução</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">Conquistas e medalhas</p>
        </Link>
      </section>

      {/* Modules carousel */}
      <section className="mt-7">
        <div className="flex items-end justify-between px-6">
          <div>
            <h2 className="font-serif text-xl">Módulos da jornada</h2>
            <p className="text-[11px] text-muted-foreground">Desbloqueio a cada 2 dias</p>
          </div>
          <Link to="/modulos" className="text-xs text-primary">Ver todos</Link>
        </div>
        <div className="scrollbar-hide mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2">
          {modulesData.map((m) => {
            const unlocked = isModuleUnlocked(m.index, progress.completedDays.length);
            const req = moduleUnlockRequirement(m.index);
            const card = (
              <div className={`group relative w-full overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft ${unlocked ? "premium-glow" : ""}`}>
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={`/modules/${m.id}.jpg`}
                    alt={m.title}
                    loading="lazy"
                    width={640}
                    height={800}
                    className="absolute inset-0 h-full w-full scale-110 object-cover blur-[2px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/80" />
                  <div className="relative flex h-full flex-col justify-between p-4 text-white">
                    <div className="flex items-start justify-between">
                      <span className="rounded-full bg-white/25 px-2 py-0.5 text-[10px] font-medium backdrop-blur-md">
                        Módulo {m.index}
                      </span>
                      <span className="text-xl drop-shadow-md" aria-hidden>{m.emoji}</span>
                    </div>
                    <h3 className={`font-serif leading-[1.15] drop-shadow-md ${titleSize(m.title)}`}>{m.title}</h3>
                  </div>
                </div>
                {!unlocked && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-foreground/55 backdrop-blur-[3px]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card/95 text-foreground shadow-glow">
                      <Lock className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-card/95 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground">
                      Faltam {Math.max(0, req - progress.completedDays.length)}d
                    </span>
                  </div>
                )}
              </div>
            );
            return unlocked ? (
              <Link key={m.id} to="/modulos/$id" params={{ id: m.id }} className="w-[62%] shrink-0 snap-start">
                {card}
              </Link>
            ) : (
              <div key={m.id} aria-disabled className="w-[62%] shrink-0 snap-start">{card}</div>
            );
          })}
        </div>
      </section>

      {/* Mini calendar */}
      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg">Seus 21 dias</h3>
          <Link to="/plano" className="text-xs text-primary">Ver tudo</Link>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1.5">
          {Array.from({ length: 21 }).map((_, i) => {
            const day = i + 1;
            const done = progress.completedDays.includes(day);
            const today = day === progress.currentDay;
            return (
              <div
                key={day}
                className={`flex aspect-square items-center justify-center rounded-xl text-xs font-medium ${
                  done
                    ? "bg-gradient-rose text-rose-foreground"
                    : today
                    ? "border-2 border-primary bg-blush text-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </section>
    </MobileShell>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-3 text-center shadow-soft">
      <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-blush text-primary">{icon}</div>
      <p className="font-serif text-lg leading-none">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}
