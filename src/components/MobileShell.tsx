import { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SOSButton } from "@/components/SOSButton";

export function MobileShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const hideSOS = pathname.startsWith("/onboarding") || pathname.startsWith("/nutri");

  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="relative mx-auto min-h-screen w-full max-w-md overflow-x-hidden bg-background pb-28">
        {children}
        {!hideSOS && <SOSButton />}
      </div>
    </div>
  );
}
