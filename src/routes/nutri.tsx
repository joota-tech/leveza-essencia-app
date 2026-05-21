import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { ArrowLeft, Send, Sparkles } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const STORAGE_KEY = "desafio21-nutri-chat";

const QUICK = [
  "Estou com vontade de doce",
  "O que posso comer agora?",
  "Estou desanimada",
  "Não consegui seguir hoje",
  "Me ajuda com compulsão",
  "Quero secar barriga",
];

const WELCOME: ChatMessage = {
  role: "assistant",
  content: "Oi, linda 🌸 Sou sua Nutri pessoal. Tô aqui pra te acolher, tirar dúvidas e te ajudar a continuar firme. Me conta: como você tá hoje?",
};

export const Route = createFileRoute("/nutri")({
  head: () => ({ meta: [{ title: "Converse com a Nutri — Desafio 21 Dias" }] }),
  component: NutriPage,
});

function NutriPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ChatMessage[];
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(messages)); } catch {}
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;
    setError(null);
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/nutri", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      if (!res.ok || data.error) {
        setError(data.error || "Algo deu errado. Tenta de novo?");
      } else if (data.reply) {
        setMessages((m) => [...m, { role: "assistant", content: data.reply! }]);
      }
    } catch {
      setError("Sem conexão. Tenta novamente.");
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setMessages([WELCOME]);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }

  return (
    <MobileShell>
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-border/60 bg-card/95 px-4 py-3 backdrop-blur-xl">
        <Link to="/" className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-rose text-rose-foreground shadow-glow">
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h1 className="font-serif text-lg leading-none">Nutri</h1>
          <p className="text-[11px] text-muted-foreground">Online · responde em segundos</p>
        </div>
        <button onClick={clearChat} className="text-[11px] text-muted-foreground underline">limpar</button>
      </header>

      <section className="px-4 pb-44 pt-5">
        <div className="space-y-3">
          {messages.map((m, i) => (
            <Bubble key={i} role={m.role} text={m.content} />
          ))}
          {loading && <Typing />}
          {error && (
            <div className="mx-auto max-w-[85%] rounded-2xl bg-destructive/10 px-3 py-2 text-center text-xs text-destructive">{error}</div>
          )}
          <div ref={endRef} />
        </div>
      </section>

      <div className="fixed bottom-0 left-1/2 z-30 w-full max-w-md -translate-x-1/2 border-t border-border/60 bg-card/95 px-3 pb-3 pt-2 backdrop-blur-xl">
        <div className="scrollbar-hide -mx-1 mb-2 flex gap-2 overflow-x-auto px-1">
          {QUICK.map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              disabled={loading}
              className="shrink-0 rounded-full border border-border/60 bg-secondary px-3 py-1.5 text-[11px] text-foreground disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); send(input); }}
          className="flex items-end gap-2 rounded-3xl border border-border/60 bg-background p-2 shadow-soft"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); }
            }}
            placeholder="Conta pra Nutri…"
            rows={1}
            className="max-h-32 flex-1 resize-none bg-transparent px-3 py-2 text-sm outline-none"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-rose text-rose-foreground shadow-glow transition-all disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </MobileShell>
  );
}

function Bubble({ role, text }: { role: "user" | "assistant"; text: string }) {
  if (role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[82%] rounded-3xl rounded-br-md bg-gradient-rose px-4 py-2.5 text-sm text-rose-foreground shadow-soft animate-float-up">
          {text}
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-end gap-2">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blush text-primary">
        <Sparkles className="h-3.5 w-3.5" />
      </div>
      <div className="max-w-[82%] whitespace-pre-wrap rounded-3xl rounded-bl-md border border-border/60 bg-card px-4 py-2.5 text-sm shadow-soft animate-float-up">
        {text}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex items-end gap-2">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blush text-primary">
        <Sparkles className="h-3.5 w-3.5" />
      </div>
      <div className="flex gap-1 rounded-3xl rounded-bl-md border border-border/60 bg-card px-4 py-3 shadow-soft">
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary/70 [animation-delay:-0.3s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary/70 [animation-delay:-0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary/70" />
      </div>
    </div>
  );
}
