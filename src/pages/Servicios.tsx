import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Euro } from "lucide-react";

const Servicios = () => {
  const services = [
    {
      title: "Valoración y resolución de dudas",
      duration: "40 minutos",
      price: "30€",
      description:
        "Muchos padres se sienten perdidos y llenos de dudas. En 50 minutos te ayudo a aclarar lo que sucede, resolviendo tus dudas desde un enfoque profesional. Analizo tu situación y te explico qué esperar de tu hijo, del colegio o del proceso actual.",
      features: [
        "Análisis profesional de tu situación",
        "Resolución de dudas específicas",
        "Orientación sobre qué esperar",
        "Recomendaciones personalizadas",
      ],
    },
    {
      title: "Asistencia psicológica",
      duration: "50 minutos",
      price: "60€",
      description:
        "En mi enfoque psicológico aseguro a los padres que la conducta de sus hijos siempre puede cambiar. Gracias a la ciencia y la experiencia, sabemos qué claves permiten modificar comportamientos. En pocas sesiones diseñamos una intervención centrada en lo que realmente importa.",
      features: [
        "Sesiones individualizadas",
        "Plan de intervención científico",
        "Seguimiento del progreso",
        "Herramientas prácticas para aplicar en casa",
        "Cambios medibles y duraderos",
      ],
      highlighted: true,
    },
    {
      title: "Consultoría",
      duration: "1h 30min",
      price: "90€",
      description:
        "Ofrezco esta consultoría en una sola sesión, accesible y efectiva. En 90 minutos recojo toda la información necesaria y diseño un plan de intervención personalizado que luego te entrego. Podemos programar seguimientos para asegurar que el plan funcione.",
      features: [
        "Sesión intensiva completa",
        "Recogida exhaustiva de información",
        "Plan de intervención detallado por escrito",
        "Estrategias específicas para tu caso",
        "Seguimientos opcionales disponibles",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios de psicología infantil
          </h1>
          <p className="text-lg text-muted-foreground">
            Elige el servicio que mejor se adapte a tus necesidades. Todos
            están basados en evidencia científica y orientados a resultados
            reales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`shadow-card hover:shadow-soft transition-all ${
                service.highlighted
                  ? "border-2 border-primary relative"
                  : ""
              }`}
            >
              {service.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Más popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-primary">
                      {service.price}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <a
                    href={`https://wa.me/34693054790?text=Hola,%20me%20gustaría%20reservar%20una%20cita%20de%20${encodeURIComponent(
                      service.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar cita
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Method Reminder */}
        <div className="bg-secondary p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Cada sesión es única y personalizada
          </h3>
          <p className="text-muted-foreground text-lg">
            Todos mis servicios están basados en evidencia científica y en la
            comprensión real de tu hijo. No hay soluciones genéricas, solo
            estrategias adaptadas a tu familia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
