export type ModuleSection = {
  title: string;
  body: string;
};

export type ModuleChecklistItem = string;

export type ModuleData = {
  id: string;
  index: number; // 1..8
  title: string;
  subtitle: string;
  emoji: string;
  accent: string; // tailwind gradient classes
  intro: string;
  sections: ModuleSection[];
  checklist: ModuleChecklistItem[];
  highlight?: string;
  extra?: { kind: "protocol24h" | "morningRoutine" | "nightRitual" | "hydration" | "cycle" | "diary" | "future" };
};

export const modulesData: ModuleData[] = [
  {
    id: "emagrecimento-feminino",
    index: 1,
    title: "Emagrecimento Feminino",
    subtitle: "Como seu corpo realmente emagrece",
    emoji: "🌸",
    accent: "from-rose-200/70 to-amber-100/60",
    intro: "Antes de qualquer dieta, entenda como o corpo feminino realmente perde peso — sem sofrimento e sem restrição extrema.",
    sections: [
      { title: "Por que dietas falham", body: "Restrição cria compulsão. Quanto mais você proíbe, mais o cérebro pede. Emagrecer feminino é sobre constância, não punição." },
      { title: "Metabolismo feminino", body: "Hormônios oscilam ao longo do mês. Aceitar isso é o primeiro passo para um plano que funciona de verdade." },
      { title: "Saciedade real", body: "Proteína + fibra + gordura boa em toda refeição. Esse é o tripé que desliga a fome emocional." },
      { title: "Fome emocional x fome física", body: "Fome física vem aos poucos. Fome emocional é súbita, específica e geralmente vem com culpa. Reconhecer já é metade do caminho." },
      { title: "Como criar constância", body: "Pequenos hábitos diários valem mais que semanas perfeitas seguidas de recaídas. Foque em 1% a cada dia." },
    ],
    checklist: [
      "Comi proteína no café da manhã",
      "Bebi água ao acordar",
      "Identifiquei se minha fome era física ou emocional",
      "Não me puni por escolhas do dia",
    ],
  },
  {
    id: "barriga-desinchada",
    index: 2,
    title: "Barriga Desinchada",
    subtitle: "Protocolo anti-inchaço de 24h",
    emoji: "🤍",
    accent: "from-amber-100/70 to-rose-100/60",
    intro: "Inchaço não é gordura. Em 24 horas, você consegue deflacionar a barriga só com pequenos ajustes.",
    sections: [
      { title: "O que causa retenção", body: "Excesso de sódio, açúcar, sono ruim, estresse e poucos líquidos. Tudo somado vira a barriga de fim de tarde." },
      { title: "Alimentos inflamatórios", body: "Ultraprocessados, refrigerante zero, embutidos e farinha branca são os principais vilões silenciosos." },
      { title: "O papel do sono e do estresse", body: "Cortisol alto = barriga inchada. Dormir mal sabota mais do que um doce no fim de semana." },
    ],
    checklist: [
      "Reduzi sal e ultraprocessados hoje",
      "Bebi pelo menos 2L de água",
      "Tomei chá digestivo (hortelã, gengibre ou erva-doce)",
      "Caminhei 15 minutos após uma refeição",
      "Dormi pelo menos 7 horas",
    ],
    extra: { kind: "protocol24h" },
    highlight: "Em 24h, sua barriga muda. Em 7 dias, todo mundo nota.",
  },
  {
    id: "energia-disposicao",
    index: 3,
    title: "Energia e Disposição",
    subtitle: "Acorde leve, viva ativa",
    emoji: "✨",
    accent: "from-rose-100/70 to-orange-100/60",
    intro: "Cansaço feminino raramente é só sono. É alimentação, hidratação, luz solar e ritmo.",
    sections: [
      { title: "Fadiga feminina", body: "Baixo ferro, baixa proteína e sono fragmentado são os 3 maiores ladrões de energia." },
      { title: "Comida que dá energia", body: "Ovos, frutas vermelhas, oleaginosas, água e luz natural pela manhã. Receita simples, efeito brutal." },
      { title: "Rotina matinal feminina", body: "Os primeiros 30 minutos definem o dia inteiro. Hidrate, alongue, coma proteína e respire fundo." },
    ],
    checklist: [
      "Tomei sol nos primeiros 60 min do dia",
      "Café da manhã com proteína",
      "2 pausas para respirar fundo durante o dia",
      "Movimento por pelo menos 20 minutos",
    ],
    extra: { kind: "morningRoutine" },
  },
  {
    id: "sono-recuperacao",
    index: 4,
    title: "Sono e Recuperação",
    subtitle: "Você emagrece dormindo",
    emoji: "🌙",
    accent: "from-violet-100/60 to-rose-100/60",
    intro: "Dormir mal engorda, incha e deixa a pele opaca. Cuidar do sono é cuidar da silhueta.",
    sections: [
      { title: "Cortisol e gordura abdominal", body: "Quando o cortisol fica alto à noite, o corpo estoca gordura na barriga. Relaxar é estratégia de emagrecimento." },
      { title: "Ritual noturno feminino", body: "Luz baixa, telas longe, chá calmante e uma intenção para amanhã. Simples, eficaz, premium." },
      { title: "O que comer à noite", body: "Refeições leves, sem açúcar e sem cafeína 6h antes de dormir." },
    ],
    checklist: [
      "Desliguei telas 30 min antes de dormir",
      "Tomei chá calmante (camomila, melissa, lavanda)",
      "Quarto escuro e fresco",
      "Anotei uma intenção para amanhã",
    ],
    extra: { kind: "nightRitual" },
  },
  {
    id: "hidratacao-inteligente",
    index: 5,
    title: "Hidratação Inteligente",
    subtitle: "Água é o segredo mais subestimado",
    emoji: "💧",
    accent: "from-sky-100/60 to-rose-100/60",
    intro: "Você não está com fome. Está com sede. 80% das mulheres vivem em desidratação leve crônica.",
    sections: [
      { title: "Água x retenção", body: "Quanto menos você bebe, mais seu corpo retém. A solução para inchaço é beber mais, não menos." },
      { title: "Quanto beber", body: "35ml por kg de peso. Distribuído ao longo do dia, não tudo de uma vez." },
      { title: "Águas saborizadas", body: "Limão, hortelã, gengibre, pepino. Tornam o hábito gostoso e ainda desincham." },
    ],
    checklist: [
      "Bebi 1 copo ao acordar",
      "Garrafa de água sempre por perto",
      "Cheguei aos 8 copos hoje",
      "Tomei uma água saborizada",
    ],
    extra: { kind: "hydration" },
  },
  {
    id: "hormonios",
    index: 6,
    title: "Hormônios e Corpo Feminino",
    subtitle: "Trabalhe a favor do seu ciclo",
    emoji: "🌷",
    accent: "from-rose-200/70 to-pink-100/60",
    intro: "Você não é a mesma todos os dias do mês — e tudo bem. Adaptar a rotina ao ciclo muda tudo.",
    sections: [
      { title: "TPM e compulsão", body: "Na fase lútea, a serotonina cai e o desejo por doce aumenta. Não é falta de força — é química." },
      { title: "Como atravessar a TPM", body: "Mais proteína, mais magnésio, mais sono, menos cobrança. Acolha o ciclo." },
      { title: "Retenção hormonal", body: "É temporária. Não é gordura. Não desista do plano por causa da balança nessa fase." },
    ],
    checklist: [
      "Marquei em que fase do ciclo estou",
      "Comi mais proteína nos dias de mais fome",
      "Não me cobrei pela retenção hormonal",
      "Fui gentil comigo mesma hoje",
    ],
    extra: { kind: "cycle" },
  },
  {
    id: "autoestima-mentalidade",
    index: 7,
    title: "Autoestima e Mentalidade",
    subtitle: "O corpo segue a mente",
    emoji: "👑",
    accent: "from-rose-100/70 to-amber-100/60",
    intro: "Nenhum plano funciona se a sua voz interna te sabota. Mudar o discurso interno é parte do processo.",
    sections: [
      { title: "Culpa alimentar", body: "Comer algo fora do plano não te define. O próximo movimento sim. Volte ao seu eixo com leveza." },
      { title: "Identidade x dieta", body: "Pare de fazer dieta. Comece a ser a mulher que se cuida. A identidade muda o comportamento, não o contrário." },
      { title: "Constância vence intensidade", body: "Não precisa ser perfeita. Precisa ser presente. 70% é mais do que suficiente para transformar." },
    ],
    checklist: [
      "Falei comigo mesma com gentileza hoje",
      "Não associei minha comida a culpa",
      "Escrevi 1 coisa que estou orgulhosa de mim",
      "Lembrei: estou virando a mulher que admiro",
    ],
    extra: { kind: "diary" },
  },
  {
    id: "transformacao-definitiva",
    index: 8,
    title: "Transformação Definitiva",
    subtitle: "Depois dos 21 dias",
    emoji: "🏆",
    accent: "from-amber-200/70 to-rose-200/70",
    intro: "Os 21 dias foram só o começo. Agora vem o estilo de vida — leve, sustentável, seu.",
    sections: [
      { title: "Manutenção real", body: "Não existe pós-dieta. Existe vida com consciência. Mantenha 3 hábitos não-negociáveis." },
      { title: "Recaídas fazem parte", body: "Cair não é falhar. Não voltar é. O plano premium permite quedas — e a volta sempre é possível." },
      { title: "O próximo ciclo", body: "Defina um próximo objetivo. Pode ser corpo, energia, sono, autoconfiança. Continuar é o segredo." },
    ],
    checklist: [
      "Tenho 3 hábitos não-negociáveis definidos",
      "Sei o que faço quando saio do plano",
      "Defini meu próximo objetivo",
      "Reconheço o quanto evoluí",
    ],
    extra: { kind: "future" },
    highlight: "Você chegou até aqui. Isso já te diferencia.",
  },
];

export function moduleUnlockRequirement(index: number) {
  return Math.max(0, (index - 1) * 2);
}

export function isModuleUnlocked(index: number, completedDays: number) {
  return completedDays >= moduleUnlockRequirement(index);
}
