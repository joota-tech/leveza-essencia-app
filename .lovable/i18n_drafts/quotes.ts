// Frases motivacionais — arquivo isolado para não arrastar as imagens de receitas
// no bundle inicial da home.

import type { L10n } from "./app-data";

export const motivationalQuotes: L10n<string>[] = [
  {
    es: "No necesitas sufrir para adelgazar.",
    pt: "Você não precisa sofrer para emagrecer.",
    en: "You don't need to suffer to lose weight.",
  },
  {
    es: "Comer bien es un acto de autocuidado.",
    pt: "Comer bem é um ato de autocuidado.",
    en: "Eating well is an act of self-care.",
  },
  {
    es: "Cada comida es una elección de amor propio.",
    pt: "Cada refeição é uma escolha de amor próprio.",
    en: "Every meal is a choice of self-love.",
  },
  {
    es: "Tu cuerpo te escucha. Háblale con cariño.",
    pt: "Seu corpo te escuta. Fale com ele com carinho.",
    en: "Your body listens to you. Speak to it with love.",
  },
  {
    es: "Hoy es un día más de tu transformación.",
    pt: "Hoje é mais um dia da sua transformação.",
    en: "Today is one more day of your transformation.",
  },
  {
    es: "Estás más cerca que ayer.",
    pt: "Você está mais perto do que ontem.",
    en: "You're closer than you were yesterday.",
  },
  {
    es: "La constancia te lleva más lejos que la perfección.",
    pt: "A constância te leva mais longe do que a perfeição.",
    en: "Consistency takes you further than perfection.",
  },
  {
    es: "Pequeñas elecciones, grandes cambios.",
    pt: "Pequenas escolhas, grandes mudanças.",
    en: "Small choices, big changes.",
  },
  {
    es: "Respira profundo. Puedes con un día más.",
    pt: "Respira fundo. Você consegue mais um dia.",
    en: "Breathe deeply. You can handle one more day.",
  },
  {
    es: "El espejo no define tu valor — tu valentía sí.",
    pt: "O espelho não define o seu valor — a sua coragem sim.",
    en: "The mirror doesn't define your worth — your courage does.",
  },
  {
    es: "La disciplina es el amor propio en acción.",
    pt: "A disciplina é o amor próprio em ação.",
    en: "Discipline is self-love in action.",
  },
  {
    es: "No te rindas de quien te estás convirtiendo.",
    pt: "Não desista de quem você está se tornando.",
    en: "Don't give up on who you're becoming.",
  },
  {
    es: "Tu progreso es silencioso, pero es real.",
    pt: "Seu progresso é silencioso, mas é real.",
    en: "Your progress is quiet, but it's real.",
  },
  {
    es: "Bebe agua. Come con calma. Sé gentil contigo.",
    pt: "Beba água. Coma com calma. Seja gentil com você.",
    en: "Drink water. Eat calmly. Be gentle with yourself.",
  },
  {
    es: "Cada día cumplido es una victoria para toda la vida.",
    pt: "Cada dia cumprido é uma vitória para a vida toda.",
    en: "Every day you show up is a lifelong victory.",
  },
  {
    es: "No estás sola — estoy contigo.",
    pt: "Você não está sozinha — estou com você.",
    en: "You're not alone — I'm with you.",
  },
  {
    es: "La jornada es tuya, el ritmo también.",
    pt: "A jornada é sua, o ritmo também.",
    en: "The journey is yours, and so is the pace.",
  },
  {
    es: "Más ligereza, menos autoexigencia.",
    pt: "Mais leveza, menos autocobrança.",
    en: "More lightness, less self-pressure.",
  },
  {
    es: "El cuerpo cambia cuando la mente se calma.",
    pt: "O corpo muda quando a mente se acalma.",
    en: "The body changes when the mind calms down.",
  },
  {
    es: "Eres más fuerte que cualquier antojo pasajero.",
    pt: "Você é mais forte do que qualquer desejo passageiro.",
    en: "You are stronger than any passing craving.",
  },
  {
    es: "Faltan pocos días — confía en el proceso.",
    pt: "Faltam poucos dias — confie no processo.",
    en: "Just a few days left — trust the process.",
  },
  {
    es: "Hoy es el último paso de una mujer nueva.",
    pt: "Hoje é o último passo de uma mulher nova.",
    en: "Today is the final step of a new you.",
  },
];

export function quoteOfTheDay(currentDay: number): L10n<string> {
  const idx = Math.max(0, Math.min(currentDay - 1, motivationalQuotes.length - 1));
  return motivationalQuotes[idx];
}
