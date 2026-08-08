import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { Candy, CloudRain, Heart, Moon, RotateCcw, Sparkles, ChevronLeft, type LucideIcon } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { dict } from "@/lib/i18n-dict";

const sectionIcons: Record<string, LucideIcon> = {
  doce: Candy,
  ansiedade: CloudRain,
  emocional: Heart,
  noite: Moon,
  recaida: RotateCcw,
  culpa: Sparkles,
};

const sectionIds = ["doce", "ansiedade", "emocional", "noite", "recaida", "culpa"] as const;
type SectionId = (typeof sectionIds)[number];

export const Route = createFileRoute("/anti-compulsao/$id")({
  head: ({ params }) => {
    const id = params.id as SectionId;
    const s = sectionIds.includes(id) ? dict.es.antiBinge[id] : null;
    return { meta: [{ title: s ? `${s.title} — Acolher` : "Acolher" }] };
  },
  loader: ({ params }) => {
    if (!sectionIds.includes(params.id as SectionId)) throw notFound();
    return params.id as SectionId;
  },
  component: DetailPage,
  notFoundComponent: () => {
    return <NotFoundPage />;
  },
});

function NotFoundPage() {
  const { t } = useLocale();
  return (
    <MobileShell>
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="text-sm text-muted-foreground">{t("antiBinge.contentNotFound")}</p>
        <Link to="/anti-compulsao" className="mt-4 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">
          {t("common.back")}
        </Link>
      </div>
    </MobileShell>
  );
}

function DetailPage() {
  const id = Route.useLoaderData();
  const { locale, t } = useLocale();
  const s = dict[locale].antiBinge[id];
  const Icon = sectionIcons[id];

  return (
    <MobileShell>
      <header className="px-6 pt-8">
        <Link to="/anti-compulsao" className="inline-flex items-center gap-1 text-sm text-muted-foreground">
          <ChevronLeft className="h-4 w-4" /> {t("antiBinge.backLink")}
        </Link>
        <div className="mt-5 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-rose text-rose-foreground shadow-glow">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-serif text-2xl leading-tight">{s.title}</h1>
            <p className="mt-1 text-xs text-muted-foreground">{s.subtitle}</p>
          </div>
        </div>
      </header>

      <section className="mx-6 mt-6 rounded-3xl bg-blush p-5">
        <p className="text-sm leading-relaxed text-foreground">{s.intro}</p>
      </section>

      <section className="px-6 pt-6">
        <h2 className="font-serif text-lg">{t("antiBinge.stepsTitle")}</h2>
        <ul className="mt-3 space-y-3">
          {s.steps.map((step, i) => (
            <li
              key={i}
              className="rounded-3xl border border-border/60 bg-card p-4 shadow-soft animate-float-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <h3 className="font-serif text-base text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-6 mt-6 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="font-serif text-lg">{t("antiBinge.affirmationsTitle")}</h3>
        <div className="mt-3 space-y-2">
          {s.affirmations.map((a) => (
            <p key={a} className="rounded-2xl bg-blush p-3 text-sm italic text-foreground">
              "{a}"
            </p>
          ))}
        </div>
      </section>

      <div className="px-6 pt-6">
        <Link
          to="/anti-compulsao"
          className="block w-full rounded-2xl bg-primary py-4 text-center text-sm font-medium text-primary-foreground shadow-glow active:scale-[0.98]"
        >
          {t("antiBinge.feelBetterBtn")}
        </Link>
      </div>
    </MobileShell>
  );
}
