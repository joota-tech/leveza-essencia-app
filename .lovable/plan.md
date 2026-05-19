## Expansão Premium — Módulos, Nutri IA, Evolução & SOS

Mantendo design atual (bege/rosé/nude, bordas suaves, feminino premium) e sem mexer nos bônus existentes (Cardápio, Anti-Compulsão, Receitas, Comer Fora).

### 1. Sistema de Módulos com Desbloqueio Progressivo

**Nova rota:** `src/routes/modulos.index.tsx` e `src/routes/modulos.$id.tsx`

- Dados em `src/lib/modules-data.ts` com 8 módulos, cada um com: id, título, subtítulo, ícone/emoji, cor accent, conteúdo (seções, mini-aulas, checklists, protocolos).
- Regra de desbloqueio: `unlocked = completedDays.length >= (moduleIndex * 2)` — Módulo 1 sempre liberado; 2→2 dias, 3→4, … 8→14.
- Card bloqueado: blur suave, cadeado (lucide `Lock`), texto "Desbloqueia em X dias".
- Card recém-desbloqueado: glow rosé animado + badge "Novo!" + `navigator.vibrate(30)` no mobile + animação `scale-in`.
- Página de módulo: hero com gradiente nude→rosé, seções de conteúdo, checklist interativo persistido em localStorage (`desafio21-module-checks`).

**Conteúdo por módulo** (cards educativos + checklist):
1. Emagrecimento Feminino — por que dietas falham, metabolismo, saciedade, fome emocional
2. Barriga Desinchada — protocolo 24h anti-inchaço + timeline
3. Energia e Disposição — medidor visual + rotina matinal
4. Sono e Recuperação — checklist noturno + player áudio relaxante (audio HTML5 com tom suave)
5. Hidratação Inteligente — rastreador integrado com `progress.water` + medalhas
6. Hormônios — calendário ciclo + modo TPM
7. Autoestima — frase do dia + mini diário (localStorage)
8. Transformação Definitiva — metas pós-21 + destaque "Você chegou até aqui"

### 2. Substituir bloco "Em breve" da home

Em `src/routes/index.tsx`: substituir o overlay "Em breve" pelo novo sistema. Cards da home apontam para `/modulos/$id`. Cadeado real, blur quando bloqueado, glow quando desbloqueado.

### 3. Converse com a Nutri (IA premium)

**Nova rota:** `src/routes/nutri.tsx` (chat estilo WhatsApp feminino).
**Server route:** `src/routes/api/nutri.ts` usando AI SDK + Lovable AI Gateway (`google/gemini-3-flash-preview`).

- System prompt: nutricionista feminina, acolhedora, motivadora, respostas curtas, positivas.
- UI: bolhas rosé (usuária) e bege/branco (Nutri), avatar, animação "digitando…" com 3 pontos pulsantes.
- Quick replies (chips): "Estou com vontade de doce", "O que posso comer agora?", "Estou desanimada", "Não consegui seguir hoje", "Me ajuda com compulsão", "Quero secar barriga".
- Histórico em localStorage `desafio21-nutri-chat` (sessão única).
- Entrada no BottomNav ou card destacado na home.

Provisionar `LOVABLE_API_KEY` via `ai_gateway--create` se não existir. Criar helper `src/lib/ai-gateway.ts`.

### 4. Área de Evolução

**Nova rota:** `src/routes/evolucao.tsx` (acessível pelo perfil ou home).

- Painel com: dias concluídos / 21, copos de água, streak (dias consecutivos), peso atual vs inicial vs meta.
- Gráfico SVG suave inline (sem libs pesadas) — barra de progresso de 21 dias.
- Grade de medalhas com estados locked/unlocked:
  - 🏆 7 dias seguidos
  - 💧 Rainha da hidratação (8+ copos em 1 dia)
  - 🔥 Controle total (14 dias)
  - 👑 Semana perfeita (7 dias consecutivos com check)

### 5. Botão SOS

Componente flutuante `src/components/SOSButton.tsx` — botão pequeno fixo bottom-right (acima do BottomNav), abre `Sheet` (shadcn) com:
- 3 mensagens motivacionais rotativas
- Técnica respiração guiada (círculo animado 4-7-8)
- 4 técnicas anti-compulsão rápidas
- Atalho para Nutri e Anti-Compulsão

Renderizado dentro do `MobileShell` para aparecer em todas as rotas exceto onboarding.

### 6. Microinterações

- Adicionar keyframes em `src/styles.css`: `glow-pulse`, `unlock-burst`, `confetti-soft`.
- Classe utilitária `.premium-glow` (box-shadow rosé pulsante).
- `navigator.vibrate` em desbloqueios e check de dia.

### Detalhes técnicos

- Router: criar arquivos `modulos.index.tsx`, `modulos.$id.tsx`, `nutri.tsx`, `evolucao.tsx`, `api/nutri.ts`. Atualizar `routeTree.gen.ts` manualmente (template não regenera automaticamente em alguns casos — checar).
- `useProgress` ganha helpers: `streak` (calculado), `unlockedModules` (derivado).
- Nutri usa AI SDK (`ai`, `@ai-sdk/openai-compatible`, `@ai-sdk/react`) + `streamText` + `useChat`. Instalar pacotes.
- Sem alterações em: receitas, anti-compulsão, bonus, plano, perfil (exceto adicionar links para Evolução).

### Arquivos a criar/editar

Criar:
- `src/lib/modules-data.ts`
- `src/lib/ai-gateway.ts`
- `src/routes/modulos.index.tsx`
- `src/routes/modulos.$id.tsx`
- `src/routes/nutri.tsx`
- `src/routes/evolucao.tsx`
- `src/routes/api/nutri.ts`
- `src/components/SOSButton.tsx`

Editar:
- `src/routes/index.tsx` (cards de módulos viram links reais com lock progressivo)
- `src/lib/use-progress.ts` (helpers de streak/módulos)
- `src/styles.css` (animações premium)
- `src/components/MobileShell.tsx` (montar SOSButton)
- `src/routes/perfil.tsx` (linkar Evolução)
- `src/routeTree.gen.ts`
