import type { L10n } from "./app-data";

export type ModuleSection = {
  title: L10n<string>;
  body: L10n<string>;
};

export type ModuleChecklistItem = L10n<string>;

export type ModuleData = {
  id: string;
  index: number; // 1..8
  title: L10n<string>;
  subtitle: L10n<string>;
  emoji: string;
  accent: string; // tailwind gradient classes
  intro: L10n<string>;
  sections: ModuleSection[];
  checklist: ModuleChecklistItem[];
  highlight?: L10n<string>;
  extra?: { kind: "protocol24h" | "morningRoutine" | "nightRitual" | "hydration" | "cycle" | "diary" | "future" };
};

export const modulesData: ModuleData[] = [
  {
    id: "emagrecimento-feminino",
    index: 1,
    title: {
      es: "Adelgazamiento Femenino",
      pt: "Emagrecimento Feminino",
      en: "Feminine Weight Loss",
    },
    subtitle: {
      es: "Cómo tu cuerpo realmente adelgaza",
      pt: "Como o seu corpo realmente emagrece",
      en: "How your body really loses weight",
    },
    emoji: "🌸",
    accent: "from-rose-200/70 to-amber-100/60",
    intro: {
      es: "Antes de cualquier dieta, entiende cómo el cuerpo femenino realmente pierde peso — sin sufrimiento y sin restricción extrema.",
      pt: "Antes de qualquer dieta, entenda como o corpo feminino realmente emagrece — sem sofrimento e sem restrição extrema.",
      en: "Before any diet, understand how the female body really loses weight — without suffering and without extreme restriction.",
    },
    sections: [
      {
        title: {
          es: "Por qué las dietas fallan",
          pt: "Por que as dietas falham",
          en: "Why diets fail",
        },
        body: {
          es: "La restricción crea compulsión. Cuanto más prohíbes, más lo pide el cerebro. Adelgazar de forma femenina es constancia, no castigo.",
          pt: "A restrição cria compulsão. Quanto mais você proíbe, mais o cérebro pede. Emagrecer de forma feminina é constância, não punição.",
          en: "Restriction creates compulsion. The more you forbid, the more your brain craves it. Losing weight the feminine way is about consistency, not punishment.",
        },
      },
      {
        title: {
          es: "Metabolismo femenino",
          pt: "Metabolismo feminino",
          en: "Feminine metabolism",
        },
        body: {
          es: "Las hormonas oscilan a lo largo del mes. Aceptarlo es el primer paso para un plan que funcione de verdad.",
          pt: "Os hormônios oscilam ao longo do mês. Aceitar isso é o primeiro passo para um plano que realmente funciona.",
          en: "Hormones fluctuate throughout the month. Accepting this is the first step toward a plan that truly works.",
        },
      },
      {
        title: {
          es: "Saciedad real",
          pt: "Saciedade real",
          en: "Real satiety",
        },
        body: {
          es: "Proteína + fibra + grasa buena en cada comida. Ese es el trío que apaga el hambre emocional.",
          pt: "Proteína + fibra + gordura boa em cada refeição. Esse é o trio que apaga a fome emocional.",
          en: "Protein + fiber + healthy fat at every meal. That's the trio that shuts down emotional hunger.",
        },
      },
      {
        title: {
          es: "Hambre emocional vs. hambre física",
          pt: "Fome emocional vs. fome física",
          en: "Emotional hunger vs. physical hunger",
        },
        body: {
          es: "El hambre física llega poco a poco. El hambre emocional es repentina, específica y generalmente viene con culpa. Reconocerla ya es la mitad del camino.",
          pt: "A fome física chega aos poucos. A fome emocional é repentina, específica e geralmente vem acompanhada de culpa. Reconhecê-la já é metade do caminho.",
          en: "Physical hunger comes on gradually. Emotional hunger is sudden, specific, and usually comes with guilt. Recognizing it is already half the battle.",
        },
      },
      {
        title: {
          es: "Cómo crear constancia",
          pt: "Como criar constância",
          en: "How to build consistency",
        },
        body: {
          es: "Pequeños hábitos diarios valen más que semanas perfectas seguidas de recaídas. Enfócate en el 1 % cada día.",
          pt: "Pequenos hábitos diários valem mais do que semanas perfeitas seguidas de recaídas. Foque no 1% a cada dia.",
          en: "Small daily habits are worth more than perfect weeks followed by setbacks. Focus on 1% every day.",
        },
      },
    ],
    checklist: [
      {
        es: "Comí proteína en el desayuno",
        pt: "Comi proteína no café da manhã",
        en: "I had protein at breakfast",
      },
      {
        es: "Bebí agua al despertar",
        pt: "Bebi água ao acordar",
        en: "I drank water when I woke up",
      },
      {
        es: "Identifiqué si mi hambre era física o emocional",
        pt: "Identifiquei se minha fome era física ou emocional",
        en: "I identified whether my hunger was physical or emotional",
      },
      {
        es: "No me castigué por las elecciones del día",
        pt: "Não me puní pelas escolhas do dia",
        en: "I didn't punish myself for today's choices",
      },
    ],
  },
  {
    id: "barriga-desinchada",
    index: 2,
    title: {
      es: "Barriga Plana",
      pt: "Barriga Desinchada",
      en: "Flat Belly",
    },
    subtitle: {
      es: "Protocolo anti-hinchazón de 24 h",
      pt: "Protocolo anti-inchaço de 24 h",
      en: "24 h anti-bloating protocol",
    },
    emoji: "🤍",
    accent: "from-amber-100/70 to-rose-100/60",
    intro: {
      es: "La hinchazón no es grasa. En 24 horas puedes desinflar la barriga solo con pequeños ajustes.",
      pt: "O inchaço não é gordura. Em 24 horas você consegue desinflar a barriga com pequenos ajustes.",
      en: "Bloating is not fat. In 24 hours you can deflate your belly with just small adjustments.",
    },
    sections: [
      {
        title: {
          es: "Qué causa la retención",
          pt: "O que causa a retenção",
          en: "What causes retention",
        },
        body: {
          es: "Exceso de sodio, azúcar, mal sueño, estrés y pocos líquidos. Todo sumado se convierte en la barriga de fin de tarde.",
          pt: "Excesso de sódio, açúcar, sono ruim, estresse e poucos líquidos. Tudo isso junto vira a barriga do fim do dia.",
          en: "Excess sodium, sugar, poor sleep, stress, and too few liquids. All of that combined becomes the end-of-day belly.",
        },
      },
      {
        title: {
          es: "Alimentos inflamatorios",
          pt: "Alimentos inflamatórios",
          en: "Inflammatory foods",
        },
        body: {
          es: "Los ultraprocesados, el refresco light, los embutidos y la harina blanca son los principales villanos silenciosos.",
          pt: "Os ultraprocessados, o refrigerante diet, os embutidos e a farinha branca são os principais vilões silenciosos.",
          en: "Ultra-processed foods, diet sodas, deli meats, and white flour are the main silent culprits.",
        },
      },
      {
        title: {
          es: "El papel del sueño y el estrés",
          pt: "O papel do sono e do estresse",
          en: "The role of sleep and stress",
        },
        body: {
          es: "Cortisol alto = barriga hinchada. Dormir mal sabotea más que un dulce en el fin de semana.",
          pt: "Cortisol alto = barriga inchada. Dormir mal sabota mais do que um doce no fim de semana.",
          en: "High cortisol = bloated belly. Poor sleep sabotages more than a weekend sweet treat.",
        },
      },
    ],
    checklist: [
      {
        es: "Reduje la sal y los ultraprocesados hoy",
        pt: "Reduzi o sal e os ultraprocessados hoje",
        en: "I reduced salt and ultra-processed foods today",
      },
      {
        es: "Bebí al menos 2 L de agua",
        pt: "Bebi pelo menos 2 L de água",
        en: "I drank at least 2 L of water",
      },
      {
        es: "Tomé té digestivo (menta, jengibre o anís)",
        pt: "Tomei chá digestivo (hortelã, gengibre ou erva-doce)",
        en: "I had a digestive tea (peppermint, ginger, or anise)",
      },
      {
        es: "Caminé 15 minutos después de una comida",
        pt: "Caminhei 15 minutos após uma refeição",
        en: "I walked 15 minutes after a meal",
      },
      {
        es: "Dormí al menos 7 horas",
        pt: "Dormi pelo menos 7 horas",
        en: "I slept at least 7 hours",
      },
    ],
    extra: { kind: "protocol24h" },
    highlight: {
      es: "En 24 h, tu barriga cambia. En 7 días, todo el mundo lo nota.",
      pt: "Em 24 h, sua barriga muda. Em 7 dias, todo mundo nota.",
      en: "In 24 h, your belly changes. In 7 days, everyone notices.",
    },
  },
  {
    id: "energia-disposicao",
    index: 3,
    title: {
      es: "Energía y Vitalidad",
      pt: "Energia e Disposição",
      en: "Energy and Vitality",
    },
    subtitle: {
      es: "Despierta ligera, vive activa",
      pt: "Acorde leve, viva ativa",
      en: "Wake up light, live active",
    },
    emoji: "✨",
    accent: "from-rose-100/70 to-orange-100/60",
    intro: {
      es: "El cansancio femenino rara vez es solo sueño. Es alimentación, hidratación, luz solar y ritmo.",
      pt: "O cansaço feminino raramente é só sono. É alimentação, hidratação, luz solar e ritmo.",
      en: "Feminine fatigue is rarely just about sleep. It's nutrition, hydration, sunlight, and rhythm.",
    },
    sections: [
      {
        title: {
          es: "Fatiga femenina",
          pt: "Fadiga feminina",
          en: "Feminine fatigue",
        },
        body: {
          es: "Bajo hierro, baja proteína y sueño fragmentado son los 3 mayores ladrones de energía.",
          pt: "Ferro baixo, proteína insuficiente e sono fragmentado são os 3 maiores ladrões de energia.",
          en: "Low iron, low protein, and fragmented sleep are the 3 biggest energy thieves.",
        },
      },
      {
        title: {
          es: "Comida que da energía",
          pt: "Comida que dá energia",
          en: "Food that gives energy",
        },
        body: {
          es: "Huevos, frutos rojos, frutos secos, agua y luz natural por la mañana. Receta simple, efecto brutal.",
          pt: "Ovos, frutas vermelhas, oleaginosas, água e luz natural pela manhã. Receita simples, efeito poderoso.",
          en: "Eggs, berries, nuts, water, and natural morning light. Simple recipe, powerful effect.",
        },
      },
      {
        title: {
          es: "Rutina matutina femenina",
          pt: "Rotina matinal feminina",
          en: "Feminine morning routine",
        },
        body: {
          es: "Los primeros 30 minutos definen todo el día. Hidrata, estira, come proteína y respira profundo.",
          pt: "Os primeiros 30 minutos definem o dia inteiro. Hidrate-se, alongue, coma proteína e respire fundo.",
          en: "The first 30 minutes define the whole day. Hydrate, stretch, eat protein, and breathe deeply.",
        },
      },
    ],
    checklist: [
      {
        es: "Tomé sol en los primeros 60 min del día",
        pt: "Me expus ao sol nos primeiros 60 min do dia",
        en: "I got sunlight in the first 60 min of the day",
      },
      {
        es: "Desayuno con proteína",
        pt: "Café da manhã com proteína",
        en: "Breakfast with protein",
      },
      {
        es: "2 pausas para respirar profundo durante el día",
        pt: "2 pausas para respirar fundo durante o dia",
        en: "2 breaks to breathe deeply during the day",
      },
      {
        es: "Movimiento por al menos 20 minutos",
        pt: "Movimento por pelo menos 20 minutos",
        en: "Movement for at least 20 minutes",
      },
    ],
    extra: { kind: "morningRoutine" },
  },
  {
    id: "sono-recuperacao",
    index: 4,
    title: {
      es: "Sueño y Recuperación",
      pt: "Sono e Recuperação",
      en: "Sleep and Recovery",
    },
    subtitle: {
      es: "Adelgazas mientras duermes",
      pt: "Você emagrece enquanto dorme",
      en: "You lose weight while you sleep",
    },
    emoji: "🌙",
    accent: "from-violet-100/60 to-rose-100/60",
    intro: {
      es: "Dormir mal engorda, hincha y deja la piel opaca. Cuidar el sueño es cuidar la silueta.",
      pt: "Dormir mal engorda, incha e deixa a pele apagada. Cuidar do sono é cuidar da silhueta.",
      en: "Poor sleep causes weight gain, bloating, and dull skin. Taking care of your sleep is taking care of your figure.",
    },
    sections: [
      {
        title: {
          es: "Cortisol y grasa abdominal",
          pt: "Cortisol e gordura abdominal",
          en: "Cortisol and abdominal fat",
        },
        body: {
          es: "Cuando el cortisol se mantiene alto por la noche, el cuerpo almacena grasa en el abdomen. Relajarse es una estrategia para adelgazar.",
          pt: "Quando o cortisol permanece alto à noite, o corpo armazena gordura no abdômen. Relaxar é uma estratégia de emagrecimento.",
          en: "When cortisol stays high at night, the body stores fat in the abdomen. Relaxing is a weight-loss strategy.",
        },
      },
      {
        title: {
          es: "Ritual nocturno femenino",
          pt: "Ritual noturno feminino",
          en: "Feminine night ritual",
        },
        body: {
          es: "Luz tenue, pantallas lejos, té relajante e intención para mañana. Simple, eficaz, premium.",
          pt: "Luz baixa, telas longe, chá relaxante e intenção para amanhã. Simples, eficaz, premium.",
          en: "Dim light, screens away, calming tea, and intention for tomorrow. Simple, effective, premium.",
        },
      },
      {
        title: {
          es: "Qué comer de noche",
          pt: "O que comer à noite",
          en: "What to eat at night",
        },
        body: {
          es: "Comidas ligeras, sin azúcar y sin cafeína 6 h antes de dormir.",
          pt: "Refeições leves, sem açúcar e sem cafeína 6 h antes de dormir.",
          en: "Light meals, no sugar, and no caffeine 6 h before bed.",
        },
      },
    ],
    checklist: [
      {
        es: "Apagué las pantallas 30 min antes de dormir",
        pt: "Desliguei as telas 30 min antes de dormir",
        en: "I turned off screens 30 min before bed",
      },
      {
        es: "Tomé té relajante (manzanilla, melisa, lavanda)",
        pt: "Tomei chá relaxante (camomila, melissa, lavanda)",
        en: "I had a calming tea (chamomile, lemon balm, lavender)",
      },
      {
        es: "Habitación oscura y fresca",
        pt: "Quarto escuro e fresco",
        en: "Dark and cool room",
      },
      {
        es: "Anoté una intención para mañana",
        pt: "Anotei uma intenção para amanhã",
        en: "I wrote down an intention for tomorrow",
      },
    ],
    extra: { kind: "nightRitual" },
  },
  {
    id: "hidratacao-inteligente",
    index: 5,
    title: {
      es: "Hidratación Inteligente",
      pt: "Hidratação Inteligente",
      en: "Smart Hydration",
    },
    subtitle: {
      es: "El agua es el secreto más subestimado",
      pt: "A água é o segredo mais subestimado",
      en: "Water is the most underrated secret",
    },
    emoji: "💧",
    accent: "from-sky-100/60 to-rose-100/60",
    intro: {
      es: "No tienes hambre. Tienes sed. El 80 % de las mujeres viven en deshidratación leve crónica.",
      pt: "Você não está com fome. Está com sede. 80% das mulheres vivem em desidratação leve crônica.",
      en: "You're not hungry. You're thirsty. 80% of women live in chronic mild dehydration.",
    },
    sections: [
      {
        title: {
          es: "Agua vs. retención",
          pt: "Água vs. retenção",
          en: "Water vs. retention",
        },
        body: {
          es: "Cuanto menos bebes, más retiene tu cuerpo. La solución para la hinchazón es beber más, no menos.",
          pt: "Quanto menos você bebe, mais o seu corpo retém. A solução para o inchaço é beber mais, não menos.",
          en: "The less you drink, the more your body retains. The solution to bloating is drinking more, not less.",
        },
      },
      {
        title: {
          es: "Cuánto beber",
          pt: "Quanto beber",
          en: "How much to drink",
        },
        body: {
          es: "35 ml por kg de peso. Distribuido a lo largo del día, no todo de una vez.",
          pt: "35 ml por kg de peso. Distribuído ao longo do dia, não tudo de uma vez.",
          en: "35 ml per kg of body weight. Spread throughout the day, not all at once.",
        },
      },
      {
        title: {
          es: "Aguas saborizadas",
          pt: "Águas saborizadas",
          en: "Flavored waters",
        },
        body: {
          es: "Limón, menta, jengibre, pepino. Hacen el hábito agradable y además deshinchen.",
          pt: "Limão, hortelã, gengibre, pepino. Tornam o hábito gostoso e ainda desinflam.",
          en: "Lemon, mint, ginger, cucumber. They make the habit enjoyable and also reduce bloating.",
        },
      },
    ],
    checklist: [
      {
        es: "Bebí 1 vaso al despertar",
        pt: "Bebi 1 copo ao acordar",
        en: "I drank 1 glass when I woke up",
      },
      {
        es: "Botella de agua siempre cerca",
        pt: "Garrafa de água sempre perto",
        en: "Water bottle always nearby",
      },
      {
        es: "Llegué a los 8 vasos hoy",
        pt: "Cheguei a 8 copos hoje",
        en: "I reached 8 glasses today",
      },
      {
        es: "Tomé un agua saborizada",
        pt: "Tomei uma água saborizada",
        en: "I had a flavored water",
      },
    ],
    extra: { kind: "hydration" },
  },
  {
    id: "hormonios",
    index: 6,
    title: {
      es: "Hormonas y Cuerpo Femenino",
      pt: "Hormônios e Corpo Feminino",
      en: "Hormones and the Female Body",
    },
    subtitle: {
      es: "Trabaja a favor de tu ciclo",
      pt: "Trabalhe a favor do seu ciclo",
      en: "Work in favor of your cycle",
    },
    emoji: "🌷",
    accent: "from-rose-200/70 to-pink-100/60",
    intro: {
      es: "No eres la misma todos los días del mes — y está bien. Adaptar la rutina al ciclo lo cambia todo.",
      pt: "Você não é a mesma todos os dias do mês — e tudo bem. Adaptar a rotina ao ciclo muda tudo.",
      en: "You're not the same every day of the month — and that's okay. Adapting your routine to your cycle changes everything.",
    },
    sections: [
      {
        title: {
          es: "SPM y compulsión",
          pt: "TPM e compulsão",
          en: "PMS and cravings",
        },
        body: {
          es: "En la fase lútea, la serotonina baja y el deseo de dulce aumenta. No es falta de fuerza de voluntad — es química.",
          pt: "Na fase lútea, a serotonina cai e o desejo por doce aumenta. Não é falta de força de vontade — é química.",
          en: "In the luteal phase, serotonin drops and sugar cravings increase. It's not a lack of willpower — it's chemistry.",
        },
      },
      {
        title: {
          es: "Cómo atravesar el SPM",
          pt: "Como atravessar a TPM",
          en: "How to get through PMS",
        },
        body: {
          es: "Más proteína, más magnesio, más sueño, menos autoexigencia. Acoge el ciclo.",
          pt: "Mais proteína, mais magnésio, mais sono, menos autocobrança. Acolha o ciclo.",
          en: "More protein, more magnesium, more sleep, less self-demand. Embrace your cycle.",
        },
      },
      {
        title: {
          es: "Retención hormonal",
          pt: "Retenção hormonal",
          en: "Hormonal retention",
        },
        body: {
          es: "Es temporal. No es grasa. No abandones el plan por culpa de la báscula en esa fase.",
          pt: "É temporária. Não é gordura. Não abandone o plano por causa da balança nessa fase.",
          en: "It's temporary. It's not fat. Don't abandon the plan because of the scale in that phase.",
        },
      },
    ],
    checklist: [
      {
        es: "Marqué en qué fase del ciclo estoy",
        pt: "Marquei em qual fase do ciclo estou",
        en: "I noted which phase of my cycle I'm in",
      },
      {
        es: "Comí más proteína en los días de más hambre",
        pt: "Comi mais proteína nos dias de mais fome",
        en: "I ate more protein on hungrier days",
      },
      {
        es: "No me exigí por la retención hormonal",
        pt: "Não me cobrei pela retenção hormonal",
        en: "I didn't pressure myself about hormonal retention",
      },
      {
        es: "Fui gentil conmigo misma hoy",
        pt: "Fui gentil comigo mesma hoje",
        en: "I was gentle with myself today",
      },
    ],
    extra: { kind: "cycle" },
  },
  {
    id: "autoestima-mentalidade",
    index: 7,
    title: {
      es: "Autoestima y Mentalidad",
      pt: "Autoestima e Mentalidade",
      en: "Self-Esteem and Mindset",
    },
    subtitle: {
      es: "El cuerpo sigue a la mente",
      pt: "O corpo segue a mente",
      en: "The body follows the mind",
    },
    emoji: "👑",
    accent: "from-rose-100/70 to-amber-100/60",
    intro: {
      es: "Ningún plan funciona si tu voz interna te sabotea. Cambiar el diálogo interno es parte del proceso.",
      pt: "Nenhum plano funciona se a sua voz interna te sabota. Mudar o diálogo interno faz parte do processo.",
      en: "No plan works if your inner voice is sabotaging you. Changing your inner dialogue is part of the process.",
    },
    sections: [
      {
        title: {
          es: "Culpa alimentaria",
          pt: "Culpa alimentar",
          en: "Food guilt",
        },
        body: {
          es: "Comer algo fuera del plan no te define. El siguiente movimiento sí. Vuelve a tu centro con ligereza.",
          pt: "Comer algo fora do plano não te define. O próximo movimento sim. Volte ao seu centro com leveza.",
          en: "Eating something off-plan doesn't define you. Your next move does. Come back to your center with lightness.",
        },
      },
      {
        title: {
          es: "Identidad vs. dieta",
          pt: "Identidade vs. dieta",
          en: "Identity vs. diet",
        },
        body: {
          es: "Deja de hacer dieta. Empieza a ser la mujer que se cuida. La identidad cambia el comportamiento, no al revés.",
          pt: "Pare de fazer dieta. Comece a ser a mulher que se cuida. A identidade muda o comportamento, não o contrário.",
          en: "Stop dieting. Start being the woman who takes care of herself. Identity changes behavior, not the other way around.",
        },
      },
      {
        title: {
          es: "La constancia vence a la intensidad",
          pt: "A constância vence a intensidade",
          en: "Consistency beats intensity",
        },
        body: {
          es: "No necesitas ser perfecta. Necesitas estar presente. El 70 % es más que suficiente para transformar.",
          pt: "Você não precisa ser perfeita. Precisa estar presente. 70% é mais do que suficiente para transformar.",
          en: "You don't need to be perfect. You need to show up. 70% is more than enough to transform.",
        },
      },
    ],
    checklist: [
      {
        es: "Me hablé con gentileza hoy",
        pt: "Falei comigo mesma com gentileza hoje",
        en: "I spoke to myself with kindness today",
      },
      {
        es: "No asocié mi comida con culpa",
        pt: "Não associei minha comida à culpa",
        en: "I didn't associate my food with guilt",
      },
      {
        es: "Escribí 1 cosa de la que estoy orgullosa de mí",
        pt: "Escrevi 1 coisa da qual me orgulho em mim",
        en: "I wrote 1 thing I'm proud of about myself",
      },
      {
        es: "Recordé: me estoy convirtiendo en la mujer que admiro",
        pt: "Lembrei: estou me tornando a mulher que admiro",
        en: "I remembered: I'm becoming the woman I admire",
      },
    ],
    extra: { kind: "diary" },
  },
  {
    id: "transformacao-definitiva",
    index: 8,
    title: {
      es: "Transformación Definitiva",
      pt: "Transformação Definitiva",
      en: "Definitive Transformation",
    },
    subtitle: {
      es: "Después de los 21 días",
      pt: "Depois dos 21 dias",
      en: "After the 21 days",
    },
    emoji: "🏆",
    accent: "from-amber-200/70 to-rose-200/70",
    intro: {
      es: "Los 21 días fueron solo el comienzo. Ahora viene el estilo de vida — ligero, sostenible, tuyo.",
      pt: "Os 21 dias foram só o começo. Agora vem o estilo de vida — leve, sustentável, seu.",
      en: "The 21 days were just the beginning. Now comes the lifestyle — light, sustainable, yours.",
    },
    sections: [
      {
        title: {
          es: "Mantenimiento real",
          pt: "Manutenção real",
          en: "Real maintenance",
        },
        body: {
          es: "No existe el post-dieta. Existe la vida con consciencia. Mantén 3 hábitos innegociables.",
          pt: "Não existe pós-dieta. Existe a vida com consciência. Mantenha 3 hábitos inegociáveis.",
          en: "There's no post-diet. There's life with awareness. Keep 3 non-negotiable habits.",
        },
      },
      {
        title: {
          es: "Las recaídas son parte del camino",
          pt: "As recaídas fazem parte do caminho",
          en: "Setbacks are part of the journey",
        },
        body: {
          es: "Caer no es fallar. No volver sí. El plan permite caídas — y la vuelta siempre es posible.",
          pt: "Cair não é falhar. Não voltar sim. O plano permite tropeços — e o retorno é sempre possível.",
          en: "Falling is not failing. Not coming back is. The plan allows for stumbles — and returning is always possible.",
        },
      },
      {
        title: {
          es: "El próximo ciclo",
          pt: "O próximo ciclo",
          en: "The next cycle",
        },
        body: {
          es: "Define un nuevo objetivo. Puede ser cuerpo, energía, sueño, autoconfianza. Continuar es el secreto.",
          pt: "Defina um novo objetivo. Pode ser corpo, energia, sono, autoconfiança. Continuar é o segredo.",
          en: "Set a new goal. It can be body, energy, sleep, or self-confidence. Continuing is the secret.",
        },
      },
    ],
    checklist: [
      {
        es: "Tengo 3 hábitos innegociables definidos",
        pt: "Tenho 3 hábitos inegociáveis definidos",
        en: "I have 3 non-negotiable habits defined",
      },
      {
        es: "Sé qué hacer cuando me salgo del plan",
        pt: "Sei o que fazer quando saio do plano",
        en: "I know what to do when I go off-plan",
      },
      {
        es: "Definí mi próximo objetivo",
        pt: "Defini meu próximo objetivo",
        en: "I defined my next goal",
      },
      {
        es: "Reconozco cuánto he evolucionado",
        pt: "Reconheço o quanto evoluí",
        en: "I recognize how much I've grown",
      },
    ],
    extra: { kind: "future" },
    highlight: {
      es: "Llegaste hasta aquí. Eso ya te diferencia.",
      pt: "Você chegou até aqui. Isso já te diferencia.",
      en: "You made it this far. That already sets you apart.",
    },
  },
];

export function moduleUnlockRequirement(index: number) {
  return Math.max(0, (index - 1) * 2);
}

export function isModuleUnlocked(index: number, completedDays: number) {
  return completedDays >= moduleUnlockRequirement(index);
}
