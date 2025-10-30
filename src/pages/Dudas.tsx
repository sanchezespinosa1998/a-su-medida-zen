import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/utils/tiktokPixel";

const Dudas = () => {
  const faqs = [
    {
      question: "¿Cuántas sesiones suelen necesitar los niños?",
      answer:
        "El número de sesiones varía según cada caso. En la valoración inicial podemos establecer un plan estimado. Muchas familias ven mejoras significativas en 4-8 sesiones, aunque algunos casos requieren un seguimiento más prolongado. Lo importante es que cada sesión esté orientada a resultados concretos.",
    },
    {
      question: "¿Trabajas también con adolescentes?",
      answer:
        "Sí, trabajo tanto con niños como con adolescentes. Mi formación en psicología infanto-juvenil me permite adaptar las intervenciones a cada etapa del desarrollo. Los adolescentes suelen responder muy bien a un enfoque basado en la comprensión de su conducta y el respeto a su autonomía.",
    },
    {
      question: "¿Qué ocurre si mi hijo no colabora?",
      answer:
        "Es una preocupación común y completamente normal. Mi enfoque se basa en entender la conducta, no en forzarla. Trabajo tanto con los padres como con el niño, adaptando las sesiones a su nivel de comodidad. Muchas veces, la resistencia inicial desaparece cuando el niño se siente comprendido y ve que las sesiones son diferentes a lo que esperaba.",
    },
    {
      question: "¿Puedo asistir sin mi hijo?",
      answer:
        "Por supuesto. De hecho, muchas familias comienzan con una sesión de valoración solo para los padres. Esto nos permite entender la situación sin que el niño esté presente. Dependiendo del caso, a veces todo el trabajo se hace con los padres, proporcionándoles las herramientas para manejar la situación en casa.",
    },
    {
      question: "¿Cómo se reserva una cita?",
      answer:
        "Puedes reservar una cita de tres formas: haciendo clic en cualquier botón de 'Reservar cita' de la web, contactándome directamente por WhatsApp al +34 693 054 790, o llamándome por teléfono. Te responderé lo antes posible para encontrar el mejor horario para ti.",
    },
    {
      question: "¿Las sesiones son presenciales u online?",
      answer:
        "Ofrezco ambas modalidades. Las sesiones presenciales se realizan en mi consulta en Madrid, y las sesiones online son igual de efectivas gracias a las herramientas actuales. Podemos decidir juntos qué modalidad se adapta mejor a tu situación y preferencias.",
    },
    {
      question: "¿Qué diferencia hay entre los tres servicios?",
      answer:
        "La valoración es ideal si tienes dudas específicas o quieres una primera orientación. La asistencia psicológica es un proceso más completo con sesiones regulares para trabajar en profundidad. La consultoría es perfecta si buscas un plan de acción completo en una sola sesión intensiva. Puedo ayudarte a elegir la opción más adecuada.",
    },
    {
      question: "¿Trabajas con el colegio de mi hijo?",
      answer:
        "Sí, cuando es necesario y con tu autorización, puedo coordinarme con el colegio de tu hijo. La colaboración entre familia, psicólogo y centro educativo suele ser muy beneficiosa para lograr cambios coherentes y duraderos en todos los entornos del niño.",
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24 pt-36 md:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Resuelve tus dudas antes de empezar
          </h1>
          <p className="text-lg text-muted-foreground">
            Aquí encontrarás respuestas a las preguntas más frecuentes. Si tu
            duda no está aquí, no dudes en contactarme directamente.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-6xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white p-8 md:p-12 rounded-2xl text-center max-w-6xl mx-auto">
          <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            ¿Tu duda no está aquí?
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Escríbeme directamente por WhatsApp y te responderé lo antes
            posible. Estoy aquí para ayudarte.
          </p>
          <Button size="lg" asChild variant="secondary">
            <a
              href="https://wa.me/34693054790?text=Hola,%20tengo%20una%20duda%20sobre%20los%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('dudas_page')}
            >
              Contactar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dudas;
