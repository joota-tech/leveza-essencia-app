import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { planDays, L, type PlanMeal } from "@/lib/app-data";
import { useLocale } from "@/lib/i18n";
import { useProgress } from "@/lib/use-progress";
import { Check, Coffee, Moon, Sandwich, Sparkles, Sun } from "lucide-react";

export const Route = createFileRoute("/plano")({
  head: () => ({ meta: [{ title: "Plan 21 Días — Reto" }] }),
  component: PlanPage,
});

function PlanPage() {
  const { progress, completeDay } = useProgress();
  const { locale, t } = useLocale();
  const [selected, setSelected] = useState(progress.currentDay);
  const day = planDays[Math.min(20, Math.max(0, selected - 1))];
  const done = progress.completedDays.includes(day.day);
  const [celebrate, setCelebrate] = useState(false);

  const handleComplete = () => {
    completeDay(day.day);
    setCelebrate(true);
    const nextDay = Math.min(21, day.day + 1);
    setTimeout(() => {
      setCelebrate(false);
      if (nextDay !== day.day) setSelected(nextDay);
    }, 2200);
  };

  const percent = Math.round((progress.completedDays.length / 21) * 100);
  const week = day.day <= 7 ? 1 : day.day <= 14 ? 2 : 3;

  return (
    <MobileShell>
      <header className="px-6 pt-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("plan.weekLabel").replace("{n}", String(week))}</p>
        <h1 className="mt-1 font-serif text-3xl">{t("plan.h1")}</h1>
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full rounded-full bg-gradient-rose transition-all" style={{ width: `${percent}%` }} />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{t("plan.daysCompleted").replace("{n}", String(progress.completedDays.length))}</p>
      </header>

      <div className="scrollbar-hide mt-5 flex gap-2 overflow-x-auto px-6">
        {planDays.map((d) => {
          const dDone = progress.completedDays.includes(d.day);
          const active = d.day === selected;
          return (
            <button
              key={d.day}
              onClick={() => setSelected(d.day)}
              className={`flex h-16 w-12 shrink-0 flex-col items-center justify-center rounded-2xl border text-xs font-medium transition-all ${
                active
                  ? "border-primary bg-gradient-rose text-rose-foreground shadow-glow"
                  : dDone
                  ? "border-primary/30 bg-blush text-primary"
                  : "border-border bg-card text-muted-foreground"
              }`}
            >
              <span className="text-[9px] opacity-70">{t("plan.dayBadge")}</span>
              <span className="font-serif text-lg leading-none">{d.day}</span>
              {dDone && !active && <Check className="mt-0.5 h-3 w-3" />}
            </button>
          );
        })}
      </div>

      <section className="mx-6 mt-6 rounded-3xl border border-border/60 bg-card p-5 shadow-soft animate-float-up">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">{L(day.title, locale)}</p>
            <h2 className="font-serif text-2xl">{t("plan.dayHeading").replace("{n}", String(day.day))}</h2>
          </div>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <p className="mt-3 rounded-2xl bg-blush p-3 text-sm italic text-foreground">"{L(day.quote, locale)}"</p>

        <div className="mt-5 space-y-3">
          <Meal icon={<Coffee className="h-4 w-4" />} label={t("plan.breakfast")} meal={day.breakfast} />
          <Meal icon={<Sun className="h-4 w-4" />} label={t("plan.lunch")} meal={day.lunch} />
          <Meal icon={<Sandwich className="h-4 w-4" />} label={t("plan.snack")} meal={day.snack} />
          <Meal icon={<Moon className="h-4 w-4" />} label={t("plan.dinner")} meal={day.dinner} />
        </div>

        <button
          onClick={handleComplete}
          disabled={done}
          className={`mt-6 w-full rounded-2xl py-4 text-sm font-medium transition-all ${
            done
              ? "bg-secondary text-muted-foreground"
              : "bg-primary text-primary-foreground shadow-glow active:scale-[0.98]"
          }`}
        >
          {done ? t("plan.completedBtn") : t("plan.completeBtn")}
        </button>
      </section>

      {celebrate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm">
          <div className="animate-pop rounded-3xl bg-card px-8 py-10 text-center shadow-glow">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-rose text-rose-foreground">
              <Sparkles className="h-7 w-7" />
            </div>
            <h3 className="mt-4 font-serif text-2xl">{t("plan.celebrateTitle")}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t("plan.celebrateSub")}</p>
          </div>
        </div>
      )}
    </MobileShell>
  );
}

function Meal({ icon, label, meal }: { icon: React.ReactNode; label: string; meal: PlanMeal }) {
  const { locale, t } = useLocale();
  return (
    <Link
      to="/receitas/$id"
      params={{ id: meal.recipeId }}
      className="flex items-start gap-3 rounded-2xl bg-secondary p-3 transition-all active:scale-[0.98] hover:bg-blush"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-card text-primary">{icon}</div>
      <div className="flex-1">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm text-foreground">{L(meal.name, locale)}</p>
      </div>
      <span className="self-center text-xs text-primary">{t("plan.viewRecipe")}</span>
    </Link>
  );
}
