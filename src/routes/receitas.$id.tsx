import { createFileRoute, Link, notFound, type ErrorComponentProps } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import type { Recipe } from "@/lib/app-data";
import { recipes, categories, L } from "@/lib/app-data";
import { useProgress } from "@/lib/use-progress";
import { useLocale } from "@/lib/i18n";
import { ArrowLeft, Clock, Flame, Heart, Share2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/receitas/$id")({
  component: RecipeDetail,
  notFoundComponent: () => {
    const { t } = useLocale();
    return (
      <MobileShell>
        <div className="p-10 text-center">
          <p className="text-sm text-muted-foreground">{t("recipes.notFound")}</p>
          <Link to="/receitas" className="mt-4 inline-block text-primary">{t("common.back")}</Link>
        </div>
      </MobileShell>
    );
  },
  errorComponent: ({ error }: ErrorComponentProps) => (
    <MobileShell>
      <div className="p-10 text-center text-sm">
        {error instanceof Error ? error.message : String(error)}
      </div>
    </MobileShell>
  ),
  loader: ({ params }) => {
    const r = recipes.find((x) => x.id === params.id);
    if (!r) throw notFound();
    return { recipe: r };
  },
});

function RecipeDetail() {
  const { recipe: r } = Route.useLoaderData() as { recipe: Recipe };
  const { progress, toggleFavorite } = useProgress();
  const { locale, t } = useLocale();
  const fav = progress.favorites.includes(r.id);
  const name = L(r.name, locale);
  const categoryLabel = L(categories.find((c) => c.id === r.category)?.label ?? categories[0].label, locale);

  const share = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: name, text: `${name} — Reto 21 Días` }); } catch {}
    }
  };

  return (
    <MobileShell>
      <div className="relative h-72 w-full">
        <img src={r.image} alt={name} className="absolute inset-0 h-full w-full object-cover" width={768} height={768} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        <Link to="/receitas" className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 backdrop-blur">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="absolute right-4 top-4 flex gap-2">
          <button onClick={() => toggleFavorite(r.id)} className="flex h-10 w-10 items-center justify-center rounded-full bg-card/90 backdrop-blur">
            <Heart className={`h-4 w-4 ${fav ? "fill-primary text-primary" : ""}`} />
          </button>
          <button onClick={share} className="flex h-10 w-10 items-center justify-center rounded-full bg-card/90 backdrop-blur">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative -mt-8 rounded-t-[2rem] bg-background px-6 pb-6 pt-8">
        <span className="block text-xs uppercase tracking-widest text-primary">{categoryLabel}</span>
        <h1 className="mt-2 font-serif text-3xl leading-tight">{name}</h1>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Stat icon={<Clock className="h-3 w-3" />} label={t("recipes.timeLabel")} value={r.time} />
          <Stat icon={<Flame className="h-3 w-3" />} label={t("recipes.proteinLabel")} value={r.protein} />
          <Stat icon={<Sparkles className="h-3 w-3" />} label={t("recipes.satietyLabel")} value={"★".repeat(r.satiety)} />
        </div>

        <div className="mt-5 rounded-2xl bg-blush p-4">
          <p className="text-xs uppercase tracking-widest text-primary">{t("recipes.forYou")}</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground">{L(r.feminineBenefits, locale)}</p>
        </div>

        <Section title={t("recipes.benefitsTitle")}>
          <ul className="space-y-1.5">
            {L(r.benefits, locale).map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{b}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t("recipes.bestTimeTitle")}>
          <p className="text-sm text-muted-foreground">{L(r.bestTime, locale)}</p>
        </Section>

        <Section title={t("recipes.ingredientsTitle")}>
          <ul className="space-y-2">
            {L(r.ingredients, locale).map((i) => (
              <li key={i} className="flex items-center gap-3 rounded-xl bg-secondary px-3 py-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-primary" />{i}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t("recipes.prepTitle")}>
          <ol className="space-y-3">
            {L(r.steps, locale).map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-rose font-serif text-sm text-rose-foreground">{i + 1}</span>
                <p className="pt-1 text-sm leading-relaxed text-foreground">{s}</p>
              </li>
            ))}
          </ol>
        </Section>

        {r.videoId && (
          <Section title={t("recipes.videoTitle")}>
            <div className="aspect-video overflow-hidden rounded-2xl border border-border">
              <iframe
                src={`https://www.youtube.com/embed/${r.videoId}`}
                title={name}
                className="h-full w-full"
                allowFullScreen
              />
            </div>
          </Section>
        )}
      </div>
    </MobileShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h3 className="font-serif text-lg">{title}</h3>
      <div className="mt-2">{children}</div>
    </section>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-3">
      <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-blush text-primary">{icon}</div>
      <p className="mt-1 font-serif text-sm">{value}</p>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}
