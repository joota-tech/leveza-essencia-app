import { useState, useEffect } from "react";
import { Heart, Wind, Sparkles, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const motivacionais = [
  "Respira. Esse momento vai passar — você já passou por outros.",
  "Não é fome. É emoção. Acolhe, não come.",
  "Você não precisa ser perfeita. Só precisa voltar.",
  "Uma escolha de cada vez. Essa pode ser de amor próprio.",
  "Seu corpo merece carinho, não punição.",
];

const tecnicas = [
  "Beba 1 copo de água gelada lentamente",
  "Escove os dentes agora mesmo",
  "Saia do ambiente por 5 minutos",
  "Coma 1 fruta com canela",
];

export function SOSButton() {
  const [open, setOpen] = useState(false);
  const [frase, setFrase] = useState(motivacionais[0]);
  const [breath, setBreath] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    if (!open) return;
    setFrase(motivacionais[Math.floor(Math.random() * motivacionais.length)]);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const seq: Array<"in" | "hold" | "out"> = ["in", "hold", "out"];
    const dur = [4000, 7000, 8000];
    let i = 0;
    setBreath(seq[0]);
    const tick = () => {
      i = (i + 1) % 3;
      setBreath(seq[i]);
    };
    const id = setInterval(tick, dur[0]);
    return () => clearInterval(id);
  }, [open]);

  return (
    <>
      <button
        onClick={() => {
          if (typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate?.(20);
          setOpen(true);
        }}
        aria-label="SOS — preciso de ajuda"
        className="fixed bottom-24 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-rose text-rose-foreground shadow-glow ring-2 ring-card animate-glow"
      >
        <span className="text-[11px] font-bold tracking-widest">SOS</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 backdrop-blur-sm animate-fade-in" onClick={() => setOpen(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative mx-auto w-full max-w-md max-h-[88vh] overflow-y-auto rounded-t-3xl bg-card p-6 shadow-glow animate-float-up"
          >
            <button onClick={() => setOpen(false)} className="absolute right-4 top-4 rounded-full bg-secondary p-2 text-muted-foreground">
              <X className="h-4 w-4" />
            </button>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Um momento</p>
            <h2 className="mt-1 font-serif text-2xl">Você não está sozinha</h2>

            <div className="mt-5 rounded-2xl bg-blush p-4 text-center">
              <Heart className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-2 font-serif text-base italic text-foreground">{frase}</p>
            </div>

            <div className="mt-5 rounded-2xl border border-border/60 bg-secondary/60 p-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                <Wind className="h-3.5 w-3.5" /> Respiração 4-7-8
              </div>
              <div className="mt-4 flex flex-col items-center">
                <div
                  className={`flex h-28 w-28 items-center justify-center rounded-full bg-gradient-rose text-rose-foreground shadow-glow transition-all duration-[4000ms] ease-in-out ${
                    breath === "in" ? "scale-110" : breath === "hold" ? "scale-110" : "scale-90"
                  }`}
                >
                  <span className="font-serif text-lg">
                    {breath === "in" ? "Inspire" : breath === "hold" ? "Segure" : "Solte"}
                  </span>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Repita 4 vezes</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Atravesse o pico</p>
              <ul className="mt-2 space-y-2">
                {tecnicas.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 rounded-2xl border border-border/60 bg-card p-3 text-sm">
                    <Sparkles className="mt-0.5 h-4 w-4 text-primary" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link to="/nutri" onClick={() => setOpen(false)} className="rounded-2xl bg-primary py-3 text-center text-xs font-medium text-primary-foreground shadow-glow">
                Falar com a Nutri
              </Link>
              <Link to="/anti-compulsao" onClick={() => setOpen(false)} className="rounded-2xl bg-secondary py-3 text-center text-xs font-medium text-secondary-foreground">
                Guia anti-compulsão
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
