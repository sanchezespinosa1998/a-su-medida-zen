import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Euro, Phone } from "lucide-react";
import valoracionImage from "@/assets/valoracion.jpg";
import asesoriaImage from "@/assets/asesoria-online.jpg";
import tdahImage from "@/assets/tdah.jpg";
import cursosOnlineImage from "@/assets/cursos online.jpeg";

const Servicios = () => {
  const services = [
    {
      title: "Llamada gratuita",
      duration: "15 minutos",
      price: "Gratis",
      description:
        "Imagina poder contarme lo que te preocupa sobre tu hijo y recibir, en esa misma llamada, claridad sobre cómo podemos transformar su vida. Esta llamada gratuita es tu primera puerta a un cambio real: te escucharé, te entenderé, y te mostraré cómo podemos trabajar juntos para que tu hijo y tú empecéis a ver resultados. Es el primer paso, sin compromiso, hacia la solución que llevas tanto tiempo buscando. ¡Reserva y hablemos!",
      features: [
        "Te escucho con atención",
        "Te muestro el enfoque que mejor se adapta a tu hijo",
        "Sin compromiso ni presiones",
        "Sal de la llamada sabiendo cuál es el primer paso para ayudarle",
      ],
      image: asesoriaImage,
      highlighted: false,
    },
    {
      title: "Valoración y resolución de dudas",
      duration: "40 minutos",
      price: "30€",
      description:
        "Muchos padres se sienten perdidos y llenos de dudas. En 40 minutos te ayudo a aclarar lo que sucede, resolviendo tus dudas desde un enfoque profesional. Analizo tu situación y te explico qué esperar de tu hijo, del colegio o del proceso actual.",
      features: [
        "Análisis profesional de tu situación",
        "Resolución de dudas específicas",
        "Orientación sobre qué esperar",
        "Recomendaciones personalizadas",
      ],
      image: valoracionImage,
    },
    {
      title: "Asistencia psicológica",
      duration: "50 minutos",
      price: "60€",
      description:
        "Siempre aseguro a los padres que la conducta de sus hijos siempre se puede cambiar. Esto no es sólo una promesa, está respaldado por la ciencia. Gracias a la investigación y experiencia, sabemos qué claves permiten modificar comportamientos. Mi compromiso es usar ese conocimiento para que, trabajando juntos, en pocas sesiones, hagamos un análisis detallado y diseñemos una intervención centrada en lo que realmente importa. Así, te daré las claves específicas para que la conducta de tu hijo cambie en el menor tiempo posible.",
      features: [
        "Sesiones individualizadas",
        "Plan de intervención científico",
        "Seguimiento del progreso",
        "Herramientas prácticas para aplicar en casa",
        "Cambios medibles y duraderos",
      ],
      highlighted: true,
      image: cursosOnlineImage,
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
      image: tdahImage,
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24 pt-36 md:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-7xl mx-auto mb-16">
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
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`shadow-card hover:shadow-soft transition-all overflow-hidden flex flex-col h-full ${service.highlighted
                  ? "border-2 border-primary relative"
                  : ""
                  }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold z-10">
                    Más popular
                  </div>
                )}
                <div className="relative w-full h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
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
                <CardContent className="flex flex-col justify-between flex-grow">
                  <div className="space-y-6">
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Method Reminder */}
        <div className="bg-primary text-white p-8 md:p-12 rounded-2xl text-center max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Cada sesión es única y personalizada
          </h3>
          <p className="text-lg opacity-90">
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
