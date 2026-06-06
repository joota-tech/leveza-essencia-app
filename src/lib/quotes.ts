// Frases motivacionales — archivo aislado para no arrastrar las imágenes de recetas
// en el bundle inicial de la home.

export const motivationalQuotes = [
  "No necesitas sufrir para adelgazar.",
  "Comer bien es un acto de autocuidado.",
  "Cada comida es una elección de amor propio.",
  "Tu cuerpo te escucha. Háblale con cariño.",
  "Hoy es un día más de tu transformación.",
  "Estás más cerca que ayer.",
  "La constancia te lleva más lejos que la perfección.",
  "Pequeñas elecciones, grandes cambios.",
  "Respira profundo. Puedes con un día más.",
  "El espejo no define tu valor — tu valentía sí.",
  "La disciplina es el amor propio en acción.",
  "No te rindas de quien te estás convirtiendo.",
  "Tu progreso es silencioso, pero es real.",
  "Bebe agua. Come con calma. Sé gentil contigo.",
  "Cada día cumplido es una victoria para toda la vida.",
  "No estás sola — estoy contigo.",
  "La jornada es tuya, el ritmo también.",
  "Más ligereza, menos autoexigencia.",
  "El cuerpo cambia cuando la mente se calma.",
  "Eres más fuerte que cualquier antojo pasajero.",
  "Faltan pocos días — confía en el proceso.",
  "Hoy es el último paso de una mujer nueva.",
];

export function quoteOfTheDay(currentDay: number) {
  const idx = Math.max(0, Math.min(currentDay - 1, motivationalQuotes.length - 1));
  return motivationalQuotes[idx];
}
