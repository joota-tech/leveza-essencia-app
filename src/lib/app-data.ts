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

import type { Locale } from "./i18n-dict";
export type L10n<T = string> = { es: T; pt: T; en: T };
export const L = <T,>(v: L10n<T>, locale: Locale): T => v[locale];

export type Recipe = {
  id: string;
  name: L10n<string>;
  category: string;
  image: string;
  time: string;
  difficulty: "easy" | "medium" | "advanced";
  satiety: number;
  protein: string;
  calories?: string;
  bestTime: L10n<string>;
  benefits: L10n<string[]>;
  feminineBenefits: L10n<string>;
  ingredients: L10n<string[]>;
  steps: L10n<string[]>;
  videoId?: string;
};

export const categories: { id: string; label: L10n<string> }[] = [
  { id: "all",        label: { es: "Todas",               pt: "Todas",                    en: "All" } },
  { id: "breakfast",  label: { es: "Desayuno proteico",   pt: "Café da manhã proteico",   en: "Protein Breakfast" } },
  { id: "lunch",      label: { es: "Almuerzo",            pt: "Almoço",                   en: "Lunch" } },
  { id: "dinner",     label: { es: "Cena",                pt: "Jantar",                   en: "Dinner" } },
  { id: "snack",      label: { es: "Merienda",            pt: "Lanche",                   en: "Snack" } },
  { id: "anti-binge", label: { es: "Anti-compulsión",     pt: "Anti-compulsão",           en: "Anti-Binge" } },
  { id: "belly",      label: { es: "Quemar barriga",      pt: "Queimar barriga",          en: "Belly Burner" } },
  { id: "quick",      label: { es: "Rápidas",             pt: "Rápidas",                  en: "Quick" } },
  { id: "anxiety",    label: { es: "Ansiedad",            pt: "Ansiedade",                en: "Anxiety" } },
  { id: "light",      label: { es: "Ligeras",             pt: "Leves",                    en: "Light" } },
  { id: "night",      label: { es: "Noche",               pt: "Noite",                    en: "Night" } },
];

// ---------- helper to keep recipe objects compact ----------
type R = Omit<Recipe, "image"> & { image: string };
const make = (r: R): Recipe => r;

export const recipes: Recipe[] = [
  // ============ BREAKFAST ============
  make({
    id: "omelete-anti-compulsao",
    name: {
      es: "Tortilla Anti-Compulsión",
      pt: "Omelete Anti-Compulsão",
      en: "Anti-Binge Omelette",
    },
    category: "breakfast",
    image: omelete,
    time: "10 min", difficulty: "easy", satiety: 5, protein: "28g", calories: "320 kcal",
    bestTime: { es: "Mañana", pt: "Manhã", en: "Morning" },
    benefits: {
      es: ["Saciedad prolongada", "Reduce el deseo de dulce", "Energía estable"],
      pt: ["Saciedade prolongada", "Reduz o desejo de doce", "Energia estável"],
      en: ["Long-lasting fullness", "Reduces sugar cravings", "Steady energy"],
    },
    feminineBenefits: {
      es: "Equilibra las hormonas y reduce la hinchazón matutina.",
      pt: "Equilibra os hormônios e reduz o inchaço matinal.",
      en: "Balances your hormones and reduces morning bloating.",
    },
    ingredients: {
      es: ["3 huevos de campo", "1 cucharada de queso cottage", "Espinaca fresca", "Sal rosa y pimienta", "Aceite de oliva extra virgen"],
      pt: ["3 ovos caipiras", "1 colher de sopa de cottage", "Espinafre fresco", "Sal rosa e pimenta", "Azeite de oliva extravirgem"],
      en: ["3 free-range eggs", "1 tbsp cottage cheese", "Fresh spinach", "Pink salt and pepper", "Extra-virgin olive oil"],
    },
    steps: {
      es: ["Bate los huevos con sal y pimienta.", "Calienta la sartén con aceite de oliva.", "Agrega la espinaca por 30 segundos.", "Vierte los huevos y cubre con cottage.", "Dobla y sirve tibio."],
      pt: ["Bata os ovos com sal e pimenta.", "Aqueça a frigideira com azeite.", "Adicione o espinafre por 30 segundos.", "Despeje os ovos e cubra com cottage.", "Dobre e sirva morno."],
      en: ["Beat the eggs with salt and pepper.", "Heat the pan with olive oil.", "Add the spinach for 30 seconds.", "Pour in the eggs and top with cottage cheese.", "Fold and serve warm."],
    },
  }),
  make({
    id: "ovos-mexidos-abacate",
    name: {
      es: "Huevos Revueltos con Aguacate",
      pt: "Ovos Mexidos com Abacate",
      en: "Scrambled Eggs with Avocado",
    },
    category: "breakfast",
    image: rOvosAbacate,
    time: "8 min", difficulty: "easy", satiety: 5, protein: "22g", calories: "340 kcal",
    bestTime: { es: "Mañana", pt: "Manhã", en: "Morning" },
    benefits: {
      es: ["Grasas buenas", "Saciedad larga", "Energía limpia"],
      pt: ["Gorduras boas", "Saciedade duradoura", "Energia limpa"],
      en: ["Healthy fats", "Long-lasting fullness", "Clean energy"],
    },
    feminineBenefits: {
      es: "Estabiliza el azúcar y evita el ataque de hambre a las 10 h.",
      pt: "Estabiliza o açúcar no sangue e evita a fome das 10 h.",
      en: "Stabilises your blood sugar and keeps mid-morning hunger at bay.",
    },
    ingredients: {
      es: ["3 huevos", "½ aguacate", "Sal rosa", "Pimienta negra", "Aceite de oliva"],
      pt: ["3 ovos", "½ abacate", "Sal rosa", "Pimenta-do-reino", "Azeite de oliva"],
      en: ["3 eggs", "½ avocado", "Pink salt", "Black pepper", "Olive oil"],
    },
    steps: {
      es: ["Calienta el aceite a fuego bajo.", "Bate los huevos y ponlos en la sartén.", "Revuelve despacio hasta que queden cremosos.", "Sirve con el aguacate en rodajas."],
      pt: ["Aqueça o azeite em fogo baixo.", "Bata os ovos e coloque na frigideira.", "Mexa devagar até ficarem cremosos.", "Sirva com o abacate em fatias."],
      en: ["Heat the oil over low heat.", "Beat the eggs and pour into the pan.", "Stir slowly until creamy.", "Serve with sliced avocado."],
    },
  }),
  make({
    id: "panqueca-proteica-banana",
    name: {
      es: "Panqueque Proteico de Plátano",
      pt: "Panqueca Proteica de Banana",
      en: "Banana Protein Pancake",
    },
    category: "breakfast",
    image: rPanquecaBanana,
    time: "10 min", difficulty: "easy", satiety: 4, protein: "20g", calories: "300 kcal",
    bestTime: { es: "Mañana o pre-entrenamiento", pt: "Manhã ou pré-treino", en: "Morning or pre-workout" },
    benefits: {
      es: ["Dulce sin culpa", "Sin harina blanca", "Energía rápida"],
      pt: ["Doce sem culpa", "Sem farinha branca", "Energia rápida"],
      en: ["Sweet without guilt", "No white flour", "Quick energy"],
    },
    feminineBenefits: {
      es: "Calma el antojo de dulce desde temprano, sin salirte del plan.",
      pt: "Acalma o desejo de doce logo cedo, sem sair do plano.",
      en: "Curbs your sweet tooth first thing, keeping you on track.",
    },
    ingredients: {
      es: ["1 plátano", "2 huevos", "1 cucharada de avena", "Canela", "Crema de cacahuate"],
      pt: ["1 banana", "2 ovos", "1 colher de sopa de aveia", "Canela", "Pasta de amendoim"],
      en: ["1 banana", "2 eggs", "1 tbsp oats", "Cinnamon", "Peanut butter"],
    },
    steps: {
      es: ["Aplasta el plátano con los huevos.", "Mezcla la avena y la canela.", "Haz panqueques pequeños en la sartén.", "Termina con crema de cacahuate."],
      pt: ["Amasse a banana com os ovos.", "Misture a aveia e a canela.", "Faça panquecas pequenas na frigideira.", "Finalize com pasta de amendoim."],
      en: ["Mash the banana with the eggs.", "Mix in the oats and cinnamon.", "Cook small pancakes in the pan.", "Finish with peanut butter."],
    },
  }),
  make({
    id: "iogurte-grego-castanhas",
    name: {
      es: "Yogur Griego con Frutos Secos",
      pt: "Iogurte Grego com Castanhas",
      en: "Greek Yogurt with Nuts",
    },
    category: "breakfast",
    image: rIogurteCastanhas,
    time: "3 min", difficulty: "easy", satiety: 4, protein: "18g", calories: "260 kcal",
    bestTime: { es: "Mañana rápida", pt: "Manhã rápida", en: "Quick morning" },
    benefits: {
      es: ["Listo en minutos", "Probiótico", "Saciedad real"],
      pt: ["Pronto em minutos", "Probiótico", "Saciedade real"],
      en: ["Ready in minutes", "Probiotic", "Real fullness"],
    },
    feminineBenefits: {
      es: "Cuida el intestino y deshincha rápido.",
      pt: "Cuida do intestino e desinfla rápido.",
      en: "Nurtures your gut and reduces bloating fast.",
    },
    ingredients: {
      es: ["1 pote de yogur griego natural", "1 cucharada de frutos secos picados", "1 cucharada de chía", "Canela"],
      pt: ["1 pote de iogurte grego natural", "1 colher de sopa de castanhas picadas", "1 colher de sopa de chia", "Canela"],
      en: ["1 cup plain Greek yogurt", "1 tbsp chopped nuts", "1 tbsp chia seeds", "Cinnamon"],
    },
    steps: {
      es: ["Coloca el yogur en el tazón.", "Agrega chía y frutos secos.", "Termina con canela y sirve."],
      pt: ["Coloque o iogurte na tigela.", "Adicione chia e castanhas.", "Finalize com canela e sirva."],
      en: ["Place the yogurt in a bowl.", "Add chia seeds and nuts.", "Finish with cinnamon and serve."],
    },
  }),
  make({
    id: "tapioca-frango-queijo",
    name: {
      es: "Tapioca de Pollo y Queso",
      pt: "Tapioca de Frango com Queijo",
      en: "Chicken and Cheese Tapioca",
    },
    category: "breakfast",
    image: rTapiocaFrango,
    time: "12 min", difficulty: "easy", satiety: 5, protein: "30g", calories: "360 kcal",
    bestTime: { es: "Mañana completa", pt: "Manhã completa", en: "Full morning" },
    benefits: {
      es: ["Sin gluten", "Alta proteína", "Doble saciedad"],
      pt: ["Sem glúten", "Alta proteína", "Dupla saciedade"],
      en: ["Gluten-free", "High protein", "Double fullness"],
    },
    feminineBenefits: {
      es: "Desayuno que aguanta hasta el almuerzo sin picar.",
      pt: "Café da manhã que aguenta até o almoço sem beliscar.",
      en: "Keeps you full until lunch without snacking.",
    },
    ingredients: {
      es: ["3 cucharadas de almidón de tapioca", "80 g de pollo desmenuzado", "1 rebanada de queso blanco", "Orégano"],
      pt: ["3 colheres de sopa de goma de tapioca", "80 g de frango desfiado", "1 fatia de queijo branco", "Orégano"],
      en: ["3 tbsp tapioca starch", "80 g shredded chicken", "1 slice white cheese", "Oregano"],
    },
    steps: {
      es: ["Extiende el almidón en la sartén caliente.", "Cuando cuaje, da la vuelta.", "Rellena con pollo y queso.", "Dobla y sirve."],
      pt: ["Espalhe a goma na frigideira quente.", "Quando firmar, vire.", "Recheie com frango e queijo.", "Dobre e sirva."],
      en: ["Spread the starch in the hot pan.", "When set, flip it.", "Fill with chicken and cheese.", "Fold and serve."],
    },
  }),
  make({
    id: "crepioca-queijo",
    name: {
      es: "Crepioca de Queso",
      pt: "Crepioca de Queijo",
      en: "Cheese Crepioca",
    },
    category: "breakfast",
    image: rCrepioca,
    time: "8 min", difficulty: "easy", satiety: 4, protein: "22g", calories: "280 kcal",
    bestTime: { es: "Mañana", pt: "Manhã", en: "Morning" },
    benefits: {
      es: ["Lista en minutos", "Versátil", "Proteica"],
      pt: ["Pronta em minutos", "Versátil", "Proteica"],
      en: ["Ready in minutes", "Versatile", "High protein"],
    },
    feminineBenefits: {
      es: "La favorita del reto: práctica, ligera y deliciosa.",
      pt: "A favorita do desafio: prática, leve e deliciosa.",
      en: "The challenge favourite: practical, light and delicious.",
    },
    ingredients: {
      es: ["2 huevos", "2 cucharadas de almidón de tapioca", "1 rebanada de queso blanco", "Sal"],
      pt: ["2 ovos", "2 colheres de sopa de goma de tapioca", "1 fatia de queijo branco", "Sal"],
      en: ["2 eggs", "2 tbsp tapioca starch", "1 slice white cheese", "Salt"],
    },
    steps: {
      es: ["Mezcla huevos, tapioca y sal.", "Vierte en la sartén antiadherente.", "Coloca el queso y dobla.", "Sirve caliente."],
      pt: ["Misture ovos, tapioca e sal.", "Despeje na frigideira antiaderente.", "Coloque o queijo e dobre.", "Sirva quente."],
      en: ["Mix eggs, tapioca and salt.", "Pour into a non-stick pan.", "Place the cheese and fold.", "Serve hot."],
    },
  }),
  make({
    id: "vitamina-whey-amendoim",
    name: {
      es: "Batido Proteico de Cacao",
      pt: "Vitamina Proteica de Cacau",
      en: "Cocoa Protein Smoothie",
    },
    category: "breakfast",
    image: rVitaminaCacau,
    time: "3 min", difficulty: "easy", satiety: 4, protein: "30g", calories: "320 kcal",
    bestTime: { es: "Mañana o post-entrenamiento", pt: "Manhã ou pós-treino", en: "Morning or post-workout" },
    benefits: {
      es: ["Rico en proteína", "Calma el antojo de dulce", "Energía limpia"],
      pt: ["Rico em proteína", "Acalma o desejo de doce", "Energia limpa"],
      en: ["High protein", "Curbs sweet cravings", "Clean energy"],
    },
    feminineBenefits: {
      es: "Desayuno con cara de postre — sin culpa.",
      pt: "Café da manhã com cara de sobremesa — sem culpa.",
      en: "Breakfast that tastes like dessert — guilt-free.",
    },
    ingredients: {
      es: ["1 scoop de whey", "200 ml de leche vegetal", "1 cucharada de cacao", "1 cucharada de crema de cacahuate", "Hielo"],
      pt: ["1 scoop de whey", "200 ml de leite vegetal", "1 colher de sopa de cacau em pó", "1 colher de sopa de pasta de amendoim", "Gelo"],
      en: ["1 scoop whey protein", "200 ml plant-based milk", "1 tbsp cocoa powder", "1 tbsp peanut butter", "Ice"],
    },
    steps: {
      es: ["Bate todo en la licuadora.", "Sirve de inmediato."],
      pt: ["Bata tudo no liquidificador.", "Sirva imediatamente."],
      en: ["Blend everything together.", "Serve immediately."],
    },
  }),

  // ============ LUNCH ============
  make({
    id: "frango-airfryer",
    name: {
      es: "Pollo Crocante en Airfryer",
      pt: "Frango Crocante na Airfryer",
      en: "Crispy Airfryer Chicken",
    },
    category: "lunch",
    image: frango,
    time: "20 min", difficulty: "easy", satiety: 5, protein: "42g", calories: "380 kcal",
    bestTime: { es: "Almuerzo", pt: "Almoço", en: "Lunch" },
    benefits: {
      es: ["Alta proteína", "Baja grasa", "Crocante sin fritura"],
      pt: ["Alta proteína", "Baixa gordura", "Crocante sem fritura"],
      en: ["High protein", "Low fat", "Crispy without frying"],
    },
    feminineBenefits: {
      es: "Aguanta toda la tarde y evita los antojos.",
      pt: "Aguenta a tarde toda e evita os beliscos.",
      en: "Keeps you full all afternoon and prevents cravings.",
    },
    ingredients: {
      es: ["200 g de pechuga de pollo en cubos", "1 huevo", "Harina de almendras", "Páprika, ajo, sal", "Limón"],
      pt: ["200 g de peito de frango em cubos", "1 ovo", "Farinha de amêndoas", "Páprica, alho, sal", "Limão"],
      en: ["200 g chicken breast cubes", "1 egg", "Almond flour", "Paprika, garlic, salt", "Lemon"],
    },
    steps: {
      es: ["Sazona el pollo con limón y especias.", "Pasa por el huevo y luego por la harina.", "Airfryer 200 °C por 12 min, volteando a la mitad.", "Sirve con ensalada verde."],
      pt: ["Tempere o frango com limão e especiarias.", "Passe pelo ovo e depois pela farinha.", "Airfryer a 200 °C por 12 min, virando na metade.", "Sirva com salada verde."],
      en: ["Season the chicken with lemon and spices.", "Dip in egg then coat with almond flour.", "Airfry at 200 °C for 12 min, flipping halfway.", "Serve with a green salad."],
    },
  }),
  make({
    id: "bowl-proteico",
    name: {
      es: "Bowl Proteico Femenino",
      pt: "Bowl Proteico Feminino",
      en: "Feminine Protein Bowl",
    },
    category: "lunch",
    image: bowl,
    time: "15 min", difficulty: "easy", satiety: 5, protein: "38g", calories: "420 kcal",
    bestTime: { es: "Almuerzo post-entrenamiento", pt: "Almoço pós-treino", en: "Post-workout lunch" },
    benefits: {
      es: ["Completo", "Rico en fibra", "Anti-compulsión"],
      pt: ["Completo", "Rico em fibra", "Anti-compulsão"],
      en: ["Complete meal", "High fibre", "Anti-binge"],
    },
    feminineBenefits: {
      es: "Comida completa que evita el hambre de las 16 h.",
      pt: "Refeição completa que evita a fome das 16 h.",
      en: "A complete meal that keeps 4 pm hunger away.",
    },
    ingredients: {
      es: ["150 g de pollo a la plancha", "2 huevos cocidos", "Hojas verdes", "Crema de cacahuate", "Aceite de oliva"],
      pt: ["150 g de frango grelhado", "2 ovos cozidos", "Folhas verdes", "Pasta de amendoim", "Azeite de oliva"],
      en: ["150 g grilled chicken", "2 boiled eggs", "Green leaves", "Peanut butter", "Olive oil"],
    },
    steps: {
      es: ["Forma la base con las hojas.", "Agrega el pollo, los huevos y la crema.", "Rocía con aceite de oliva y termina."],
      pt: ["Forme a base com as folhas.", "Adicione o frango, os ovos e a pasta.", "Regue com azeite e finalize."],
      en: ["Build the base with the greens.", "Add the chicken, eggs and peanut butter.", "Drizzle with olive oil and serve."],
    },
  }),
  make({
    id: "carne-moida-abobrinha",
    name: {
      es: "Carne Molida con Calabacín",
      pt: "Carne Moída com Abobrinha",
      en: "Ground Beef with Zucchini",
    },
    category: "lunch",
    image: rCarneAbobrinha,
    time: "20 min", difficulty: "easy", satiety: 5, protein: "36g", calories: "390 kcal",
    bestTime: { es: "Almuerzo", pt: "Almoço", en: "Lunch" },
    benefits: {
      es: ["Rica en hierro", "Saciante", "Bajo en carbos"],
      pt: ["Rica em ferro", "Saciante", "Baixo em carboidratos"],
      en: ["Iron-rich", "Filling", "Low carb"],
    },
    feminineBenefits: {
      es: "Repone el hierro y combate el cansancio típico del ciclo.",
      pt: "Repõe o ferro e combate o cansaço típico do ciclo.",
      en: "Replenishes iron and fights the fatigue that comes with your cycle.",
    },
    ingredients: {
      es: ["200 g de carne molida magra", "1 calabacín en cubos", "1 tomate", "Cebolla, ajo", "Aceite de oliva y sal"],
      pt: ["200 g de carne moída magra", "1 abobrinha em cubos", "1 tomate", "Cebola, alho", "Azeite e sal"],
      en: ["200 g lean ground beef", "1 zucchini, diced", "1 tomato", "Onion and garlic", "Olive oil and salt"],
    },
    steps: {
      es: ["Sofríe cebolla y ajo.", "Agrega la carne hasta dorar.", "Incorpora el calabacín y el tomate.", "Cocina 10 min y sirve."],
      pt: ["Refogue cebola e alho.", "Adicione a carne até dourar.", "Incorpore a abobrinha e o tomate.", "Cozinhe 10 min e sirva."],
      en: ["Sauté onion and garlic.", "Add the meat until browned.", "Add the zucchini and tomato.", "Cook for 10 min and serve."],
    },
  }),
  make({
    id: "file-mignon-pure-couveflor",
    name: {
      es: "Solomillo con Puré de Coliflor",
      pt: "Filé Mignon com Purê de Couve-Flor",
      en: "Tenderloin with Cauliflower Mash",
    },
    category: "lunch",
    image: rFilePure,
    time: "25 min", difficulty: "medium", satiety: 5, protein: "44g", calories: "450 kcal",
    bestTime: { es: "Almuerzo especial", pt: "Almoço especial", en: "Special lunch" },
    benefits: {
      es: ["Premium", "Bajo en carbos", "Muy saciante"],
      pt: ["Premium", "Baixo em carboidratos", "Muito saciante"],
      en: ["Premium", "Low carb", "Very filling"],
    },
    feminineBenefits: {
      es: "Almuerzo de domingo sin salirte del plan.",
      pt: "Almoço de domingo sem sair do plano.",
      en: "A Sunday-worthy lunch without leaving your plan.",
    },
    ingredients: {
      es: ["200 g de solomillo en medallón", "½ coliflor", "1 cucharada de mantequilla ghee", "Sal, pimienta, romero"],
      pt: ["200 g de filé mignon em medalhão", "½ couve-flor", "1 colher de sopa de manteiga ghee", "Sal, pimenta, alecrim"],
      en: ["200 g tenderloin medallion", "½ cauliflower", "1 tbsp ghee butter", "Salt, pepper, rosemary"],
    },
    steps: {
      es: ["Cocina la coliflor y procesa con ghee.", "Sella el solomillo 3 min por cada lado.", "Sazona con sal y romero.", "Sirve sobre el puré."],
      pt: ["Cozinhe a couve-flor e processe com ghee.", "Sele o filé 3 min de cada lado.", "Tempere com sal e alecrim.", "Sirva sobre o purê."],
      en: ["Cook the cauliflower and blend with ghee.", "Sear the tenderloin 3 min each side.", "Season with salt and rosemary.", "Serve over the mash."],
    },
  }),
  make({
    id: "strogonoff-fit-frango",
    name: {
      es: "Stroganoff Fit de Pollo",
      pt: "Strogonoff Fit de Frango",
      en: "Fit Chicken Stroganoff",
    },
    category: "lunch",
    image: rStrogonoff,
    time: "20 min", difficulty: "easy", satiety: 5, protein: "40g", calories: "410 kcal",
    bestTime: { es: "Almuerzo", pt: "Almoço", en: "Lunch" },
    benefits: {
      es: ["Cremoso sin culpa", "Proteico", "Sabroso"],
      pt: ["Cremoso sem culpa", "Proteico", "Saboroso"],
      en: ["Creamy without guilt", "High protein", "Delicious"],
    },
    feminineBenefits: {
      es: "Versión fit del clásico para satisfacer ese antojo.",
      pt: "Versão fit do clássico para satisfazer aquela vontade.",
      en: "The fit version of the classic to satisfy that craving.",
    },
    ingredients: {
      es: ["200 g de pechuga de pollo en tiras", "100 g de yogur natural", "1 cucharada de extracto de tomate", "Cebolla, ajo, mostaza", "Champiñones"],
      pt: ["200 g de peito de frango em tiras", "100 g de iogurte natural", "1 colher de sopa de extrato de tomate", "Cebola, alho, mostarda", "Cogumelos"],
      en: ["200 g chicken breast strips", "100 g plain yogurt", "1 tbsp tomato paste", "Onion, garlic, mustard", "Mushrooms"],
    },
    steps: {
      es: ["Dora el pollo con cebolla y ajo.", "Agrega el tomate y la mostaza.", "Incorpora los champiñones y el yogur fuera del fuego.", "Sirve con arroz de coliflor."],
      pt: ["Doure o frango com cebola e alho.", "Adicione o extrato de tomate e a mostarda.", "Incorpore os cogumelos e o iogurte fora do fogo.", "Sirva com arroz de couve-flor."],
      en: ["Brown the chicken with onion and garlic.", "Add the tomato paste and mustard.", "Stir in the mushrooms and yogurt off the heat.", "Serve with cauliflower rice."],
    },
  }),
  make({
    id: "salmao-grelhado-aspargos",
    name: {
      es: "Salmón a la Plancha con Espárragos",
      pt: "Salmão Grelhado com Aspargos",
      en: "Grilled Salmon with Asparagus",
    },
    category: "lunch",
    image: rSalmaoAspargos,
    time: "18 min", difficulty: "easy", satiety: 5, protein: "40g", calories: "430 kcal",
    bestTime: { es: "Almuerzo", pt: "Almoço", en: "Lunch" },
    benefits: {
      es: ["Omega-3", "Anti-inflamatorio", "Piel y cabello"],
      pt: ["Ômega-3", "Anti-inflamatório", "Pele e cabelo"],
      en: ["Omega-3", "Anti-inflammatory", "Skin and hair"],
    },
    feminineBenefits: {
      es: "Hormonas en equilibrio y piel radiante.",
      pt: "Hormônios em equilíbrio e pele radiante.",
      en: "Balanced hormones and glowing skin.",
    },
    ingredients: {
      es: ["1 filete de salmón", "Espárragos frescos", "Limón", "Aceite de oliva", "Sal y hierbas"],
      pt: ["1 filé de salmão", "Aspargos frescos", "Limão", "Azeite de oliva", "Sal e ervas"],
      en: ["1 salmon fillet", "Fresh asparagus", "Lemon", "Olive oil", "Salt and herbs"],
    },
    steps: {
      es: ["Sazona el salmón con limón y hierbas.", "Cocina a la plancha 4 min por cada lado.", "Saltea los espárragos en aceite de oliva.", "Sirve juntos."],
      pt: ["Tempere o salmão com limão e ervas.", "Cozinhe na grelha 4 min de cada lado.", "Refogue os aspargos no azeite.", "Sirva juntos."],
      en: ["Season the salmon with lemon and herbs.", "Grill for 4 min each side.", "Sauté the asparagus in olive oil.", "Serve together."],
    },
  }),
  make({
    id: "almondegas-molho-tomate",
    name: {
      es: "Albóndigas en Salsa de Tomate",
      pt: "Almôndegas ao Molho de Tomate",
      en: "Meatballs in Tomato Sauce",
    },
    category: "lunch",
    image: rAlmondegas,
    time: "30 min", difficulty: "medium", satiety: 5, protein: "38g", calories: "400 kcal",
    bestTime: { es: "Almuerzo", pt: "Almoço", en: "Lunch" },
    benefits: {
      es: ["Comfort food fit", "Proteico", "Saciante"],
      pt: ["Comfort food fit", "Proteico", "Saciante"],
      en: ["Comfort food fit", "High protein", "Filling"],
    },
    feminineBenefits: {
      es: "El sabor de casa, sin pesarte.",
      pt: "O sabor de casa, sem pesar na balança.",
      en: "Home-cooked comfort without the guilt.",
    },
    ingredients: {
      es: ["250 g de carne molida", "1 huevo", "Harina de almendras", "Salsa de tomate natural", "Albahaca"],
      pt: ["250 g de carne moída", "1 ovo", "Farinha de amêndoas", "Molho de tomate natural", "Manjericão"],
      en: ["250 g ground beef", "1 egg", "Almond flour", "Natural tomato sauce", "Basil"],
    },
    steps: {
      es: ["Mezcla la carne, el huevo y la harina, y forma las albóndigas.", "Dora las albóndigas.", "Agrega la salsa y cocina 15 min.", "Termina con albahaca."],
      pt: ["Misture a carne, o ovo e a farinha e forme as almôndegas.", "Doure as almôndegas.", "Adicione o molho e cozinhe 15 min.", "Finalize com manjericão."],
      en: ["Mix the meat, egg and flour and shape into meatballs.", "Brown the meatballs.", "Add the sauce and cook for 15 min.", "Finish with fresh basil."],
    },
  }),

  // ============ DINNER ============
  make({
    id: "tilapia-limao",
    name: {
      es: "Tilapia con Limón",
      pt: "Tilápia com Limão",
      en: "Lemon Tilapia",
    },
    category: "dinner",
    image: tilapia,
    time: "15 min", difficulty: "easy", satiety: 4, protein: "35g", calories: "260 kcal",
    bestTime: { es: "Cena ligera", pt: "Jantar leve", en: "Light dinner" },
    benefits: {
      es: ["Digestión fácil", "Anti-inflamatorio", "Ligero de noche"],
      pt: ["Digestão fácil", "Anti-inflamatório", "Leve à noite"],
      en: ["Easy digestion", "Anti-inflammatory", "Light at night"],
    },
    feminineBenefits: {
      es: "Perfecto para las noches en que no quieres pesarte.",
      pt: "Perfeito para as noites em que você não quer se pesar.",
      en: "Perfect for those nights when you want to feel light.",
    },
    ingredients: {
      es: ["1 filete de tilapia", "Jugo de 1 limón", "Romero", "Aceite de oliva", "Sal"],
      pt: ["1 filé de tilápia", "Suco de 1 limão", "Alecrim", "Azeite de oliva", "Sal"],
      en: ["1 tilapia fillet", "Juice of 1 lemon", "Rosemary", "Olive oil", "Salt"],
    },
    steps: {
      es: ["Marina el filete con limón y hierbas por 10 min.", "Cocina a la plancha 4 min por cada lado.", "Termina con aceite de oliva en crudo."],
      pt: ["Marine o filé com limão e ervas por 10 min.", "Grelhe 4 min de cada lado.", "Finalize com azeite cru."],
      en: ["Marinate the fillet with lemon and herbs for 10 min.", "Grill for 4 min each side.", "Finish with a drizzle of raw olive oil."],
    },
  }),
  make({
    id: "pizza-proteica",
    name: {
      es: "Pizza Proteica Low Carb",
      pt: "Pizza Proteica Low Carb",
      en: "Low-Carb Protein Pizza",
    },
    category: "dinner",
    image: pizza,
    time: "25 min", difficulty: "medium", satiety: 5, protein: "32g", calories: "410 kcal",
    bestTime: { es: "Cena del viernes", pt: "Jantar de sexta", en: "Friday dinner" },
    benefits: {
      es: ["Calma el antojo", "Sin culpa", "Sin hinchar"],
      pt: ["Acalma a vontade", "Sem culpa", "Sem inchar"],
      en: ["Satisfies the craving", "Guilt-free", "No bloating"],
    },
    feminineBenefits: {
      es: "La receta comodín para cuando se antoja pizza.",
      pt: "A receita coringa para quando bate aquela vontade de pizza.",
      en: "Your go-to recipe whenever a pizza craving hits.",
    },
    ingredients: {
      es: ["Masa de coliflor", "Salsa de tomate natural", "Mozzarella de búfala", "Albahaca fresca"],
      pt: ["Massa de couve-flor", "Molho de tomate natural", "Mussarela de búfala", "Manjericão fresco"],
      en: ["Cauliflower base", "Natural tomato sauce", "Buffalo mozzarella", "Fresh basil"],
    },
    steps: {
      es: ["Hornea la masa 8 min.", "Agrega salsa, queso y hierbas.", "Vuelve al horno 10 min."],
      pt: ["Asse a massa por 8 min.", "Adicione molho, queijo e ervas.", "Volte ao forno por 10 min."],
      en: ["Bake the base for 8 min.", "Add sauce, cheese and herbs.", "Return to the oven for 10 min."],
    },
  }),
  make({
    id: "sopa-frango-legumes",
    name: {
      es: "Sopa de Pollo con Verduras",
      pt: "Sopa de Frango com Legumes",
      en: "Chicken and Vegetable Soup",
    },
    category: "dinner",
    image: rSopaFrango,
    time: "30 min", difficulty: "easy", satiety: 5, protein: "32g", calories: "280 kcal",
    bestTime: { es: "Cena calentita", pt: "Jantar quentinho", en: "Warm dinner" },
    benefits: {
      es: ["Reconfortante", "Deshincha", "Hidratante"],
      pt: ["Reconfortante", "Desinfla", "Hidratante"],
      en: ["Comforting", "De-bloating", "Hydrating"],
    },
    feminineBenefits: {
      es: "Confort líquido para cerrar bien el día.",
      pt: "Conforto líquido para fechar bem o dia.",
      en: "Liquid comfort to end your day on a high note.",
    },
    ingredients: {
      es: ["150 g de pollo desmenuzado", "Zanahoria, calabacín, chayote", "Cebolla, ajo", "Caldo casero", "Perejil"],
      pt: ["150 g de frango desfiado", "Cenoura, abobrinha, chuchu", "Cebola, alho", "Caldo caseiro", "Salsinha"],
      en: ["150 g shredded chicken", "Carrot, zucchini, chayote", "Onion and garlic", "Homemade broth", "Parsley"],
    },
    steps: {
      es: ["Sofríe cebolla y ajo.", "Incorpora el pollo y las verduras.", "Cubre con caldo y cocina 20 min.", "Termina con perejil."],
      pt: ["Refogue cebola e alho.", "Incorpore o frango e os legumes.", "Cubra com caldo e cozinhe 20 min.", "Finalize com salsinha."],
      en: ["Sauté onion and garlic.", "Add the chicken and vegetables.", "Cover with broth and cook for 20 min.", "Finish with parsley."],
    },
  }),
  make({
    id: "hamburguer-caseiro-alface",
    name: {
      es: "Hamburguesa Casera en Lechuga",
      pt: "Hambúrguer Caseiro na Alface",
      en: "Homemade Lettuce Burger",
    },
    category: "dinner",
    image: rHamburguerAlface,
    time: "15 min", difficulty: "easy", satiety: 5, protein: "36g", calories: "360 kcal",
    bestTime: { es: "Cena contundente", pt: "Jantar substancioso", en: "Hearty dinner" },
    benefits: {
      es: ["Sin pan", "Jugosa", "Proteica"],
      pt: ["Sem pão", "Suculenta", "Proteica"],
      en: ["No bun", "Juicy", "High protein"],
    },
    feminineBenefits: {
      es: "Calma el antojo de hamburguesa sin salirte del plan.",
      pt: "Acalma a vontade de hambúrguer sem sair do plano.",
      en: "Satisfies your burger craving without derailing your plan.",
    },
    ingredients: {
      es: ["200 g de carne molida", "Lechuga americana", "Tomate", "Cebolla morada", "Mostaza dijon"],
      pt: ["200 g de carne moída", "Alface americana", "Tomate", "Cebola roxa", "Mostarda dijon"],
      en: ["200 g ground beef", "Iceberg lettuce", "Tomato", "Red onion", "Dijon mustard"],
    },
    steps: {
      es: ["Forma la hamburguesa y sazona.", "Cocina en la sartén 4 min por cada lado.", "Arma con lechuga en lugar de pan.", "Agrega tomate, cebolla y mostaza."],
      pt: ["Forme o hambúrguer e tempere.", "Cozinhe na frigideira 4 min de cada lado.", "Monte com alface no lugar do pão.", "Adicione tomate, cebola e mostarda."],
      en: ["Shape the patty and season.", "Cook in the pan for 4 min each side.", "Assemble with lettuce instead of a bun.", "Add tomato, onion and mustard."],
    },
  }),
  make({
    id: "wrap-low-carb-frango",
    name: {
      es: "Wrap Low Carb de Pollo",
      pt: "Wrap Low Carb de Frango",
      en: "Low-Carb Chicken Wrap",
    },
    category: "dinner",
    image: rWrapFrango,
    time: "12 min", difficulty: "easy", satiety: 4, protein: "30g", calories: "320 kcal",
    bestTime: { es: "Cena ligera", pt: "Jantar leve", en: "Light dinner" },
    benefits: {
      es: ["Práctico", "Sin harina", "Proteico"],
      pt: ["Prático", "Sem farinha", "Proteico"],
      en: ["Practical", "Flour-free", "High protein"],
    },
    feminineBenefits: {
      es: "Crepioca como wrap: ligereza y sabor en cada mordida.",
      pt: "Crepioca como wrap: leveza e sabor a cada mordida.",
      en: "Crepioca as a wrap: lightness and flavour in every bite.",
    },
    ingredients: {
      es: ["1 crepioca fina", "100 g de pollo desmenuzado", "Queso crema light", "Lechuga y tomate"],
      pt: ["1 crepioca fina", "100 g de frango desfiado", "Cream cheese light", "Alface e tomate"],
      en: ["1 thin crepioca", "100 g shredded chicken", "Light cream cheese", "Lettuce and tomato"],
    },
    steps: {
      es: ["Haz la crepioca bien fina.", "Extiende el queso crema.", "Rellena con pollo y hojas.", "Enrolla y sirve."],
      pt: ["Faça a crepioca bem fina.", "Espalhe o cream cheese.", "Recheie com frango e folhas.", "Enrole e sirva."],
      en: ["Make the crepioca very thin.", "Spread the cream cheese.", "Fill with chicken and greens.", "Roll and serve."],
    },
  }),
  make({
    id: "omelete-recheada-jantar",
    name: {
      es: "Tortilla Rellena de Espinaca",
      pt: "Omelete Recheada com Espinafre",
      en: "Spinach-Stuffed Omelette",
    },
    category: "dinner",
    image: rOmeleteEspinafre,
    time: "10 min", difficulty: "easy", satiety: 4, protein: "26g", calories: "290 kcal",
    bestTime: { es: "Cena ligera", pt: "Jantar leve", en: "Light dinner" },
    benefits: {
      es: ["Ligera", "Digestión fácil", "Proteica"],
      pt: ["Leve", "Digestão fácil", "Proteica"],
      en: ["Light", "Easy digestion", "High protein"],
    },
    feminineBenefits: {
      es: "Cuando el día fue pesado, ella lo resuelve en 10 min.",
      pt: "Quando o dia foi pesado, ela resolve em 10 min.",
      en: "When the day was tough, this saves you in 10 min.",
    },
    ingredients: {
      es: ["3 huevos", "Espinaca", "Queso blanco", "Tomate cherry", "Aceite de oliva"],
      pt: ["3 ovos", "Espinafre", "Queijo branco", "Tomate-cereja", "Azeite de oliva"],
      en: ["3 eggs", "Spinach", "White cheese", "Cherry tomatoes", "Olive oil"],
    },
    steps: {
      es: ["Sofríe la espinaca rápidamente.", "Bate los huevos y viértelos en la sartén.", "Agrega queso y tomate.", "Dobla y sirve."],
      pt: ["Refogue o espinafre rapidamente.", "Bata os ovos e despeje na frigideira.", "Adicione queijo e tomate.", "Dobre e sirva."],
      en: ["Quickly sauté the spinach.", "Beat the eggs and pour into the pan.", "Add cheese and tomato.", "Fold and serve."],
    },
  }),
  make({
    id: "espetinho-carne-legumes",
    name: {
      es: "Brochetas de Carne y Verduras",
      pt: "Espetinho de Carne com Legumes",
      en: "Meat and Veggie Skewers",
    },
    category: "dinner",
    image: rEspetinho,
    time: "20 min", difficulty: "easy", satiety: 5, protein: "38g", calories: "370 kcal",
    bestTime: { es: "Cena especial", pt: "Jantar especial", en: "Special dinner" },
    benefits: {
      es: ["Festivo", "Equilibrado", "Saciante"],
      pt: ["Festivo", "Equilibrado", "Saciante"],
      en: ["Festive", "Balanced", "Filling"],
    },
    feminineBenefits: {
      es: "Viernes fit sin perder el brillo.",
      pt: "Sexta fit sem perder o brilho.",
      en: "A fit Friday without losing your sparkle.",
    },
    ingredients: {
      es: ["200 g de carne en cubos", "Cebolla, pimiento, calabacín", "Sal y pimienta", "Aceite de oliva", "Romero"],
      pt: ["200 g de carne em cubos", "Cebola, pimentão, abobrinha", "Sal e pimenta", "Azeite de oliva", "Alecrim"],
      en: ["200 g beef cubes", "Onion, bell pepper, zucchini", "Salt and pepper", "Olive oil", "Rosemary"],
    },
    steps: {
      es: ["Alterna carne y verduras en el pincho.", "Sazona y rocía con aceite de oliva.", "Cocina a la plancha 12 min girando.", "Sirve caliente."],
      pt: ["Alterne carne e legumes no espeto.", "Tempere e regue com azeite.", "Grelhe por 12 min girando.", "Sirva quente."],
      en: ["Alternate meat and veggies on the skewer.", "Season and drizzle with olive oil.", "Grill for 12 min, turning.", "Serve hot."],
    },
  }),

  // ============ SNACK ============
  make({
    id: "ovos-cremosos",
    name: {
      es: "Huevos Cremosos de la Calma",
      pt: "Ovos Cremosos da Calma",
      en: "Calming Creamy Eggs",
    },
    category: "snack",
    image: rOvosCremosos,
    time: "8 min", difficulty: "easy", satiety: 4, protein: "20g",
    bestTime: { es: "Merienda de tarde", pt: "Lanche da tarde", en: "Afternoon snack" },
    benefits: {
      es: ["Reduce la ansiedad", "Saciedad rápida"],
      pt: ["Reduz a ansiedade", "Saciedade rápida"],
      en: ["Reduces anxiety", "Quick fullness"],
    },
    feminineBenefits: {
      es: "Rescate emocional en 8 minutos.",
      pt: "Resgate emocional em 8 minutos.",
      en: "Emotional rescue in 8 minutes.",
    },
    ingredients: {
      es: ["3 huevos", "1 cucharada de mantequilla ghee", "Sal rosa", "Cebollín"],
      pt: ["3 ovos", "1 colher de sopa de manteiga ghee", "Sal rosa", "Cebolinha"],
      en: ["3 eggs", "1 tbsp ghee butter", "Pink salt", "Chives"],
    },
    steps: {
      es: ["Bate los huevos.", "Cocina a fuego bajo revolviendo siempre.", "Termina cremoso."],
      pt: ["Bata os ovos.", "Cozinhe em fogo baixo mexendo sempre.", "Finalize cremoso."],
      en: ["Beat the eggs.", "Cook over low heat, stirring constantly.", "Remove while still creamy."],
    },
  }),
  make({
    id: "mix-castanhas-cacau",
    name: {
      es: "Mix de Frutos Secos con Cacao",
      pt: "Mix de Castanhas com Cacau",
      en: "Nut and Cocoa Mix",
    },
    category: "snack",
    image: rMixCastanhas,
    time: "1 min", difficulty: "easy", satiety: 3, protein: "8g", calories: "180 kcal",
    bestTime: { es: "Merienda rápida", pt: "Lanche rápido", en: "Quick snack" },
    benefits: {
      es: ["Energía limpia", "Calma el antojo de dulce", "Práctico"],
      pt: ["Energia limpa", "Acalma o desejo de doce", "Prático"],
      en: ["Clean energy", "Curbs sweet cravings", "Practical"],
    },
    feminineBenefits: {
      es: "El snack de bolsa para emergencias dulces.",
      pt: "O lanche de bolsa para emergências doces.",
      en: "Your handbag snack for sweet emergencies.",
    },
    ingredients: {
      es: ["20 g de nueces de Brasil", "10 g de almendras", "1 cucharada de nibs de cacao"],
      pt: ["20 g de castanha-do-pará", "10 g de amêndoas", "1 colher de sopa de nibs de cacau"],
      en: ["20 g Brazil nuts", "10 g almonds", "1 tbsp cocoa nibs"],
    },
    steps: {
      es: ["Mezcla todo en un potecito.", "Sirve."],
      pt: ["Misture tudo em um potinho.", "Sirva."],
      en: ["Mix everything in a small container.", "Serve."],
    },
  }),
  make({
    id: "iogurte-frutas-vermelhas",
    name: {
      es: "Yogur con Frutos Rojos",
      pt: "Iogurte com Frutas Vermelhas",
      en: "Yogurt with Berries",
    },
    category: "snack",
    image: rIogurteFrutas,
    time: "3 min", difficulty: "easy", satiety: 3, protein: "15g", calories: "200 kcal",
    bestTime: { es: "Merienda de tarde", pt: "Lanche da tarde", en: "Afternoon snack" },
    benefits: {
      es: ["Antioxidante", "Probiótico", "Refrescante"],
      pt: ["Antioxidante", "Probiótico", "Refrescante"],
      en: ["Antioxidant", "Probiotic", "Refreshing"],
    },
    feminineBenefits: {
      es: "Antioxidantes para la piel y el buen humor.",
      pt: "Antioxidantes para a pele e o bom humor.",
      en: "Antioxidants for your skin and your mood.",
    },
    ingredients: {
      es: ["1 pote de yogur griego natural", "½ taza de frutos rojos", "1 cucharada de chía"],
      pt: ["1 pote de iogurte grego natural", "½ xícara de frutas vermelhas", "1 colher de sopa de chia"],
      en: ["1 cup plain Greek yogurt", "½ cup mixed berries", "1 tbsp chia seeds"],
    },
    steps: {
      es: ["Coloca el yogur en el tazón.", "Agrega los frutos y la chía.", "Sirve frío."],
      pt: ["Coloque o iogurte na tigela.", "Adicione as frutas e a chia.", "Sirva gelado."],
      en: ["Place the yogurt in a bowl.", "Add the berries and chia seeds.", "Serve chilled."],
    },
  }),
  make({
    id: "ovo-cozido-tomate",
    name: {
      es: "Huevo Cocido con Tomate",
      pt: "Ovo Cozido com Tomate",
      en: "Boiled Egg with Tomato",
    },
    category: "snack",
    image: rOvoTomate,
    time: "10 min", difficulty: "easy", satiety: 3, protein: "12g", calories: "150 kcal",
    bestTime: { es: "Merienda práctica", pt: "Lanche prático", en: "Practical snack" },
    benefits: {
      es: ["Simple", "Saciante", "Económico"],
      pt: ["Simples", "Saciante", "Econômico"],
      en: ["Simple", "Filling", "Budget-friendly"],
    },
    feminineBenefits: {
      es: "Merienda comodín para los días ajetreados.",
      pt: "Lanche curinga para os dias agitados.",
      en: "Your go-to snack for busy days.",
    },
    ingredients: {
      es: ["2 huevos", "1 tomate", "Sal rosa", "Aceite de oliva"],
      pt: ["2 ovos", "1 tomate", "Sal rosa", "Azeite de oliva"],
      en: ["2 eggs", "1 tomato", "Pink salt", "Olive oil"],
    },
    steps: {
      es: ["Cocina los huevos 8 min.", "Corta con el tomate.", "Sazona y sirve."],
      pt: ["Cozinhe os ovos por 8 min.", "Corte com o tomate.", "Tempere e sirva."],
      en: ["Boil the eggs for 8 min.", "Slice alongside the tomato.", "Season and serve."],
    },
  }),
  make({
    id: "queijo-coalho-airfryer",
    name: {
      es: "Queso Fresco en Airfryer",
      pt: "Queijo Coalho na Airfryer",
      en: "Airfryer Fresh Cheese",
    },
    category: "snack",
    image: rQueijoCoalho,
    time: "8 min", difficulty: "easy", satiety: 4, protein: "18g", calories: "240 kcal",
    bestTime: { es: "Merienda de tarde", pt: "Lanche da tarde", en: "Afternoon snack" },
    benefits: {
      es: ["Crocante", "Proteico", "Sin fritura"],
      pt: ["Crocante", "Proteico", "Sem fritura"],
      en: ["Crispy", "High protein", "No frying"],
    },
    feminineBenefits: {
      es: "Sensación de botana sin culpa.",
      pt: "Sensação de petisco sem culpa.",
      en: "The snack feeling without the guilt.",
    },
    ingredients: {
      es: ["120 g de queso fresco en cubos", "Orégano", "Aceite de oliva"],
      pt: ["120 g de queijo coalho em cubos", "Orégano", "Azeite de oliva"],
      en: ["120 g fresh cheese cubes", "Oregano", "Olive oil"],
    },
    steps: {
      es: ["Sazona el queso con orégano.", "Airfryer 200 °C por 6 min.", "Sirve caliente."],
      pt: ["Tempere o queijo com orégano.", "Airfryer a 200 °C por 6 min.", "Sirva quente."],
      en: ["Season the cheese with oregano.", "Airfry at 200 °C for 6 min.", "Serve hot."],
    },
  }),
  make({
    id: "shake-proteico-cacau",
    name: {
      es: "Batido Proteico de Cacao",
      pt: "Shake Proteico de Cacau",
      en: "Cocoa Protein Shake",
    },
    category: "snack",
    image: rShakeCacau,
    time: "3 min", difficulty: "easy", satiety: 4, protein: "28g", calories: "260 kcal",
    bestTime: { es: "Merienda post-entrenamiento", pt: "Lanche pós-treino", en: "Post-workout snack" },
    benefits: {
      es: ["Postre fit", "Recupera músculos", "Calma el antojo de dulce"],
      pt: ["Sobremesa fit", "Recupera músculos", "Acalma o desejo de doce"],
      en: ["Fit dessert", "Muscle recovery", "Curbs sweet cravings"],
    },
    feminineBenefits: {
      es: "Ese 'dulce de las cinco de la tarde' resuelto en 3 minutos.",
      pt: "Aquele 'doce das cinco da tarde' resolvido em 3 minutos.",
      en: "That '5 pm sweet craving' sorted in 3 minutes.",
    },
    ingredients: {
      es: ["1 scoop de whey", "200 ml de leche vegetal", "1 cucharada de cacao", "Hielo"],
      pt: ["1 scoop de whey", "200 ml de leite vegetal", "1 colher de sopa de cacau", "Gelo"],
      en: ["1 scoop whey protein", "200 ml plant-based milk", "1 tbsp cocoa powder", "Ice"],
    },
    steps: {
      es: ["Bate todo en la licuadora.", "Sirve de inmediato."],
      pt: ["Bata tudo no liquidificador.", "Sirva imediatamente."],
      en: ["Blend everything together.", "Serve immediately."],
    },
  }),
  make({
    id: "pasta-amendoim-maca",
    name: {
      es: "Manzana con Crema de Cacahuate",
      pt: "Maçã com Pasta de Amendoim",
      en: "Apple with Peanut Butter",
    },
    category: "snack",
    image: rMacaAmendoim,
    time: "2 min", difficulty: "easy", satiety: 3, protein: "8g", calories: "210 kcal",
    bestTime: { es: "Merienda de tarde", pt: "Lanche da tarde", en: "Afternoon snack" },
    benefits: {
      es: ["Dulce natural", "Energía", "Saciante"],
      pt: ["Doce natural", "Energia", "Saciante"],
      en: ["Natural sweetness", "Energy", "Filling"],
    },
    feminineBenefits: {
      es: "Combinación que calma el antojo de dulce y da energía.",
      pt: "Combinação que acalma o desejo de doce e dá energia.",
      en: "A combo that satisfies your sweet tooth and boosts your energy.",
    },
    ingredients: {
      es: ["1 manzana", "1 cucharada de crema de cacahuate integral", "Canela"],
      pt: ["1 maçã", "1 colher de sopa de pasta de amendoim integral", "Canela"],
      en: ["1 apple", "1 tbsp natural peanut butter", "Cinnamon"],
    },
    steps: {
      es: ["Corta la manzana en rodajas.", "Sirve con crema de cacahuate y canela."],
      pt: ["Corte a maçã em fatias.", "Sirva com pasta de amendoim e canela."],
      en: ["Slice the apple.", "Serve with peanut butter and cinnamon."],
    },
  }),
];

// ---------- planDays referencing recipe ids ----------
const BREAKFAST_IDS = ["omelete-anti-compulsao","ovos-mexidos-abacate","panqueca-proteica-banana","iogurte-grego-castanhas","tapioca-frango-queijo","crepioca-queijo","vitamina-whey-amendoim"];
const LUNCH_IDS = ["frango-airfryer","bowl-proteico","carne-moida-abobrinha","file-mignon-pure-couveflor","strogonoff-fit-frango","salmao-grelhado-aspargos","almondegas-molho-tomate"];
const SNACK_IDS = ["mix-castanhas-cacau","iogurte-frutas-vermelhas","ovo-cozido-tomate","queijo-coalho-airfryer","shake-proteico-cacau","pasta-amendoim-maca","ovos-cremosos"];
const DINNER_IDS = ["tilapia-limao","sopa-frango-legumes","hamburguer-caseiro-alface","wrap-low-carb-frango","omelete-recheada-jantar","espetinho-carne-legumes","pizza-proteica"];

const getRecipe = (id: string) => recipes.find((r) => r.id === id)!;

export const modules: Array<{
  id: string;
  title: L10n<string>;
  subtitle: L10n<string>;
  progress: number;
}> = [
  {
    id: "emagrecer",
    title:    { es: "Adelgazar Sin Sufrir",         pt: "Emagrecer Sem Sofrer",           en: "Lose Weight Without Suffering" },
    subtitle: { es: "Los 5 pilares femeninos",       pt: "Os 5 pilares femininos",          en: "The 5 feminine pillars" },
    progress: 40,
  },
  {
    id: "compulsao",
    title:    { es: "Control de la Compulsión",     pt: "Controle da Compulsão",           en: "Binge Control" },
    subtitle: { es: "Domina los disparadores",       pt: "Domine os gatilhos",              en: "Master your triggers" },
    progress: 20,
  },
  {
    id: "proteicas",
    title:    { es: "Recetas Proteicas",            pt: "Receitas Proteicas",              en: "Protein Recipes" },
    subtitle: { es: "Saciedad real",                pt: "Saciedade real",                  en: "Real fullness" },
    progress: 60,
  },
  {
    id: "barriga",
    title:    { es: "Quemar Barriga",               pt: "Queimar a Barriga",               en: "Burn Belly Fat" },
    subtitle: { es: "Protocolo de 7 días",           pt: "Protocolo de 7 dias",             en: "7-day protocol" },
    progress: 10,
  },
  {
    id: "rapidas",
    title:    { es: "Recetas de 10 Minutos",        pt: "Receitas de 10 Minutos",          en: "10-Minute Recipes" },
    subtitle: { es: "Para la rutina ajetreada",      pt: "Para a rotina agitada",           en: "For your busy routine" },
    progress: 0,
  },
  {
    id: "fora",
    title:    { es: "Comer Fuera Sin Engordar",     pt: "Comer Fora Sem Engordar",         en: "Eat Out Without Gaining Weight" },
    subtitle: { es: "Guía práctica",                pt: "Guia prático",                    en: "Practical guide" },
    progress: 0,
  },
  {
    id: "ansiedade",
    title:    { es: "Ansiedad Alimentaria",         pt: "Ansiedade Alimentar",             en: "Food Anxiety" },
    subtitle: { es: "Acompañamiento y técnica",      pt: "Acompanhamento e técnica",        en: "Support and technique" },
    progress: 30,
  },
  {
    id: "plano",
    title:    { es: "Plan de 21 Días",              pt: "Plano de 21 Dias",                en: "21-Day Plan" },
    subtitle: { es: "Tu jornada completa",           pt: "Sua jornada completa",            en: "Your complete journey" },
    progress: 14,
  },
];

export const bonuses: Array<{
  id: string;
  title: L10n<string>;
  subtitle: L10n<string>;
  items: L10n<string[]>;
  pdf?: string;
  filename?: L10n<string>;
}> = [
  {
    id: "cardapio",
    title:    { es: "Menú Proteico de 21 Días",           pt: "Cardápio Proteico de 21 Dias",          en: "21-Day Protein Menu" },
    subtitle: { es: "Listo para imprimir",                 pt: "Pronto para imprimir",                  en: "Ready to print" },
    items: {
      es: ["Desayuno, almuerzo, cena y merienda", "Lista de compras semanal", "Sustituciones inteligentes"],
      pt: ["Café da manhã, almoço, jantar e lanche", "Lista de compras semanal", "Substituições inteligentes"],
      en: ["Breakfast, lunch, dinner and snack", "Weekly shopping list", "Smart substitutions"],
    },
    pdf: "/bonus/menu-proteico-21-dias.pdf",
    filename: {
      es: "Menu-Proteico-de-21-Dias.pdf",
      pt: "Cardapio-Proteico-de-21-Dias.pdf",
      en: "Protein-Menu-21-Days.pdf",
    },
  },
  {
    id: "guia",
    title:    { es: "Guía Anti-Compulsión Femenina",      pt: "Guia Anti-Compulsão Feminino",          en: "Feminine Anti-Binge Guide" },
    subtitle: { es: "Por qué comes emocionalmente",        pt: "Por que você come emocionalmente",       en: "Why you eat emotionally" },
    items: {
      es: ["Mapa de disparadores", "Guión 5-5-5", "Diario de emociones"],
      pt: ["Mapa de gatilhos", "Roteiro 5-5-5", "Diário de emoções"],
      en: ["Trigger map", "5-5-5 script", "Emotions diary"],
    },
    pdf: "/bonus/guia-anti-compulsao-feminina.pdf",
    filename: {
      es: "Guia-Anti-Compulsao-Feminina.pdf",
      pt: "Guia-Anti-Compulsao-Feminina.pdf",
      en: "Feminine-Anti-Binge-Guide.pdf",
    },
  },
  {
    id: "10min",
    title:    { es: "Recetas de 10 Minutos",              pt: "Receitas de 10 Minutos",                en: "10-Minute Recipes" },
    subtitle: { es: "Para los días imposibles",            pt: "Para os dias impossíveis",              en: "For those impossible days" },
    items: {
      es: ["20 recetas probadas", "Ingredientes del día a día", "Sin dificultad"],
      pt: ["20 receitas testadas", "Ingredientes do dia a dia", "Sem dificuldade"],
      en: ["20 tried-and-tested recipes", "Everyday ingredients", "No difficulty"],
    },
    pdf: "/bonus/receitas-10-minutos.pdf",
    filename: {
      es: "Recetas-de-10-Minutos.pdf",
      pt: "Receitas-de-10-Minutos.pdf",
      en: "10-Minute-Recipes.pdf",
    },
  },
  {
    id: "fora",
    title:    { es: "Cómo Comer Fuera Sin Engordar",      pt: "Como Comer Fora Sem Engordar",          en: "How to Eat Out Without Gaining Weight" },
    subtitle: { es: "Restaurante, fiesta, viaje",          pt: "Restaurante, festa, viagem",             en: "Restaurant, party, travel" },
    items: {
      es: ["Qué pedir en cada lugar", "Bebidas inteligentes", "Volviendo al plan sin culpa"],
      pt: ["O que pedir em cada lugar", "Bebidas inteligentes", "Voltando ao plano sem culpa"],
      en: ["What to order everywhere", "Smart drinks", "Getting back on track guilt-free"],
    },
    pdf: "/bonus/como-comer-fora-sem-engordar.pdf",
    filename: {
      es: "Como-Comer-Fora-Sem-Engordar.pdf",
      pt: "Como-Comer-Fora-Sem-Engordar.pdf",
      en: "How-To-Eat-Out-Without-Gaining-Weight.pdf",
    },
  },
];


import { motivationalQuotes } from "./quotes";
export { quoteOfTheDay, motivationalQuotes } from "./quotes";


export type PlanMeal = { recipeId: string; name: L10n<string> };
export type PlanDay = {
  day: number;
  title: L10n<string>;
  breakfast: PlanMeal;
  lunch: PlanMeal;
  snack: PlanMeal;
  dinner: PlanMeal;
  quote: L10n<string>;
};

export const planDays: PlanDay[] = Array.from({ length: 21 }, (_, i) => {
  const day = i + 1;
  const idx = i % 7;
  const bId = BREAKFAST_IDS[idx], lId = LUNCH_IDS[idx], sId = SNACK_IDS[idx], dId = DINNER_IDS[idx];
  return {
    day,
    title:
      day <= 7
        ? { es: "Semana de Adaptación",    pt: "Semana de Adaptação",    en: "Adaptation Week" }
        : day <= 14
        ? { es: "Semana de Transformación", pt: "Semana de Transformação", en: "Transformation Week" }
        : { es: "Semana de Consolidación", pt: "Semana de Consolidação", en: "Consolidation Week" },
    breakfast: { recipeId: bId, name: getRecipe(bId).name },
    lunch:     { recipeId: lId, name: getRecipe(lId).name },
    snack:     { recipeId: sId, name: getRecipe(sId).name },
    dinner:    { recipeId: dId, name: getRecipe(dId).name },
    quote: motivationalQuotes[i % motivationalQuotes.length],
  };
});
