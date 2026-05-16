import omelete from "@/assets/recipe-omelete.jpg";
import frango from "@/assets/recipe-frango.jpg";
import tilapia from "@/assets/recipe-tilapia.jpg";
import bowl from "@/assets/recipe-bowl.jpg";
import pizza from "@/assets/recipe-pizza.jpg";

export type Recipe = {
  id: string;
  name: string;
  category: string;
  image: string;
  time: string;
  difficulty: "Fácil" | "Médio" | "Avançado";
  satiety: number; // 1-5
  protein: string;
  calories?: string;
  bestTime: string;
  benefits: string[];
  feminineBenefits: string;
  ingredients: string[];
  steps: string[];
  videoId?: string;
};

export const categories = [
  "Todas",
  "Café da manhã proteico",
  "Almoço",
  "Jantar",
  "Anti-compulsão",
  "Secar barriga",
  "Rápidas",
  "Ansiedade",
  "Leves",
  "Noite",
];

export const recipes: Recipe[] = [
  {
    id: "omelete-anti-compulsao",
    name: "Omelete Anti-Compulsão",
    category: "Café da manhã proteico",
    image: omelete,
    time: "10 min",
    difficulty: "Fácil",
    satiety: 5,
    protein: "28g",
    calories: "320 kcal",
    bestTime: "Manhã ou lanche",
    benefits: ["Saciedade prolongada", "Reduz desejo por doce", "Energia estável"],
    feminineBenefits: "Equilibra hormônios e reduz inchaço matinal.",
    ingredients: [
      "3 ovos caipiras",
      "1 colher de queijo cottage",
      "Espinafre fresco",
      "Sal rosa e pimenta",
      "Azeite extra virgem",
    ],
    steps: [
      "Bata os ovos com sal e pimenta.",
      "Aqueça a frigideira com azeite.",
      "Adicione o espinafre por 30 segundos.",
      "Despeje os ovos e cubra com cottage.",
      "Dobre e sirva morno.",
    ],
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "frango-airfryer",
    name: "Frango Crocante na Airfryer",
    category: "Almoço",
    image: frango,
    time: "20 min",
    difficulty: "Fácil",
    satiety: 5,
    protein: "42g",
    calories: "380 kcal",
    bestTime: "Almoço",
    benefits: ["Alta proteína", "Baixa gordura", "Crocância sem fritura"],
    feminineBenefits: "Sustenta a tarde inteira e evita beliscar.",
    ingredients: [
      "200g de peito de frango em cubos",
      "1 ovo",
      "Farinha de amêndoas",
      "Páprica, alho, sal",
      "Limão",
    ],
    steps: [
      "Tempere o frango com limão e especiarias.",
      "Passe no ovo e depois na farinha.",
      "Airfryer 200°C por 12 min, virando na metade.",
      "Sirva com salada verde.",
    ],
  },
  {
    id: "tilapia-limao",
    name: "Tilápia com Limão",
    category: "Jantar",
    image: tilapia,
    time: "15 min",
    difficulty: "Fácil",
    satiety: 4,
    protein: "35g",
    calories: "260 kcal",
    bestTime: "Jantar leve",
    benefits: ["Digestão fácil", "Anti-inflamatório", "Leve à noite"],
    feminineBenefits: "Perfeito para noites em que você não quer pesar.",
    ingredients: ["1 filé de tilápia", "Suco de 1 limão", "Alecrim", "Azeite", "Sal"],
    steps: [
      "Marine o filé com limão e ervas por 10 min.",
      "Grelhe 4 min de cada lado.",
      "Finalize com azeite cru.",
    ],
  },
  {
    id: "bowl-proteico",
    name: "Bowl Proteico Feminino",
    category: "Almoço",
    image: bowl,
    time: "15 min",
    difficulty: "Fácil",
    satiety: 5,
    protein: "38g",
    calories: "420 kcal",
    bestTime: "Almoço pós-treino",
    benefits: ["Completo", "Rico em fibras", "Anti-compulsão"],
    feminineBenefits: "Refeição completa que evita a fome das 16h.",
    ingredients: [
      "150g frango grelhado",
      "2 ovos cozidos",
      "Folhas verdes",
      "Pasta de amendoim",
      "Azeite",
    ],
    steps: [
      "Monte a base com folhas.",
      "Adicione frango, ovos e pasta.",
      "Regue com azeite e finalize.",
    ],
  },
  {
    id: "pizza-proteica",
    name: "Pizza Proteica Low Carb",
    category: "Jantar",
    image: pizza,
    time: "25 min",
    difficulty: "Médio",
    satiety: 5,
    protein: "32g",
    calories: "410 kcal",
    bestTime: "Jantar de sexta",
    benefits: ["Mata a vontade", "Sem culpa", "Sem inchar"],
    feminineBenefits: "A receita coringa pra quando bate vontade de pizza.",
    ingredients: [
      "Massa de couve-flor",
      "Molho de tomate natural",
      "Mussarela de búfala",
      "Manjericão fresco",
    ],
    steps: [
      "Asse a massa por 8 min.",
      "Adicione molho, queijo e ervas.",
      "Volte ao forno por 10 min.",
    ],
  },
  {
    id: "ovos-cremosos",
    name: "Ovos Cremosos da Calma",
    category: "Ansiedade",
    image: omelete,
    time: "8 min",
    difficulty: "Fácil",
    satiety: 4,
    protein: "20g",
    bestTime: "Lanche da tarde",
    benefits: ["Reduz ansiedade", "Saciedade rápida"],
    feminineBenefits: "Resgate emocional em 8 minutos.",
    ingredients: ["3 ovos", "1 colher de manteiga ghee", "Sal rosa", "Cebolinha"],
    steps: ["Bata os ovos.", "Cozinhe em fogo baixo mexendo sempre.", "Finalize cremoso."],
  },
];

export const modules = [
  { id: "emagrecer", title: "Emagrecer Sem Sofrer", subtitle: "Os 5 pilares femininos", progress: 40 },
  { id: "compulsao", title: "Controle da Compulsão", subtitle: "Domine os gatilhos", progress: 20 },
  { id: "proteicas", title: "Receitas Proteicas", subtitle: "Saciedade real", progress: 60 },
  { id: "barriga", title: "Secar Barriga", subtitle: "Protocolo de 7 dias", progress: 10 },
  { id: "rapidas", title: "Receitas de 10 Minutos", subtitle: "Pra rotina corrida", progress: 0 },
  { id: "fora", title: "Comer Fora Sem Engordar", subtitle: "Guia prático", progress: 0 },
  { id: "ansiedade", title: "Ansiedade Alimentar", subtitle: "Acolhimento e técnica", progress: 30 },
  { id: "plano", title: "Plano de 21 Dias", subtitle: "Sua jornada completa", progress: 14 },
];

export const bonuses = [
  {
    id: "cardapio",
    title: "Cardápio Proteico de 21 Dias",
    subtitle: "Pronto pra imprimir",
    items: ["Café, almoço, jantar e lanche", "Lista de compras semanal", "Substituições inteligentes"],
  },
  {
    id: "guia",
    title: "Guia Anti-Compulsão Feminina",
    subtitle: "Por que você come emocional",
    items: ["Mapa dos gatilhos", "Roteiro 5-5-5", "Diário de emoções"],
  },
  {
    id: "10min",
    title: "Receitas de 10 Minutos",
    subtitle: "Pra dias impossíveis",
    items: ["20 receitas testadas", "Ingredientes do dia a dia", "Sem dificuldade"],
  },
  {
    id: "fora",
    title: "Como Comer Fora Sem Engordar",
    subtitle: "Restaurante, festa, viagem",
    items: ["O que pedir em cada lugar", "Drinks inteligentes", "Voltando ao plano sem culpa"],
  },
];

export const motivationalQuotes = [
  "Você não precisa sofrer para emagrecer.",
  "Comer bem é um ato de autocuidado.",
  "Cada refeição é uma escolha de amor próprio.",
  "Seu corpo te escuta. Fale com carinho.",
  "Hoje é mais um dia da sua transformação.",
  "Você está mais perto do que ontem.",
  "A constância te leva mais longe que a perfeição.",
];

export const planDays = Array.from({ length: 21 }, (_, i) => {
  const day = i + 1;
  return {
    day,
    title: day <= 7 ? "Semana da Adaptação" : day <= 14 ? "Semana da Transformação" : "Semana da Consolidação",
    breakfast: "Omelete Anti-Compulsão + chá verde",
    lunch: "Frango grelhado + salada + azeite",
    dinner: "Tilápia com limão + legumes no vapor",
    snack: "Iogurte natural + castanhas",
    quote: motivationalQuotes[i % motivationalQuotes.length],
  };
});
