import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { useProgress } from "@/lib/use-progress";
import { ChevronRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Bem-vinda — Desafio 21 Dias" }] }),
  component: OnboardingPage,
});

type Step = {
  key: string;
  question: string;
  options: string[];
};

const steps: Step[] = [
  { key: "age", question: "Qual sua faixa de idade?", options: ["18-25", "26-35", "36-45", "46+"] },
  { key: "goal", question: "Seu objetivo principal?", options: ["Emagrecer", "Reduzir compulsão", "Mais energia", "Autoestima"] },
  { key: "difficulty", question: "Sua maior dificuldade?", options: ["Vontade de doce", "Comer à noite", "Falta de tempo", "Ansiedade"] },
  { key: "routine", question: "Como é sua rotina?", options: ["Muito corrida", "Equilibrada", "Tranquila"] },
  { key: "esteem", question: "Como está sua autoestima hoje?", options: ["Baixa", "Média", "Boa"] },
];

function OnboardingPage() {
  const [i, setI] = useState(-1); // -1 = welcome
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const { update } = useProgress();
  const navigate = useNavigate();

  const total = steps.length;
  const finish = () => {
    update({ name: name.trim() || "linda", onboarded: true });
    navigate({ to: "/" });
  };

  if (i === -1) {
    return (
      <MobileShell>
        <div className="flex min-h-screen flex-col px-6 pt-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-rose shadow-glow">
            <Sparkles className="h-7 w-7 text-rose-foreground" />
          </div>
          <h1 className="mt-8 text-center font-serif text-4xl leading-tight">
            Bem-vinda à sua <span className="italic text-primary">transformação</span>
          </h1>
          <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground">
            Um protocolo feminino, leve e possível. Sem fome, sem culpa, sem guerra com a comida.
          </p>
          <div className="mt-10">
            <label className="block text-xs uppercase tracking-widest text-muted-foreground">Como prefere ser chamada?</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="mt-2 w-full rounded-2xl border border-border bg-card px-4 py-4 font-serif text-lg outline-none focus:border-primary"
            />
          </div>
          <button
            onClick={() => setI(0)}
            className="mt-auto mb-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-sm font-medium text-primary-foreground shadow-glow"
          >
            Começar minha jornada <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </MobileShell>
    );
  }

  if (i >= total) {
    return (
      <MobileShell>
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <div className="flex h-20 w-20 animate-pop items-center justify-center rounded-full bg-gradient-rose shadow-glow">
            <Sparkles className="h-8 w-8 text-rose-foreground" />
          </div>
          <h2 className="mt-6 font-serif text-3xl leading-tight">Seu plano personalizado está pronto.</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Preparamos os próximos 21 dias com receitas, apoio emocional e tudo o que você precisa.
          </p>
          <button
            onClick={finish}
            className="mt-10 w-full max-w-xs rounded-2xl bg-primary py-4 text-sm font-medium text-primary-foreground shadow-glow"
          >
            Acessar meu plano
          </button>
        </div>
      </MobileShell>
    );
  }

  const step = steps[i];
  return (
    <MobileShell>
      <div className="flex min-h-screen flex-col px-6 pt-10">
        <div className="flex items-center gap-2">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 flex-1 rounded-full transition-all ${idx <= i ? "bg-primary" : "bg-secondary"}`}
            />
          ))}
        </div>
        <p className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
          Pergunta {i + 1} de {total}
        </p>
        <h2 className="mt-3 font-serif text-3xl leading-tight">{step.question}</h2>
        <div className="mt-8 space-y-3">
          {step.options.map((opt) => {
            const active = answers[step.key] === opt;
            return (
              <button
                key={opt}
                onClick={() => {
                  setAnswers((a) => ({ ...a, [step.key]: opt }));
                  setTimeout(() => setI(i + 1), 250);
                }}
                className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-medium transition-all ${
                  active
                    ? "border-primary bg-gradient-rose text-rose-foreground shadow-glow"
                    : "border-border bg-card text-foreground"
                }`}
              >
                {opt}
                <ChevronRight className="h-4 w-4 opacity-60" />
              </button>
            );
          })}
        </div>
      </div>
    </MobileShell>
  );
}
