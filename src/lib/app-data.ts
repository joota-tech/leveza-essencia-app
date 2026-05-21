import omelete from "@/assets/recipe-omelete.jpg";
import frango from "@/assets/recipe-frango.jpg";
import tilapia from "@/assets/recipe-tilapia.jpg";
import bowl from "@/assets/recipe-bowl.jpg";
import pizza from "@/assets/recipe-pizza.jpg";
import rOvosAbacate from "@/assets/r-ovos-abacate.jpg";
import rPanquecaBanana from "@/assets/r-panqueca-banana.jpg";
import rIogurteCastanhas from "@/assets/r-iogurte-castanhas.jpg";
import rTapiocaFrango from "@/assets/r-tapioca-frango.jpg";
import rCrepioca from "@/assets/r-crepioca.jpg";
import rVitaminaCacau from "@/assets/r-vitamina-cacau.jpg";
import rCarneAbobrinha from "@/assets/r-carne-abobrinha.jpg";
import rFilePure from "@/assets/r-file-pure.jpg";
import rStrogonoff from "@/assets/r-strogonoff.jpg";
import rSalmaoAspargos from "@/assets/r-salmao-aspargos.jpg";
import rAlmondegas from "@/assets/r-almondegas.jpg";
import rSopaFrango from "@/assets/r-sopa-frango.jpg";
import rHamburguerAlface from "@/assets/r-hamburguer-alface.jpg";
import rWrapFrango from "@/assets/r-wrap-frango.jpg";
import rOmeleteEspinafre from "@/assets/r-omelete-espinafre.jpg";
import rEspetinho from "@/assets/r-espetinho.jpg";
import rOvosCremosos from "@/assets/r-ovos-cremosos.jpg";
import rMixCastanhas from "@/assets/r-mix-castanhas.jpg";
import rIogurteFrutas from "@/assets/r-iogurte-frutas.jpg";
import rOvoTomate from "@/assets/r-ovo-tomate.jpg";
import rQueijoCoalho from "@/assets/r-queijo-coalho.jpg";
import rShakeCacau from "@/assets/r-shake-cacau.jpg";
import rMacaAmendoim from "@/assets/r-maca-amendoim.jpg";

export type Recipe = {
  id: string;
  name: string;
  category: string;
  image: string;
  time: string;
  difficulty: "Fácil" | "Médio" | "Avançado";
  satiety: number;
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
  "Lanche",
  "Anti-compulsão",
  "Secar barriga",
  "Rápidas",
  "Ansiedade",
  "Leves",
  "Noite",
];

// ---------- helper to keep recipe objects compact ----------
type R = Omit<Recipe, "image"> & { image: string };
const make = (r: R): Recipe => r;

export const recipes: Recipe[] = [
  // ============ CAFÉ DA MANHÃ ============
  make({
    id: "omelete-anti-compulsao",
    name: "Omelete Anti-Compulsão",
    category: "Café da manhã proteico",
    image: omelete,
    time: "10 min", difficulty: "Fácil", satiety: 5, protein: "28g", calories: "320 kcal",
    bestTime: "Manhã",
    benefits: ["Saciedade prolongada", "Reduz desejo por doce", "Energia estável"],
    feminineBenefits: "Equilibra hormônios e reduz inchaço matinal.",
    ingredients: ["3 ovos caipiras", "1 colher de queijo cottage", "Espinafre fresco", "Sal rosa e pimenta", "Azeite extra virgem"],
    steps: ["Bata os ovos com sal e pimenta.", "Aqueça a frigideira com azeite.", "Adicione o espinafre por 30 segundos.", "Despeje os ovos e cubra com cottage.", "Dobre e sirva morno."],
  }),
  make({
    id: "ovos-mexidos-abacate",
    name: "Ovos Mexidos com Abacate",
    category: "Café da manhã proteico",
    image: rOvosAbacate,
    time: "8 min", difficulty: "Fácil", satiety: 5, protein: "22g", calories: "340 kcal",
    bestTime: "Manhã",
    benefits: ["Gorduras boas", "Saciedade longa", "Energia limpa"],
    feminineBenefits: "Estabiliza o açúcar e evita o ataque de fome às 10h.",
    ingredients: ["3 ovos", "½ abacate", "Sal rosa", "Pimenta-do-reino", "Azeite"],
    steps: ["Aqueça o azeite em fogo baixo.", "Bata os ovos e leve à frigideira.", "Mexa devagar até ficar cremoso.", "Sirva com o abacate em fatias."],
  }),
  make({
    id: "panqueca-proteica-banana",
    name: "Panqueca Proteica de Banana",
    category: "Café da manhã proteico",
    image: rPanquecaBanana,
    time: "10 min", difficulty: "Fácil", satiety: 4, protein: "20g", calories: "300 kcal",
    bestTime: "Manhã ou pré-treino",
    benefits: ["Doce sem culpa", "Sem farinha branca", "Energia rápida"],
    feminineBenefits: "Mata a vontade de doce logo cedo, sem sair do plano.",
    ingredients: ["1 banana", "2 ovos", "1 colher de aveia", "Canela", "Pasta de amendoim"],
    steps: ["Amasse a banana com os ovos.", "Misture aveia e canela.", "Faça panquecas pequenas na frigideira.", "Finalize com pasta de amendoim."],
  }),
  make({
    id: "iogurte-grego-castanhas",
    name: "Iogurte Grego com Castanhas",
    category: "Café da manhã proteico",
    image: rIogurteCastanhas,
    time: "3 min", difficulty: "Fácil", satiety: 4, protein: "18g", calories: "260 kcal",
    bestTime: "Manhã rápida",
    benefits: ["Pronto em minutos", "Probiótico", "Saciedade real"],
    feminineBenefits: "Cuida do intestino e desincha rápido.",
    ingredients: ["1 pote de iogurte grego natural", "1 colher de castanhas picadas", "1 colher de chia", "Canela"],
    steps: ["Coloque o iogurte na tigela.", "Adicione chia e castanhas.", "Finalize com canela e sirva."],
  }),
  make({
    id: "tapioca-frango-queijo",
    name: "Tapioca de Frango e Queijo",
    category: "Café da manhã proteico",
    image: rTapiocaFrango,
    time: "12 min", difficulty: "Fácil", satiety: 5, protein: "30g", calories: "360 kcal",
    bestTime: "Manhã reforçada",
    benefits: ["Sem glúten", "Proteína alta", "Saciedade dupla"],
    feminineBenefits: "Café da manhã que sustenta até o almoço sem beliscar.",
    ingredients: ["3 colheres de goma de tapioca", "80g de frango desfiado", "1 fatia de queijo branco", "Orégano"],
    steps: ["Espalhe a goma na frigideira quente.", "Quando firmar, vire.", "Recheie com frango e queijo.", "Dobre e sirva."],
  }),
  make({
    id: "crepioca-queijo",
    name: "Crepioca de Queijo",
    category: "Café da manhã proteico",
    image: rCrepioca,
    time: "8 min", difficulty: "Fácil", satiety: 4, protein: "22g", calories: "280 kcal",
    bestTime: "Manhã",
    benefits: ["Pronta em minutos", "Versátil", "Proteica"],
    feminineBenefits: "A queridinha do desafio: prática, leve e saborosa.",
    ingredients: ["2 ovos", "2 colheres de goma de tapioca", "1 fatia de queijo branco", "Sal"],
    steps: ["Misture ovos, tapioca e sal.", "Despeje na frigideira antiaderente.", "Coloque o queijo e dobre.", "Sirva quente."],
  }),
  make({
    id: "vitamina-whey-amendoim",
    name: "Vitamina Proteica de Cacau",
    category: "Café da manhã proteico",
    image: rVitaminaCacau,
    time: "3 min", difficulty: "Fácil", satiety: 4, protein: "30g", calories: "320 kcal",
    bestTime: "Manhã ou pós-treino",
    benefits: ["Rica em proteína", "Mata vontade de doce", "Energia limpa"],
    feminineBenefits: "Café com cara de sobremesa — sem culpa.",
    ingredients: ["1 scoop de whey", "200ml de leite vegetal", "1 colher de cacau", "1 colher de pasta de amendoim", "Gelo"],
    steps: ["Bata tudo no liquidificador.", "Sirva imediatamente."],
  }),

  // ============ ALMOÇO ============
  make({
    id: "frango-airfryer",
    name: "Frango Crocante na Airfryer",
    category: "Almoço",
    image: frango,
    time: "20 min", difficulty: "Fácil", satiety: 5, protein: "42g", calories: "380 kcal",
    bestTime: "Almoço",
    benefits: ["Alta proteína", "Baixa gordura", "Crocância sem fritura"],
    feminineBenefits: "Sustenta a tarde inteira e evita beliscar.",
    ingredients: ["200g de peito de frango em cubos", "1 ovo", "Farinha de amêndoas", "Páprica, alho, sal", "Limão"],
    steps: ["Tempere o frango com limão e especiarias.", "Passe no ovo e depois na farinha.", "Airfryer 200°C por 12 min, virando na metade.", "Sirva com salada verde."],
  }),
  make({
    id: "bowl-proteico",
    name: "Bowl Proteico Feminino",
    category: "Almoço",
    image: bowl,
    time: "15 min", difficulty: "Fácil", satiety: 5, protein: "38g", calories: "420 kcal",
    bestTime: "Almoço pós-treino",
    benefits: ["Completo", "Rico em fibras", "Anti-compulsão"],
    feminineBenefits: "Refeição completa que evita a fome das 16h.",
    ingredients: ["150g frango grelhado", "2 ovos cozidos", "Folhas verdes", "Pasta de amendoim", "Azeite"],
    steps: ["Monte a base com folhas.", "Adicione frango, ovos e pasta.", "Regue com azeite e finalize."],
  }),
  make({
    id: "carne-moida-abobrinha",
    name: "Carne Moída com Abobrinha",
    category: "Almoço",
    image: rCarneAbobrinha,
    time: "20 min", difficulty: "Fácil", satiety: 5, protein: "36g", calories: "390 kcal",
    bestTime: "Almoço",
    benefits: ["Rica em ferro", "Saciante", "Baixo carbo"],
    feminineBenefits: "Repõe ferro e combate cansaço típico do ciclo.",
    ingredients: ["200g de patinho moído", "1 abobrinha em cubos", "1 tomate", "Cebola, alho", "Azeite e sal"],
    steps: ["Refogue cebola e alho.", "Adicione a carne até dourar.", "Junte abobrinha e tomate.", "Cozinhe por 10 min e sirva."],
  }),
  make({
    id: "file-mignon-pure-couveflor",
    name: "Filé Mignon com Purê de Couve-flor",
    category: "Almoço",
    image: rFilePure,
    time: "25 min", difficulty: "Médio", satiety: 5, protein: "44g", calories: "450 kcal",
    bestTime: "Almoço especial",
    benefits: ["Premium", "Baixo carbo", "Muito saciante"],
    feminineBenefits: "Almoço de domingo sem sair do plano.",
    ingredients: ["200g filé mignon em medalhão", "½ couve-flor", "1 colher de manteiga ghee", "Sal, pimenta, alecrim"],
    steps: ["Cozinhe a couve-flor e processe com ghee.", "Sele o filé 3 min de cada lado.", "Tempere com sal e alecrim.", "Sirva sobre o purê."],
  }),
  make({
    id: "strogonoff-fit-frango",
    name: "Strogonoff Fit de Frango",
    category: "Almoço",
    image: rStrogonoff,
    time: "20 min", difficulty: "Fácil", satiety: 5, protein: "40g", calories: "410 kcal",
    bestTime: "Almoço",
    benefits: ["Cremoso sem culpa", "Proteico", "Saboroso"],
    feminineBenefits: "Versão fit do clássico para matar a vontade.",
    ingredients: ["200g de peito de frango em tiras", "100g de iogurte natural", "1 colher de extrato de tomate", "Cebola, alho, mostarda", "Champignon"],
    steps: ["Doure o frango com cebola e alho.", "Adicione tomate e mostarda.", "Junte champignon e iogurte fora do fogo.", "Sirva com arroz de couve-flor."],
  }),
  make({
    id: "salmao-grelhado-aspargos",
    name: "Salmão Grelhado com Aspargos",
    category: "Almoço",
    image: rSalmaoAspargos,
    time: "18 min", difficulty: "Fácil", satiety: 5, protein: "40g", calories: "430 kcal",
    bestTime: "Almoço",
    benefits: ["Ômega-3", "Anti-inflamatório", "Pele e cabelo"],
    feminineBenefits: "Hormônios em equilíbrio e pele radiante.",
    ingredients: ["1 posta de salmão", "Aspargos frescos", "Limão", "Azeite", "Sal e ervas"],
    steps: ["Tempere o salmão com limão e ervas.", "Grelhe 4 min de cada lado.", "Salteie os aspargos no azeite.", "Sirva juntos."],
  }),
  make({
    id: "almondegas-molho-tomate",
    name: "Almôndegas ao Molho de Tomate",
    category: "Almoço",
    image: rAlmondegas,
    time: "30 min", difficulty: "Médio", satiety: 5, protein: "38g", calories: "400 kcal",
    bestTime: "Almoço",
    benefits: ["Comfort food fit", "Proteico", "Saciante"],
    feminineBenefits: "O gostinho de casa, sem pesar.",
    ingredients: ["250g de carne moída", "1 ovo", "Farinha de amêndoas", "Molho de tomate natural", "Manjericão"],
    steps: ["Misture carne, ovo e farinha e modele.", "Doure as almôndegas.", "Adicione o molho e cozinhe 15 min.", "Finalize com manjericão."],
  }),

  // ============ JANTAR ============
  make({
    id: "tilapia-limao",
    name: "Tilápia com Limão",
    category: "Jantar",
    image: tilapia,
    time: "15 min", difficulty: "Fácil", satiety: 4, protein: "35g", calories: "260 kcal",
    bestTime: "Jantar leve",
    benefits: ["Digestão fácil", "Anti-inflamatório", "Leve à noite"],
    feminineBenefits: "Perfeito para noites em que você não quer pesar.",
    ingredients: ["1 filé de tilápia", "Suco de 1 limão", "Alecrim", "Azeite", "Sal"],
    steps: ["Marine o filé com limão e ervas por 10 min.", "Grelhe 4 min de cada lado.", "Finalize com azeite cru."],
  }),
  make({
    id: "pizza-proteica",
    name: "Pizza Proteica Low Carb",
    category: "Jantar",
    image: pizza,
    time: "25 min", difficulty: "Médio", satiety: 5, protein: "32g", calories: "410 kcal",
    bestTime: "Jantar de sexta",
    benefits: ["Mata a vontade", "Sem culpa", "Sem inchar"],
    feminineBenefits: "A receita coringa pra quando bate vontade de pizza.",
    ingredients: ["Massa de couve-flor", "Molho de tomate natural", "Mussarela de búfala", "Manjericão fresco"],
    steps: ["Asse a massa por 8 min.", "Adicione molho, queijo e ervas.", "Volte ao forno por 10 min."],
  }),
  make({
    id: "sopa-frango-legumes",
    name: "Sopa de Frango com Legumes",
    category: "Jantar",
    image: rSopaFrango,
    time: "30 min", difficulty: "Fácil", satiety: 5, protein: "32g", calories: "280 kcal",
    bestTime: "Jantar quentinho",
    benefits: ["Acolhedora", "Desincha", "Hidratante"],
    feminineBenefits: "Conforto líquido para fechar bem o dia.",
    ingredients: ["150g de frango desfiado", "Cenoura, abobrinha, chuchu", "Cebola, alho", "Caldo caseiro", "Salsinha"],
    steps: ["Refogue cebola e alho.", "Junte o frango e os legumes.", "Cubra com caldo e cozinhe 20 min.", "Finalize com salsinha."],
  }),
  make({
    id: "hamburguer-caseiro-alface",
    name: "Hambúrguer Caseiro no Alface",
    category: "Jantar",
    image: rHamburguerAlface,
    time: "15 min", difficulty: "Fácil", satiety: 5, protein: "36g", calories: "360 kcal",
    bestTime: "Jantar matador",
    benefits: ["Sem pão", "Suculento", "Proteico"],
    feminineBenefits: "Mata vontade de hambúrguer sem sair do plano.",
    ingredients: ["200g de carne moída", "Alface americana", "Tomate", "Cebola roxa", "Mostarda dijon"],
    steps: ["Modele o hambúrguer e tempere.", "Grelhe na frigideira 4 min cada lado.", "Monte com alface no lugar do pão.", "Adicione tomate, cebola e mostarda."],
  }),
  make({
    id: "wrap-low-carb-frango",
    name: "Wrap Low Carb de Frango",
    category: "Jantar",
    image: rWrapFrango,
    time: "12 min", difficulty: "Fácil", satiety: 4, protein: "30g", calories: "320 kcal",
    bestTime: "Jantar leve",
    benefits: ["Prático", "Sem farinha", "Proteico"],
    feminineBenefits: "Crepioca como wrap: leveza e sabor numa mordida.",
    ingredients: ["1 crepioca fina", "100g de frango desfiado", "Cream cheese light", "Alface e tomate"],
    steps: ["Faça a crepioca bem fina.", "Espalhe cream cheese.", "Recheie com frango e folhas.", "Enrole e sirva."],
  }),
  make({
    id: "omelete-recheada-jantar",
    name: "Omelete Recheada de Espinafre",
    category: "Jantar",
    image: rOmeleteEspinafre,
    time: "10 min", difficulty: "Fácil", satiety: 4, protein: "26g", calories: "290 kcal",
    bestTime: "Jantar leve",
    benefits: ["Leve", "Digestão fácil", "Proteica"],
    feminineBenefits: "Quando o dia foi pesado, ela resolve em 10 min.",
    ingredients: ["3 ovos", "Espinafre", "Queijo branco", "Tomate cereja", "Azeite"],
    steps: ["Refogue rapidamente o espinafre.", "Bata os ovos e despeje na frigideira.", "Adicione queijo e tomate.", "Dobre e sirva."],
  }),
  make({
    id: "espetinho-carne-legumes",
    name: "Espetinho de Carne e Legumes",
    category: "Jantar",
    image: rEspetinho,
    time: "20 min", difficulty: "Fácil", satiety: 5, protein: "38g", calories: "370 kcal",
    bestTime: "Jantar especial",
    benefits: ["Festivo", "Equilibrado", "Saciante"],
    feminineBenefits: "Sextou fit sem perder o brilho.",
    ingredients: ["200g de alcatra em cubos", "Cebola, pimentão, abobrinha", "Sal e pimenta", "Azeite", "Alecrim"],
    steps: ["Intercale carne e legumes no espeto.", "Tempere e regue com azeite.", "Grelhe 12 min girando.", "Sirva quente."],
  }),

  // ============ LANCHE ============
  make({
    id: "ovos-cremosos",
    name: "Ovos Cremosos da Calma",
    category: "Lanche",
    image: rOvosCremosos,
    time: "8 min", difficulty: "Fácil", satiety: 4, protein: "20g",
    bestTime: "Lanche da tarde",
    benefits: ["Reduz ansiedade", "Saciedade rápida"],
    feminineBenefits: "Resgate emocional em 8 minutos.",
    ingredients: ["3 ovos", "1 colher de manteiga ghee", "Sal rosa", "Cebolinha"],
    steps: ["Bata os ovos.", "Cozinhe em fogo baixo mexendo sempre.", "Finalize cremoso."],
  }),
  make({
    id: "mix-castanhas-cacau",
    name: "Mix de Castanhas com Cacau",
    category: "Lanche",
    image: rMixCastanhas,
    time: "1 min", difficulty: "Fácil", satiety: 3, protein: "8g", calories: "180 kcal",
    bestTime: "Lanche rápido",
    benefits: ["Energia limpa", "Mata vontade de doce", "Prático"],
    feminineBenefits: "O snack de bolsa para emergências doces.",
    ingredients: ["20g castanha do Pará", "10g amêndoas", "1 colher de nibs de cacau"],
    steps: ["Misture tudo em um potinho.", "Sirva."],
  }),
  make({
    id: "iogurte-frutas-vermelhas",
    name: "Iogurte com Frutas Vermelhas",
    category: "Lanche",
    image: rIogurteFrutas,
    time: "3 min", difficulty: "Fácil", satiety: 3, protein: "15g", calories: "200 kcal",
    bestTime: "Lanche da tarde",
    benefits: ["Antioxidante", "Probiótico", "Refrescante"],
    feminineBenefits: "Antioxidantes para pele e bom humor.",
    ingredients: ["1 pote iogurte grego natural", "½ xícara de frutas vermelhas", "1 colher de chia"],
    steps: ["Coloque iogurte na tigela.", "Adicione frutas e chia.", "Sirva gelado."],
  }),
  make({
    id: "ovo-cozido-tomate",
    name: "Ovo Cozido com Tomate",
    category: "Lanche",
    image: rOvoTomate,
    time: "10 min", difficulty: "Fácil", satiety: 3, protein: "12g", calories: "150 kcal",
    bestTime: "Lanche prático",
    benefits: ["Simples", "Saciante", "Barato"],
    feminineBenefits: "Lanche curinga para os dias corridos.",
    ingredients: ["2 ovos", "1 tomate", "Sal rosa", "Azeite"],
    steps: ["Cozinhe os ovos por 8 min.", "Corte com o tomate.", "Tempere e sirva."],
  }),
  make({
    id: "queijo-coalho-airfryer",
    name: "Queijo Coalho na Airfryer",
    category: "Lanche",
    image: rQueijoCoalho,
    time: "8 min", difficulty: "Fácil", satiety: 4, protein: "18g", calories: "240 kcal",
    bestTime: "Lanche da tarde",
    benefits: ["Crocante", "Proteico", "Sem fritura"],
    feminineBenefits: "Sensação de petisco sem culpa.",
    ingredients: ["120g de queijo coalho em cubos", "Orégano", "Azeite"],
    steps: ["Tempere o queijo com orégano.", "Airfryer 200°C por 6 min.", "Sirva quente."],
  }),
  make({
    id: "shake-proteico-cacau",
    name: "Shake Proteico de Cacau",
    category: "Lanche",
    image: rShakeCacau,
    time: "3 min", difficulty: "Fácil", satiety: 4, protein: "28g", calories: "260 kcal",
    bestTime: "Lanche pós-treino",
    benefits: ["Sobremesa fit", "Recupera músculos", "Mata vontade de doce"],
    feminineBenefits: "Aquele 'doce de cinco da tarde' resolvido em 3 minutos.",
    ingredients: ["1 scoop de whey", "200ml de leite vegetal", "1 colher de cacau", "Gelo"],
    steps: ["Bata tudo no liquidificador.", "Sirva imediatamente."],
  }),
  make({
    id: "pasta-amendoim-maca",
    name: "Maçã com Pasta de Amendoim",
    category: "Lanche",
    image: rMacaAmendoim,
    time: "2 min", difficulty: "Fácil", satiety: 3, protein: "8g", calories: "210 kcal",
    bestTime: "Lanche da tarde",
    benefits: ["Doce natural", "Energia", "Saciante"],
    feminineBenefits: "Combinação que mata vontade de doce e dá disposição.",
    ingredients: ["1 maçã", "1 colher de pasta de amendoim integral", "Canela"],
    steps: ["Corte a maçã em fatias.", "Sirva com pasta de amendoim e canela."],
  }),
];

// ---------- planDays referencing recipe ids ----------
const B = ["omelete-anti-compulsao","ovos-mexidos-abacate","panqueca-proteica-banana","iogurte-grego-castanhas","tapioca-frango-queijo","crepioca-queijo","vitamina-whey-amendoim"];
const L = ["frango-airfryer","bowl-proteico","carne-moida-abobrinha","file-mignon-pure-couveflor","strogonoff-fit-frango","salmao-grelhado-aspargos","almondegas-molho-tomate"];
const S = ["mix-castanhas-cacau","iogurte-frutas-vermelhas","ovo-cozido-tomate","queijo-coalho-airfryer","shake-proteico-cacau","pasta-amendoim-maca","ovos-cremosos"];
const D = ["tilapia-limao","sopa-frango-legumes","hamburguer-caseiro-alface","wrap-low-carb-frango","omelete-recheada-jantar","espetinho-carne-legumes","pizza-proteica"];

const getRecipe = (id: string) => recipes.find((r) => r.id === id)!;

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

export const bonuses: Array<{
  id: string;
  title: string;
  subtitle: string;
  items: string[];
  pdf?: string;
  filename?: string;
}> = [
  { id: "cardapio", title: "Cardápio Proteico de 21 Dias", subtitle: "Pronto pra imprimir", items: ["Café, almoço, jantar e lanche", "Lista de compras semanal", "Substituições inteligentes"], pdf: "/bonus/menu-proteico-21-dias.pdf", filename: "Menu-Proteico-de-21-Dias.pdf" },
  { id: "guia", title: "Guia Anti-Compulsão Feminina", subtitle: "Por que você come emocional", items: ["Mapa dos gatilhos", "Roteiro 5-5-5", "Diário de emoções"], pdf: "/bonus/guia-anti-compulsao-feminina.pdf", filename: "Guia-Anti-Compulsao-Feminina.pdf" },
  { id: "10min", title: "Receitas de 10 Minutos", subtitle: "Pra dias impossíveis", items: ["20 receitas testadas", "Ingredientes do dia a dia", "Sem dificuldade"] },
  { id: "fora", title: "Como Comer Fora Sem Engordar", subtitle: "Restaurante, festa, viagem", items: ["O que pedir em cada lugar", "Drinks inteligentes", "Voltando ao plano sem culpa"] },
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

export type PlanMeal = { recipeId: string; name: string };
export type PlanDay = {
  day: number;
  title: string;
  breakfast: PlanMeal;
  lunch: PlanMeal;
  snack: PlanMeal;
  dinner: PlanMeal;
  quote: string;
};

export const planDays: PlanDay[] = Array.from({ length: 21 }, (_, i) => {
  const day = i + 1;
  const idx = i % 7;
  const bId = B[idx], lId = L[idx], sId = S[idx], dId = D[idx];
  return {
    day,
    title: day <= 7 ? "Semana da Adaptação" : day <= 14 ? "Semana da Transformação" : "Semana da Consolidação",
    breakfast: { recipeId: bId, name: getRecipe(bId).name },
    lunch: { recipeId: lId, name: getRecipe(lId).name },
    snack: { recipeId: sId, name: getRecipe(sId).name },
    dinner: { recipeId: dId, name: getRecipe(dId).name },
    quote: motivationalQuotes[i % motivationalQuotes.length],
  };
});
