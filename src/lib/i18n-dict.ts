// Dictionaries for UI chrome. Recipe/module/quote content remains in
// app-data/modules-data/quotes and will be localized in follow-up passes.

export type Locale = "es" | "pt" | "en";

type Dict = {
  app: { title: string; description: string; shortTitle: string };
  common: {
    loading: string;
    back: string;
    cancel: string;
    save: string;
    close: string;
    skipToContent: string;
    offlineBanner: string;
  };
  nav: { home: string; recipes: string; plan: string; acolher: string; bonus: string; profile: string; ariaLabel: string };
  sos: {
    ariaLabel: string;
    label: string;
    eyebrow: string;
    title: string;
    breathTitle: string;
    in: string;
    hold: string;
    out: string;
    repeat: string;
    overcomePeak: string;
    talkToNutri: string;
    antiBingeGuide: string;
    motivacionais: string[];
    tecnicas: string[];
  };
  settings: {
    title: string;
    yourData: string;
    name: string;
    age: string;
    height: string;
    startWeight: string;
    goalWeight: string;
    appearance: string;
    theme: string;
    light: string;
    dark: string;
    fontSize: string;
    small: string;
    medium: string;
    large: string;
    sound: string;
    soundEffects: string;
    language: string;
    languageHint: string;
    autoSave: string;
  };
};

const es: Dict = {
  app: {
    title: "Reto 21 Días — Adelgaza Comiendo Bien",
    description: "Protocolo femenino de adelgazamiento con alimentación proteica, sin hambre y sin culpa.",
    shortTitle: "Reto 21",
  },
  common: {
    loading: "Cargando…",
    back: "Volver",
    cancel: "Cancelar",
    save: "Guardar",
    close: "Cerrar",
    skipToContent: "Ir al contenido",
    offlineBanner: "Modo sin conexión — usando datos guardados en tu móvil",
  },
  nav: { home: "Inicio", recipes: "Recetas", plan: "21 Días", acolher: "Acoger", bonus: "Bonos", profile: "Perfil", ariaLabel: "Navegación principal" },
  sos: {
    ariaLabel: "SOS — necesito ayuda",
    label: "SOS",
    eyebrow: "Un momento",
    title: "No estás sola",
    breathTitle: "Respiración 4-7-8",
    in: "Inspira",
    hold: "Sostén",
    out: "Suelta",
    repeat: "Repite 4 veces",
    overcomePeak: "Atraviesa el pico",
    talkToNutri: "Hablar con la Nutri",
    antiBingeGuide: "Guía anti-atracón",
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
    title: "Ajustes",
    yourData: "Tus datos",
    name: "Nombre",
    age: "Edad",
    height: "Altura (cm)",
    startWeight: "Peso inicial (kg)",
    goalWeight: "Meta (kg)",
    appearance: "Apariencia",
    theme: "Tema",
    light: "Claro",
    dark: "Oscuro",
    fontSize: "Tamaño del texto",
    small: "P",
    medium: "M",
    large: "G",
    sound: "Sonidos",
    soundEffects: "Efectos de sonido",
    language: "Idioma",
    languageHint: "Cambia el idioma del app — se guarda en este dispositivo.",
    autoSave: "Los cambios se guardan automáticamente.",
  },
};

const pt: Dict = {
  app: {
    title: "Desafio 21 Dias — Emagreça Comendo Bem",
    description: "Protocolo feminino de emagrecimento com alimentação proteica, sem fome e sem culpa.",
    shortTitle: "Desafio 21",
  },
  common: {
    loading: "Carregando…",
    back: "Voltar",
    cancel: "Cancelar",
    save: "Salvar",
    close: "Fechar",
    skipToContent: "Ir para o conteúdo",
    offlineBanner: "Modo offline — usando dados salvos no seu celular",
  },
  nav: { home: "Início", recipes: "Receitas", plan: "21 Dias", acolher: "Acolher", bonus: "Bônus", profile: "Perfil", ariaLabel: "Navegação principal" },
  sos: {
    ariaLabel: "SOS — preciso de ajuda",
    label: "SOS",
    eyebrow: "Um momento",
    title: "Você não está sozinha",
    breathTitle: "Respiração 4-7-8",
    in: "Inspire",
    hold: "Segure",
    out: "Solte",
    repeat: "Repita 4 vezes",
    overcomePeak: "Atravesse o pico",
    talkToNutri: "Falar com a Nutri",
    antiBingeGuide: "Guia anti-compulsão",
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
    title: "Ajustes",
    yourData: "Seus dados",
    name: "Nome",
    age: "Idade",
    height: "Altura (cm)",
    startWeight: "Peso inicial (kg)",
    goalWeight: "Meta (kg)",
    appearance: "Aparência",
    theme: "Tema",
    light: "Claro",
    dark: "Escuro",
    fontSize: "Tamanho do texto",
    small: "P",
    medium: "M",
    large: "G",
    sound: "Sons",
    soundEffects: "Efeitos sonoros",
    language: "Idioma",
    languageHint: "Mude o idioma do app — fica salvo neste dispositivo.",
    autoSave: "As alterações são salvas automaticamente.",
  },
};

const en: Dict = {
  app: {
    title: "21-Day Challenge — Slim Down Eating Well",
    description: "A feminine weight-loss protocol with protein-rich meals, no hunger and no guilt.",
    shortTitle: "21-Day",
  },
  common: {
    loading: "Loading…",
    back: "Back",
    cancel: "Cancel",
    save: "Save",
    close: "Close",
    skipToContent: "Skip to content",
    offlineBanner: "Offline mode — using data saved on your device",
  },
  nav: { home: "Home", recipes: "Recipes", plan: "21 Days", acolher: "Care", bonus: "Bonus", profile: "Profile", ariaLabel: "Main navigation" },
  sos: {
    ariaLabel: "SOS — I need help",
    label: "SOS",
    eyebrow: "One moment",
    title: "You are not alone",
    breathTitle: "4-7-8 Breathing",
    in: "Inhale",
    hold: "Hold",
    out: "Exhale",
    repeat: "Repeat 4 times",
    overcomePeak: "Ride out the peak",
    talkToNutri: "Talk to Nutri",
    antiBingeGuide: "Anti-binge guide",
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
    title: "Settings",
    yourData: "Your details",
    name: "Name",
    age: "Age",
    height: "Height (cm)",
    startWeight: "Starting weight (kg)",
    goalWeight: "Goal (kg)",
    appearance: "Appearance",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    fontSize: "Text size",
    small: "S",
    medium: "M",
    large: "L",
    sound: "Sounds",
    soundEffects: "Sound effects",
    language: "Language",
    languageHint: "Change the app language — saved on this device.",
    autoSave: "Changes save automatically.",
  },
};

export const dict: Record<Locale, Dict> = { es, pt, en };
