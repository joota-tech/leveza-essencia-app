import { ReactNode } from "react";

export function MobileShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="relative mx-auto min-h-screen w-full max-w-md overflow-x-hidden bg-background pb-28">
        {children}
      </div>
    </div>
  );
}
