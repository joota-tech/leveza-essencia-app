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
  difficulty: "Fácil" | "Medio" | "Avanzado";
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
  "Desayuno proteico",
  "Almuerzo",
  "Cena",
  "Merienda",
  "Anti-compulsión",
  "Quemar barriga",
  "Rápidas",
  "Ansiedad",
  "Ligeras",
  "Noche",
];

// ---------- helper to keep recipe objects compact ----------
type R = Omit<Recipe, "image"> & { image: string };
const make = (r: R): Recipe => r;

export const recipes: Recipe[] = [
  // ============ DESAYUNO ============
  make({
    id: "omelete-anti-compulsao",
    name: "Tortilla Anti-Compulsión",
    category: "Desayuno proteico",
    image: omelete,
    time: "10 min", difficulty: "Fácil", satiety: 5, protein: "28g", calories: "320 kcal",
    bestTime: "Mañana",
    benefits: ["Saciedad prolongada", "Reduce el deseo de dulce", "Energía estable"],
    feminineBenefits: "Equilibra las hormonas y reduce la hinchazón matutina.",
    ingredients: ["3 huevos de campo", "1 cucharada de queso cottage", "Espinaca fresca", "Sal rosa y pimienta", "Aceite de oliva extra virgen"],
    steps: ["Bate los huevos con sal y pimienta.", "Calienta la sartén con aceite de oliva.", "Agrega la espinaca por 30 segundos.", "Vierte los huevos y cubre con cottage.", "Dobla y sirve tibio."],
  }),
  make({
    id: "ovos-mexidos-abacate",
    name: "Huevos Revueltos con Aguacate",
    category: "Desayuno proteico",
    image: rOvosAbacate,
    time: "8 min", difficulty: "Fácil", satiety: 5, protein: "22g", calories: "340 kcal",
    bestTime: "Mañana",
    benefits: ["Grasas buenas", "Saciedad larga", "Energía limpia"],
    feminineBenefits: "Estabiliza el azúcar y evita el ataque de hambre a las 10 h.",
    ingredients: ["3 huevos", "½ aguacate", "Sal rosa", "Pimienta negra", "Aceite de oliva"],
    steps: ["Calienta el aceite a fuego bajo.", "Bate los huevos y ponlos en la sartén.", "Revuelve despacio hasta que queden cremosos.", "Sirve con el aguacate en rodajas."],
  }),
  make({
    id: "panqueca-proteica-banana",
    name: "Panqueque Proteico de Plátano",
    category: "Desayuno proteico",
    image: rPanquecaBanana,
    time: "10 min", difficulty: "Fácil", satiety: 4, protein: "20g", calories: "300 kcal",
    bestTime: "Mañana o pre-entrenamiento",
    benefits: ["Dulce sin culpa", "Sin harina blanca", "Energía rápida"],
    feminineBenefits: "Calma el antojo de dulce desde temprano, sin salirte del plan.",
    ingredients: ["1 plátano", "2 huevos", "1 cucharada de avena", "Canela", "Crema de cacahuate"],
    steps: ["Aplasta el plátano con los huevos.", "Mezcla la avena y la canela.", "Haz panqueques pequeños en la sartén.", "Termina con crema de cacahuate."],
  }),
  make({
    id: "iogurte-grego-castanhas",
    name: "Yogur Griego con Frutos Secos",
    category: "Desayuno proteico",
    image: rIogurteCastanhas,
    time: "3 min", difficulty: "Fácil", satiety: 4, protein: "18g", calories: "260 kcal",
    bestTime: "Mañana rápida",
    benefits: ["Listo en minutos", "Probiótico", "Saciedad real"],
    feminineBenefits: "Cuida el intestino y deshincha rápido.",
    ingredients: ["1 pote de yogur griego natural", "1 cucharada de frutos secos picados", "1 cucharada de chía", "Canela"],
    steps: ["Coloca el yogur en el tazón.", "Agrega chía y frutos secos.", "Termina con canela y sirve."],
  }),
  make({
    id: "tapioca-frango-queijo",
    name: "Tapioca de Pollo y Queso",
    category: "Desayuno proteico",
    image: rTapiocaFrango,
    time: "12 min", difficulty: "Fácil", satiety: 5, protein: "30g", calories: "360 kcal",
    bestTime: "Mañana completa",
    benefits: ["Sin gluten", "Alta proteína", "Doble saciedad"],
    feminineBenefits: "Desayuno que aguanta hasta el almuerzo sin picar.",
    ingredients: ["3 cucharadas de almidón de tapioca", "80 g de pollo desmenuzado", "1 rebanada de queso blanco", "Orégano"],
    steps: ["Extiende el almidón en la sartén caliente.", "Cuando cuaje, da la vuelta.", "Rellena con pollo y queso.", "Dobla y sirve."],
  }),
  make({
    id: "crepioca-queijo",
    name: "Crepioca de Queso",
    category: "Desayuno proteico",
    image: rCrepioca,
    time: "8 min", difficulty: "Fácil", satiety: 4, protein: "22g", calories: "280 kcal",
    bestTime: "Mañana",
    benefits: ["Lista en minutos", "Versátil", "Proteica"],
    feminineBenefits: "La favorita del reto: práctica, ligera y deliciosa.",
    ingredients: ["2 huevos", "2 cucharadas de almidón de tapioca", "1 rebanada de queso blanco", "Sal"],
    steps: ["Mezcla huevos, tapioca y sal.", "Vierte en la sartén antiadherente.", "Coloca el queso y dobla.", "Sirve caliente."],
  }),
  make({
    id: "vitamina-whey-amendoim",
    name: "Batido Proteico de Cacao",
    category: "Desayuno proteico",
    image: rVitaminaCacau,
    time: "3 min", difficulty: "Fácil", satiety: 4, protein: "30g", calories: "320 kcal",
    bestTime: "Mañana o post-entrenamiento",
    benefits: ["Rico en proteína", "Calma el antojo de dulce", "Energía limpia"],
    feminineBenefits: "Desayuno con cara de postre — sin culpa.",
    ingredients: ["1 scoop de whey", "200 ml de leche vegetal", "1 cucharada de cacao", "1 cucharada de crema de cacahuate", "Hielo"],
    steps: ["Bate todo en la licuadora.", "Sirve de inmediato."],
  }),

  // ============ ALMUERZO ============
  make({
    id: "frango-airfryer",
    name: "Pollo Crocante en Airfryer",
    category: "Almuerzo",
    image: frango,
    time: "20 min", difficulty: "Fácil", satiety: 5, protein: "42g", calories: "380 kcal",
    bestTime: "Almuerzo",
    benefits: ["Alta proteína", "Baja grasa", "Crocante sin fritura"],
    feminineBenefits: "Aguanta toda la tarde y evita los antojos.",
    ingredients: ["200 g de pechuga de pollo en cubos", "1 huevo", "Harina de almendras", "Páprika, ajo, sal", "Limón"],
    steps: ["Sazona el pollo con limón y especias.", "Pasa por el huevo y luego por la harina.", "Airfryer 200 °C por 12 min, volteando a la mitad.", "Sirve con ensalada verde."],
  }),
  make({
    id: "bowl-proteico",
    name: "Bowl Proteico Femenino",
    category: "Almuerzo",
    image: bowl,
    time: "15 min", difficulty: "Fácil", satiety: 5, protein: "38g", calories: "420 kcal",
    bestTime: "Almuerzo post-entrenamiento",
    benefits: ["Completo", "Rico en fibra", "Anti-compulsión"],
    feminineBenefits: "Comida completa que evita el hambre de las 16 h.",
    ingredients: ["150 g de pollo a la plancha", "2 huevos cocidos", "Hojas verdes", "Crema de cacahuate", "Aceite de oliva"],
    steps: ["Forma la base con las hojas.", "Agrega el pollo, los huevos y la crema.", "Rocía con aceite de oliva y termina."],
  }),
  make({
    id: "carne-moida-abobrinha",
    name: "Carne Molida con Calabacín",
    category: "Almuerzo",
    image: rCarneAbobrinha,
    time: "20 min", difficulty: "Fácil", satiety: 5, protein: "36g", calories: "390 kcal",
    bestTime: "Almuerzo",
    benefits: ["Rica en hierro", "Saciante", "Bajo en carbos"],
    feminineBenefits: "Repone el hierro y combate el cansancio típico del ciclo.",
    ingredients: ["200 g de carne molida magra", "1 calabacín en cubos", "1 tomate", "Cebolla, ajo", "Aceite de oliva y sal"],
    steps: ["Sofríe cebolla y ajo.", "Agrega la carne hasta dorar.", "Incorpora el calabacín y el tomate.", "Cocina 10 min y sirve."],
  }),
  make({
    id: "file-mignon-pure-couveflor",
    name: "Solomillo con Puré de Coliflor",
    category: "Almuerzo",
    image: rFilePure,
    time: "25 min", difficulty: "Medio", satiety: 5, protein: "44g", calories: "450 kcal",
    bestTime: "Almuerzo especial",
    benefits: ["Premium", "Bajo en carbos", "Muy saciante"],
    feminineBenefits: "Almuerzo de domingo sin salirte del plan.",
    ingredients: ["200 g de solomillo en medallón", "½ coliflor", "1 cucharada de mantequilla ghee", "Sal, pimienta, romero"],
    steps: ["Cocina la coliflor y procesa con ghee.", "Sella el solomillo 3 min por cada lado.", "Sazona con sal y romero.", "Sirve sobre el puré."],
  }),
  make({
    id: "strogonoff-fit-frango",
    name: "Stroganoff Fit de Pollo",
    category: "Almuerzo",
    image: rStrogonoff,
    time: "20 min", difficulty: "Fácil", satiety: 5, protein: "40g", calories: "410 kcal",
    bestTime: "Almuerzo",
    benefits: ["Cremoso sin culpa", "Proteico", "Sabroso"],
    feminineBenefits: "Versión fit del clásico para satisfacer ese antojo.",
    ingredients: ["200 g de pechuga de pollo en tiras", "100 g de yogur natural", "1 cucharada de extracto de tomate", "Cebolla, ajo, mostaza", "Champiñones"],
    steps: ["Dora el pollo con cebolla y ajo.", "Agrega el tomate y la mostaza.", "Incorpora los champiñones y el yogur fuera del fuego.", "Sirve con arroz de coliflor."],
  }),
  make({
    id: "salmao-grelhado-aspargos",
    name: "Salmón a la Plancha con Espárragos",
    category: "Almuerzo",
    image: rSalmaoAspargos,
    time: "18 min", difficulty: "Fácil", satiety: 5, protein: "40g", calories: "430 kcal",
    bestTime: "Almuerzo",
    benefits: ["Omega-3", "Anti-inflamatorio", "Piel y cabello"],
    feminineBenefits: "Hormonas en equilibrio y piel radiante.",
    ingredients: ["1 filete de salmón", "Espárragos frescos", "Limón", "Aceite de oliva", "Sal y hierbas"],
    steps: ["Sazona el salmón con limón y hierbas.", "Cocina a la plancha 4 min por cada lado.", "Saltea los espárragos en aceite de oliva.", "Sirve juntos."],
  }),
  make({
    id: "almondegas-molho-tomate",
    name: "Albóndigas en Salsa de Tomate",
    category: "Almuerzo",
    image: rAlmondegas,
    time: "30 min", difficulty: "Medio", satiety: 5, protein: "38g", calories: "400 kcal",
    bestTime: "Almuerzo",
    benefits: ["Comfort food fit", "Proteico", "Saciante"],
    feminineBenefits: "El sabor de casa, sin pesarte.",
    ingredients: ["250 g de carne molida", "1 huevo", "Harina de almendras", "Salsa de tomate natural", "Albahaca"],
    steps: ["Mezcla la carne, el huevo y la harina, y forma las albóndigas.", "Dora las albóndigas.", "Agrega la salsa y cocina 15 min.", "Termina con albahaca."],
  }),

  // ============ CENA ============
  make({
    id: "tilapia-limao",
    name: "Tilapia con Limón",
    category: "Cena",
    image: tilapia,
    time: "15 min", difficulty: "Fácil", satiety: 4, protein: "35g", calories: "260 kcal",
    bestTime: "Cena ligera",
    benefits: ["Digestión fácil", "Anti-inflamatorio", "Ligero de noche"],
    feminineBenefits: "Perfecto para las noches en que no quieres pesarte.",
    ingredients: ["1 filete de tilapia", "Jugo de 1 limón", "Romero", "Aceite de oliva", "Sal"],
    steps: ["Marina el filete con limón y hierbas por 10 min.", "Cocina a la plancha 4 min por cada lado.", "Termina con aceite de oliva en crudo."],
  }),
  make({
    id: "pizza-proteica",
    name: "Pizza Proteica Low Carb",
    category: "Cena",
    image: pizza,
    time: "25 min", difficulty: "Medio", satiety: 5, protein: "32g", calories: "410 kcal",
    bestTime: "Cena del viernes",
    benefits: ["Calma el antojo", "Sin culpa", "Sin hinchar"],
    feminineBenefits: "La receta comodín para cuando se antoja pizza.",
    ingredients: ["Masa de coliflor", "Salsa de tomate natural", "Mozzarella de búfala", "Albahaca fresca"],
    steps: ["Hornea la masa 8 min.", "Agrega salsa, queso y hierbas.", "Vuelve al horno 10 min."],
  }),
  make({
    id: "sopa-frango-legumes",
    name: "Sopa de Pollo con Verduras",
    category: "Cena",
    image: rSopaFrango,
    time: "30 min", difficulty: "Fácil", satiety: 5, protein: "32g", calories: "280 kcal",
    bestTime: "Cena calentita",
    benefits: ["Reconfortante", "Deshincha", "Hidratante"],
    feminineBenefits: "Confort líquido para cerrar bien el día.",
    ingredients: ["150 g de pollo desmenuzado", "Zanahoria, calabacín, chayote", "Cebolla, ajo", "Caldo casero", "Perejil"],
    steps: ["Sofríe cebolla y ajo.", "Incorpora el pollo y las verduras.", "Cubre con caldo y cocina 20 min.", "Termina con perejil."],
  }),
  make({
    id: "hamburguer-caseiro-alface",
    name: "Hamburguesa Casera en Lechuga",
    category: "Cena",
    image: rHamburguerAlface,
    time: "15 min", difficulty: "Fácil", satiety: 5, protein: "36g", calories: "360 kcal",
    bestTime: "Cena contundente",
    benefits: ["Sin pan", "Jugosa", "Proteica"],
    feminineBenefits: "Calma el antojo de hamburguesa sin salirte del plan.",
    ingredients: ["200 g de carne molida", "Lechuga americana", "Tomate", "Cebolla morada", "Mostaza dijon"],
    steps: ["Forma la hamburguesa y sazona.", "Cocina en la sartén 4 min por cada lado.", "Arma con lechuga en lugar de pan.", "Agrega tomate, cebolla y mostaza."],
  }),
  make({
    id: "wrap-low-carb-frango",
    name: "Wrap Low Carb de Pollo",
    category: "Cena",
    image: rWrapFrango,
    time: "12 min", difficulty: "Fácil", satiety: 4, protein: "30g", calories: "320 kcal",
    bestTime: "Cena ligera",
    benefits: ["Práctico", "Sin harina", "Proteico"],
    feminineBenefits: "Crepioca como wrap: ligereza y sabor en cada mordida.",
    ingredients: ["1 crepioca fina", "100 g de pollo desmenuzado", "Queso crema light", "Lechuga y tomate"],
    steps: ["Haz la crepioca bien fina.", "Extiende el queso crema.", "Rellena con pollo y hojas.", "Enrolla y sirve."],
  }),
  make({
    id: "omelete-recheada-jantar",
    name: "Tortilla Rellena de Espinaca",
    category: "Cena",
    image: rOmeleteEspinafre,
    time: "10 min", difficulty: "Fácil", satiety: 4, protein: "26g", calories: "290 kcal",
    bestTime: "Cena ligera",
    benefits: ["Ligera", "Digestión fácil", "Proteica"],
    feminineBenefits: "Cuando el día fue pesado, ella lo resuelve en 10 min.",
    ingredients: ["3 huevos", "Espinaca", "Queso blanco", "Tomate cherry", "Aceite de oliva"],
    steps: ["Sofríe la espinaca rápidamente.", "Bate los huevos y viértelos en la sartén.", "Agrega queso y tomate.", "Dobla y sirve."],
  }),
  make({
    id: "espetinho-carne-legumes",
    name: "Brochetas de Carne y Verduras",
    category: "Cena",
    image: rEspetinho,
    time: "20 min", difficulty: "Fácil", satiety: 5, protein: "38g", calories: "370 kcal",
    bestTime: "Cena especial",
    benefits: ["Festivo", "Equilibrado", "Saciante"],
    feminineBenefits: "Viernes fit sin perder el brillo.",
    ingredients: ["200 g de carne en cubos", "Cebolla, pimiento, calabacín", "Sal y pimienta", "Aceite de oliva", "Romero"],
    steps: ["Alterna carne y verduras en el pincho.", "Sazona y rocía con aceite de oliva.", "Cocina a la plancha 12 min girando.", "Sirve caliente."],
  }),

  // ============ MERIENDA ============
  make({
    id: "ovos-cremosos",
    name: "Huevos Cremosos de la Calma",
    category: "Merienda",
    image: rOvosCremosos,
    time: "8 min", difficulty: "Fácil", satiety: 4, protein: "20g",
    bestTime: "Merienda de tarde",
    benefits: ["Reduce la ansiedad", "Saciedad rápida"],
    feminineBenefits: "Rescate emocional en 8 minutos.",
    ingredients: ["3 huevos", "1 cucharada de mantequilla ghee", "Sal rosa", "Cebollín"],
    steps: ["Bate los huevos.", "Cocina a fuego bajo revolviendo siempre.", "Termina cremoso."],
  }),
  make({
    id: "mix-castanhas-cacau",
    name: "Mix de Frutos Secos con Cacao",
    category: "Merienda",
    image: rMixCastanhas,
    time: "1 min", difficulty: "Fácil", satiety: 3, protein: "8g", calories: "180 kcal",
    bestTime: "Merienda rápida",
    benefits: ["Energía limpia", "Calma el antojo de dulce", "Práctico"],
    feminineBenefits: "El snack de bolsa para emergencias dulces.",
    ingredients: ["20 g de nueces de Brasil", "10 g de almendras", "1 cucharada de nibs de cacao"],
    steps: ["Mezcla todo en un potecito.", "Sirve."],
  }),
  make({
    id: "iogurte-frutas-vermelhas",
    name: "Yogur con Frutos Rojos",
    category: "Merienda",
    image: rIogurteFrutas,
    time: "3 min", difficulty: "Fácil", satiety: 3, protein: "15g", calories: "200 kcal",
    bestTime: "Merienda de tarde",
    benefits: ["Antioxidante", "Probiótico", "Refrescante"],
    feminineBenefits: "Antioxidantes para la piel y el buen humor.",
    ingredients: ["1 pote de yogur griego natural", "½ taza de frutos rojos", "1 cucharada de chía"],
    steps: ["Coloca el yogur en el tazón.", "Agrega los frutos y la chía.", "Sirve frío."],
  }),
  make({
    id: "ovo-cozido-tomate",
    name: "Huevo Cocido con Tomate",
    category: "Merienda",
    image: rOvoTomate,
    time: "10 min", difficulty: "Fácil", satiety: 3, protein: "12g", calories: "150 kcal",
    bestTime: "Merienda práctica",
    benefits: ["Simple", "Saciante", "Económico"],
    feminineBenefits: "Merienda comodín para los días ajetreados.",
    ingredients: ["2 huevos", "1 tomate", "Sal rosa", "Aceite de oliva"],
    steps: ["Cocina los huevos 8 min.", "Corta con el tomate.", "Sazona y sirve."],
  }),
  make({
    id: "queijo-coalho-airfryer",
    name: "Queso Fresco en Airfryer",
    category: "Merienda",
    image: rQueijoCoalho,
    time: "8 min", difficulty: "Fácil", satiety: 4, protein: "18g", calories: "240 kcal",
    bestTime: "Merienda de tarde",
    benefits: ["Crocante", "Proteico", "Sin fritura"],
    feminineBenefits: "Sensación de botana sin culpa.",
    ingredients: ["120 g de queso fresco en cubos", "Orégano", "Aceite de oliva"],
    steps: ["Sazona el queso con orégano.", "Airfryer 200 °C por 6 min.", "Sirve caliente."],
  }),
  make({
    id: "shake-proteico-cacau",
    name: "Batido Proteico de Cacao",
    category: "Merienda",
    image: rShakeCacau,
    time: "3 min", difficulty: "Fácil", satiety: 4, protein: "28g", calories: "260 kcal",
    bestTime: "Merienda post-entrenamiento",
    benefits: ["Postre fit", "Recupera músculos", "Calma el antojo de dulce"],
    feminineBenefits: "Ese 'dulce de las cinco de la tarde' resuelto en 3 minutos.",
    ingredients: ["1 scoop de whey", "200 ml de leche vegetal", "1 cucharada de cacao", "Hielo"],
    steps: ["Bate todo en la licuadora.", "Sirve de inmediato."],
  }),
  make({
    id: "pasta-amendoim-maca",
    name: "Manzana con Crema de Cacahuate",
    category: "Merienda",
    image: rMacaAmendoim,
    time: "2 min", difficulty: "Fácil", satiety: 3, protein: "8g", calories: "210 kcal",
    bestTime: "Merienda de tarde",
    benefits: ["Dulce natural", "Energía", "Saciante"],
    feminineBenefits: "Combinación que calma el antojo de dulce y da energía.",
    ingredients: ["1 manzana", "1 cucharada de crema de cacahuate integral", "Canela"],
    steps: ["Corta la manzana en rodajas.", "Sirve con crema de cacahuate y canela."],
  }),
];

// ---------- planDays referencing recipe ids ----------
const B = ["omelete-anti-compulsao","ovos-mexidos-abacate","panqueca-proteica-banana","iogurte-grego-castanhas","tapioca-frango-queijo","crepioca-queijo","vitamina-whey-amendoim"];
const L = ["frango-airfryer","bowl-proteico","carne-moida-abobrinha","file-mignon-pure-couveflor","strogonoff-fit-frango","salmao-grelhado-aspargos","almondegas-molho-tomate"];
const S = ["mix-castanhas-cacau","iogurte-frutas-vermelhas","ovo-cozido-tomate","queijo-coalho-airfryer","shake-proteico-cacau","pasta-amendoim-maca","ovos-cremosos"];
const D = ["tilapia-limao","sopa-frango-legumes","hamburguer-caseiro-alface","wrap-low-carb-frango","omelete-recheada-jantar","espetinho-carne-legumes","pizza-proteica"];

const getRecipe = (id: string) => recipes.find((r) => r.id === id)!;

export const modules = [
  { id: "emagrecer", title: "Adelgazar Sin Sufrir", subtitle: "Los 5 pilares femeninos", progress: 40 },
  { id: "compulsao", title: "Control de la Compulsión", subtitle: "Domina los disparadores", progress: 20 },
  { id: "proteicas", title: "Recetas Proteicas", subtitle: "Saciedad real", progress: 60 },
  { id: "barriga", title: "Quemar Barriga", subtitle: "Protocolo de 7 días", progress: 10 },
  { id: "rapidas", title: "Recetas de 10 Minutos", subtitle: "Para la rutina ajetreada", progress: 0 },
  { id: "fora", title: "Comer Fuera Sin Engordar", subtitle: "Guía práctica", progress: 0 },
  { id: "ansiedade", title: "Ansiedad Alimentaria", subtitle: "Acompañamiento y técnica", progress: 30 },
  { id: "plano", title: "Plan de 21 Días", subtitle: "Tu jornada completa", progress: 14 },
];

export const bonuses: Array<{
  id: string;
  title: string;
  subtitle: string;
  items: string[];
  pdf?: string;
  filename?: string;
}> = [
  { id: "cardapio", title: "Menú Proteico de 21 Días", subtitle: "Listo para imprimir", items: ["Desayuno, almuerzo, cena y merienda", "Lista de compras semanal", "Sustituciones inteligentes"], pdf: "/bonus/menu-proteico-21-dias.pdf", filename: "Menu-Proteico-de-21-Dias.pdf" },
  { id: "guia", title: "Guía Anti-Compulsión Femenina", subtitle: "Por qué comes emocionalmente", items: ["Mapa de disparadores", "Guión 5-5-5", "Diario de emociones"], pdf: "/bonus/guia-anti-compulsao-feminina.pdf", filename: "Guia-Anti-Compulsao-Feminina.pdf" },
  { id: "10min", title: "Recetas de 10 Minutos", subtitle: "Para los días imposibles", items: ["20 recetas probadas", "Ingredientes del día a día", "Sin dificultad"], pdf: "/bonus/receitas-10-minutos.pdf", filename: "Recetas-de-10-Minutos.pdf" },
  { id: "fora", title: "Cómo Comer Fuera Sin Engordar", subtitle: "Restaurante, fiesta, viaje", items: ["Qué pedir en cada lugar", "Bebidas inteligentes", "Volviendo al plan sin culpa"], pdf: "/bonus/como-comer-fora-sem-engordar.pdf", filename: "Como-Comer-Fora-Sem-Engordar.pdf" },
];


import { motivationalQuotes } from "./quotes";
export { quoteOfTheDay, motivationalQuotes } from "./quotes";




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
    title: day <= 7 ? "Semana de Adaptación" : day <= 14 ? "Semana de Transformación" : "Semana de Consolidación",
    breakfast: { recipeId: bId, name: getRecipe(bId).name },
    lunch: { recipeId: lId, name: getRecipe(lId).name },
    snack: { recipeId: sId, name: getRecipe(sId).name },
    dinner: { recipeId: dId, name: getRecipe(dId).name },
    quote: motivationalQuotes[i % motivationalQuotes.length],
  };
});
