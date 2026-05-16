import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import type { Recipe } from "@/lib/app-data";
import { recipes } from "@/lib/app-data";
import { useProgress } from "@/lib/use-progress";
import { ArrowLeft, Clock, Flame, Heart, Share2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/receitas/$id")({
  component: RecipeDetail,
  notFoundComponent: () => (
    <MobileShell>
      <div className="p-10 text-center">
        <p className="text-sm text-muted-foreground">Receita não encontrada.</p>
        <Link to="/receitas" className="mt-4 inline-block text-primary">Voltar</Link>
      </div>
    </MobileShell>
  ),
  errorComponent: ({ error }) => (
    <MobileShell><div className="p-10 text-center text-sm">{error.message}</div></MobileShell>
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
  const fav = progress.favorites.includes(r.id);

  const share = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: r.name, text: `${r.name} — Desafio 21 Dias` }); } catch {}
    }
  };

  return (
    <MobileShell>
      <div className="relative h-72 w-full">
        <img src={r.image} alt={r.name} className="absolute inset-0 h-full w-full object-cover" width={768} height={768} />
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

      <div className="-mt-10 rounded-t-[2rem] bg-background px-6 pt-6">
        <span className="text-xs uppercase tracking-widest text-primary">{r.category}</span>
        <h1 className="mt-1 font-serif text-3xl leading-tight">{r.name}</h1>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Stat icon={<Clock className="h-3 w-3" />} label="Tempo" value={r.time} />
          <Stat icon={<Flame className="h-3 w-3" />} label="Proteína" value={r.protein} />
          <Stat icon={<Sparkles className="h-3 w-3" />} label="Saciedade" value={"★".repeat(r.satiety)} />
        </div>

        <div className="mt-5 rounded-2xl bg-blush p-4">
          <p className="text-xs uppercase tracking-widest text-primary">Para você</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground">{r.feminineBenefits}</p>
        </div>

        <Section title="Benefícios">
          <ul className="space-y-1.5">
            {r.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{b}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Melhor horário">
          <p className="text-sm text-muted-foreground">{r.bestTime}</p>
        </Section>

        <Section title="Ingredientes">
          <ul className="space-y-2">
            {r.ingredients.map((i) => (
              <li key={i} className="flex items-center gap-3 rounded-xl bg-secondary px-3 py-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-primary" />{i}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Modo de preparo">
          <ol className="space-y-3">
            {r.steps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-rose font-serif text-sm text-rose-foreground">{i + 1}</span>
                <p className="pt-1 text-sm leading-relaxed text-foreground">{s}</p>
              </li>
            ))}
          </ol>
        </Section>

        {r.videoId && (
          <Section title="Vídeo da receita">
            <div className="aspect-video overflow-hidden rounded-2xl border border-border">
              <iframe
                src={`https://www.youtube.com/embed/${r.videoId}`}
                title={r.name}
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
