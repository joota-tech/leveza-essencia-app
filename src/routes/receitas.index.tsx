import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { categories, recipes } from "@/lib/app-data";
import { useProgress } from "@/lib/use-progress";
import { Clock, Flame, Heart, Search } from "lucide-react";

export const Route = createFileRoute("/receitas/")({
  head: () => ({
    meta: [{ title: "Receitas — Desafio 21 Dias" }],
  }),
  component: RecipesPage,
});

function RecipesPage() {
  const [cat, setCat] = useState("Todas");
  const [q, setQ] = useState("");
  const { progress, toggleFavorite } = useProgress();

  const filtered = useMemo(
    () =>
      recipes.filter(
        (r) =>
          (cat === "Todas" || r.category === cat) &&
          r.name.toLowerCase().includes(q.toLowerCase()),
      ),
    [cat, q],
  );

  return (
    <MobileShell>
      <header className="px-6 pt-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Cozinhe com leveza</p>
        <h1 className="mt-1 font-serif text-3xl">Receitas</h1>
      </header>

      <div className="mx-6 mt-5 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar receita..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>

      <div className="scrollbar-hide mt-4 flex gap-2 overflow-x-auto px-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
              cat === c
                ? "border-primary bg-primary text-primary-foreground shadow-glow"
                : "border-border bg-card text-muted-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <section className="mt-5 grid grid-cols-1 gap-4 px-6">
        {filtered.map((r) => {
          const fav = progress.favorites.includes(r.id);
          return (
            <Link
              key={r.id}
              to="/receitas/$id"
              params={{ id: r.id }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft animate-float-up"
            >
              <div className="relative h-44 w-full">
                <img src={r.image} alt={r.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-105" width={768} height={768} />
                <button
                  onClick={(e) => { e.preventDefault(); toggleFavorite(r.id); }}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-card/90 backdrop-blur"
                >
                  <Heart className={`h-4 w-4 ${fav ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                </button>
                <span className="absolute left-3 top-3 rounded-full bg-card/90 px-3 py-1 text-[10px] font-medium text-foreground backdrop-blur">
                  {r.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg leading-tight">{r.name}</h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{r.time}</span>
                  <span className="inline-flex items-center gap-1"><Flame className="h-3 w-3" />{r.protein}</span>
                  <span>Saciedade {"★".repeat(r.satiety)}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </MobileShell>
  );
}
