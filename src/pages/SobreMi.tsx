import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";
import miguelImage from "@/assets/fotoolea.png";
import formulaokImage from "@/assets/formulaok.jpeg";

const SobreMi = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Grado en Psicología",
      description: "Con mención especial en Psicología Clínica",
    },
    {
      icon: Award,
      title: "Psicólogo General Sanitario",
      description: "Máster en Psicología General Sanitaria",
    },
    {
      icon: BookOpen,
      title: "Análisis de Conducta Aplicado",
      description: "Máster especializado en análisis de conducta.",
    },
    {
      icon: Users,
      title: "Formación continua",
      description: "Epistemología de la ciencia e investigación",
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24 pt-36 md:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <div className="order-2 md:order-1">
            <img
              src={miguelImage}
              alt="Miguel Olea - Psicólogo Infantil Colegiado"
              className="rounded-2xl shadow-soft w-full h-auto max-h-[600px] object-cover"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold" style={{ fontSize: 'clamp(2.25rem, calc(2vw + 2vh + 1rem), 5rem)' }}>
              Miguel Olea
            </h1>
            <p className="text-xl text-primary font-semibold">
              Psicólogo Infanto-Juvenil Colegiado M-43853
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy Miguel Olea. De niño un TDAH, hoy psicólogo infanto-juvenil. Uno de los pocos especialistas con doble formación en psicología clínica y análisis de conducta. Mi método se basa en ciencia, no en modas, no solo aplico técnicas sino que entiendo profundamente cómo funcionan y porqué, además, para ello, te entiendo a ti y a tu hijo de forma rigurosa, empática y personalizada logrando cambios reales adaptados y duraderos.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-foreground">Psicólogo con mención especial en clínica.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-foreground">Colegiado en el colegio oficial de psicólogos con número: M-43853</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-foreground">Master en psicología general Sanitaria</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-foreground">Master en análisis de conducta aplicado al contexto terapéutico.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-foreground">Formación en epistemología de la ciencia e investigación.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* My Story Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-primary text-white p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Mi historia</h2>
            <div className="space-y-4 opacity-90 leading-relaxed">
              <p>
                De pequeño viví el TDAH en primera persona, y sé lo que es sentir que la medicación no te lleva a ningún lado. Lo que realmente hizo la diferencia fue un cambio en mi entorno: algo que me motivó y me hizo querer estudiar. Desde ese momento, mi rendimiento fue en ascenso, y me comprometí al máximo con mis estudios. Hoy, el TDAH es solo una anécdota en mi vida, y me enorgullece decir que soy un ex-TDAH. He aprovechado esa experiencia para potenciarme y ahora ayudar a otros niños y familias a lograr lo mismo: convertir lo que parece un obstáculo en una oportunidad.
              </p>

            </div>
          </div>
        </div>

        {/* Qualifications Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Formación y acreditaciones
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {qualifications.map((qual, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <qual.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{qual.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {qual.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Credentials Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <Card className="shadow-card">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">Acreditaciones oficiales</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  <span>
                    Colegiado por el Colegio Oficial de Psicólogos de Madrid
                    (Nº M-43853)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  <span>Máster en Psicología General Sanitaria (habilitante)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  <span>
                    Máster en análisis de conducta aplicado al contexto terapéutico
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  <span>Formación específica en epistemología de la ciencia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  <span>
                    Formación continua en metodología de investigación aplicada
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Approach Section */}
        <div className="bg-primary text-white p-8 md:p-12 rounded-2xl text-center max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">Mi enfoque</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Trabajo desde el rigor científico pero con un trato humano y cercano.
            Cada familia es única, y cada intervención debe ser personalizada.
            No creo en soluciones mágicas, pero sí en el poder de la ciencia
            aplicada con empatía para lograr cambios reales y duraderos.
          </p>
        </div>

        {/* Scientific Formula Section */}
        <div className="max-w-6xl mx-auto text-center space-y-8 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ciencia detrás de cada intervención
          </h2>
          <div className="bg-white p-16 rounded-2xl shadow-card">
            <div className="flex items-center justify-center">
              <img
                src={formulaokImage}
                alt="Fórmula científica"
                className="max-w-full h-auto"
              />
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Una fórmula como esta, que refleja las relaciones de reforzamiento que usamos, es el tipo
            de ciencia que hay detrás de mis intervenciones. No necesitas conocerla a fondo, pero sí
            saber que esta precisión es lo que permite lograr cambios reales y duraderos en tu hijo.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              ¿Hablamos de cómo puedo ayudarte?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Reserva una cita conmigo y descubre cómo podemos trabajar juntos
              para transformar la vida de tu hijo.
            </p>
            <Button size="lg" asChild className="text-lg px-8">
              <a
                href="https://wa.me/34693054790?text=Hola,%20me%20gustaría%20reservar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserva una cita
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
