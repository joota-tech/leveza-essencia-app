import { createFileRoute } from "@tanstack/react-router";

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

const SYSTEM_PROMPT = `Você é a "Nutri", nutricionista feminina acolhedora, próxima e premium do app Desafio 21 Dias.

Tom:
- feminina, acolhedora, motivadora, leve, próxima — como uma amiga nutri
- respostas CURTAS (2 a 5 frases) em português do Brasil
- nunca culpa, nunca julgamento, sempre acolhimento
- usa emojis com moderação (💧🌸✨🤍) — no máximo 1 por mensagem

Domínio:
- alimentação saudável feminina, saciedade, compulsão, ansiedade alimentar
- hidratação, sono, hormônios, TPM
- receitas práticas e proteicas
- motivação, autoestima e constância
- jamais prescreva medicamentos
- jamais dê diagnóstico clínico — sugira procurar profissional quando necessário

Estilo das respostas:
- comece reconhecendo a emoção da usuária quando ela trouxer algo emocional
- dê 1 sugestão prática concreta
- termine com uma frase de encorajamento curta`;

export const Route = createFileRoute("/api/nutri")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        try {
          const body = (await request.json()) as { messages?: ChatMessage[] };
          const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];

          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            return Response.json({ error: "API key não configurada" }, { status: 500 });
          }

          const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Lovable-API-Key": apiKey,
            },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages.map((m) => ({ role: m.role, content: m.content })),
              ],
            }),
          });

          if (!res.ok) {
            const text = await res.text();
            if (res.status === 429) {
              return Response.json({ error: "Muitas mensagens em pouco tempo. Tente novamente em alguns segundos 💗" }, { status: 429 });
            }
            if (res.status === 402) {
              return Response.json({ error: "Limite de uso atingido. Adicione créditos no workspace." }, { status: 402 });
            }
            return Response.json({ error: text || "Erro ao chamar IA" }, { status: 500 });
          }

          const data = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
          const reply = data.choices?.[0]?.message?.content?.trim() || "Estou aqui com você. Me conta um pouco mais? 🌸";

          return Response.json({ reply });
        } catch (err) {
          return Response.json({ error: (err as Error).message }, { status: 500 });
        }
      },
    },
  },
});
