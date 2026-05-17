import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";
import { Candy, CloudRain, Heart, Moon, RotateCcw, Sparkles, ChevronLeft, type LucideIcon } from "lucide-react";

type Section = {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  intro: string;
  steps: { title: string; desc: string }[];
  affirmations: string[];
};

const content: Record<string, Section> = {
  doce: {
    id: "doce",
    icon: Candy,
    title: "Vontade de doce",
    subtitle: "Técnicas para atravessar o pico em 10 min",
    intro:
      "A vontade de doce é uma onda: sobe forte, mas sempre desce. Seu corpo não precisa de açúcar — ele precisa de estabilidade. Em 10 minutos o pico passa.",
    steps: [
      { title: "1. Beba 2 copos de água com limão", desc: "A desidratação é confundida com fome doce em 60% dos casos." },
      { title: "2. Coma 1 fonte de proteína", desc: "Ovo cozido, queijo, pasta de amendoim. Proteína desliga o sinal de açúcar." },
      { title: "3. Respiração 4-7-8 (3 ciclos)", desc: "Inspire 4s, segure 7s, expire 8s. Acalma o sistema nervoso." },
      { title: "4. Movimente o corpo por 5 min", desc: "Caminhada curta, alongamento, dançar. Libera dopamina natural." },
      { title: "5. Espere 10 minutos cronometrados", desc: "Coloque um timer. Quando tocar, a vontade terá diminuído ao menos 70%." },
    ],
    affirmations: [
      "Essa vontade não é fome — é uma onda passageira.",
      "Eu não preciso ceder para me sentir bem.",
      "Em 10 minutos eu vou estar orgulhosa de mim.",
    ],
  },
  ansiedade: {
    id: "ansiedade",
    icon: CloudRain,
    title: "Ansiedade",
    subtitle: "Respiração 4-7-8 e ancoragem corporal",
    intro:
      "Ansiedade não é fraqueza — é o corpo em alerta. Você pode acalmar esse alerta em minutos, sem comida e sem sofrimento.",
    steps: [
      { title: "1. Respiração 4-7-8", desc: "Inspire pelo nariz em 4s, segure 7s, expire pela boca em 8s. Repita 4 vezes." },
      { title: "2. Ancoragem 5-4-3-2-1", desc: "Nomeie: 5 coisas que vê, 4 que toca, 3 que ouve, 2 que cheira, 1 que sente." },
      { title: "3. Mão no peito, mão no ventre", desc: "Sinta sua respiração. Diga: 'Eu estou segura agora.'" },
      { title: "4. Beba água gelada devagar", desc: "Ativa o nervo vago e reduz a frequência cardíaca em segundos." },
      { title: "5. Escreva o que sente", desc: "Anote sem filtro por 3 minutos. Tirar de dentro acalma." },
    ],
    affirmations: [
      "Eu estou em segurança neste momento.",
      "Meus pensamentos não são fatos.",
      "Eu posso me cuidar sem comer.",
    ],
  },
  emocional: {
    id: "emocional",
    icon: Heart,
    title: "Fome emocional",
    subtitle: "Identifique o sentimento por trás da fome",
    intro:
      "Fome emocional aparece de repente, pede algo específico (geralmente doce) e não passa quando você come. Reconhecer é o primeiro passo para se libertar.",
    steps: [
      { title: "1. Pause e pergunte: 'O que estou sentindo?'", desc: "Tristeza, raiva, tédio, solidão, cansaço? Dê nome ao sentimento." },
      { title: "2. Avalie a fome física (0 a 10)", desc: "Abaixo de 5 não é fome física — é emocional." },
      { title: "3. Escolha uma ação que cuide do sentimento", desc: "Ligar para alguém, tomar banho quente, sair de casa, chorar." },
      { title: "4. Espere 20 minutos", desc: "Se a vontade passar, era emocional. Se persistir e for fome física, coma com calma." },
      { title: "5. Registre no diário", desc: "Anote o gatilho. Padrões revelam o que precisa ser cuidado." },
    ],
    affirmations: [
      "Eu posso sentir sem precisar comer.",
      "Meus sentimentos são válidos e passageiros.",
      "Eu mereço ser cuidada por mim mesma.",
    ],
  },
  noite: {
    id: "noite",
    icon: Moon,
    title: "Ataques noturnos",
    subtitle: "Ritual de encerramento do dia",
    intro:
      "Comer à noite raramente é fome — é cansaço acumulado, ansiedade do dia ou falta de proteína nas refeições anteriores. Crie um ritual de fechamento.",
    steps: [
      { title: "1. Janta com proteína de verdade", desc: "Sem proteína suficiente, seu cérebro pede comida 2h depois." },
      { title: "2. Chá quente sem açúcar", desc: "Camomila, melissa ou erva-doce. O calor sinaliza ao corpo: 'acabou o dia'." },
      { title: "3. Escove os dentes às 21h", desc: "Sinal poderoso de encerramento. Comer depois fica desconfortável." },
      { title: "4. Banho morno + creme no corpo", desc: "Toque consciente reduz a vontade de buscar conforto na comida." },
      { title: "5. Leitura ou meditação 10 min", desc: "Tela longe. Luz baixa. Prepare o corpo para descansar." },
    ],
    affirmations: [
      "Meu dia acabou. Eu posso descansar.",
      "Não preciso comer para relaxar.",
      "Amanhã eu acordo leve e orgulhosa.",
    ],
  },
  recaida: {
    id: "recaida",
    icon: RotateCcw,
    title: "Evitar recaídas",
    subtitle: "Plano de retorno sem culpa",
    intro:
      "Sair da rota uma vez não apaga seu progresso. O que destrói não é o deslize — é o 'já que sai, vou destruir tudo'. Aqui está o seu retorno.",
    steps: [
      { title: "1. Pare onde está, sem julgamento", desc: "Um doce não é o fim. Uma refeição não é o fim. Respire." },
      { title: "2. Beba água e hidrate-se", desc: "Não 'compense' pulando refeições — isso piora o ciclo." },
      { title: "3. Próxima refeição: proteína + folhas", desc: "Reequilibre o corpo na próxima refeição, não no dia seguinte." },
      { title: "4. Caminhe 15 minutos", desc: "Movimento ajuda a metabolizar e quebra o ciclo mental." },
      { title: "5. Anote o gatilho", desc: "O que aconteceu antes? Identifique para prevenir da próxima vez." },
    ],
    affirmations: [
      "Um deslize não apaga 20 acertos.",
      "Eu volto agora, não amanhã.",
      "Progresso é seguir, não ser perfeita.",
    ],
  },
  culpa: {
    id: "culpa",
    icon: Sparkles,
    title: "Reduzir culpa",
    subtitle: "Você não é o que você comeu hoje",
    intro:
      "Culpa não emagrece — ela engorda. Cada vez que você se pune por comer, alimenta o ciclo de compulsão. O caminho é o oposto: acolhimento.",
    steps: [
      { title: "1. Reconheça o pensamento de culpa", desc: "'Estraguei tudo', 'sou um fracasso'. Note — sem acreditar nele." },
      { title: "2. Pergunte: eu falaria isso a uma amiga?", desc: "Se não falaria, não diga para você mesma." },
      { title: "3. Reescreva o pensamento", desc: "'Estraguei tudo' vira 'Comi algo fora do plano. Sigo agora.'" },
      { title: "4. Faça algo gentil pelo seu corpo", desc: "Banho, alongamento, hidratante. Mostre que ele é amado." },
      { title: "5. Volte ao plano na próxima refeição", desc: "Sem castigo, sem pular. Sem dieta de punição." },
    ],
    affirmations: [
      "Eu sou muito mais do que meu prato de hoje.",
      "Culpa não tem lugar na minha jornada.",
      "Eu mereço me tratar com carinho — sempre.",
    ],
  },
};

export const Route = createFileRoute("/anti-compulsao/$id")({
  head: ({ params }) => {
    const s = content[params.id];
    return { meta: [{ title: s ? `${s.title} — Acolher` : "Acolher" }] };
  },
  loader: ({ params }) => {
    if (!content[params.id]) throw notFound();
    return content[params.id];
  },
  component: DetailPage,
  notFoundComponent: () => (
    <MobileShell>
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="text-sm text-muted-foreground">Conteúdo não encontrado.</p>
        <Link to="/anti-compulsao" className="mt-4 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">
          Voltar
        </Link>
      </div>
    </MobileShell>
  ),
});

function DetailPage() {
  const s = Route.useLoaderData() as Section;
  const Icon = s.icon;

  return (
    <MobileShell>
      <header className="px-6 pt-8">
        <Link to="/anti-compulsao" className="inline-flex items-center gap-1 text-sm text-muted-foreground">
          <ChevronLeft className="h-4 w-4" /> Acolher
        </Link>
        <div className="mt-5 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-rose text-rose-foreground shadow-glow">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-serif text-2xl leading-tight">{s.title}</h1>
            <p className="mt-1 text-xs text-muted-foreground">{s.subtitle}</p>
          </div>
        </div>
      </header>

      <section className="mx-6 mt-6 rounded-3xl bg-blush p-5">
        <p className="text-sm leading-relaxed text-foreground">{s.intro}</p>
      </section>

      <section className="px-6 pt-6">
        <h2 className="font-serif text-lg">Faça agora, na ordem</h2>
        <ul className="mt-3 space-y-3">
          {s.steps.map((step, i) => (
            <li
              key={i}
              className="rounded-3xl border border-border/60 bg-card p-4 shadow-soft animate-float-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <h3 className="font-serif text-base text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-6 mt-6 rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
        <h3 className="font-serif text-lg">Repita para você mesma</h3>
        <div className="mt-3 space-y-2">
          {s.affirmations.map((a) => (
            <p key={a} className="rounded-2xl bg-blush p-3 text-sm italic text-foreground">
              "{a}"
            </p>
          ))}
        </div>
      </section>

      <div className="px-6 pt-6">
        <Link
          to="/anti-compulsao"
          className="block w-full rounded-2xl bg-primary py-4 text-center text-sm font-medium text-primary-foreground shadow-glow active:scale-[0.98]"
        >
          Já estou melhor
        </Link>
      </div>
    </MobileShell>
  );
}
