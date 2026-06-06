import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { useProgress } from "@/lib/use-progress";
import { modulesData, isModuleUnlocked, moduleUnlockRequirement } from "@/lib/modules-data";
import { ArrowLeft, Check, Lock, Sparkles, Droplet, Sun, Moon, Heart, Calendar, Pencil } from "lucide-react";

const CHECK_KEY = "desafio21-module-checks";

export const Route = createFileRoute("/modulos/$id")({
  head: () => ({ meta: [{ title: "Módulo — Reto 21 Días" }] }),
  component: ModuleDetail,
});

function ModuleDetail() {
  const { id } = Route.useParams();
  const { progress } = useProgress();
  const navigate = useNavigate();
  const mod = modulesData.find((m) => m.id === id);

  const [checks, setChecks] = useState<Record<string, boolean>>({});
  useEffect(() => {
    try {
      const raw = localStorage.getItem(CHECK_KEY);
      if (raw) setChecks(JSON.parse(raw));
    } catch {}
  }, []);

  if (!mod) {
    return (
      <MobileShell>
        <div className="p-8 text-center">
          <p>Módulo no encontrado.</p>
          <Link to="/modulos" className="text-primary underline">Volver</Link>
        </div>
      </MobileShell>
    );
  }

  const unlocked = isModuleUnlocked(mod.index, progress.completedDays.length);
  if (!unlocked) {
    const req = moduleUnlockRequirement(mod.index);
    return (
      <MobileShell>
        <header className="px-6 pt-8">
          <button onClick={() => navigate({ to: "/modulos" })} className="flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowLeft className="h-4 w-4" /> Volver
          </button>
        </header>
        <div className="mx-6 mt-10 flex flex-col items-center rounded-3xl border border-border/60 bg-card p-8 text-center shadow-soft">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blush text-primary shadow-glow">
            <Lock className="h-7 w-7" />
          </div>
          <h2 className="mt-4 font-serif text-2xl">Módulo bloqueado</h2>
          <p className="mt-2 text-sm text-muted-foreground">Completa {Math.max(0, req - progress.completedDays.length)} días más del reto para desbloquearlo.</p>
        </div>
      </MobileShell>
    );
  }

  const toggle = (item: string) => {
    const key = `${mod.id}::${item}`;
    setChecks((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      try { localStorage.setItem(CHECK_KEY, JSON.stringify(next)); } catch {}
      if (!prev[key] && typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate?.(15);
      return next;
    });
  };

  return (
    <MobileShell>
      <header className={`bg-gradient-to-br ${mod.accent} px-6 pb-8 pt-6`}>
        <button onClick={() => navigate({ to: "/modulos" })} className="flex h-9 w-9 items-center justify-center rounded-full bg-card/80 backdrop-blur">
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-4xl" aria-hidden>{mod.emoji}</span>
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Módulo {mod.index}</p>
            <h1 className="font-serif text-2xl leading-tight">{mod.title}</h1>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/80">{mod.intro}</p>
      </header>

      {mod.highlight && (
        <div className="mx-6 mt-5 rounded-3xl bg-gradient-rose p-5 text-center text-rose-foreground shadow-glow">
          <Sparkles className="mx-auto h-5 w-5" />
          <p className="mt-2 font-serif text-lg italic">{mod.highlight}</p>
        </div>
      )}

      <section className="space-y-3 px-6 pt-5">
        {mod.sections.map((s, i) => (
          <article key={i} className="rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
            <h3 className="font-serif text-base">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </article>
        ))}
      </section>

      <ExtraBlock kind={mod.extra?.kind} />

      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-base">Checklist del módulo</h3>
          <span className="text-[11px] text-muted-foreground">Marca lo que hiciste hoy</span>
        </div>
        <ul className="mt-3 space-y-2">
          {mod.checklist.map((item) => {
            const checked = !!checks[`${mod.id}::${item}`];
            return (
              <li key={item}>
                <button
                  onClick={() => toggle(item)}
                  className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left text-sm transition-all ${
                    checked ? "border-primary bg-blush" : "border-border/60 bg-secondary/60"
                  }`}
                >
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${checked ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/30 bg-card"}`}>
                    {checked && <Check className="h-3.5 w-3.5" />}
                  </span>
                  <span className={checked ? "text-foreground" : "text-muted-foreground"}>{item}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="px-6 pt-6">
        <Link to="/nutri" className="block rounded-3xl bg-primary p-4 text-center text-sm font-medium text-primary-foreground shadow-glow">
          Consultar dudas con la Nutri
        </Link>
      </div>
    </MobileShell>
  );
}

function ExtraBlock({ kind }: { kind?: string }) {
  if (!kind) return null;

  if (kind === "protocol24h") {
    const steps = [
      { time: "Mañana", action: "Agua con limón + proteína en el desayuno" },
      { time: "Mediodía", action: "Almuerzo con hojas verdes y proteína magra" },
      { time: "Tarde", action: "Té de menta o jengibre + caminata de 15 min" },
      { time: "Noche", action: "Cena ligera, cero azúcar, dormir antes de las 23h" },
    ];
    return (
      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="font-serif text-base">Protocolo 24h anti-hinchazón</h3>
        <ol className="mt-3 space-y-3">
          {steps.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-rose text-xs font-bold text-rose-foreground">{i + 1}</span>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{s.time}</p>
                <p className="text-sm">{s.action}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (kind === "morningRoutine") {
    return (
      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="flex items-center gap-2 font-serif text-base"><Sun className="h-4 w-4 text-primary" /> Rutina matinal femenina</h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li>💧 1 vaso de agua al despertar</li>
          <li>☀️ 5 minutos de sol en la piel</li>
          <li>🥚 Desayuno con proteína (20g+)</li>
          <li>🧘 1 minuto de respiración profunda</li>
        </ul>
      </section>
    );
  }

  if (kind === "nightRitual") {
    return (
      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="flex items-center gap-2 font-serif text-base"><Moon className="h-4 w-4 text-primary" /> Ritual nocturno</h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li>🌙 Luz tenue después de las 21h</li>
          <li>🍵 Té de manzanilla o melissa</li>
          <li>📵 Pantallas lejos de la cama</li>
          <li>📝 Escribe 1 gratitud antes de dormir</li>
        </ul>
      </section>
    );
  }

  if (kind === "hydration") {
    return (
      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="flex items-center gap-2 font-serif text-base"><Droplet className="h-4 w-4 text-primary" /> Aguas saborizadas</h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li>🍋 Limón + menta — desinfla</li>
          <li>🫚 Jengibre + canela — acelera el metabolismo</li>
          <li>🥒 Pepino + limón — refrescante y drenante</li>
          <li>🌺 Hibisco frío — antioxidante</li>
        </ul>
      </section>
    );
  }

  if (kind === "cycle") {
    const phases = [
      { name: "Menstrual", tip: "Descanso, hierro, comida caliente" },
      { name: "Folicular", tip: "Energía alta — ¡aprovecha para entrenar!" },
      { name: "Ovulatoria", tip: "Pico de confianza y vitalidad" },
      { name: "Lútea", tip: "Más proteína, más sueño, menos exigencia" },
    ];
    return (
      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="flex items-center gap-2 font-serif text-base"><Calendar className="h-4 w-4 text-primary" /> Tu ciclo, tu plan</h3>
        <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
          {phases.map((p) => (
            <li key={p.name} className="rounded-2xl bg-blush/60 p-3">
              <p className="font-serif text-sm">{p.name}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{p.tip}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (kind === "diary") {
    return <DiaryBlock />;
  }

  if (kind === "future") {
    return (
      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="flex items-center gap-2 font-serif text-base"><Heart className="h-4 w-4 text-primary" /> Tus metas para los próximos 30 días</h3>
        <FutureGoals />
      </section>
    );
  }

  return null;
}

function DiaryBlock() {
  const [entry, setEntry] = useState("");
  useEffect(() => {
    try { setEntry(localStorage.getItem("desafio21-diary") || ""); } catch {}
  }, []);
  const save = (v: string) => {
    setEntry(v);
    try { localStorage.setItem("desafio21-diary", v); } catch {}
  };
  return (
    <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
      <h3 className="flex items-center gap-2 font-serif text-base"><Pencil className="h-4 w-4 text-primary" /> Diario personal</h3>
      <textarea
        value={entry}
        onChange={(e) => save(e.target.value)}
        placeholder="Escribe 1 victoria tuya hoy, por pequeña que sea…"
        rows={5}
        className="mt-3 w-full rounded-2xl border border-border/60 bg-secondary/50 p-3 text-sm outline-none"
      />
    </section>
  );
}

function FutureGoals() {
  const [goals, setGoals] = useState("");
  useEffect(() => {
    try { setGoals(localStorage.getItem("desafio21-future") || ""); } catch {}
  }, []);
  const save = (v: string) => {
    setGoals(v);
    try { localStorage.setItem("desafio21-future", v); } catch {}
  };
  return (
    <textarea
      value={goals}
      onChange={(e) => save(e.target.value)}
      placeholder="Ej: dormir 8h, entrenar 3x/semana, mantener el peso…"
      rows={4}
      className="mt-3 w-full rounded-2xl border border-border/60 bg-secondary/50 p-3 text-sm outline-none"
    />
  );
}
