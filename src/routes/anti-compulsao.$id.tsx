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
    title: "Ganas de dulce",
    subtitle: "Técnicas para superar el pico en 10 min",
    intro:
      "Las ganas de dulce son una ola: sube fuerte, pero siempre baja. Tu cuerpo no necesita azúcar — necesita estabilidad. En 10 minutos el pico pasa.",
    steps: [
      { title: "1. Bebe 2 vasos de agua con limón", desc: "La deshidratación se confunde con hambre de dulce en el 60% de los casos." },
      { title: "2. Come 1 fuente de proteína", desc: "Huevo cocido, queso, mantequilla de maní. La proteína apaga la señal de azúcar." },
      { title: "3. Respiración 4-7-8 (3 ciclos)", desc: "Inspira 4s, sostén 7s, suelta 8s. Calma el sistema nervioso." },
      { title: "4. Mueve el cuerpo por 5 min", desc: "Caminata corta, estiramiento, bailar. Libera dopamina natural." },
      { title: "5. Espera 10 minutos cronometrados", desc: "Pon un temporizador. Cuando suene, las ganas habrán disminuido al menos un 70%." },
    ],
    affirmations: [
      "Estas ganas no son hambre — son una ola pasajera.",
      "No necesito ceder para sentirme bien.",
      "En 10 minutos voy a estar orgullosa de mí.",
    ],
  },
  ansiedade: {
    id: "ansiedade",
    icon: CloudRain,
    title: "Ansiedad",
    subtitle: "Respiración 4-7-8 y anclaje corporal",
    intro:
      "La ansiedad no es debilidad — es el cuerpo en alerta. Puedes calmar esa alerta en minutos, sin comida y sin sufrimiento.",
    steps: [
      { title: "1. Respiración 4-7-8", desc: "Inspira por la nariz en 4s, sostén 7s, suelta por la boca en 8s. Repite 4 veces." },
      { title: "2. Anclaje 5-4-3-2-1", desc: "Nombra: 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles, 1 que sientes." },
      { title: "3. Mano en el pecho, mano en el vientre", desc: "Siente tu respiración. Di: 'Estoy segura ahora.'" },
      { title: "4. Bebe agua fría despacio", desc: "Activa el nervio vago y reduce la frecuencia cardíaca en segundos." },
      { title: "5. Escribe lo que sientes", desc: "Anota sin filtro por 3 minutos. Sacarlo hacia afuera calma." },
    ],
    affirmations: [
      "Estoy en seguridad en este momento.",
      "Mis pensamientos no son hechos.",
      "Puedo cuidarme sin comer.",
    ],
  },
  emocional: {
    id: "emocional",
    icon: Heart,
    title: "Hambre emocional",
    subtitle: "Identifica el sentimiento detrás del hambre",
    intro:
      "El hambre emocional aparece de repente, pide algo específico (generalmente dulce) y no pasa cuando comes. Reconocerla es el primer paso para liberarte.",
    steps: [
      { title: "1. Pausa y pregúntate: '¿Qué estoy sintiendo?'", desc: "¿Tristeza, enojo, aburrimiento, soledad, cansancio? Dale nombre al sentimiento." },
      { title: "2. Evalúa el hambre física (0 a 10)", desc: "Por debajo de 5 no es hambre física — es emocional." },
      { title: "3. Elige una acción que cuide el sentimiento", desc: "Llamar a alguien, darse un baño caliente, salir a caminar, llorar." },
      { title: "4. Espera 20 minutos", desc: "Si las ganas pasan, era emocional. Si persisten y es hambre física, come con calma." },
      { title: "5. Regístralo en el diario", desc: "Anota el detonante. Los patrones revelan lo que necesita ser atendido." },
    ],
    affirmations: [
      "Puedo sentir sin necesitar comer.",
      "Mis sentimientos son válidos y pasajeros.",
      "Merezco ser cuidada por mí misma.",
    ],
  },
  noite: {
    id: "noite",
    icon: Moon,
    title: "Ataques nocturnos",
    subtitle: "Ritual de cierre del día",
    intro:
      "Comer de noche raramente es hambre — es cansancio acumulado, ansiedad del día o falta de proteína en las comidas anteriores. Crea un ritual de cierre.",
    steps: [
      { title: "1. Cena con proteína de verdad", desc: "Sin suficiente proteína, tu cerebro pide comida 2h después." },
      { title: "2. Té caliente sin azúcar", desc: "Manzanilla, melisa o anís. El calor le indica al cuerpo: 'el día terminó'." },
      { title: "3. Cepíllate los dientes a las 21h", desc: "Señal poderosa de cierre. Comer después se vuelve incómodo." },
      { title: "4. Ducha tibia + crema en el cuerpo", desc: "El tacto consciente reduce las ganas de buscar consuelo en la comida." },
      { title: "5. Lectura o meditación 10 min", desc: "Pantalla lejos. Luz baja. Prepara el cuerpo para descansar." },
    ],
    affirmations: [
      "Mi día terminó. Puedo descansar.",
      "No necesito comer para relajarme.",
      "Mañana me despierto ligera y orgullosa.",
    ],
  },
  recaida: {
    id: "recaida",
    icon: RotateCcw,
    title: "Evitar recaídas",
    subtitle: "Plan de retorno sin culpa",
    intro:
      "Salirte del camino una vez no borra tu progreso. Lo que destruye no es el desliz — es el 'ya que me salí, voy a arruinarlo todo'. Aquí está tu regreso.",
    steps: [
      { title: "1. Para donde estás, sin juicio", desc: "Un dulce no es el fin. Una comida no es el fin. Respira." },
      { title: "2. Bebe agua e hidrátate", desc: "No 'compenses' saltando comidas — eso empeora el ciclo." },
      { title: "3. Siguiente comida: proteína + vegetales", desc: "Reequilibra el cuerpo en la próxima comida, no al día siguiente." },
      { title: "4. Camina 15 minutos", desc: "El movimiento ayuda a metabolizar y rompe el ciclo mental." },
      { title: "5. Anota el detonante", desc: "¿Qué pasó antes? Identifícalo para prevenir la próxima vez." },
    ],
    affirmations: [
      "Un desliz no borra 20 aciertos.",
      "Vuelvo ahora, no mañana.",
      "El progreso es seguir, no ser perfecta.",
    ],
  },
  culpa: {
    id: "culpa",
    icon: Sparkles,
    title: "Reducir la culpa",
    subtitle: "No eres lo que comiste hoy",
    intro:
      "La culpa no adelgaza — engorda. Cada vez que te castigas por comer, alimentas el ciclo de atracón. El camino es el opuesto: el acogimiento.",
    steps: [
      { title: "1. Reconoce el pensamiento de culpa", desc: "'Lo arruiné todo', 'soy un fracaso'. Obsérvalo — sin creerlo." },
      { title: "2. Pregúntate: ¿le diría esto a una amiga?", desc: "Si no se lo dirías, no te lo digas a ti misma." },
      { title: "3. Reescribe el pensamiento", desc: "'Lo arruiné todo' se convierte en 'Comí algo fuera del plan. Sigo ahora.'" },
      { title: "4. Haz algo gentil por tu cuerpo", desc: "Baño, estiramiento, hidratante. Muéstrale que es amado." },
      { title: "5. Vuelve al plan en la próxima comida", desc: "Sin castigo, sin saltarte nada. Sin dieta de punición." },
    ],
    affirmations: [
      "Soy mucho más que mi plato de hoy.",
      "La culpa no tiene lugar en mi camino.",
      "Merezco tratarme con cariño — siempre.",
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
        <p className="text-sm text-muted-foreground">Contenido no encontrado.</p>
        <Link to="/anti-compulsao" className="mt-4 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">
          Volver
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
        <h2 className="font-serif text-lg">Hazlo ahora, en orden</h2>
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
        <h3 className="font-serif text-lg">Repite para ti misma</h3>
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
          Ya me siento mejor
        </Link>
      </div>
    </MobileShell>
  );
}
