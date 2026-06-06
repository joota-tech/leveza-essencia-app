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
    title: "Adelgazamiento Femenino",
    subtitle: "Cómo tu cuerpo realmente adelgaza",
    emoji: "🌸",
    accent: "from-rose-200/70 to-amber-100/60",
    intro: "Antes de cualquier dieta, entiende cómo el cuerpo femenino realmente pierde peso — sin sufrimiento y sin restricción extrema.",
    sections: [
      { title: "Por qué las dietas fallan", body: "La restricción crea compulsión. Cuanto más prohíbes, más lo pide el cerebro. Adelgazar de forma femenina es constancia, no castigo." },
      { title: "Metabolismo femenino", body: "Las hormonas oscilan a lo largo del mes. Aceptarlo es el primer paso para un plan que funcione de verdad." },
      { title: "Saciedad real", body: "Proteína + fibra + grasa buena en cada comida. Ese es el trío que apaga el hambre emocional." },
      { title: "Hambre emocional vs. hambre física", body: "El hambre física llega poco a poco. El hambre emocional es repentina, específica y generalmente viene con culpa. Reconocerla ya es la mitad del camino." },
      { title: "Cómo crear constancia", body: "Pequeños hábitos diarios valen más que semanas perfectas seguidas de recaídas. Enfócate en el 1 % cada día." },
    ],
    checklist: [
      "Comí proteína en el desayuno",
      "Bebí agua al despertar",
      "Identifiqué si mi hambre era física o emocional",
      "No me castigué por las elecciones del día",
    ],
  },
  {
    id: "barriga-desinchada",
    index: 2,
    title: "Barriga Plana",
    subtitle: "Protocolo anti-hinchazón de 24 h",
    emoji: "🤍",
    accent: "from-amber-100/70 to-rose-100/60",
    intro: "La hinchazón no es grasa. En 24 horas puedes desinflar la barriga solo con pequeños ajustes.",
    sections: [
      { title: "Qué causa la retención", body: "Exceso de sodio, azúcar, mal sueño, estrés y pocos líquidos. Todo sumado se convierte en la barriga de fin de tarde." },
      { title: "Alimentos inflamatorios", body: "Los ultraprocesados, el refresco light, los embutidos y la harina blanca son los principales villanos silenciosos." },
      { title: "El papel del sueño y el estrés", body: "Cortisol alto = barriga hinchada. Dormir mal sabotea más que un dulce en el fin de semana." },
    ],
    checklist: [
      "Reduje la sal y los ultraprocesados hoy",
      "Bebí al menos 2 L de agua",
      "Tomé té digestivo (menta, jengibre o anís)",
      "Caminé 15 minutos después de una comida",
      "Dormí al menos 7 horas",
    ],
    extra: { kind: "protocol24h" },
    highlight: "En 24 h, tu barriga cambia. En 7 días, todo el mundo lo nota.",
  },
  {
    id: "energia-disposicao",
    index: 3,
    title: "Energía y Vitalidad",
    subtitle: "Despierta ligera, vive activa",
    emoji: "✨",
    accent: "from-rose-100/70 to-orange-100/60",
    intro: "El cansancio femenino rara vez es solo sueño. Es alimentación, hidratación, luz solar y ritmo.",
    sections: [
      { title: "Fatiga femenina", body: "Bajo hierro, baja proteína y sueño fragmentado son los 3 mayores ladrones de energía." },
      { title: "Comida que da energía", body: "Huevos, frutos rojos, frutos secos, agua y luz natural por la mañana. Receta simple, efecto brutal." },
      { title: "Rutina matutina femenina", body: "Los primeros 30 minutos definen todo el día. Hidrata, estira, come proteína y respira profundo." },
    ],
    checklist: [
      "Tomé sol en los primeros 60 min del día",
      "Desayuno con proteína",
      "2 pausas para respirar profundo durante el día",
      "Movimiento por al menos 20 minutos",
    ],
    extra: { kind: "morningRoutine" },
  },
  {
    id: "sono-recuperacao",
    index: 4,
    title: "Sueño y Recuperación",
    subtitle: "Adelgazas mientras duermes",
    emoji: "🌙",
    accent: "from-violet-100/60 to-rose-100/60",
    intro: "Dormir mal engorda, hincha y deja la piel opaca. Cuidar el sueño es cuidar la silueta.",
    sections: [
      { title: "Cortisol y grasa abdominal", body: "Cuando el cortisol se mantiene alto por la noche, el cuerpo almacena grasa en el abdomen. Relajarse es una estrategia para adelgazar." },
      { title: "Ritual nocturno femenino", body: "Luz tenue, pantallas lejos, té relajante e intención para mañana. Simple, eficaz, premium." },
      { title: "Qué comer de noche", body: "Comidas ligeras, sin azúcar y sin cafeína 6 h antes de dormir." },
    ],
    checklist: [
      "Apagué las pantallas 30 min antes de dormir",
      "Tomé té relajante (manzanilla, melisa, lavanda)",
      "Habitación oscura y fresca",
      "Anoté una intención para mañana",
    ],
    extra: { kind: "nightRitual" },
  },
  {
    id: "hidratacao-inteligente",
    index: 5,
    title: "Hidratación Inteligente",
    subtitle: "El agua es el secreto más subestimado",
    emoji: "💧",
    accent: "from-sky-100/60 to-rose-100/60",
    intro: "No tienes hambre. Tienes sed. El 80 % de las mujeres viven en deshidratación leve crónica.",
    sections: [
      { title: "Agua vs. retención", body: "Cuanto menos bebes, más retiene tu cuerpo. La solución para la hinchazón es beber más, no menos." },
      { title: "Cuánto beber", body: "35 ml por kg de peso. Distribuido a lo largo del día, no todo de una vez." },
      { title: "Aguas saborizadas", body: "Limón, menta, jengibre, pepino. Hacen el hábito agradable y además deshinchen." },
    ],
    checklist: [
      "Bebí 1 vaso al despertar",
      "Botella de agua siempre cerca",
      "Llegué a los 8 vasos hoy",
      "Tomé un agua saborizada",
    ],
    extra: { kind: "hydration" },
  },
  {
    id: "hormonios",
    index: 6,
    title: "Hormonas y Cuerpo Femenino",
    subtitle: "Trabaja a favor de tu ciclo",
    emoji: "🌷",
    accent: "from-rose-200/70 to-pink-100/60",
    intro: "No eres la misma todos los días del mes — y está bien. Adaptar la rutina al ciclo lo cambia todo.",
    sections: [
      { title: "SPM y compulsión", body: "En la fase lútea, la serotonina baja y el deseo de dulce aumenta. No es falta de fuerza de voluntad — es química." },
      { title: "Cómo atravesar el SPM", body: "Más proteína, más magnesio, más sueño, menos autoexigencia. Acoge el ciclo." },
      { title: "Retención hormonal", body: "Es temporal. No es grasa. No abandones el plan por culpa de la báscula en esa fase." },
    ],
    checklist: [
      "Marqué en qué fase del ciclo estoy",
      "Comí más proteína en los días de más hambre",
      "No me exigí por la retención hormonal",
      "Fui gentil conmigo misma hoy",
    ],
    extra: { kind: "cycle" },
  },
  {
    id: "autoestima-mentalidade",
    index: 7,
    title: "Autoestima y Mentalidad",
    subtitle: "El cuerpo sigue a la mente",
    emoji: "👑",
    accent: "from-rose-100/70 to-amber-100/60",
    intro: "Ningún plan funciona si tu voz interna te sabotea. Cambiar el diálogo interno es parte del proceso.",
    sections: [
      { title: "Culpa alimentaria", body: "Comer algo fuera del plan no te define. El siguiente movimiento sí. Vuelve a tu centro con ligereza." },
      { title: "Identidad vs. dieta", body: "Deja de hacer dieta. Empieza a ser la mujer que se cuida. La identidad cambia el comportamiento, no al revés." },
      { title: "La constancia vence a la intensidad", body: "No necesitas ser perfecta. Necesitas estar presente. El 70 % es más que suficiente para transformar." },
    ],
    checklist: [
      "Me hablé con gentileza hoy",
      "No asocié mi comida con culpa",
      "Escribí 1 cosa de la que estoy orgullosa de mí",
      "Recordé: me estoy convirtiendo en la mujer que admiro",
    ],
    extra: { kind: "diary" },
  },
  {
    id: "transformacao-definitiva",
    index: 8,
    title: "Transformación Definitiva",
    subtitle: "Después de los 21 días",
    emoji: "🏆",
    accent: "from-amber-200/70 to-rose-200/70",
    intro: "Los 21 días fueron solo el comienzo. Ahora viene el estilo de vida — ligero, sostenible, tuyo.",
    sections: [
      { title: "Mantenimiento real", body: "No existe el post-dieta. Existe la vida con consciencia. Mantén 3 hábitos innegociables." },
      { title: "Las recaídas son parte del camino", body: "Caer no es fallar. No volver sí. El plan permite caídas — y la vuelta siempre es posible." },
      { title: "El próximo ciclo", body: "Define un nuevo objetivo. Puede ser cuerpo, energía, sueño, autoconfianza. Continuar es el secreto." },
    ],
    checklist: [
      "Tengo 3 hábitos innegociables definidos",
      "Sé qué hacer cuando me salgo del plan",
      "Definí mi próximo objetivo",
      "Reconozco cuánto he evolucionado",
    ],
    extra: { kind: "future" },
    highlight: "Llegaste hasta aquí. Eso ya te diferencia.",
  },
];

export function moduleUnlockRequirement(index: number) {
  return Math.max(0, (index - 1) * 2);
}

export function isModuleUnlocked(index: number, completedDays: number) {
  return completedDays >= moduleUnlockRequirement(index);
}
