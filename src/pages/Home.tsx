import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageSquare,
  Heart,
  Users,
  TrendingUp,
  Brain,
  Shield,
  Smile,
  Star,
} from "lucide-react";
import heroImage from "@/assets/hero-child.jpg";
import miguelImage from "@/assets/miguel-olea.jpg";
import formulaImage from "@/assets/formula-cientifica.jpg";

const Home = () => {
  const benefits = [
    { icon: MessageSquare, text: "Mejorar la comunicación con tu hijo" },
    { icon: TrendingUp, text: "Reducir rabietas y comportamientos difíciles" },
    { icon: Users, text: "Soluciones personalizadas para tu familia" },
    { icon: Shield, text: "Cambios duraderos, no parches temporales" },
    { icon: Brain, text: "Entender las razones detrás de la conducta" },
    { icon: Heart, text: "Apoyo constante de un profesional que te comprende" },
    { icon: Smile, text: "Felicidad para tu hijo y para ti" },
  ];

  const testimonials = [
    {
      name: "Silvia O.",
      text: "Gracias a Miguel, mi hijo ahora se comunica mejor y nuestras tardes son mucho más tranquilas.",
    },
    {
      name: "Claudia S.",
      text: "Las rabietas que antes eran diarias ahora son casi inexistentes, gracias a las herramientas que aprendimos.",
    },
    {
      name: "Laura F.",
      text: "Por fin entendemos el comportamiento de nuestro hijo, y eso ha transformado nuestra relación familiar.",
    },
    {
      name: "Marcos C.",
      text: "La ayuda de Miguel no solo cambió a mi hijo, sino que nos dio a nosotros como padres la confianza que necesitábamos.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforma la conducta de tu hijo con{" "}
                <span className="text-primary">ciencia, claridad</span> y
                resultados reales
              </h1>
              <p className="text-lg text-muted-foreground">
                La experiencia de quien ha estado en su lugar. Soluciones
                personalizadas basadas en evidencia científica.
              </p>
              <Button size="lg" asChild className="text-lg px-8">
                <Link to="/servicios">Empieza ahora</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Niño feliz sonriendo"
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ¿Qué puedes conseguir?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground pt-1">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild variant="default">
              <Link to="/servicios">
                Consigue lo que quieres para tu hijo hoy
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Lo que dicen las familias
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Miguel Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <img
                src={miguelImage}
                alt="Miguel Olea - Psicólogo Infantil"
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                Miguel Olea
              </h2>
              <p className="text-lg text-muted-foreground">
                Soy Miguel Olea. De niño un TDAH, hoy psicólogo infanto-juvenil.
                Uno de los pocos especialistas con doble formación en psicología
                clínica y análisis de conducta.
              </p>
              <p className="text-muted-foreground">
                Mi método combina ciencia, empatía y resultados reales. Entiendo
                lo que sienten las familias porque he estado ahí, y sé lo que
                funciona porque lo he estudiado y aplicado durante años.
              </p>
              <Button size="lg" asChild>
                <Link to="/servicios">Reserva ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Formula Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ciencia detrás de cada intervención
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-card">
              <img
                src={formulaImage}
                alt="Fórmula científica del análisis de conducta"
                className="w-full h-auto max-w-2xl mx-auto"
              />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Esta fórmula representa la precisión científica detrás de mis
              intervenciones. No necesitas conocerla, solo saber que gracias a
              ella logramos cambios reales y duraderos.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-hero text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para transformar la vida de tu hijo?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Da el primer paso hoy. Reserva una sesión y descubre cómo podemos
            ayudarte.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-lg px-8"
          >
            <Link to="/servicios">Reserva tu cita ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
