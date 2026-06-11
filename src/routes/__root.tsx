import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { BottomNav } from "@/components/BottomNav";
import { MobileShell } from "@/components/MobileShell";
import { registerServiceWorker } from "@/lib/register-sw";
import { LocaleProvider, useT } from "@/lib/i18n";

function NotFoundComponent() {
  const t = useT();
  return (
    <MobileShell>
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-6xl text-foreground">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">Esta página se perdió en el camino.</p>
        <Link to="/" className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
          {t("common.back")}
        </Link>
      </div>
    </MobileShell>
  );
}

function ErrorComponent({ error }: { error: Error }) {
  return (
    <MobileShell>
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-2xl">Algo salió mal</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      </div>
    </MobileShell>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#f5e6df" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: "Reto 21" },
      { title: "Dieta carnívora — Reto 21 Días" },
      { name: "description", content: "Protocolo femenino de adelgazamiento con alimentación proteica, sin hambre y sin culpa." },
      { property: "og:title", content: "Dieta carnívora — Reto 21 Días" },
      { name: "twitter:title", content: "Dieta carnívora — Reto 21 Días" },
      { property: "og:description", content: "Protocolo femenino de adelgazamiento con alimentación proteica, sin hambre y sin culpa." },
      { name: "twitter:description", content: "Protocolo femenino de adelgazamiento con alimentación proteica, sin hambre y sin culpa." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/HKr4b7e3cTTrIa3tOuRRxm58SIG2/social-images/social-1781145091957-Gemini_Generated_Image_9a98vx9a98vx9a98.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/HKr4b7e3cTTrIa3tOuRRxm58SIG2/social-images/social-1781145091957-Gemini_Generated_Image_9a98vx9a98vx9a98.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/icon-512.png" },
      { rel: "icon", href: "/icon-512.png", type: "image/png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => {
    registerServiceWorker();
  }, []);
  return (
    <LocaleProvider>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <BottomNav />
      </QueryClientProvider>
    </LocaleProvider>
  );
}
