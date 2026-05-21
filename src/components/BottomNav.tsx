import { Link, useRouterState } from "@tanstack/react-router";
import { Home, BookOpen, CalendarHeart, HeartHandshake, Gift, User } from "lucide-react";

const items = [
  { to: "/", label: "Início", icon: Home },
  { to: "/receitas", label: "Receitas", icon: BookOpen },
  { to: "/plano", label: "21 Dias", icon: CalendarHeart },
  { to: "/anti-compulsao", label: "Acolher", icon: HeartHandshake },
  { to: "/bonus", label: "Bônus", icon: Gift },
  { to: "/perfil", label: "Perfil", icon: User },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  if (pathname.startsWith("/onboarding")) return null;
  if (pathname.startsWith("/onboarding") || pathname.startsWith("/nutri")) return null;
  return (
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-md -translate-x-1/2 px-3 pb-3 pt-2">
      <div className="flex items-center justify-between rounded-3xl border border-border/60 bg-card/90 px-2 py-2 shadow-soft backdrop-blur-xl">
        {items.map(({ to, label, icon: Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className="group flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-1 py-1.5 transition-colors"
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-2xl transition-all ${
                  active ? "bg-gradient-rose text-rose-foreground shadow-glow" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={active ? 2.2 : 1.8} />
              </span>
              <span className={`text-[10px] font-medium tracking-wide ${active ? "text-foreground" : "text-muted-foreground"}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
