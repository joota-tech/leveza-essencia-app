import { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SOSButton } from "@/components/SOSButton";
import { useOnlineStatus } from "@/lib/use-online-status";
import { WifiOff } from "lucide-react";

export function MobileShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const hideSOS = pathname.startsWith("/onboarding") || pathname.startsWith("/nutri");
  const online = useOnlineStatus();

  return (
    <div className="min-h-dvh bg-gradient-warm">
      {/* Enlace de omisión para lectores de pantalla y teclado */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-glow"
      >
        Ir al contenido
      </a>

      <div className="relative mx-auto min-h-dvh w-full max-w-md overflow-x-hidden bg-background pb-28">
        {!online && (
          <div
            role="status"
            aria-live="polite"
            className="sticky top-0 z-50 flex items-center justify-center gap-2 bg-foreground/90 px-4 py-2 text-[12px] font-medium text-background backdrop-blur"
          >
            <WifiOff className="h-3.5 w-3.5" aria-hidden="true" />
            Modo sin conexión — usando datos guardados en tu móvil
          </div>
        )}
        <main id="conteudo" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        {!hideSOS && <SOSButton />}
      </div>
    </div>
  );
}
