import { Link, useRouterState } from "@tanstack/react-router";
import { Home, BookOpen, CalendarHeart, HeartHandshake, Gift, User } from "lucide-react";
import { useT } from "@/lib/i18n";

const items = [
  { to: "/", key: "home", icon: Home },
  { to: "/receitas", key: "recipes", icon: BookOpen },
  { to: "/plano", key: "plan", icon: CalendarHeart },
  { to: "/anti-compulsao", key: "acolher", icon: HeartHandshake },
  { to: "/bonus", key: "bonus", icon: Gift },
  { to: "/perfil", key: "profile", icon: User },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const t = useT();
  if (pathname.startsWith("/onboarding") || pathname.startsWith("/nutri")) return null;
  return (
    <nav
      aria-label={t("nav.ariaLabel")}
      className="fixed bottom-0 left-1/2 z-40 w-full max-w-md -translate-x-1/2 px-3 pb-3 pt-2"
    >
      <ul className="flex items-center justify-between rounded-3xl border border-border/60 bg-card/90 px-2 py-2 shadow-soft backdrop-blur-xl">
        {items.map(({ to, key, icon: Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          const label = t(`nav.${key}`);
          return (
            <li key={to} className="flex-1">
              <Link
                to={to}
                aria-label={label}
                aria-current={active ? "page" : undefined}
                className="group flex min-h-11 flex-col items-center gap-0.5 rounded-2xl px-1 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-2xl transition-all ${
                    active ? "bg-gradient-rose text-rose-foreground shadow-glow" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={active ? 2.2 : 1.8} aria-hidden="true" />
                </span>
                <span className={`text-[10px] font-medium tracking-wide ${active ? "text-foreground" : "text-muted-foreground"}`}>
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
