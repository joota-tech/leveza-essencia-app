import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { useProgress } from "@/lib/use-progress";
import { useLocale } from "@/lib/i18n";
import { dict } from "@/lib/i18n-dict";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Bienvenida — Reto 21 Días" }] }),
  component: OnboardingPage,
});

type InputStep = {
  type: "input";
  key: "name" | "age" | "height" | "weight" | "goalWeight";
  question: string;
  hint?: string;
  placeholder: string;
  inputMode?: "text" | "numeric" | "decimal";
  optional?: boolean;
};

type ChoiceStep = {
  type: "choice";
  key: "objective" | "difficulty" | "routine";
  question: string;
  options: string[];
};

type Step = InputStep | ChoiceStep;

function OnboardingPage() {
  const [i, setI] = useState(-1); // -1 = bienvenida, steps.length = pantalla final
  const [values, setValues] = useState<Record<string, string>>({});
  const { update } = useProgress();
  const navigate = useNavigate();
  const { locale, t } = useLocale();
  const ob = dict[locale].onboarding;

  const steps: Step[] = [
    { type: "input", key: "name", question: ob.name.question, placeholder: ob.name.placeholder, inputMode: "text" },
    { type: "input", key: "age", question: ob.age.question, placeholder: ob.age.placeholder, inputMode: "numeric" },
    { type: "input", key: "height", question: ob.height.question, hint: ob.height.hint, placeholder: ob.height.placeholder, inputMode: "numeric" },
    { type: "input", key: "weight", question: ob.weight.question, hint: ob.weight.hint, placeholder: ob.weight.placeholder, inputMode: "decimal" },
    { type: "input", key: "goalWeight", question: ob.goalWeight.question, hint: ob.goalWeight.hint, placeholder: ob.goalWeight.placeholder, inputMode: "decimal", optional: true },
    { type: "choice", key: "objective", question: ob.objective.question, options: ob.objective.options },
    { type: "choice", key: "difficulty", question: ob.difficulty.question, options: ob.difficulty.options },
    { type: "choice", key: "routine", question: ob.routine.question, options: ob.routine.options },
  ];

  const total = steps.length;

  const finish = () => {
    update({
      name: (values.name || "").trim() || "linda",
      age: values.age || undefined,
      height: values.height ? Number(values.height) : undefined,
      startWeight: values.weight ? Number(values.weight.replace(",", ".")) : undefined,
      goalWeight: values.goalWeight ? Number(values.goalWeight.replace(",", ".")) : undefined,
      onboarded: true,
    });
    navigate({ to: "/" });
  };

  // Pantalla de bienvenida
  if (i === -1) {
    return (
      <MobileShell>
        <div className="flex min-h-screen flex-col px-6 pt-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-rose shadow-glow">
            <Sparkles className="h-7 w-7 text-rose-foreground" />
          </div>
          <h1 className="mt-8 text-center font-serif text-4xl leading-tight">
            {t("onboarding.welcomeTitle")}
          </h1>
          <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground">
            {t("onboarding.welcomeBody")}
          </p>
          <p className="mt-8 text-center text-xs uppercase tracking-widest text-muted-foreground">
            {t("onboarding.welcomeSteps", { n: total })}
          </p>
          <button
            onClick={() => setI(0)}
            className="mt-auto mb-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-sm font-medium text-primary-foreground shadow-glow"
          >
            {t("onboarding.startBtn")} <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </MobileShell>
    );
  }

  // Pantalla final
  if (i >= total) {
    return (
      <MobileShell>
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <div className="flex h-20 w-20 animate-pop items-center justify-center rounded-full bg-gradient-rose shadow-glow">
            <Sparkles className="h-8 w-8 text-rose-foreground" />
          </div>
          <h2 className="mt-6 font-serif text-3xl leading-tight">{t("onboarding.finalTitle")}</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {t("onboarding.finalBody")}
          </p>
          <button
            onClick={finish}
            className="mt-10 w-full max-w-xs rounded-2xl bg-primary py-4 text-sm font-medium text-primary-foreground shadow-glow"
          >
            {t("onboarding.accessBtn")}
          </button>
        </div>
      </MobileShell>
    );
  }

  const step = steps[i];
  const current = values[step.key] ?? "";
  const canAdvance =
    step.type === "choice"
      ? !!current
      : step.optional || current.trim().length > 0;

  const advance = () => setI(i + 1);
  const setValue = (v: string) => setValues((p) => ({ ...p, [step.key]: v }));

  const sanitize = (raw: string) => {
    if (step.type !== "input") return raw;
    if (step.inputMode === "numeric") return raw.replace(/\D/g, "").slice(0, 3);
    if (step.inputMode === "decimal") return raw.replace(/[^\d.,]/g, "").replace(",", ".").slice(0, 5);
    return raw.slice(0, 40);
  };

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

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setI(i - 1)}
            className="flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground"
          >
            <ChevronLeft className="h-4 w-4" /> {t("onboarding.backBtn")}
          </button>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {t("onboarding.stepOf", { n: i + 1, total })}
          </p>
        </div>

        <h2 className="mt-6 font-serif text-3xl leading-tight">{step.question}</h2>
        {step.type === "input" && step.hint && (
          <p className="mt-2 text-sm text-muted-foreground">{step.hint}</p>
        )}

        {step.type === "input" ? (
          <>
            <input
              autoFocus
              inputMode={step.inputMode === "text" ? undefined : step.inputMode}
              value={current}
              onChange={(e) => setValue(sanitize(e.target.value))}
              onKeyDown={(e) => {
                if (e.key === "Enter" && canAdvance) advance();
              }}
              placeholder={step.placeholder}
              className="mt-8 w-full rounded-2xl border border-border bg-card px-5 py-5 font-serif text-2xl outline-none focus:border-primary"
            />
            <button
              onClick={advance}
              disabled={!canAdvance}
              className="mt-auto mb-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-sm font-medium text-primary-foreground shadow-glow disabled:opacity-40"
            >
              {step.optional && !current ? t("onboarding.skipBtn") : t("onboarding.continueBtn")} <ChevronRight className="h-4 w-4" />
            </button>
          </>
        ) : (
          <div className="mt-8 space-y-3">
            {step.options.map((opt) => {
              const active = current === opt;
              return (
                <button
                  key={opt}
                  onClick={() => {
                    setValue(opt);
                    setTimeout(() => setI(i + 1), 220);
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
        )}
      </div>
    </MobileShell>
  );
}
