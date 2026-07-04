// Dictionaries for UI chrome. Recipe/module/quote content remains in
// app-data/modules-data/quotes and will be localized in follow-up passes.

export type Locale = "es" | "pt" | "en";

type AntiBingeSection = {
  title: string;
  cardDesc: string;
  subtitle: string;
  intro: string;
  steps: { title: string; desc: string }[];
  affirmations: string[];
};

type Dict = {
  app: { title: string; description: string; shortTitle: string };
  common: {
    loading: string; back: string; cancel: string; save: string; close: string;
    skipToContent: string; offlineBanner: string;
  };
  nav: { home: string; recipes: string; plan: string; acolher: string; bonus: string; profile: string; ariaLabel: string };
  sos: {
    ariaLabel: string; label: string; eyebrow: string; title: string; breathTitle: string;
    in: string; hold: string; out: string; repeat: string; overcomePeak: string;
    talkToNutri: string; antiBingeGuide: string; motivacionais: string[]; tecnicas: string[];
  };
  settings: {
    title: string; yourData: string; name: string; age: string; height: string;
    startWeight: string; goalWeight: string; appearance: string; theme: string;
    light: string; dark: string; fontSize: string; small: string; medium: string;
    large: string; sound: string; soundEffects: string; language: string;
    languageHint: string; autoSave: string;
  };
  home: {
    metaTitle: string; metaDescription: string; greeting: string; quoteEyebrow: string;
    reminderLabel: string; reminderAriaLabel: string; reminderDisable: string;
    reminderDisableAria: string; reminderBtn: string; journeyAlt: string;
    journeyLabel: string; dayOf: string; percentDone: string; continueBtn: string;
    streakLabel: string; favoritesLabel: string; stateLabel: string; stateValue: string;
    hydrationLabel: string; waterGlasses: string; addWater: string;
    nutriTitle: string; nutriSub: string; evolutionTitle: string; evolutionSub: string;
    modulesTitle: string; modulesSub: string; modulesViewAll: string;
    moduleBadge: string; moduleLocked: string; calendarTitle: string; calendarViewAll: string;
  };
  plan: {
    metaTitle: string; weekLabel: string; h1: string; daysCompleted: string;
    dayBadge: string; dayHeading: string; breakfast: string; lunch: string;
    snack: string; dinner: string; completedBtn: string; completeBtn: string;
    celebrateTitle: string; celebrateSub: string; viewRecipe: string;
  };
  profile: {
    metaTitle: string; greeting: string; daysLabel: string; goalLabel: string;
    favoritesLabel: string; evolutionTitle: string; startWeight: string; goalWeight: string;
    progressLabel: string; moodTitle: string; moodSaved: string;
    evolutionRow: string; notificationsRow: string; settingsRow: string;
    resetRow: string; resetTitle: string; resetDesc: string;
    resetCancel: string; resetConfirm: string;
  };
  onboarding: {
    metaTitle: string; welcomeTitle: string; welcomeBody: string; welcomeSteps: string;
    startBtn: string; finalTitle: string; finalBody: string; accessBtn: string;
    backBtn: string; stepOf: string; skipBtn: string; continueBtn: string;
    name: { question: string; placeholder: string };
    age: { question: string; placeholder: string };
    height: { question: string; hint: string; placeholder: string };
    weight: { question: string; hint: string; placeholder: string };
    goalWeight: { question: string; hint: string; placeholder: string };
    objective: { question: string; options: string[] };
    difficulty: { question: string; options: string[] };
    routine: { question: string; options: string[] };
  };
  nutri: {
    metaTitle: string; h1: string; status: string; clearBtn: string;
    welcome: string; placeholder: string; quick: string[];
    errorGeneral: string; errorOffline: string;
  };
  notifications: {
    metaTitle: string; h1: string; intro: string; waterToggle: string;
    mealsToggle: string; motivationToggle: string; sleepToggle: string;
    schedulesTitle: string; firstWater: string; lunchTime: string; savedNote: string;
  };
  evolution: {
    metaTitle: string; eyebrow: string; h1: string; daysCompleted: string;
    streak: string; waterGlasses: string; weightGoal: string; journeyTitle: string;
    dayTitle: string; percentDone: string; achievementsTitle: string;
    medal7days: string; medalHydra: string; medalControl: string; medalPerfect: string;
    earned: string; locked: string; continueBtn: string;
  };
  bonus: {
    metaTitle: string; eyebrow: string; h1: string; intro: string;
    bonusBadge: string; openBtn: string; comingSoon: string;
    downloadAria: string; closeAria: string;
  };
  recipes: {
    metaTitle: string; eyebrow: string; h1: string; searchPlaceholder: string;
    satietyLabel: string; notFound: string; forYou: string; benefitsTitle: string;
    bestTimeTitle: string; ingredientsTitle: string; prepTitle: string;
    videoTitle: string; timeLabel: string; proteinLabel: string;
  };
  antiBinge: {
    metaTitle: string; eyebrow: string; h1: string; intro: string;
    emergencyEyebrow: string; emergencyTitle: string; emergencyBody: string;
    emergencyBtn: string; reflectionTitle: string; reflectionBody: string;
    modalTitle: string; emergencyMsgs: string[]; techniquesTitle: string;
    techniques: string[]; feelBetterBtn: string; backLink: string;
    stepsTitle: string; affirmationsTitle: string; contentNotFound: string;
    doce: AntiBingeSection;
    ansiedade: AntiBingeSection;
    emocional: AntiBingeSection;
    noite: AntiBingeSection;
    recaida: AntiBingeSection;
    culpa: AntiBingeSection;
  };
  modules: {
    metaTitle: string; detailMetaTitle: string; eyebrow: string; h1: string;
    progressEyebrow: string; progressTitle: string; progressSub: string;
    moduleBadge: string; openModule: string; lockedSingular: string; lockedPlural: string;
    notFound: string; lockedTitle: string; lockedDesc: string;
    checklistTitle: string; checklistHint: string; nutriBtn: string;
    protocol24h: { title: string; steps: { time: string; action: string }[] };
    morningRoutine: { title: string; items: string[] };
    nightRitual: { title: string; items: string[] };
    hydration: { title: string; items: string[] };
    cycle: { title: string; phases: { name: string; tip: string }[] };
    diary: { title: string; placeholder: string };
    future: { title: string; placeholder: string };
  };
  difficulty: { easy: string; medium: string; advanced: string };
  categories: {
    all: string; breakfast: string; lunch: string; dinner: string; snack: string;
    antiBinge: string; belly: string; quick: string; anxiety: string; light: string; night: string;
  };
};

// ─────────────────────────────────────────────
//  ESPAÑOL
// ─────────────────────────────────────────────
const es: Dict = {
  app: {
    title: "Reto 21 Días — Adelgaza Comiendo Bien",
    description: "Protocolo femenino de adelgazamiento con alimentación proteica, sin hambre y sin culpa.",
    shortTitle: "Reto 21",
  },
  common: {
    loading: "Cargando…", back: "Volver", cancel: "Cancelar", save: "Guardar", close: "Cerrar",
    skipToContent: "Ir al contenido",
    offlineBanner: "Modo sin conexión — usando datos guardados en tu móvil",
  },
  nav: { home: "Inicio", recipes: "Recetas", plan: "21 Días", acolher: "Acoger", bonus: "Bonos", profile: "Perfil", ariaLabel: "Navegación principal" },
  sos: {
    ariaLabel: "SOS — necesito ayuda", label: "SOS", eyebrow: "Un momento", title: "No estás sola",
    breathTitle: "Respiración 4-7-8", in: "Inspira", hold: "Sostén", out: "Suelta",
    repeat: "Repite 4 veces", overcomePeak: "Atraviesa el pico",
    talkToNutri: "Hablar con la Nutri", antiBingeGuide: "Guía anti-atracón",
    motivacionais: [
      "Respira. Este momento pasará — ya has superado otros.",
      "No es hambre. Es emoción. Acógela, no comas.",
      "No necesitas ser perfecta. Solo necesitas volver.",
      "Una elección a la vez. Esta puede ser de amor propio.",
      "Tu cuerpo merece cariño, no castigo.",
    ],
    tecnicas: [
      "Bebe 1 vaso de agua fría lentamente",
      "Cepíllate los dientes ahora mismo",
      "Sal del ambiente por 5 minutos",
      "Come 1 fruta con canela",
    ],
  },
  settings: {
    title: "Ajustes", yourData: "Tus datos", name: "Nombre", age: "Edad", height: "Altura (cm)",
    startWeight: "Peso inicial (kg)", goalWeight: "Meta (kg)", appearance: "Apariencia",
    theme: "Tema", light: "Claro", dark: "Oscuro", fontSize: "Tamaño del texto",
    small: "P", medium: "M", large: "G", sound: "Sonidos", soundEffects: "Efectos de sonido",
    language: "Idioma", languageHint: "Cambia el idioma del app — se guarda en este dispositivo.",
    autoSave: "Los cambios se guardan automáticamente.",
  },

  // ── HOME ──
  home: {
    metaTitle: "Inicio — Reto 21 Días",
    metaDescription: "Tu jornada femenina de transformación comienza aquí.",
    greeting: "Buenos días,",
    quoteEyebrow: "Frase del día · Día {n}",
    reminderLabel: "Recordatorio diario a las",
    reminderAriaLabel: "Hora del recordatorio diario",
    reminderDisable: "desactivar",
    reminderDisableAria: "Desactivar recordatorio",
    reminderBtn: "Recibir recordatorio matinal",
    journeyAlt: "Tu jornada",
    journeyLabel: "Tu jornada",
    dayOf: "Día {n} de 21",
    percentDone: "{n}% completado",
    continueBtn: "Continuar jornada",
    streakLabel: "Racha",
    favoritesLabel: "Favoritas",
    stateLabel: "Estado",
    stateValue: "Ligera",
    hydrationLabel: "Hidratación",
    waterGlasses: "{n} / 8 vasos",
    addWater: "+ 1 vaso",
    nutriTitle: "Habla con la Nutri",
    nutriSub: "Apoyo femenino 24h",
    evolutionTitle: "Tu evolución",
    evolutionSub: "Logros y medallas",
    modulesTitle: "Módulos de la jornada",
    modulesSub: "Se desbloquean cada 2 días",
    modulesViewAll: "Ver todos",
    moduleBadge: "Módulo {n}",
    moduleLocked: "Faltan {n}d",
    calendarTitle: "Tus 21 días",
    calendarViewAll: "Ver todo",
  },

  // ── PLAN ──
  plan: {
    metaTitle: "Plan 21 Días — Reto",
    weekLabel: "Semana {n}",
    h1: "Plan de 21 Días",
    daysCompleted: "{n} de 21 días completados",
    dayBadge: "Día",
    dayHeading: "Día {n}",
    breakfast: "Desayuno",
    lunch: "Almuerzo",
    snack: "Merienda",
    dinner: "Cena",
    completedBtn: "Día completado ✓",
    completeBtn: "Completar día",
    celebrateTitle: "¡Lo lograste!",
    celebrateSub: "Un día más de tu transformación ✨",
    viewRecipe: "Ver receta →",
  },

  // ── PROFILE ──
  profile: {
    metaTitle: "Perfil — Reto 21 Días",
    greeting: "Bienvenida",
    daysLabel: "Días",
    goalLabel: "Meta",
    favoritesLabel: "Favoritas",
    evolutionTitle: "Tu evolución",
    startWeight: "Peso inicial (kg)",
    goalWeight: "Meta (kg)",
    progressLabel: "Progreso",
    moodTitle: "¿Cómo estás hoy?",
    moodSaved: "Registrado por hoy ♥",
    evolutionRow: "Mi evolución & logros",
    notificationsRow: "Notificaciones & recordatorios",
    settingsRow: "Ajustes",
    resetRow: "Reiniciar jornada",
    resetTitle: "¿Reiniciar tu jornada?",
    resetDesc: "Todos tus datos, progreso, favoritos y respuestas serán eliminados. Esta acción no se puede deshacer.",
    resetCancel: "Cancelar",
    resetConfirm: "Sí, reiniciar",
  },

  // ── ONBOARDING ──
  onboarding: {
    metaTitle: "Bienvenida — Reto 21 Días",
    welcomeTitle: "Bienvenida a tu transformación",
    welcomeBody: "Un protocolo femenino, ligero y posible. Sin hambre, sin culpa, sin guerra con la comida.",
    welcomeSteps: "Vamos a personalizar tu plan en {n} preguntas rápidas",
    startBtn: "Comenzar",
    finalTitle: "Tu plan personalizado está listo.",
    finalBody: "Preparamos los próximos 21 días con recetas, apoyo emocional y todo lo que necesitas.",
    accessBtn: "Acceder a mi plan",
    backBtn: "Volver",
    stepOf: "{n} de {total}",
    skipBtn: "Omitir",
    continueBtn: "Continuar",
    name: { question: "¿Cómo prefieres que te llamen?", placeholder: "Tu nombre" },
    age: { question: "¿Cuántos años tienes?", placeholder: "años" },
    height: { question: "¿Cuál es tu altura?", hint: "en centímetros", placeholder: "ej: 165" },
    weight: { question: "¿Cuál es tu peso actual?", hint: "en kilos", placeholder: "ej: 70" },
    goalWeight: { question: "¿Cuál es tu peso meta?", hint: "en kilos (opcional)", placeholder: "ej: 62" },
    objective: { question: "¿Cuál es tu objetivo principal?", options: ["Adelgazar", "Reducir el atracón", "Más energía", "Autoestima"] },
    difficulty: { question: "¿Cuál es tu mayor dificultad?", options: ["Antojo de dulce", "Comer de noche", "Falta de tiempo", "Ansiedad"] },
    routine: { question: "¿Cómo es tu rutina?", options: ["Muy agitada", "Equilibrada", "Tranquila"] },
  },

  // ── NUTRI ──
  nutri: {
    metaTitle: "Habla con la Nutri — Reto 21 Días",
    h1: "Nutri",
    status: "En línea · responde en segundos",
    clearBtn: "limpiar",
    welcome: "¡Hola, linda! 🌸 Soy tu Nutri personal. Estoy aquí para acompañarte, resolver tus dudas y ayudarte a seguir firme. Cuéntame: ¿cómo estás hoy?",
    placeholder: "Cuéntale a la Nutri…",
    quick: [
      "Tengo ganas de dulce",
      "¿Qué puedo comer ahora?",
      "Estoy desanimada",
      "No pude seguir el plan hoy",
      "Ayúdame con el atracón",
      "Quiero reducir la barriga",
    ],
    errorGeneral: "Algo salió mal. ¿Lo intentas de nuevo?",
    errorOffline: "Sin conexión. Inténtalo de nuevo.",
  },

  // ── NOTIFICATIONS ──
  notifications: {
    metaTitle: "Notificaciones & recordatorios",
    h1: "Notificaciones",
    intro: "Configura recordatorios cariñosos para acompañarte a lo largo del día.",
    waterToggle: "Recordatorio de agua",
    mealsToggle: "Recordatorio de comidas",
    motivationToggle: "Mensaje motivacional diario",
    sleepToggle: "Recordatorio de sueño",
    schedulesTitle: "Horarios",
    firstWater: "Primer vaso de agua",
    lunchTime: "Almuerzo",
    savedNote: "Tus preferencias se guardan en este dispositivo.",
  },

  // ── EVOLUTION ──
  evolution: {
    metaTitle: "Evolución — Reto 21 Días",
    eyebrow: "Tu historia",
    h1: "Evolución",
    daysCompleted: "Días completados",
    streak: "Racha",
    waterGlasses: "Vasos de agua",
    weightGoal: "Meta de peso",
    journeyTitle: "Tu jornada de 21 días",
    dayTitle: "Día {n}",
    percentDone: "{n}% completado",
    achievementsTitle: "Tus logros",
    medal7days: "7 días seguidos",
    medalHydra: "Reina de la hidratación",
    medalControl: "Control total",
    medalPerfect: "Semana perfecta",
    earned: "Obtenida",
    locked: "Bloqueada",
    continueBtn: "Continuar con los módulos",
  },

  // ── BONUS ──
  bonus: {
    metaTitle: "Bonos — Reto 21 Días",
    eyebrow: "Contenido exclusivo",
    h1: "Bonos",
    intro: "Material extra para acelerar tu transformación.",
    bonusBadge: "Bono {n}",
    openBtn: "Abrir",
    comingSoon: "Próximamente",
    downloadAria: "Descargar PDF",
    closeAria: "Cerrar",
  },

  // ── RECIPES ──
  recipes: {
    metaTitle: "Recetas — Reto 21 Días",
    eyebrow: "Cocina con ligereza",
    h1: "Recetas",
    searchPlaceholder: "Buscar receta...",
    satietyLabel: "Saciedad",
    notFound: "Receta no encontrada.",
    forYou: "Para ti",
    benefitsTitle: "Beneficios",
    bestTimeTitle: "Mejor horario",
    ingredientsTitle: "Ingredientes",
    prepTitle: "Modo de preparación",
    videoTitle: "Video de la receta",
    timeLabel: "Tiempo",
    proteinLabel: "Proteína",
  },

  // ── ANTI-BINGE ──
  antiBinge: {
    metaTitle: "Acolher — Anti-Atracón",
    eyebrow: "No estás sola",
    h1: "Acolher",
    intro: "Aquí encuentras apoyo en los momentos en que todo parece pesar.",
    emergencyEyebrow: "Botón de emergencia",
    emergencyTitle: "Tengo ganas de salirme de la dieta",
    emergencyBody: "Tócame aquí. Voy a estar contigo ahora.",
    emergencyBtn: "Necesito apoyo ahora",
    reflectionTitle: "Reflexión del momento",
    reflectionBody: "La comida no es el problema. Es el intento de resolver un problema más antiguo. Hoy, en lugar de juzgar las ganas, escucha lo que te quieren decir.",
    modalTitle: "Respira. Estoy aquí.",
    emergencyMsgs: [
      "Respira hondo. Estás segura.",
      "Estas ganas pasarán en 10 minutos.",
      "Has llegado tan lejos. ¿Lo recuerdas?",
      "No es hambre. Es una emoción pidiendo cariño.",
    ],
    techniquesTitle: "Haz una de estas técnicas ahora:",
    techniques: [
      "Bebe 2 vasos de agua con limón",
      "Respira: inspira 4s, sostén 7s, suelta 8s",
      "Come 1 huevo cocido o mantequilla de maní",
      "Camina 5 minutos en cualquier lugar",
      "Escribe lo que estás sintiendo ahora",
    ],
    feelBetterBtn: "Ya me siento mejor",
    backLink: "Acolher",
    stepsTitle: "Hazlo ahora, en orden",
    affirmationsTitle: "Repite para ti misma",
    contentNotFound: "Contenido no encontrado.",
    doce: {
      title: "Ganas de dulce",
      cardDesc: "Técnicas para superar el pico en 10 min.",
      subtitle: "Técnicas para superar el pico en 10 min",
      intro: "Las ganas de dulce son una ola: sube fuerte, pero siempre baja. Tu cuerpo no necesita azúcar — necesita estabilidad. En 10 minutos el pico pasa.",
      steps: [
        { title: "1. Bebe 2 vasos de agua con limón", desc: "La deshidratación se confunde con hambre de dulce en el 60% de los casos." },
        { title: "2. Come 1 fuente de proteína", desc: "Huevo cocido, queso, mantequilla de maní. La proteína apaga la señal de azúcar." },
        { title: "3. Respiración 4-7-8 (3 ciclos)", desc: "Inspira 4s, sostén 7s, suelta 8s. Calma el sistema nervioso." },
        { title: "4. Mueve el cuerpo por 5 min", desc: "Caminata corta, estiramiento, bailar. Libera dopamina natural." },
        { title: "5. Espera 10 minutos cronometrados", desc: "Pon un temporizador. Cuando suene, las ganas habrán disminuido al menos un 70%." },
      ],
      affirmations: ["Estas ganas no son hambre — son una ola pasajera.", "No necesito ceder para sentirme bien.", "En 10 minutos voy a estar orgullosa de mí."],
    },
    ansiedade: {
      title: "Ansiedad",
      cardDesc: "Respiración 4-7-8 y anclaje corporal.",
      subtitle: "Respiración 4-7-8 y anclaje corporal",
      intro: "La ansiedad no es debilidad — es el cuerpo en alerta. Puedes calmar esa alerta en minutos, sin comida y sin sufrimiento.",
      steps: [
        { title: "1. Respiración 4-7-8", desc: "Inspira por la nariz en 4s, sostén 7s, suelta por la boca en 8s. Repite 4 veces." },
        { title: "2. Anclaje 5-4-3-2-1", desc: "Nombra: 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles, 1 que sientes." },
        { title: "3. Mano en el pecho, mano en el vientre", desc: "Siente tu respiración. Di: 'Estoy segura ahora.'" },
        { title: "4. Bebe agua fría despacio", desc: "Activa el nervio vago y reduce la frecuencia cardíaca en segundos." },
        { title: "5. Escribe lo que sientes", desc: "Anota sin filtro por 3 minutos. Sacarlo hacia afuera calma." },
      ],
      affirmations: ["Estoy en seguridad en este momento.", "Mis pensamientos no son hechos.", "Puedo cuidarme sin comer."],
    },
    emocional: {
      title: "Hambre emocional",
      cardDesc: "Identifica el sentimiento detrás del hambre.",
      subtitle: "Identifica el sentimiento detrás del hambre",
      intro: "El hambre emocional aparece de repente, pide algo específico (generalmente dulce) y no pasa cuando comes. Reconocerla es el primer paso para liberarte.",
      steps: [
        { title: "1. Pausa y pregúntate: '¿Qué estoy sintiendo?'", desc: "¿Tristeza, enojo, aburrimiento, soledad, cansancio? Dale nombre al sentimiento." },
        { title: "2. Evalúa el hambre física (0 a 10)", desc: "Por debajo de 5 no es hambre física — es emocional." },
        { title: "3. Elige una acción que cuide el sentimiento", desc: "Llamar a alguien, darse un baño caliente, salir a caminar, llorar." },
        { title: "4. Espera 20 minutos", desc: "Si las ganas pasan, era emocional. Si persisten y es hambre física, come con calma." },
        { title: "5. Regístralo en el diario", desc: "Anota el detonante. Los patrones revelan lo que necesita ser atendido." },
      ],
      affirmations: ["Puedo sentir sin necesitar comer.", "Mis sentimientos son válidos y pasajeros.", "Merezco ser cuidada por mí misma."],
    },
    noite: {
      title: "Ataques nocturnos",
      cardDesc: "Ritual de cierre del día.",
      subtitle: "Ritual de cierre del día",
      intro: "Comer de noche raramente es hambre — es cansancio acumulado, ansiedad del día o falta de proteína en las comidas anteriores. Crea un ritual de cierre.",
      steps: [
        { title: "1. Cena con proteína de verdad", desc: "Sin suficiente proteína, tu cerebro pide comida 2h después." },
        { title: "2. Té caliente sin azúcar", desc: "Manzanilla, melisa o anís. El calor le indica al cuerpo: 'el día terminó'." },
        { title: "3. Cepíllate los dientes a las 21h", desc: "Señal poderosa de cierre. Comer después se vuelve incómodo." },
        { title: "4. Ducha tibia + crema en el cuerpo", desc: "El tacto consciente reduce las ganas de buscar consuelo en la comida." },
        { title: "5. Lectura o meditación 10 min", desc: "Pantalla lejos. Luz baja. Prepara el cuerpo para descansar." },
      ],
      affirmations: ["Mi día terminó. Puedo descansar.", "No necesito comer para relajarme.", "Mañana me despierto ligera y orgullosa."],
    },
    recaida: {
      title: "Evitar recaídas",
      cardDesc: "Plan de retorno sin culpa.",
      subtitle: "Plan de retorno sin culpa",
      intro: "Salirte del camino una vez no borra tu progreso. Lo que destruye no es el desliz — es el 'ya que me salí, voy a arruinarlo todo'. Aquí está tu regreso.",
      steps: [
        { title: "1. Para donde estás, sin juicio", desc: "Un dulce no es el fin. Una comida no es el fin. Respira." },
        { title: "2. Bebe agua e hidrátate", desc: "No 'compenses' saltando comidas — eso empeora el ciclo." },
        { title: "3. Siguiente comida: proteína + vegetales", desc: "Reequilibra el cuerpo en la próxima comida, no al día siguiente." },
        { title: "4. Camina 15 minutos", desc: "El movimiento ayuda a metabolizar y rompe el ciclo mental." },
        { title: "5. Anota el detonante", desc: "¿Qué pasó antes? Identifícalo para prevenir la próxima vez." },
      ],
      affirmations: ["Un desliz no borra 20 aciertos.", "Vuelvo ahora, no mañana.", "El progreso es seguir, no ser perfecta."],
    },
    culpa: {
      title: "Reducir la culpa",
      cardDesc: "No eres lo que comiste hoy.",
      subtitle: "No eres lo que comiste hoy",
      intro: "La culpa no adelgaza — engorda. Cada vez que te castigas por comer, alimentas el ciclo de atracón. El camino es el opuesto: el acogimiento.",
      steps: [
        { title: "1. Reconoce el pensamiento de culpa", desc: "'Lo arruiné todo', 'soy un fracaso'. Obsérvalo — sin creerlo." },
        { title: "2. Pregúntate: ¿le diría esto a una amiga?", desc: "Si no se lo dirías, no te lo digas a ti misma." },
        { title: "3. Reescribe el pensamiento", desc: "'Lo arruiné todo' se convierte en 'Comí algo fuera del plan. Sigo ahora.'" },
        { title: "4. Haz algo gentil por tu cuerpo", desc: "Baño, estiramiento, hidratante. Muéstrale que es amado." },
        { title: "5. Vuelve al plan en la próxima comida", desc: "Sin castigo, sin saltarte nada. Sin dieta de punición." },
      ],
      affirmations: ["Soy mucho más que mi plato de hoy.", "La culpa no tiene lugar en mi camino.", "Merezco tratarme con cariño — siempre."],
    },
  },

  // ── MODULES ──
  modules: {
    metaTitle: "Módulos — Reto 21 Días",
    detailMetaTitle: "Módulo — Reto 21 Días",
    eyebrow: "Tu recorrido",
    h1: "Módulos premium",
    progressEyebrow: "Desbloqueo progresivo",
    progressTitle: "Cada 2 días completados, un nuevo módulo se abre 🤍",
    progressSub: "{done} días completados · {mods} de 8 módulos desbloqueados",
    moduleBadge: "Módulo {n}",
    openModule: "Abrir módulo",
    lockedSingular: "Falta {n} día",
    lockedPlural: "Faltan {n} días",
    notFound: "Módulo no encontrado.",
    lockedTitle: "Módulo bloqueado",
    lockedDesc: "Completa {n} días más del reto para desbloquearlo.",
    checklistTitle: "Checklist del módulo",
    checklistHint: "Marca lo que hiciste hoy",
    nutriBtn: "Consultar dudas con la Nutri",
    protocol24h: {
      title: "Protocolo 24h anti-hinchazón",
      steps: [
        { time: "Mañana", action: "Agua con limón + proteína en el desayuno" },
        { time: "Mediodía", action: "Almuerzo con hojas verdes y proteína magra" },
        { time: "Tarde", action: "Té de menta o jengibre + caminata de 15 min" },
        { time: "Noche", action: "Cena ligera, cero azúcar, dormir antes de las 23h" },
      ],
    },
    morningRoutine: {
      title: "Rutina matinal femenina",
      items: ["💧 1 vaso de agua al despertar", "☀️ 5 minutos de sol en la piel", "🥚 Desayuno con proteína (20g+)", "🧘 1 minuto de respiración profunda"],
    },
    nightRitual: {
      title: "Ritual nocturno",
      items: ["🌙 Luz tenue después de las 21h", "🍵 Té de manzanilla o melissa", "📵 Pantallas lejos de la cama", "📝 Escribe 1 gratitud antes de dormir"],
    },
    hydration: {
      title: "Aguas saborizadas",
      items: ["🍋 Limón + menta — desinfla", "🫚 Jengibre + canela — acelera el metabolismo", "🥒 Pepino + limón — refrescante y drenante", "🌺 Hibisco frío — antioxidante"],
    },
    cycle: {
      title: "Tu ciclo, tu plan",
      phases: [
        { name: "Menstrual", tip: "Descanso, hierro, comida caliente" },
        { name: "Folicular", tip: "Energía alta — ¡aprovecha para entrenar!" },
        { name: "Ovulatoria", tip: "Pico de confianza y vitalidad" },
        { name: "Lútea", tip: "Más proteína, más sueño, menos exigencia" },
      ],
    },
    diary: { title: "Diario personal", placeholder: "Escribe 1 victoria tuya hoy, por pequeña que sea…" },
    future: { title: "Tus metas para los próximos 30 días", placeholder: "Ej: dormir 8h, entrenar 3x/semana, mantener el peso…" },
  },

  difficulty: { easy: "Fácil", medium: "Medio", advanced: "Avanzado" },
  categories: {
    all: "Todas", breakfast: "Desayuno", lunch: "Almuerzo", dinner: "Cena",
    snack: "Merienda", antiBinge: "Anti-atracón", belly: "Desinflama",
    quick: "Express", anxiety: "Anti-ansiedad", light: "Ligera", night: "Noche",
  },
};

// ─────────────────────────────────────────────
//  PORTUGUÊS
// ─────────────────────────────────────────────
const pt: Dict = {
  app: {
    title: "Desafio 21 Dias — Emagreça Comendo Bem",
    description: "Protocolo feminino de emagrecimento com alimentação proteica, sem fome e sem culpa.",
    shortTitle: "Desafio 21",
  },
  common: {
    loading: "Carregando…", back: "Voltar", cancel: "Cancelar", save: "Salvar", close: "Fechar",
    skipToContent: "Ir para o conteúdo",
    offlineBanner: "Modo offline — usando dados salvos no seu celular",
  },
  nav: { home: "Início", recipes: "Receitas", plan: "21 Dias", acolher: "Acolher", bonus: "Bônus", profile: "Perfil", ariaLabel: "Navegação principal" },
  sos: {
    ariaLabel: "SOS — preciso de ajuda", label: "SOS", eyebrow: "Um momento", title: "Você não está sozinha",
    breathTitle: "Respiração 4-7-8", in: "Inspire", hold: "Segure", out: "Solte",
    repeat: "Repita 4 vezes", overcomePeak: "Atravesse o pico",
    talkToNutri: "Falar com a Nutri", antiBingeGuide: "Guia anti-compulsão",
    motivacionais: [
      "Respira. Esse momento vai passar — você já superou outros.",
      "Não é fome. É emoção. Acolha, não coma.",
      "Você não precisa ser perfeita. Só precisa voltar.",
      "Uma escolha por vez. Esta pode ser de amor-próprio.",
      "Seu corpo merece carinho, não castigo.",
    ],
    tecnicas: [
      "Beba 1 copo de água gelada bem devagar",
      "Escove os dentes agora mesmo",
      "Saia do ambiente por 5 minutos",
      "Coma 1 fruta com canela",
    ],
  },
  settings: {
    title: "Ajustes", yourData: "Seus dados", name: "Nome", age: "Idade", height: "Altura (cm)",
    startWeight: "Peso inicial (kg)", goalWeight: "Meta (kg)", appearance: "Aparência",
    theme: "Tema", light: "Claro", dark: "Escuro", fontSize: "Tamanho do texto",
    small: "P", medium: "M", large: "G", sound: "Sons", soundEffects: "Efeitos sonoros",
    language: "Idioma", languageHint: "Mude o idioma do app — fica salvo neste dispositivo.",
    autoSave: "As alterações são salvas automaticamente.",
  },

  home: {
    metaTitle: "Início — Desafio 21 Dias",
    metaDescription: "Sua jornada feminina de transformação começa aqui.",
    greeting: "Bom dia,",
    quoteEyebrow: "Frase do dia · Dia {n}",
    reminderLabel: "Lembrete diário às",
    reminderAriaLabel: "Hora do lembrete diário",
    reminderDisable: "desativar",
    reminderDisableAria: "Desativar lembrete",
    reminderBtn: "Receber lembrete matinal",
    journeyAlt: "Sua jornada",
    journeyLabel: "Sua jornada",
    dayOf: "Dia {n} de 21",
    percentDone: "{n}% concluído",
    continueBtn: "Continuar jornada",
    streakLabel: "Sequência",
    favoritesLabel: "Favoritas",
    stateLabel: "Estado",
    stateValue: "Leve",
    hydrationLabel: "Hidratação",
    waterGlasses: "{n} / 8 copos",
    addWater: "+ 1 copo",
    nutriTitle: "Fale com a Nutri",
    nutriSub: "Apoio feminino 24h",
    evolutionTitle: "Sua evolução",
    evolutionSub: "Conquistas e medalhas",
    modulesTitle: "Módulos da jornada",
    modulesSub: "Desbloqueiam a cada 2 dias",
    modulesViewAll: "Ver todos",
    moduleBadge: "Módulo {n}",
    moduleLocked: "Faltam {n}d",
    calendarTitle: "Seus 21 dias",
    calendarViewAll: "Ver tudo",
  },

  plan: {
    metaTitle: "Plano 21 Dias — Desafio",
    weekLabel: "Semana {n}",
    h1: "Plano de 21 Dias",
    daysCompleted: "{n} de 21 dias concluídos",
    dayBadge: "Dia",
    dayHeading: "Dia {n}",
    breakfast: "Café da manhã",
    lunch: "Almoço",
    snack: "Lanche",
    dinner: "Jantar",
    completedBtn: "Dia concluído ✓",
    completeBtn: "Concluir dia",
    celebrateTitle: "Você conseguiu!",
    celebrateSub: "Mais um dia da sua transformação ✨",
    viewRecipe: "Ver receita →",
  },

  profile: {
    metaTitle: "Perfil — Desafio 21 Dias",
    greeting: "Bem-vinda",
    daysLabel: "Dias",
    goalLabel: "Meta",
    favoritesLabel: "Favoritas",
    evolutionTitle: "Sua evolução",
    startWeight: "Peso inicial (kg)",
    goalWeight: "Meta (kg)",
    progressLabel: "Progresso",
    moodTitle: "Como você está hoje?",
    moodSaved: "Registrado hoje ♥",
    evolutionRow: "Minha evolução & conquistas",
    notificationsRow: "Notificações & lembretes",
    settingsRow: "Ajustes",
    resetRow: "Reiniciar jornada",
    resetTitle: "Reiniciar sua jornada?",
    resetDesc: "Todos os seus dados, progresso, favoritos e respostas serão apagados. Esta ação não pode ser desfeita.",
    resetCancel: "Cancelar",
    resetConfirm: "Sim, reiniciar",
  },

  onboarding: {
    metaTitle: "Bem-vinda — Desafio 21 Dias",
    welcomeTitle: "Bem-vinda à sua transformação",
    welcomeBody: "Um protocolo feminino, leve e possível. Sem fome, sem culpa, sem guerra com a comida.",
    welcomeSteps: "Vamos personalizar seu plano em {n} perguntas rápidas",
    startBtn: "Começar",
    finalTitle: "Seu plano personalizado está pronto.",
    finalBody: "Preparamos os próximos 21 dias com receitas, apoio emocional e tudo o que você precisa.",
    accessBtn: "Acessar meu plano",
    backBtn: "Voltar",
    stepOf: "{n} de {total}",
    skipBtn: "Pular",
    continueBtn: "Continuar",
    name: { question: "Como você prefere ser chamada?", placeholder: "Seu nome" },
    age: { question: "Quantos anos você tem?", placeholder: "anos" },
    height: { question: "Qual é sua altura?", hint: "em centímetros", placeholder: "ex: 165" },
    weight: { question: "Qual é seu peso atual?", hint: "em quilos", placeholder: "ex: 70" },
    goalWeight: { question: "Qual é seu peso meta?", hint: "em quilos (opcional)", placeholder: "ex: 62" },
    objective: { question: "Qual é seu objetivo principal?", options: ["Emagrecer", "Reduzir a compulsão", "Mais energia", "Autoestima"] },
    difficulty: { question: "Qual é sua maior dificuldade?", options: ["Vontade de doce", "Comer à noite", "Falta de tempo", "Ansiedade"] },
    routine: { question: "Como é a sua rotina?", options: ["Muito agitada", "Equilibrada", "Tranquila"] },
  },

  nutri: {
    metaTitle: "Fale com a Nutri — Desafio 21 Dias",
    h1: "Nutri",
    status: "Online · responde em segundos",
    clearBtn: "limpar",
    welcome: "Oi, linda! 🌸 Sou sua Nutri pessoal. Estou aqui para te acompanhar, tirar suas dúvidas e te ajudar a seguir firme. Me conta: como você está hoje?",
    placeholder: "Conte para a Nutri…",
    quick: [
      "Estou com vontade de doce",
      "O que posso comer agora?",
      "Estou desanimada",
      "Não consegui seguir o plano hoje",
      "Me ajuda com a compulsão",
      "Quero reduzir a barriga",
    ],
    errorGeneral: "Algo deu errado. Que tal tentar de novo?",
    errorOffline: "Sem conexão. Tente novamente.",
  },

  notifications: {
    metaTitle: "Notificações & lembretes",
    h1: "Notificações",
    intro: "Configure lembretes carinhosos para te acompanhar ao longo do dia.",
    waterToggle: "Lembrete de água",
    mealsToggle: "Lembrete de refeições",
    motivationToggle: "Mensagem motivacional diária",
    sleepToggle: "Lembrete de sono",
    schedulesTitle: "Horários",
    firstWater: "Primeiro copo de água",
    lunchTime: "Almoço",
    savedNote: "Suas preferências ficam salvas neste dispositivo.",
  },

  evolution: {
    metaTitle: "Evolução — Desafio 21 Dias",
    eyebrow: "Sua história",
    h1: "Evolução",
    daysCompleted: "Dias concluídos",
    streak: "Sequência",
    waterGlasses: "Copos de água",
    weightGoal: "Meta de peso",
    journeyTitle: "Sua jornada de 21 dias",
    dayTitle: "Dia {n}",
    percentDone: "{n}% concluído",
    achievementsTitle: "Suas conquistas",
    medal7days: "7 dias seguidos",
    medalHydra: "Rainha da hidratação",
    medalControl: "Controle total",
    medalPerfect: "Semana perfeita",
    earned: "Conquistada",
    locked: "Bloqueada",
    continueBtn: "Continuar com os módulos",
  },

  bonus: {
    metaTitle: "Bônus — Desafio 21 Dias",
    eyebrow: "Conteúdo exclusivo",
    h1: "Bônus",
    intro: "Material extra para acelerar sua transformação.",
    bonusBadge: "Bônus {n}",
    openBtn: "Abrir",
    comingSoon: "Em breve",
    downloadAria: "Baixar PDF",
    closeAria: "Fechar",
  },

  recipes: {
    metaTitle: "Receitas — Desafio 21 Dias",
    eyebrow: "Cozinha com leveza",
    h1: "Receitas",
    searchPlaceholder: "Buscar receita...",
    satietyLabel: "Saciedade",
    notFound: "Receita não encontrada.",
    forYou: "Para você",
    benefitsTitle: "Benefícios",
    bestTimeTitle: "Melhor horário",
    ingredientsTitle: "Ingredientes",
    prepTitle: "Modo de preparo",
    videoTitle: "Vídeo da receita",
    timeLabel: "Tempo",
    proteinLabel: "Proteína",
  },

  antiBinge: {
    metaTitle: "Acolher — Anti-Compulsão",
    eyebrow: "Você não está sozinha",
    h1: "Acolher",
    intro: "Aqui você encontra apoio nos momentos em que tudo parece pesar.",
    emergencyEyebrow: "Botão de emergência",
    emergencyTitle: "Estou com vontade de sair da dieta",
    emergencyBody: "Me toque aqui. Vou estar com você agora.",
    emergencyBtn: "Preciso de apoio agora",
    reflectionTitle: "Reflexão do momento",
    reflectionBody: "A comida não é o problema. É a tentativa de resolver um problema mais antigo. Hoje, em vez de julgar a vontade, escuta o que ela quer te dizer.",
    modalTitle: "Respira. Estou aqui.",
    emergencyMsgs: [
      "Respira fundo. Você está segura.",
      "Essa vontade vai passar em 10 minutos.",
      "Você chegou tão longe. Lembra?",
      "Não é fome. É uma emoção pedindo carinho.",
    ],
    techniquesTitle: "Faça uma destas técnicas agora:",
    techniques: [
      "Beba 2 copos de água com limão",
      "Respire: inspire 4s, segure 7s, solte 8s",
      "Coma 1 ovo cozido ou pasta de amendoim",
      "Caminhe 5 minutos em qualquer lugar",
      "Escreva o que você está sentindo agora",
    ],
    feelBetterBtn: "Já me sinto melhor",
    backLink: "Acolher",
    stepsTitle: "Faça agora, em ordem",
    affirmationsTitle: "Repita para você mesma",
    contentNotFound: "Conteúdo não encontrado.",
    doce: {
      title: "Vontade de doce",
      cardDesc: "Técnicas para superar o pico em 10 min.",
      subtitle: "Técnicas para superar o pico em 10 min",
      intro: "A vontade de doce é uma onda: sobe forte, mas sempre baixa. Seu corpo não precisa de açúcar — precisa de estabilidade. Em 10 minutos o pico passa.",
      steps: [
        { title: "1. Beba 2 copos de água com limão", desc: "A desidratação se confunde com vontade de doce em 60% dos casos." },
        { title: "2. Coma 1 fonte de proteína", desc: "Ovo cozido, queijo, pasta de amendoim. A proteína apaga o sinal de açúcar." },
        { title: "3. Respiração 4-7-8 (3 ciclos)", desc: "Inspire 4s, segure 7s, solte 8s. Acalma o sistema nervoso." },
        { title: "4. Mexa o corpo por 5 min", desc: "Caminhada curta, alongamento, dança. Libera dopamina natural." },
        { title: "5. Espere 10 minutos cronometrados", desc: "Coloque um cronômetro. Quando tocar, a vontade terá diminuído pelo menos 70%." },
      ],
      affirmations: ["Essa vontade não é fome — é uma onda passageira.", "Não preciso ceder para me sentir bem.", "Em 10 minutos vou estar orgulhosa de mim."],
    },
    ansiedade: {
      title: "Ansiedade",
      cardDesc: "Respiração 4-7-8 e ancoragem corporal.",
      subtitle: "Respiração 4-7-8 e ancoragem corporal",
      intro: "A ansiedade não é fraqueza — é o corpo em alerta. Você pode acalmar esse alerta em minutos, sem comida e sem sofrimento.",
      steps: [
        { title: "1. Respiração 4-7-8", desc: "Inspire pelo nariz em 4s, segure 7s, solte pela boca em 8s. Repita 4 vezes." },
        { title: "2. Ancoragem 5-4-3-2-1", desc: "Nomeie: 5 coisas que você vê, 4 que toca, 3 que ouve, 2 que cheira, 1 que sente." },
        { title: "3. Mão no peito, mão na barriga", desc: "Sinta sua respiração. Diga: 'Estou segura agora.'" },
        { title: "4. Beba água gelada devagar", desc: "Ativa o nervo vago e reduz a frequência cardíaca em segundos." },
        { title: "5. Escreva o que sente", desc: "Anote sem filtro por 3 minutos. Botar pra fora acalma." },
      ],
      affirmations: ["Estou em segurança neste momento.", "Meus pensamentos não são fatos.", "Posso me cuidar sem comer."],
    },
    emocional: {
      title: "Fome emocional",
      cardDesc: "Identifique o sentimento por trás da fome.",
      subtitle: "Identifique o sentimento por trás da fome",
      intro: "A fome emocional aparece de repente, pede algo específico (geralmente doce) e não passa quando você come. Reconhecê-la é o primeiro passo para se libertar.",
      steps: [
        { title: "1. Pause e pergunte: 'O que estou sentindo?'", desc: "Tristeza, raiva, tédio, solidão, cansaço? Dê nome ao sentimento." },
        { title: "2. Avalie a fome física (0 a 10)", desc: "Abaixo de 5 não é fome física — é emocional." },
        { title: "3. Escolha uma ação que cuide do sentimento", desc: "Ligar para alguém, tomar um banho quente, sair para caminhar, chorar." },
        { title: "4. Espere 20 minutos", desc: "Se a vontade passar, era emocional. Se persistir e for fome física, coma com calma." },
        { title: "5. Registre no diário", desc: "Anote o gatilho. Os padrões revelam o que precisa ser cuidado." },
      ],
      affirmations: ["Posso sentir sem precisar comer.", "Meus sentimentos são válidos e passageiros.", "Mereço ser cuidada por mim mesma."],
    },
    noite: {
      title: "Compulsão noturna",
      cardDesc: "Ritual de fechamento do dia.",
      subtitle: "Ritual de fechamento do dia",
      intro: "Comer à noite raramente é fome — é cansaço acumulado, ansiedade do dia ou falta de proteína nas refeições anteriores. Crie um ritual de fechamento.",
      steps: [
        { title: "1. Jante com proteína de verdade", desc: "Sem proteína suficiente, seu cérebro pede comida 2h depois." },
        { title: "2. Chá quente sem açúcar", desc: "Camomila, melissa ou erva-doce. O calor indica ao corpo: 'o dia terminou'." },
        { title: "3. Escove os dentes às 21h", desc: "Sinal poderoso de fechamento. Comer depois fica desconfortável." },
        { title: "4. Banho morno + creme no corpo", desc: "O toque consciente reduz a vontade de buscar conforto na comida." },
        { title: "5. Leitura ou meditação por 10 min", desc: "Tela longe. Luz baixa. Prepara o corpo para descansar." },
      ],
      affirmations: ["Meu dia terminou. Posso descansar.", "Não preciso comer para relaxar.", "Amanhã acordo leve e orgulhosa."],
    },
    recaida: {
      title: "Evitar recaídas",
      cardDesc: "Plano de retorno sem culpa.",
      subtitle: "Plano de retorno sem culpa",
      intro: "Sair do caminho uma vez não apaga seu progresso. O que destrói não é o deslize — é o 'já que saí, vou estragar tudo'. Aqui está seu retorno.",
      steps: [
        { title: "1. Pare onde está, sem julgamento", desc: "Um doce não é o fim. Uma refeição não é o fim. Respira." },
        { title: "2. Beba água e se hidrate", desc: "Não 'compense' pulando refeições — isso piora o ciclo." },
        { title: "3. Próxima refeição: proteína + vegetais", desc: "Reequilibre o corpo na próxima refeição, não amanhã." },
        { title: "4. Caminhe 15 minutos", desc: "O movimento ajuda a metabolizar e quebra o ciclo mental." },
        { title: "5. Anote o gatilho", desc: "O que aconteceu antes? Identifique para prevenir a próxima vez." },
      ],
      affirmations: ["Um deslize não apaga 20 acertos.", "Volto agora, não amanhã.", "Progresso é continuar, não ser perfeita."],
    },
    culpa: {
      title: "Reduzir a culpa",
      cardDesc: "Você não é o que comeu hoje.",
      subtitle: "Você não é o que comeu hoje",
      intro: "A culpa não emagrece — engorda. Cada vez que você se pune por comer, alimenta o ciclo de compulsão. O caminho é o oposto: o acolhimento.",
      steps: [
        { title: "1. Reconheça o pensamento de culpa", desc: "'Estraguei tudo', 'sou um fracasso'. Observe — sem acreditar." },
        { title: "2. Pergunte: eu diria isso para uma amiga?", desc: "Se não diria, não se diga a si mesma." },
        { title: "3. Reescreva o pensamento", desc: "'Estraguei tudo' vira 'Comi algo fora do plano. Continuo agora.'" },
        { title: "4. Faça algo gentil pelo seu corpo", desc: "Banho, alongamento, hidratante. Mostre que ele é amado." },
        { title: "5. Volte ao plano na próxima refeição", desc: "Sem punição, sem pular nada. Sem dieta de castigo." },
      ],
      affirmations: ["Sou muito mais do que meu prato de hoje.", "A culpa não tem lugar no meu caminho.", "Mereço me tratar com carinho — sempre."],
    },
  },

  modules: {
    metaTitle: "Módulos — Desafio 21 Dias",
    detailMetaTitle: "Módulo — Desafio 21 Dias",
    eyebrow: "Seu percurso",
    h1: "Módulos premium",
    progressEyebrow: "Desbloqueio progressivo",
    progressTitle: "A cada 2 dias concluídos, um novo módulo se abre 🤍",
    progressSub: "{done} dias concluídos · {mods} de 8 módulos desbloqueados",
    moduleBadge: "Módulo {n}",
    openModule: "Abrir módulo",
    lockedSingular: "Falta {n} dia",
    lockedPlural: "Faltam {n} dias",
    notFound: "Módulo não encontrado.",
    lockedTitle: "Módulo bloqueado",
    lockedDesc: "Complete {n} dias a mais do desafio para desbloqueá-lo.",
    checklistTitle: "Checklist do módulo",
    checklistHint: "Marque o que você fez hoje",
    nutriBtn: "Tirar dúvidas com a Nutri",
    protocol24h: {
      title: "Protocolo 24h anti-inchaço",
      steps: [
        { time: "Manhã", action: "Água com limão + proteína no café da manhã" },
        { time: "Meio-dia", action: "Almoço com folhas verdes e proteína magra" },
        { time: "Tarde", action: "Chá de hortelã ou gengibre + caminhada de 15 min" },
        { time: "Noite", action: "Jantar leve, zero açúcar, dormir antes das 23h" },
      ],
    },
    morningRoutine: {
      title: "Rotina matinal feminina",
      items: ["💧 1 copo de água ao acordar", "☀️ 5 minutos de sol na pele", "🥚 Café da manhã com proteína (20g+)", "🧘 1 minuto de respiração profunda"],
    },
    nightRitual: {
      title: "Ritual noturno",
      items: ["🌙 Luz suave depois das 21h", "🍵 Chá de camomila ou melissa", "📵 Telas longe da cama", "📝 Escreva 1 gratidão antes de dormir"],
    },
    hydration: {
      title: "Águas saborizadas",
      items: ["🍋 Limão + hortelã — desincha", "🫚 Gengibre + canela — acelera o metabolismo", "🥒 Pepino + limão — refrescante e drenante", "🌺 Hibisco gelado — antioxidante"],
    },
    cycle: {
      title: "Seu ciclo, seu plano",
      phases: [
        { name: "Menstrual", tip: "Descanso, ferro, comida quente" },
        { name: "Folicular", tip: "Energia alta — aproveite para treinar!" },
        { name: "Ovulatória", tip: "Pico de confiança e vitalidade" },
        { name: "Lútea", tip: "Mais proteína, mais sono, menos exigência" },
      ],
    },
    diary: { title: "Diário pessoal", placeholder: "Escreva 1 vitória sua hoje, por menor que seja…" },
    future: { title: "Suas metas para os próximos 30 dias", placeholder: "Ex: dormir 8h, treinar 3x/semana, manter o peso…" },
  },

  difficulty: { easy: "Fácil", medium: "Médio", advanced: "Avançado" },
  categories: {
    all: "Todas", breakfast: "Café da manhã", lunch: "Almoço", dinner: "Jantar",
    snack: "Lanche", antiBinge: "Anti-compulsão", belly: "Desinchada",
    quick: "Rápida", anxiety: "Anti-ansiedade", light: "Leve", night: "Noite",
  },
};

// ─────────────────────────────────────────────
//  ENGLISH
// ─────────────────────────────────────────────
const en: Dict = {
  app: {
    title: "21-Day Challenge — Slim Down Eating Well",
    description: "A feminine weight-loss protocol with protein-rich meals, no hunger and no guilt.",
    shortTitle: "21-Day",
  },
  common: {
    loading: "Loading…", back: "Back", cancel: "Cancel", save: "Save", close: "Close",
    skipToContent: "Skip to content",
    offlineBanner: "Offline mode — using data saved on your device",
  },
  nav: { home: "Home", recipes: "Recipes", plan: "21 Days", acolher: "Care", bonus: "Bonus", profile: "Profile", ariaLabel: "Main navigation" },
  sos: {
    ariaLabel: "SOS — I need help", label: "SOS", eyebrow: "One moment", title: "You are not alone",
    breathTitle: "4-7-8 Breathing", in: "Inhale", hold: "Hold", out: "Exhale",
    repeat: "Repeat 4 times", overcomePeak: "Ride out the peak",
    talkToNutri: "Talk to Nutri", antiBingeGuide: "Anti-binge guide",
    motivacionais: [
      "Breathe. This moment will pass — you've beaten others before.",
      "It's not hunger. It's emotion. Welcome it, don't eat it.",
      "You don't need to be perfect. You just need to come back.",
      "One choice at a time. This one can be self-love.",
      "Your body deserves care, not punishment.",
    ],
    tecnicas: [
      "Drink 1 glass of cold water slowly",
      "Brush your teeth right now",
      "Leave the room for 5 minutes",
      "Eat 1 piece of fruit with cinnamon",
    ],
  },
  settings: {
    title: "Settings", yourData: "Your details", name: "Name", age: "Age", height: "Height (cm)",
    startWeight: "Starting weight (kg)", goalWeight: "Goal (kg)", appearance: "Appearance",
    theme: "Theme", light: "Light", dark: "Dark", fontSize: "Text size",
    small: "S", medium: "M", large: "L", sound: "Sounds", soundEffects: "Sound effects",
    language: "Language", languageHint: "Change the app language — saved on this device.",
    autoSave: "Changes save automatically.",
  },

  home: {
    metaTitle: "Home — 21-Day Challenge",
    metaDescription: "Your feminine transformation journey starts here.",
    greeting: "Good morning,",
    quoteEyebrow: "Quote of the day · Day {n}",
    reminderLabel: "Daily reminder at",
    reminderAriaLabel: "Daily reminder time",
    reminderDisable: "disable",
    reminderDisableAria: "Disable reminder",
    reminderBtn: "Get morning reminder",
    journeyAlt: "Your journey",
    journeyLabel: "Your journey",
    dayOf: "Day {n} of 21",
    percentDone: "{n}% complete",
    continueBtn: "Continue journey",
    streakLabel: "Streak",
    favoritesLabel: "Favorites",
    stateLabel: "Status",
    stateValue: "Light",
    hydrationLabel: "Hydration",
    waterGlasses: "{n} / 8 glasses",
    addWater: "+ 1 glass",
    nutriTitle: "Talk to Nutri",
    nutriSub: "Feminine support 24h",
    evolutionTitle: "Your evolution",
    evolutionSub: "Achievements & medals",
    modulesTitle: "Journey modules",
    modulesSub: "Unlocked every 2 days",
    modulesViewAll: "See all",
    moduleBadge: "Module {n}",
    moduleLocked: "{n}d left",
    calendarTitle: "Your 21 days",
    calendarViewAll: "See all",
  },

  plan: {
    metaTitle: "21-Day Plan — Challenge",
    weekLabel: "Week {n}",
    h1: "21-Day Plan",
    daysCompleted: "{n} of 21 days completed",
    dayBadge: "Day",
    dayHeading: "Day {n}",
    breakfast: "Breakfast",
    lunch: "Lunch",
    snack: "Snack",
    dinner: "Dinner",
    completedBtn: "Day complete ✓",
    completeBtn: "Complete day",
    celebrateTitle: "You did it!",
    celebrateSub: "One more day of your transformation ✨",
    viewRecipe: "See recipe →",
  },

  profile: {
    metaTitle: "Profile — 21-Day Challenge",
    greeting: "Welcome",
    daysLabel: "Days",
    goalLabel: "Goal",
    favoritesLabel: "Favorites",
    evolutionTitle: "Your evolution",
    startWeight: "Starting weight (kg)",
    goalWeight: "Goal (kg)",
    progressLabel: "Progress",
    moodTitle: "How are you today?",
    moodSaved: "Logged for today ♥",
    evolutionRow: "My evolution & achievements",
    notificationsRow: "Notifications & reminders",
    settingsRow: "Settings",
    resetRow: "Restart journey",
    resetTitle: "Restart your journey?",
    resetDesc: "All your data, progress, favorites and answers will be deleted. This action cannot be undone.",
    resetCancel: "Cancel",
    resetConfirm: "Yes, restart",
  },

  onboarding: {
    metaTitle: "Welcome — 21-Day Challenge",
    welcomeTitle: "Welcome to your transformation",
    welcomeBody: "A feminine, light and achievable protocol. No hunger, no guilt, no war with food.",
    welcomeSteps: "Let's personalise your plan in {n} quick questions",
    startBtn: "Start",
    finalTitle: "Your personalised plan is ready.",
    finalBody: "We've prepared the next 21 days with recipes, emotional support and everything you need.",
    accessBtn: "Access my plan",
    backBtn: "Back",
    stepOf: "{n} of {total}",
    skipBtn: "Skip",
    continueBtn: "Continue",
    name: { question: "What do you like to be called?", placeholder: "Your name" },
    age: { question: "How old are you?", placeholder: "years" },
    height: { question: "What is your height?", hint: "in centimetres", placeholder: "e.g. 165" },
    weight: { question: "What is your current weight?", hint: "in kilos", placeholder: "e.g. 70" },
    goalWeight: { question: "What is your goal weight?", hint: "in kilos (optional)", placeholder: "e.g. 62" },
    objective: { question: "What is your main goal?", options: ["Lose weight", "Reduce binge eating", "More energy", "Self-esteem"] },
    difficulty: { question: "What is your biggest challenge?", options: ["Sweet cravings", "Eating at night", "Lack of time", "Anxiety"] },
    routine: { question: "How is your routine?", options: ["Very busy", "Balanced", "Calm"] },
  },

  nutri: {
    metaTitle: "Talk to Nutri — 21-Day Challenge",
    h1: "Nutri",
    status: "Online · replies in seconds",
    clearBtn: "clear",
    welcome: "Hey gorgeous! 🌸 I'm your personal Nutri. I'm here to support you, answer your questions and help you stay on track. Tell me: how are you today?",
    placeholder: "Tell Nutri…",
    quick: [
      "I'm craving something sweet",
      "What can I eat right now?",
      "I'm feeling discouraged",
      "I couldn't follow the plan today",
      "Help me with a binge urge",
      "I want to reduce belly bloat",
    ],
    errorGeneral: "Something went wrong. Want to try again?",
    errorOffline: "No connection. Please try again.",
  },

  notifications: {
    metaTitle: "Notifications & reminders",
    h1: "Notifications",
    intro: "Set up gentle reminders to keep you company throughout the day.",
    waterToggle: "Water reminder",
    mealsToggle: "Meal reminder",
    motivationToggle: "Daily motivational message",
    sleepToggle: "Sleep reminder",
    schedulesTitle: "Schedules",
    firstWater: "First glass of water",
    lunchTime: "Lunch",
    savedNote: "Your preferences are saved on this device.",
  },

  evolution: {
    metaTitle: "Evolution — 21-Day Challenge",
    eyebrow: "Your story",
    h1: "Evolution",
    daysCompleted: "Days completed",
    streak: "Streak",
    waterGlasses: "Glasses of water",
    weightGoal: "Weight goal",
    journeyTitle: "Your 21-day journey",
    dayTitle: "Day {n}",
    percentDone: "{n}% complete",
    achievementsTitle: "Your achievements",
    medal7days: "7 days in a row",
    medalHydra: "Hydration queen",
    medalControl: "Total control",
    medalPerfect: "Perfect week",
    earned: "Earned",
    locked: "Locked",
    continueBtn: "Continue with modules",
  },

  bonus: {
    metaTitle: "Bonus — 21-Day Challenge",
    eyebrow: "Exclusive content",
    h1: "Bonus",
    intro: "Extra material to speed up your transformation.",
    bonusBadge: "Bonus {n}",
    openBtn: "Open",
    comingSoon: "Coming soon",
    downloadAria: "Download PDF",
    closeAria: "Close",
  },

  recipes: {
    metaTitle: "Recipes — 21-Day Challenge",
    eyebrow: "Cook with lightness",
    h1: "Recipes",
    searchPlaceholder: "Search recipe...",
    satietyLabel: "Satiety",
    notFound: "Recipe not found.",
    forYou: "For you",
    benefitsTitle: "Benefits",
    bestTimeTitle: "Best time",
    ingredientsTitle: "Ingredients",
    prepTitle: "Preparation method",
    videoTitle: "Recipe video",
    timeLabel: "Time",
    proteinLabel: "Protein",
  },

  antiBinge: {
    metaTitle: "Acolher — Anti-Binge",
    eyebrow: "You are not alone",
    h1: "Acolher",
    intro: "Here you find support in the moments when everything feels heavy.",
    emergencyEyebrow: "Emergency button",
    emergencyTitle: "I feel like giving up on my diet",
    emergencyBody: "Tap here. I'll be with you right now.",
    emergencyBtn: "I need support now",
    reflectionTitle: "Moment of reflection",
    reflectionBody: "Food is not the problem. It's an attempt to solve an older problem. Today, instead of judging the craving, listen to what it wants to tell you.",
    modalTitle: "Breathe. I'm here.",
    emergencyMsgs: [
      "Breathe deeply. You are safe.",
      "This urge will pass in 10 minutes.",
      "You've come so far. Remember?",
      "It's not hunger. It's an emotion asking for care.",
    ],
    techniquesTitle: "Try one of these techniques now:",
    techniques: [
      "Drink 2 glasses of water with lemon",
      "Breathe: inhale 4s, hold 7s, exhale 8s",
      "Eat 1 boiled egg or peanut butter",
      "Walk for 5 minutes anywhere",
      "Write what you are feeling right now",
    ],
    feelBetterBtn: "I feel better now",
    backLink: "Acolher",
    stepsTitle: "Do it now, in order",
    affirmationsTitle: "Repeat to yourself",
    contentNotFound: "Content not found.",
    doce: {
      title: "Sweet cravings",
      cardDesc: "Techniques to ride out the peak in 10 min.",
      subtitle: "Techniques to ride out the peak in 10 min",
      intro: "Sweet cravings are a wave: they rise strong, but always fall. Your body doesn't need sugar — it needs stability. In 10 minutes the peak will pass.",
      steps: [
        { title: "1. Drink 2 glasses of water with lemon", desc: "Dehydration is mistaken for a sweet craving in 60% of cases." },
        { title: "2. Eat 1 protein source", desc: "Boiled egg, cheese, peanut butter. Protein shuts off the sugar signal." },
        { title: "3. 4-7-8 breathing (3 cycles)", desc: "Inhale 4s, hold 7s, exhale 8s. Calms the nervous system." },
        { title: "4. Move your body for 5 min", desc: "Short walk, stretching, dancing. Releases natural dopamine." },
        { title: "5. Wait 10 timed minutes", desc: "Set a timer. When it rings, the craving will have dropped by at least 70%." },
      ],
      affirmations: ["This craving is not hunger — it's a passing wave.", "I don't need to give in to feel good.", "In 10 minutes I'll be proud of myself."],
    },
    ansiedade: {
      title: "Anxiety",
      cardDesc: "4-7-8 breathing and body grounding.",
      subtitle: "4-7-8 breathing and body grounding",
      intro: "Anxiety is not weakness — it's the body on alert. You can calm that alert in minutes, without food and without suffering.",
      steps: [
        { title: "1. 4-7-8 breathing", desc: "Inhale through the nose for 4s, hold 7s, exhale through the mouth for 8s. Repeat 4 times." },
        { title: "2. 5-4-3-2-1 grounding", desc: "Name: 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you feel." },
        { title: "3. Hand on chest, hand on belly", desc: "Feel your breathing. Say: 'I am safe right now.'" },
        { title: "4. Drink cold water slowly", desc: "Activates the vagus nerve and reduces heart rate within seconds." },
        { title: "5. Write what you feel", desc: "Write without filter for 3 minutes. Getting it out calms you." },
      ],
      affirmations: ["I am safe in this moment.", "My thoughts are not facts.", "I can take care of myself without eating."],
    },
    emocional: {
      title: "Emotional hunger",
      cardDesc: "Identify the feeling behind the hunger.",
      subtitle: "Identify the feeling behind the hunger",
      intro: "Emotional hunger appears suddenly, asks for something specific (usually sweet) and doesn't pass when you eat. Recognising it is the first step to freedom.",
      steps: [
        { title: "1. Pause and ask: 'What am I feeling?'", desc: "Sadness, anger, boredom, loneliness, tiredness? Name the feeling." },
        { title: "2. Rate your physical hunger (0 to 10)", desc: "Below 5 it's not physical hunger — it's emotional." },
        { title: "3. Choose an action to tend to the feeling", desc: "Call someone, take a warm bath, go for a walk, cry." },
        { title: "4. Wait 20 minutes", desc: "If the urge passes, it was emotional. If it persists and is physical hunger, eat calmly." },
        { title: "5. Log it in your journal", desc: "Note the trigger. Patterns reveal what needs to be addressed." },
      ],
      affirmations: ["I can feel without needing to eat.", "My feelings are valid and temporary.", "I deserve to be cared for by myself."],
    },
    noite: {
      title: "Night-time attacks",
      cardDesc: "End-of-day closing ritual.",
      subtitle: "End-of-day closing ritual",
      intro: "Eating at night is rarely hunger — it's accumulated tiredness, daytime anxiety or lack of protein at earlier meals. Create a closing ritual.",
      steps: [
        { title: "1. Have dinner with real protein", desc: "Without enough protein, your brain asks for food 2h later." },
        { title: "2. Hot herbal tea, no sugar", desc: "Chamomile, lemon balm or anise. The warmth signals to your body: 'the day is over'." },
        { title: "3. Brush your teeth at 9pm", desc: "A powerful closing signal. Eating afterwards feels uncomfortable." },
        { title: "4. Warm shower + body lotion", desc: "Mindful touch reduces the urge to seek comfort in food." },
        { title: "5. Reading or meditation for 10 min", desc: "Screen away. Low light. Prepares your body to rest." },
      ],
      affirmations: ["My day is over. I can rest.", "I don't need to eat to relax.", "Tomorrow I wake up light and proud."],
    },
    recaida: {
      title: "Avoiding relapses",
      cardDesc: "Return plan without guilt.",
      subtitle: "Return plan without guilt",
      intro: "Slipping once doesn't erase your progress. What destroys is not the slip — it's 'since I slipped, I may as well ruin everything'. Here is your way back.",
      steps: [
        { title: "1. Stop where you are, without judgement", desc: "One sweet is not the end. One meal is not the end. Breathe." },
        { title: "2. Drink water and hydrate", desc: "Don't 'compensate' by skipping meals — that worsens the cycle." },
        { title: "3. Next meal: protein + vegetables", desc: "Rebalance your body at the next meal, not the next day." },
        { title: "4. Walk for 15 minutes", desc: "Movement helps metabolise and breaks the mental cycle." },
        { title: "5. Note the trigger", desc: "What happened before? Identify it to prevent next time." },
      ],
      affirmations: ["One slip doesn't erase 20 good choices.", "I come back now, not tomorrow.", "Progress is continuing, not being perfect."],
    },
    culpa: {
      title: "Reducing guilt",
      cardDesc: "You are not what you ate today.",
      subtitle: "You are not what you ate today",
      intro: "Guilt doesn't slim you down — it weighs you down. Every time you punish yourself for eating, you feed the binge cycle. The way is the opposite: self-compassion.",
      steps: [
        { title: "1. Notice the guilt thought", desc: "'I ruined everything', 'I'm a failure'. Observe it — without believing it." },
        { title: "2. Ask: would I say this to a friend?", desc: "If you wouldn't, don't say it to yourself." },
        { title: "3. Rewrite the thought", desc: "'I ruined everything' becomes 'I ate something off-plan. I continue now.'" },
        { title: "4. Do something kind for your body", desc: "Bath, stretching, moisturiser. Show it that it's loved." },
        { title: "5. Return to the plan at the next meal", desc: "No punishment, no skipping. No punishment diet." },
      ],
      affirmations: ["I am so much more than my plate today.", "Guilt has no place in my journey.", "I deserve to treat myself with kindness — always."],
    },
  },

  modules: {
    metaTitle: "Modules — 21-Day Challenge",
    detailMetaTitle: "Module — 21-Day Challenge",
    eyebrow: "Your journey",
    h1: "Premium modules",
    progressEyebrow: "Progressive unlock",
    progressTitle: "Every 2 days completed, a new module opens 🤍",
    progressSub: "{done} days completed · {mods} of 8 modules unlocked",
    moduleBadge: "Module {n}",
    openModule: "Open module",
    lockedSingular: "{n} day left",
    lockedPlural: "{n} days left",
    notFound: "Module not found.",
    lockedTitle: "Module locked",
    lockedDesc: "Complete {n} more days of the challenge to unlock it.",
    checklistTitle: "Module checklist",
    checklistHint: "Tick what you did today",
    nutriBtn: "Ask Nutri your questions",
    protocol24h: {
      title: "24h anti-bloat protocol",
      steps: [
        { time: "Morning", action: "Lemon water + protein at breakfast" },
        { time: "Midday", action: "Lunch with green leaves and lean protein" },
        { time: "Afternoon", action: "Mint or ginger tea + 15-min walk" },
        { time: "Night", action: "Light dinner, zero sugar, sleep before 11pm" },
      ],
    },
    morningRoutine: {
      title: "Feminine morning routine",
      items: ["💧 1 glass of water on waking", "☀️ 5 minutes of sunlight on your skin", "🥚 Breakfast with protein (20g+)", "🧘 1 minute of deep breathing"],
    },
    nightRitual: {
      title: "Night ritual",
      items: ["🌙 Soft light after 9pm", "🍵 Chamomile or lemon balm tea", "📵 Screens away from the bed", "📝 Write 1 gratitude before sleeping"],
    },
    hydration: {
      title: "Flavoured waters",
      items: ["🍋 Lemon + mint — de-bloats", "🫚 Ginger + cinnamon — boosts metabolism", "🥒 Cucumber + lemon — refreshing and draining", "🌺 Cold hibiscus — antioxidant"],
    },
    cycle: {
      title: "Your cycle, your plan",
      phases: [
        { name: "Menstrual", tip: "Rest, iron, warm food" },
        { name: "Follicular", tip: "High energy — make the most of it to exercise!" },
        { name: "Ovulatory", tip: "Peak confidence and vitality" },
        { name: "Luteal", tip: "More protein, more sleep, less pressure" },
      ],
    },
    diary: { title: "Personal journal", placeholder: "Write 1 win of yours today, however small…" },
    future: { title: "Your goals for the next 30 days", placeholder: "E.g. sleep 8h, exercise 3x/week, maintain weight…" },
  },

  difficulty: { easy: "Easy", medium: "Medium", advanced: "Advanced" },
  categories: {
    all: "All", breakfast: "Breakfast", lunch: "Lunch", dinner: "Dinner",
    snack: "Snack", antiBinge: "Anti-binge", belly: "De-bloat",
    quick: "Quick", anxiety: "Anti-anxiety", light: "Light", night: "Night",
  },
};

export const dict: Record<Locale, Dict> = { es, pt, en };
