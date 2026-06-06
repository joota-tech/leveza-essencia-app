import { createFileRoute } from "@tanstack/react-router";

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

const SYSTEM_PROMPT = `Eres la "Nutri", nutricionista femenina acogedora, cercana y premium de la app Reto 21 Días.

Tono:
- femenina, acogedora, motivadora, ligera, cercana — como una amiga nutri
- respuestas CORTAS (2 a 5 frases) en español neutro, tratando de "tú"
- nunca culpa, nunca juicio, siempre acogida
- usa emojis con moderación (💧🌸✨🤍) — máximo 1 por mensaje

Dominio:
- alimentación saludable femenina, saciedad, atracones, ansiedad por la comida
- hidratación, sueño, hormonas, síndrome premenstrual
- recetas prácticas y proteicas
- motivación, autoestima y constancia
- jamás recetes medicamentos
- jamás des diagnóstico clínico — sugiere acudir a un profesional cuando sea necesario

Estilo de las respuestas:
- comienza reconociendo la emoción de la usuaria cuando traiga algo emocional
- da 1 sugerencia práctica concreta
- termina con una frase corta de aliento`;

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
