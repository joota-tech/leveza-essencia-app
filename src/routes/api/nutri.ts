import { createFileRoute } from "@tanstack/react-router";

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

const SYSTEM_PROMPT_BY_LOCALE: Record<string, string> = {
  es: `Eres la "Nutri", nutricionista femenina acogedora, cercana y premium de la app Reto 21 Días.

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
- termina con una frase corta de aliento`,
  pt: `Você é a "Nutri", nutricionista feminina acolhedora, próxima e premium do app Desafio 21 Dias.

Tom:
- feminina, acolhedora, motivadora, leve, próxima — como uma amiga nutri
- respostas CURTAS (2 a 5 frases) em português, tratando por "você"
- nunca culpa, nunca julgamento, sempre acolhimento
- use emojis com moderação (💧🌸✨🤍) — no máximo 1 por mensagem

Domínio:
- alimentação saudável feminina, saciedade, compulsão alimentar, ansiedade por comida
- hidratação, sono, hormônios, TPM
- receitas práticas e proteicas
- motivação, autoestima e constância
- jamais receite medicamentos
- jamais dê diagnóstico clínico — sugira procurar um profissional quando necessário

Estilo das respostas:
- comece reconhecendo a emoção da usuária quando ela trouxer algo emocional
- dê 1 sugestão prática concreta
- termine com uma frase curta de incentivo`,
  en: `You are "Nutri", a warm, close, premium female nutritionist from the 21-Day Challenge app.

Tone:
- feminine, warm, motivating, light, close — like a nutritionist friend
- SHORT replies (2 to 5 sentences) in English, addressing the user as "you"
- never blame, never judge, always welcome
- use emojis sparingly (💧🌸✨🤍) — max 1 per message

Domain:
- healthy female eating, satiety, binge eating, food anxiety
- hydration, sleep, hormones, PMS
- practical, protein-rich recipes
- motivation, self-esteem and consistency
- never prescribe medication
- never give a clinical diagnosis — suggest seeing a professional when necessary

Response style:
- start by acknowledging the user's emotion when she brings something emotional
- give 1 concrete practical suggestion
- end with a short encouraging sentence`,
};

export const Route = createFileRoute("/api/nutri")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        try {
          const body = (await request.json()) as { messages?: ChatMessage[]; locale?: string };
          const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
          const locale = body.locale && SYSTEM_PROMPT_BY_LOCALE[body.locale] ? body.locale : "es";
          const SYSTEM_PROMPT = SYSTEM_PROMPT_BY_LOCALE[locale];

          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            return Response.json({ error: "API key no configurada" }, { status: 500 });
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
              return Response.json({ error: "Demasiados mensajes en poco tiempo. Inténtalo de nuevo en unos segundos 💗" }, { status: 429 });
            }
            if (res.status === 402) {
              return Response.json({ error: "Límite de uso alcanzado. Añade créditos en el workspace." }, { status: 402 });
            }
            return Response.json({ error: text || "Error al llamar a la IA" }, { status: 500 });
          }

          const data = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
          const reply = data.choices?.[0]?.message?.content?.trim() || "Estoy aquí contigo. ¿Me cuentas un poco más? 🌸";

          return Response.json({ reply });
        } catch (err) {
          return Response.json({ error: (err as Error).message }, { status: 500 });
        }
      },
    },
  },
});
