// Frases motivacionais — arquivo isolado para não arrastar imagens das receitas
// no bundle inicial da home.

export const motivationalQuotes = [
  "Você não precisa sofrer para emagrecer.",
  "Comer bem é um ato de autocuidado.",
  "Cada refeição é uma escolha de amor próprio.",
  "Seu corpo te escuta. Fale com carinho.",
  "Hoje é mais um dia da sua transformação.",
  "Você está mais perto do que ontem.",
  "A constância te leva mais longe que a perfeição.",
  "Pequenas escolhas, grandes mudanças.",
  "Respira fundo. Você consegue mais um dia.",
  "O espelho não define seu valor — sua coragem sim.",
  "Disciplina é o amor próprio em ação.",
  "Não desista de quem você está se tornando.",
  "Seu progresso é silencioso, mas é real.",
  "Beba água. Coma com calma. Seja gentil com você.",
  "Cada dia cumprido é uma vitória pra vida toda.",
  "Você não está sozinha — eu estou com você.",
  "A jornada é sua, o ritmo também.",
  "Mais leveza, menos cobrança.",
  "O corpo muda quando a mente se acalma.",
  "Você é mais forte do que qualquer vontade passageira.",
  "Faltam poucos dias — confia no processo.",
  "Hoje é o último passo de uma nova mulher.",
];

export function quoteOfTheDay(currentDay: number) {
  const idx = Math.max(0, Math.min(currentDay - 1, motivationalQuotes.length - 1));
  return motivationalQuotes[idx];
}
