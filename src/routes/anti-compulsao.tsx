import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { Candy, CloudRain, Heart, Moon, RotateCcw, Sparkles, X } from "lucide-react";

export const Route = createFileRoute("/anti-compulsao")({
  head: () => ({ meta: [{ title: "Acolher — Anti-Compulsão" }] }),
  component: AntiPage,
});

const sections = [
  { id: "doce", icon: Candy, title: "Vontade de doce", desc: "Técnicas para atravessar o pico em 10 min." },
  { id: "ansiedade", icon: CloudRain, title: "Ansiedade", desc: "Respiração 4-7-8 e ancoragem corporal." },
  { id: "emocional", icon: Heart, title: "Fome emocional", desc: "Identifique o sentimento por trás da fome." },
  { id: "noite", icon: Moon, title: "Ataques noturnos", desc: "Ritual de encerramento do dia." },
  { id: "recaida", icon: RotateCcw, title: "Evitar recaídas", desc: "Plano de retorno sem culpa." },
  { id: "culpa", icon: Sparkles, title: "Reduzir culpa", desc: "Você não é o que você comeu hoje." },
];

const emergencyMessages = [
  "Respira fundo. Você está segura.",
  "Essa vontade vai passar em 10 minutos.",
  "Você já chegou tão longe. Lembra?",
  "Não é fome. É emoção pedindo colo.",
];

const techniques = [
  "Beba 2 copos d'água com limão",
  "Respire: inspire 4s, segure 7s, expire 8s",
  "Coma 1 ovo cozido ou pasta de amendoim",
  "Caminhe 5 minutos em qualquer lugar",
  "Escreva o que está sentindo agora",
];

function AntiPage() {
  const [open, setOpen] = useState(false);

  return (
    <MobileShell>
      <header className="px-6 pt-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Você não está sozinha</p>
        <h1 className="mt-1 font-serif text-3xl">Acolher</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Aqui você encontra apoio nos momentos em que tudo parece pesar.
        </p>
      </header>

      <div className="mx-6 mt-6 overflow-hidden rounded-3xl bg-gradient-rose p-6 text-rose-foreground shadow-glow animate-float-up">
        <p className="text-xs uppercase tracking-widest opacity-80">Botão de emergência</p>
        <h2 className="mt-2 font-serif text-2xl leading-tight">Estou com vontade de sair da dieta</h2>
        <p className="mt-2 text-sm opacity-90">Toque aqui. Vou ficar com você agora.</p>
        <button
          onClick={() => setOpen(true)}
          className="mt-4 w-full rounded-2xl bg-card py-4 text-sm font-medium text-foreground shadow-soft active:scale-[0.98]"
        >
          Preciso de apoio agora
        </button>
      </div>

      <section className="mt-6 grid grid-cols-2 gap-3 px-6">
        {sections.map((s) => (
          <div key={s.id} className="rounded-3xl border border-border/60 bg-card p-4 shadow-soft">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blush text-primary">
              <s.icon className="h-4 w-4" />
            </div>
            <h3 className="mt-3 font-serif text-base leading-tight">{s.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </section>

      <section className="mx-6 mt-6 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="font-serif text-lg">Reflexão do momento</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          A comida não é o problema. Ela é a tentativa de resolver um problema mais antigo.
          Hoje, ao invés de julgar a vontade, escute o que ela quer te dizer.
        </p>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-md animate-float-up rounded-t-3xl bg-card p-6 shadow-glow sm:rounded-3xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-xl">Respira. Estou aqui.</h3>
              <button onClick={() => setOpen(false)} className="rounded-full bg-secondary p-2">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3">
              {emergencyMessages.map((m) => (
                <p key={m} className="rounded-2xl bg-blush p-3 text-sm italic text-foreground">"{m}"</p>
              ))}
            </div>
            <h4 className="mt-5 font-serif text-base">Faça uma destas técnicas agora:</h4>
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
              Já estou melhor
            </button>
          </div>
        </div>
      )}
    </MobileShell>
  );
}
