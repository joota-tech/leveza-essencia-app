// Service worker registration with hard guards for Lovable preview/dev.
// The SW only registers in the published production app — never in iframes,
// dev mode, or Lovable preview hostnames.

const APP_SW_PATH = "/sw.js";

function isPreviewOrDevContext(): boolean {
  if (typeof window === "undefined") return true;
  // 1. Dev mode
  if (!import.meta.env.PROD) return true;
  // 2. Inside iframe (Lovable editor preview)
  try {
    if (window.self !== window.top) return true;
  } catch {
    return true; // cross-origin frame access throws — treat as preview
  }
  // 3. Lovable preview / sandbox hostnames
  const host = window.location.hostname;
  if (
    host.startsWith("id-preview--") ||
    host.startsWith("preview--") ||
    host === "lovableproject.com" ||
    host.endsWith(".lovableproject.com") ||
    host === "lovableproject-dev.com" ||
    host.endsWith(".lovableproject-dev.com") ||
    host === "beta.lovable.dev" ||
    host.endsWith(".beta.lovable.dev")
  ) {
    return true;
  }
  // 4. Kill switch ?sw=off
  if (new URLSearchParams(window.location.search).get("sw") === "off") return true;
  return false;
}

async function unregisterAppSW() {
  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
  try {
    const regs = await navigator.serviceWorker.getRegistrations();
    await Promise.all(
      regs
        .filter((r) => {
          const url = r.active?.scriptURL || r.installing?.scriptURL || r.waiting?.scriptURL || "";
          return url.endsWith(APP_SW_PATH);
        })
        .map((r) => r.unregister()),
    );
  } catch {
    /* noop */
  }
}

export async function registerServiceWorker() {
  if (typeof window === "undefined") return;
  if (!("serviceWorker" in navigator)) return;

  if (isPreviewOrDevContext()) {
    await unregisterAppSW();
    return;
  }

  try {
    await navigator.serviceWorker.register(APP_SW_PATH, { scope: "/" });
  } catch {
    /* fail silently — offline is a nice-to-have */
  }
}
