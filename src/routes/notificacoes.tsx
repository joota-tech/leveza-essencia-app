import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { ArrowLeft, Bell, Clock, Droplet, Heart, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/notificacoes")({
  head: () => ({ meta: [{ title: "Notificações & lembretes" }] }),
  component: NotificacoesPage,
});

type Prefs = {
  agua: boolean;
  refeicoes: boolean;
  motivacao: boolean;
  sono: boolean;
  horarioAgua: string;
  horarioRefeicao: string;
};

const KEY = "desafio21-notif";
const defaults: Prefs = {
  agua: true,
  refeicoes: true,
  motivacao: true,
  sono: false,
  horarioAgua: "09:00",
  horarioRefeicao: "12:00",
};

function NotificacoesPage() {
  const [prefs, setPrefs] = useState<Prefs>(defaults);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setPrefs({ ...defaults, ...JSON.parse(raw) });
    } catch {}
  }, []);

  const update = (patch: Partial<Prefs>) => {
    setPrefs((p) => {
      const next = { ...p, ...patch };
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  return (
    <MobileShell>
      <header className="flex items-center gap-3 px-6 pt-10">
        <Link to="/perfil" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="font-serif text-2xl">Notificações</h1>
      </header>

      <p className="mx-6 mt-3 text-sm text-muted-foreground">
        Configure lembretes carinhosos para te acompanhar ao longo do dia.
      </p>

      <section className="mx-6 mt-5 space-y-2">
        <Toggle icon={<Droplet className="h-4 w-4" />} label="Lembrete de água" value={prefs.agua} onChange={(v) => update({ agua: v })} />
        <Toggle icon={<Bell className="h-4 w-4" />} label="Lembrete de refeições" value={prefs.refeicoes} onChange={(v) => update({ refeicoes: v })} />
        <Toggle icon={<Heart className="h-4 w-4" />} label="Mensagem motivacional diária" value={prefs.motivacao} onChange={(v) => update({ motivacao: v })} />
        <Toggle icon={<Moon className="h-4 w-4" />} label="Lembrete de sono" value={prefs.sono} onChange={(v) => update({ sono: v })} />
      </section>

      <section className="mx-6 mt-5 rounded-3xl border border-border/60 bg-card p-5 shadow-soft space-y-4">
        <h3 className="font-serif text-lg">Horários</h3>
        <TimeRow icon={<Droplet className="h-4 w-4" />} label="Primeiro copo de água" value={prefs.horarioAgua} onChange={(v) => update({ horarioAgua: v })} />
        <TimeRow icon={<Clock className="h-4 w-4" />} label="Almoço" value={prefs.horarioRefeicao} onChange={(v) => update({ horarioRefeicao: v })} />
      </section>

      <p className="mx-6 mt-6 text-center text-xs text-muted-foreground">
        Suas preferências são salvas neste dispositivo.
      </p>
    </MobileShell>
  );
}

function Toggle({ icon, label, value, onChange }: { icon: React.ReactNode; label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!value)} className="flex w-full items-center gap-3 rounded-2xl border border-border/60 bg-card p-4 text-left shadow-soft">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blush text-primary">{icon}</div>
      <span className="flex-1 text-sm">{label}</span>
      <span className={`relative h-6 w-11 rounded-full transition-colors ${value ? "bg-primary" : "bg-secondary"}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-background shadow transition-transform ${value ? "translate-x-5" : "translate-x-0.5"}`} />
      </span>
    </button>
  );
}

function TimeRow({ icon, label, value, onChange }: { icon: React.ReactNode; label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blush text-primary">{icon}</div>
      <span className="flex-1 text-sm">{label}</span>
      <input type="time" value={value} onChange={(e) => onChange(e.target.value)} className="rounded-xl bg-secondary px-3 py-2 text-sm outline-none" />
    </label>
  );
}
