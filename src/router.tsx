import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function DefaultPending() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-gradient-warm">
      <div className="flex flex-col items-center gap-3">
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-primary/30 border-t-primary"
          role="status"
          aria-label="Carregando"
        />
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Carregando…
        </p>
      </div>
    </div>
  );
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPendingComponent: DefaultPending,
    defaultPendingMs: 300,
    defaultPendingMinMs: 200,
  });

  return router;
};
