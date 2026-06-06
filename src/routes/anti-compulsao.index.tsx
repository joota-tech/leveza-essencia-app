import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { Candy, CloudRain, Heart, Moon, RotateCcw, Sparkles, X } from "lucide-react";

export const Route = createFileRoute("/anti-compulsao/")({
  head: () => ({ meta: [{ title: "Acolher — Anti-Atracón" }] }),
  component: AntiPage,
});

const sections = [
  { id: "doce", icon: Candy, title: "Ganas de dulce", desc: "Técnicas para superar el pico en 10 min." },
  { id: "ansiedade", icon: CloudRain, title: "Ansiedad", desc: "Respiración 4-7-8 y anclaje corporal." },
  { id: "emocional", icon: Heart, title: "Hambre emocional", desc: "Identifica el sentimiento detrás del hambre." },
  { id: "noite", icon: Moon, title: "Ataques nocturnos", desc: "Ritual de cierre del día." },
  { id: "recaida", icon: RotateCcw, title: "Evitar recaídas", desc: "Plan de retorno sin culpa." },
  { id: "culpa", icon: Sparkles, title: "Reducir la culpa", desc: "No eres lo que comiste hoy." },
];

const emergencyMessages = [
  "Respira hondo. Estás segura.",
  "Estas ganas pasarán en 10 minutos.",
  "Has llegado tan lejos. ¿Lo recuerdas?",
  "No es hambre. Es una emoción pidiendo cariño.",
];

const techniques = [
  "Bebe 2 vasos de agua con limón",
  "Respira: inspira 4s, sostén 7s, suelta 8s",
  "Come 1 huevo cocido o mantequilla de maní",
  "Camina 5 minutos en cualquier lugar",
  "Escribe lo que estás sintiendo ahora",
];

function AntiPage() {
  const [open, setOpen] = useState(false);

  return (
    <MobileShell>
      <header className="px-6 pt-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">No estás sola</p>
        <h1 className="mt-1 font-serif text-3xl">Acolher</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Aquí encuentras apoyo en los momentos en que todo parece pesar.
        </p>
      </header>

      <div className="mx-6 mt-6 overflow-hidden rounded-3xl bg-gradient-rose p-6 text-rose-foreground shadow-glow animate-float-up">
        <p className="text-xs uppercase tracking-widest opacity-80">Botón de emergencia</p>
        <h2 className="mt-2 font-serif text-2xl leading-tight">Tengo ganas de salirme de la dieta</h2>
        <p className="mt-2 text-sm opacity-90">Tócame aquí. Voy a estar contigo ahora.</p>
        <button
          onClick={() => setOpen(true)}
          className="mt-4 w-full rounded-2xl bg-card py-4 text-sm font-medium text-foreground shadow-soft active:scale-[0.98]"
        >
          Necesito apoyo ahora
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
        <h3 className="font-serif text-lg">Reflexión del momento</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          La comida no es el problema. Es el intento de resolver un problema más antiguo.
          Hoy, en lugar de juzgar las ganas, escucha lo que te quieren decir.
        </p>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-md animate-float-up rounded-t-3xl bg-card p-6 shadow-glow sm:rounded-3xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-xl">Respira. Estoy aquí.</h3>
              <button onClick={() => setOpen(false)} className="rounded-full bg-secondary p-2">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3">
              {emergencyMessages.map((m) => (
                <p key={m} className="rounded-2xl bg-blush p-3 text-sm italic text-foreground">"{m}"</p>
              ))}
            </div>
            <h4 className="mt-5 font-serif text-base">Haz una de estas técnicas ahora:</h4>
            <ul className="mt-2 space-y-2">
              {techniques.map((t, i) => (
                <li key={t} className="flex items-start gap-3 rounded-2xl bg-secondary p-3 text-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-rose text-xs font-medium text-rose-foreground">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpen(false)}
              className="mt-5 w-full rounded-2xl bg-primary py-4 text-sm font-medium text-primary-foreground shadow-glow"
            >
              Ya me siento mejor
            </button>
          </div>
        </div>
      )}
    </MobileShell>
  );
}
