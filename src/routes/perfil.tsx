import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { useProgress } from "@/lib/use-progress";
import { recipes } from "@/lib/app-data";
import { Bell, ChevronRight, LogOut, Settings, Smile, Trophy } from "lucide-react";

const MOOD_KEY = "desafio21-mood";

export const Route = createFileRoute("/perfil")({
  head: () => ({ meta: [{ title: "Perfil — Desafio 21 Dias" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const { progress, update } = useProgress();
  const favs = recipes.filter((r) => progress.favorites.includes(r.id));
  const lost =
    progress.startWeight && progress.goalWeight
      ? Math.max(0, progress.startWeight - progress.goalWeight)
      : 0;

  return (
    <MobileShell>
      <header className="px-6 pt-10">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-rose font-serif text-2xl text-rose-foreground shadow-glow">
            {progress.name?.[0]?.toUpperCase() || "♥"}
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Bem-vinda</p>
            <h1 className="font-serif text-2xl capitalize">{progress.name}</h1>
          </div>
        </div>
      </header>

      <section className="mx-6 mt-6 grid grid-cols-3 gap-3">
        <Mini label="Dias" value={`${progress.completedDays.length}/21`} icon={<Trophy className="h-4 w-4" />} />
        <Mini label="Meta" value={lost ? `-${lost}kg` : "—"} icon={<Smile className="h-4 w-4" />} />
        <Mini label="Favoritas" value={`${favs.length}`} icon={<Bell className="h-4 w-4" />} />
      </section>

      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="font-serif text-lg">Sua evolução</h3>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Field
            label="Peso inicial (kg)"
            value={progress.startWeight ?? ""}
            onChange={(v) => update({ startWeight: Number(v) || undefined })}
          />
          <Field
            label="Meta (kg)"
            value={progress.goalWeight ?? ""}
            onChange={(v) => update({ goalWeight: Number(v) || undefined })}
          />
        </div>

        <div className="mt-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Progresso</p>
          <div className="mt-2 flex h-24 items-end gap-1.5">
            {Array.from({ length: 21 }).map((_, i) => {
              const done = progress.completedDays.includes(i + 1);
              return (
                <div
                  key={i}
                  className={`flex-1 rounded-t-lg transition-all ${done ? "bg-gradient-rose" : "bg-secondary"}`}
                  style={{ height: `${done ? 30 + (i * 60) / 21 : 12}%` }}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="font-serif text-lg">Como você está hoje?</h3>
        <div className="mt-3 flex justify-between">
          {["😔", "😐", "🙂", "😊", "✨"].map((e) => (
            <button key={e} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-2xl transition-transform active:scale-90">
              {e}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-6 mt-5 space-y-2">
        <Row icon={<Bell className="h-4 w-4" />} label="Notificações & lembretes" />
        <Row icon={<Settings className="h-4 w-4" />} label="Configurações" />
        <Row icon={<LogOut className="h-4 w-4" />} label="Reiniciar jornada" onClick={() => {
          if (confirm("Deseja reiniciar todo o progresso?")) {
            localStorage.removeItem("desafio21-progress");
            location.reload();
          }
        }} />
      </section>
    </MobileShell>
  );
}

function Mini({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-3 text-center shadow-soft">
      <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-blush text-primary">{icon}</div>
      <p className="mt-1 font-serif text-lg leading-none">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string | number; onChange: (v: string) => void }) {
  return (
    <label className="block rounded-2xl bg-secondary p-3">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-transparent font-serif text-xl outline-none"
        placeholder="—"
      />
    </label>
  );
}

function Row({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex w-full items-center gap-3 rounded-2xl border border-border/60 bg-card p-4 text-left shadow-soft">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blush text-primary">{icon}</div>
      <span className="flex-1 text-sm">{label}</span>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </button>
  );
}
