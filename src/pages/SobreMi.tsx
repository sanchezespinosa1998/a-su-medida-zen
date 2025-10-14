import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";
import miguelImage from "@/assets/miguel.jpg";

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
      description: "Máster especializado en ABA",
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
            <h1 className="text-4xl md:text-5xl font-bold">
              Miguel Olea
            </h1>
            <p className="text-xl text-primary font-semibold">
              Psicólogo Infanto-Juvenil Colegiado M-43853
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy psicólogo con grado en Psicología, especializado en clínica, y
              cuento con dos másteres: Psicología General Sanitaria y Análisis
              de Conducta Aplicado.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ofrezco un enfoque riguroso basado en lo que funciona. Mi
              prioridad es que cada persona comprenda el porqué de cada paso.
              Facilito que las familias puedan aplicar cambios reales y
              sostenibles.
            </p>
          </div>
        </div>

        {/* My Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-secondary p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Mi historia</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                De niño, fui diagnosticado con TDAH. Sé lo que es sentirse
                diferente, luchar con la atención y enfrentar las
                incomprensiones de un sistema que no siempre está preparado para
                la neurodiversidad.
              </p>
              <p>
                Esa experiencia personal me llevó a la psicología. Quería
                entender qué me pasaba y, sobre todo, ayudar a otros niños y
                familias a no sentirse solos en este camino.
              </p>
              <p>
                Hoy, combino mi experiencia personal con una sólida formación
                científica. No solo entiendo la teoría, sino que comprendo
                profundamente las emociones y desafíos que viven las familias
                cada día.
              </p>
              <p className="font-semibold text-foreground">
                Mi misión es simple: transformar la vida de los niños y sus
                familias mediante intervenciones basadas en evidencia, con
                empatía y resultados medibles.
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
        <div className="max-w-4xl mx-auto mb-20">
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
                    Máster en Análisis de Conducta Aplicado (Applied Behavior
                    Analysis)
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
        <div className="bg-primary text-white p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">Mi enfoque</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Trabajo desde el rigor científico pero con un trato humano y cercano.
            Cada familia es única, y cada intervención debe ser personalizada.
            No creo en soluciones mágicas, pero sí en el poder de la ciencia
            aplicada con empatía para lograr cambios reales y duraderos.
          </p>
        </div>

        {/* Scientific Formula Section */}
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ciencia detrás de cada intervención
          </h2>
          <div className="bg-white p-16 rounded-2xl shadow-card">
            <div className="flex items-center justify-center">
              <span className="text-8xl font-sans font-light text-primary tracking-wide">c = f(e,h)</span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Esta fórmula representa la precisión científica detrás de mis
            intervenciones. No necesitas conocerla, solo saber que gracias a
            ella logramos cambios reales y duraderos.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
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
  );
};

export default SobreMi;
