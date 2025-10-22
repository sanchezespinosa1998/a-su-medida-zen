import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MessageSquare,
  Heart,
  Users,
  TrendingUp,
  Brain,
  Shield,
  Smile,
  Star,
  Phone,
  X,
  Target,
  BookOpen,
  Zap,
  CheckCircle,
} from "lucide-react";
import formulaImage from "@/assets/formula-cientifica.jpg";
import miguelPhoto from "@/assets/miguel.jpg";
import recurso4 from "@/assets/Recurso 4.jpeg";
import recurso14 from "@/assets/Recurso 14.svg";
import { useState, useEffect, useRef } from "react";

// Componente para efecto typewriter en bucle
const TypewriterCycle = () => {
  // Frase estática base
  const baseText = "Psicólogo EX-TDAH para niños";

  // Frases variables para el efecto typewriter
  const conditions = [
    "con TDAH",
    "con ansiedad",
    "con depresión",
    "con problemas de conducta"
  ];

  const [currentConditionIndex, setCurrentConditionIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentCondition = conditions[currentConditionIndex];

    if (!isDeleting) {
      // Escribiendo
      if (currentIndex < currentCondition.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentCondition.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        // Terminó de escribir, espera un poco antes de empezar a borrar
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1200);
        return () => clearTimeout(timeout);
      }
    } else {
      // Borrando
      if (currentIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentCondition.substring(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        // Terminó de borrar, pasa a la siguiente condición
        setIsDeleting(false);
        setCurrentConditionIndex(prev => (prev + 1) % conditions.length);
      }
    }
  }, [currentIndex, isDeleting, currentConditionIndex, conditions]);

  return (
    <span className="text-white/100">
      {baseText} {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Home = () => {
  const [laserProgress, setLaserProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const benefitsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;
      const scrollPosition = window.scrollY;

      // Calcula el progreso del láser basado en el scroll
      // El láser bajará muy rápido (6x la velocidad)
      const progress = Math.min((scrollPosition * 6) / heroHeight, 1);
      setLaserProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamada inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Mostrar popup después de 5 segundos en cada carga de la página
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Reducir rabietas y comportamientos difíciles",
      description: "Las rabietas, aunque pueden parecer un enorme reto para los padres, son algo que ya conocemos a fondo: se sabe perfectamente por qué ocurren y, lo mejor de todo, es que es sencillo de modificar. Con la guía adecuada, lo que hoy parece un problema complejo puede dejar de serlo rápidamente. Aquí te enseñaré cómo.",
      details: [
        "Comprender qué desencadena las rabietas y cómo prevenirlas",
        "Aprender a intervenir antes, durante y después de la conducta para reducir su frecuencia e intensidad",
        "Desarrollar habilidades de comunicación y regulación emocional en tu hijo",
        "Implementar estrategias positivas que fortalezcan la relación y el bienestar familiar"
      ]
    },
    {
      icon: Zap,
      title: "Mejorar la atención e hiperactividad",
      description: "La hiperactividad y el déficit de atención no tienen por qué ser solo un problema; bien encauzados, pueden convertirse en grandes fortalezas. Con las estrategias adecuadas, podemos potenciar las capacidades únicas de tu hijo, como su creatividad y energía, mientras reducimos aquello que dificulta su día a día.",
      details: [
        "Identificar los momentos clave en los que tu hijo puede brillar y cómo dirigir esa energía",
        "Enseñar técnicas para canalizar la hiperactividad en actividades productivas",
        "Desarrollar rutinas que ayuden a mejorar la atención sin perder la espontaneidad",
        "Transformar la impulsividad en toma de decisiones rápida y eficaz"
      ]
    },
    {
      icon: CheckCircle,
      title: "Lograr que siga instrucciones sin discusiones",
      description: "Que tu hijo siga instrucciones sin que todo se convierta en una batalla es más sencillo de lo que parece. Con las herramientas adecuadas, podemos convertir esas situaciones tensas en momentos de cooperación, consiguiendo que las instrucciones se sigan de forma fluida y sin conflictos.",
      details: [
        "Establecer instrucciones claras y adaptadas a la edad de tu hijo",
        "Enseñar cómo dar las indicaciones en el momento y tono adecuados para evitar resistencia",
        "Reforzar el cumplimiento de las instrucciones de forma positiva, motivando la cooperación",
        "Crear hábitos que hagan que seguir instrucciones se vuelva algo natural y libre de disputas"
      ]
    },
    {
      icon: BookOpen,
      title: "Mejorar el rendimiento académico",
      description: "Puede parecer un reto cuando sientes que en el colegio tu hijo no encuentra su lugar o cuando en casa las tareas se vuelven una fuente de frustración. Sin embargo, con la guía adecuada, es posible transformar esas dificultades en logros. Mi apoyo profesional te ayudará a que tu hijo desarrolle sus fortalezas, rinda perfectamente y gane confianza en sí mismo.",
      details: [
        "Identificar las barreras que impiden el progreso y cómo superarlas",
        "Aplicar estrategias personalizadas que faciliten el aprendizaje",
        "Fomentar la motivación y el gusto por los estudios",
        "Crear un ambiente en el que el rendimiento académico crezca sin conflictos"
      ]
    },
    {
      icon: Heart,
      title: "Superar la ansiedad o la depresión infantil",
      description: "Cuando ves a tu hijo atrapado en la ansiedad o la tristeza, es como si el mundo se apagara un poco. Es un dolor que va más allá de las palabras, y cada día puede sentirse como una lucha interminable. Pero no tiene por qué ser así. Con mi apoyo, ese sufrimiento puede transformarse en alivio, en días más ligeros y llenos de esperanza. Juntos, vamos a abrir esa ventana, para que puedas ver cómo tu hijo recupera su alegría, sus ganas de jugar, de aprender y de disfrutar de la vida como se merece.",
      details: [
        "Identificar los desencadenantes de la ansiedad y la tristeza, y cómo desactivarlos poco a poco",
        "Enseñar a tu hijo estrategias que le permitan gestionar sus emociones y recuperar su bienestar",
        "Crear rutinas y espacios seguros que fomenten la calma y la confianza en sí mismo",
        "Reforzar cada pequeño avance, para que tanto tú como tu hijo veáis cómo la alegría vuelve a formar parte del día a día"
      ]
    },
    {
      icon: Brain,
      title: "Entender las razones detrás de la conducta",
      description: "Más allá de tratar los síntomas, exploramos las causas profundas del comportamiento de tu hijo. Te ayudo a comprender qué está pasando por su mente y corazón, para que puedas responder de manera más efectiva y compasiva.",
      details: [
        "Análisis del desarrollo emocional",
        "Comprensión de las necesidades subyacentes",
        "Interpretación de señales no verbales",
        "Conocimiento del desarrollo infantil"
      ]
    },
    {
      icon: Smile,
      title: "Felicidad para tu hijo y para ti",
      description: "El objetivo final es que tanto tú como tu hijo disfrutéis de una relación más armoniosa y feliz. Trabajamos para que vuestra convivencia sea más placentera, que vuestro vínculo se fortalezca y que ambos sintáis más bienestar en el día a día.",
      details: [
        "Relación familiar más armoniosa",
        "Mayor bienestar emocional",
        "Fortalecimiento del vínculo padre-hijo",
        "Ambiente familiar positivo y cálido"
      ]
    },
  ];

  const acompanamientoBenefits = [
    {
      icon: Heart,
      title: "Apoyo constante de un profesional que te comprende",
      description: "Tratar de ayudar a tu hijo mientras te sientes juzgado, juzgada, y en soledad es desgarrador. Pero no tienes que cargar con esto en solitario. Estoy aquí para caminar a tu lado, ofreciéndote el apoyo que necesitas para que, juntos, transformemos esta carga en un camino de alivio y esperanza. Ya no estás solo, ni sola: lo vamos a conseguir.",
      details: []
    },
    {
      icon: Brain,
      title: "La más rigurosa evidencia científica",
      description: "Aquí no hay soluciones superficiales ni modas pasajeras. Cada intervención que te ofrezco está respaldada por procesos empíricos demostrados, pero no se queda ahí: se aplican con una base filosófica sólida, asegurando que cada paso se dé de la forma correcta. No es solo usar técnicas, es entender profundamente los principios que las hacen funcionar, y eso es lo que realmente permite el cambio.",
      details: []
    },
    {
      icon: Users,
      title: "Soluciones personalizadas",
      description: "Aquí no aplicamos técnicas genéricas. Cada niño es único, y eso es lo que guía mi trabajo. Me tomo el tiempo de conocer quién es tu hijo, su entorno, su realidad. Las soluciones que te ofrezco están hechas a su medida, porque es la única manera de lograr cambios reales. Aquí no hay lotería, hay resultados personalizados que sí funcionan.",
      details: []
    },
    {
      icon: Shield,
      title: "Cambios duraderos",
      description: "Aquí no aplicamos técnicas genéricas. Cada niño es único, y eso es lo que guía mi trabajo. Me tomo el tiempo de conocer quién es tu hijo, su entorno, su realidad. Las soluciones que te ofrezco están hechas a su medida, porque es la única manera de lograr cambios reales. Aquí no hay lotería, hay resultados personalizados que sí funcionan.",
      details: []
    }
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
    {
      name: "Ana M.",
      text: "En solo 3 sesiones vimos cambios increíbles. Miguel nos enseñó a conectar realmente con nuestro hijo.",
    },
    {
      name: "Roberto L.",
      text: "Las técnicas que aprendimos son simples pero muy efectivas. Nuestra casa es ahora un lugar de paz.",
    },
    {
      name: "Carmen R.",
      text: "Miguel nos ayudó a entender que cada niño es único. Sus consejos personalizados fueron exactamente lo que necesitábamos.",
    },
    {
      name: "David P.",
      text: "Mi hijo de 6 años ahora expresa sus emociones de manera saludable. Es increíble ver su transformación.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-primary min-h-screen flex items-start md:items-center justify-center pt-16 md:pt-0">
        {/* Orbes flotantes de fondo */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Primera fila de orbes */}
          <div className="absolute bottom-0 left-[5%] w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-md animate-float-1"></div>
          <div className="absolute bottom-0 left-[15%] w-16 h-16 bg-gradient-to-br from-blue-300/25 to-cyan-300/25 rounded-full blur-lg animate-float-2"></div>
          <div className="absolute bottom-0 left-[25%] w-10 h-10 bg-gradient-to-br from-cyan-500/35 to-blue-500/35 rounded-full blur-sm animate-float-3"></div>
          <div className="absolute bottom-0 left-[35%] w-14 h-14 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-md animate-float-4"></div>
          <div className="absolute bottom-0 left-[45%] w-18 h-18 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 rounded-full blur-xl animate-float-5"></div>
          <div className="absolute bottom-0 left-[55%] w-12 h-12 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-full blur-md animate-float-6"></div>
          <div className="absolute bottom-0 left-[65%] w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-lg animate-float-7"></div>
          <div className="absolute bottom-0 left-[75%] w-10 h-10 bg-gradient-to-br from-blue-300/25 to-cyan-300/25 rounded-full blur-sm animate-float-8"></div>
          <div className="absolute bottom-0 left-[85%] w-14 h-14 bg-gradient-to-br from-cyan-500/35 to-blue-500/35 rounded-full blur-md animate-float-9"></div>
          <div className="absolute bottom-0 left-[95%] w-12 h-12 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-lg animate-float-10"></div>

          {/* Segunda fila de orbes */}
          <div className="absolute bottom-0 left-[8%] w-14 h-14 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-xl animate-float-11"></div>
          <div className="absolute bottom-0 left-[18%] w-10 h-10 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-full blur-sm animate-float-12"></div>
          <div className="absolute bottom-0 left-[28%] w-16 h-16 bg-gradient-to-br from-blue-400/25 to-cyan-400/25 rounded-full blur-md animate-float-13"></div>
          <div className="absolute bottom-0 left-[38%] w-12 h-12 bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-lg animate-float-14"></div>
          <div className="absolute bottom-0 left-[48%] w-14 h-14 bg-gradient-to-br from-blue-500/35 to-cyan-500/35 rounded-full blur-md animate-float-15"></div>
          <div className="absolute bottom-0 left-[58%] w-10 h-10 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-sm animate-float-16"></div>
          <div className="absolute bottom-0 left-[68%] w-16 h-16 bg-gradient-to-br from-blue-300/25 to-cyan-300/25 rounded-full blur-xl animate-float-17"></div>
          <div className="absolute bottom-0 left-[78%] w-12 h-12 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-full blur-md animate-float-18"></div>
          <div className="absolute bottom-0 left-[88%] w-14 h-14 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-lg animate-float-19"></div>
          <div className="absolute bottom-0 left-[98%] w-10 h-10 bg-gradient-to-br from-cyan-300/25 to-blue-300/25 rounded-full blur-sm animate-float-20"></div>

          {/* Tercera fila de orbes */}
          <div className="absolute bottom-0 left-[3%] w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-lg animate-float-21"></div>
          <div className="absolute bottom-0 left-[13%] w-12 h-12 bg-gradient-to-br from-cyan-400/35 to-blue-400/35 rounded-full blur-md animate-float-22"></div>
          <div className="absolute bottom-0 left-[23%] w-14 h-14 bg-gradient-to-br from-blue-300/25 to-cyan-300/25 rounded-full blur-sm animate-float-23"></div>
          <div className="absolute bottom-0 left-[33%] w-10 h-10 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-full blur-xl animate-float-24"></div>
          <div className="absolute bottom-0 left-[43%] w-16 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-md animate-float-25"></div>
          <div className="absolute bottom-0 left-[53%] w-12 h-12 bg-gradient-to-br from-cyan-300/25 to-blue-300/25 rounded-full blur-lg animate-float-26"></div>
          <div className="absolute bottom-0 left-[63%] w-14 h-14 bg-gradient-to-br from-blue-500/35 to-cyan-500/35 rounded-full blur-sm animate-float-27"></div>
          <div className="absolute bottom-0 left-[73%] w-10 h-10 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-xl animate-float-28"></div>
          <div className="absolute bottom-0 left-[83%] w-16 h-16 bg-gradient-to-br from-blue-300/25 to-cyan-300/25 rounded-full blur-md animate-float-29"></div>
          <div className="absolute bottom-0 left-[93%] w-12 h-12 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-full blur-lg animate-float-30"></div>
        </div>

        {/* Láser resplandeciente animado por scroll */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-0 pointer-events-none transition-opacity duration-300"
          style={{
            top: 0,
            height: `${laserProgress * 100}%`,
            opacity: laserProgress > 0 ? 1 : 0
          }}
        >
          {/* Línea central del láser */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-cyan-300"></div>

          {/* Resplandor exterior 1 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-full bg-gradient-to-b from-cyan-400/60 via-blue-400/60 to-cyan-300/60 blur-sm"></div>

          {/* Resplandor exterior 2 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-full bg-gradient-to-b from-cyan-400/40 via-blue-400/40 to-cyan-300/40 blur-md"></div>

          {/* Resplandor más amplio */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-full bg-gradient-to-b from-cyan-400/20 via-blue-400/20 to-cyan-300/20 blur-xl"></div>
        </div>

        {/* Efectos de resplandor de fondo sutiles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Resplandor superior izquierdo */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-cyan-400/5 via-blue-400/3 to-transparent rounded-full blur-3xl animate-neon-glow"></div>

          {/* Resplandor superior derecho */}
          <div className="absolute top-32 right-16 w-80 h-80 bg-gradient-radial from-white/4 via-cyan-300/2 to-transparent rounded-full blur-3xl animate-neon-pulse"></div>

          {/* Resplandor medio izquierdo */}
          <div className="absolute top-1/2 left-20 w-64 h-64 bg-gradient-radial from-blue-400/4 via-white/2 to-transparent rounded-full blur-2xl animate-pulse"></div>

          {/* Resplandor medio derecho */}
          <div className="absolute top-1/2 right-24 w-72 h-72 bg-gradient-radial from-cyan-300/5 via-blue-300/2 to-transparent rounded-full blur-3xl animate-neon-glow"></div>

          {/* Resplandor inferior izquierdo */}
          <div className="absolute bottom-40 left-32 w-56 h-56 bg-gradient-radial from-white/3 via-cyan-400/2 to-transparent rounded-full blur-2xl animate-neon-pulse"></div>

          {/* Resplandor inferior derecho */}
          <div className="absolute bottom-48 right-20 w-64 h-64 bg-gradient-radial from-blue-300/4 via-white/2 to-transparent rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Degradado azul oscuro en la parte superior */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-900 via-slate-800/70 to-transparent z-5"></div>

        {/* Media elipse en la base con resplandor */}
        <div className="absolute bottom-[-10px] md:bottom-[-10px] left-1/2 w-[calc(100vw+100px)] md:w-[calc(100vw+50px)] h-60 transform -translate-x-1/2 translate-y-[40%] md:translate-y-1/2 z-10">
          {/* Resplandor de neon alrededor de la forma */}
          <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-cyan-400/20 md:from-cyan-400/40 via-blue-400/30 md:via-blue-400/60 to-cyan-400/20 md:to-cyan-400/40 rounded-t-full blur-lg md:blur-xl animate-pulse"></div>

          {/* Forma base */}
          <div className="absolute inset-0 bg-secondary rounded-t-full"></div>
        </div>

        {/* Efecto de neon resplandeciente en el borde */}
        <div className="absolute bottom-[-10px] md:bottom-[-10px] left-1/2 w-[calc(100vw+100px)] md:w-[calc(100vw+50px)] h-60 transform -translate-x-1/2 translate-y-[40%] md:translate-y-1/2 z-20 rounded-t-full overflow-hidden pointer-events-none">
        </div>


        {/* Contenido central */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 md:pt-2 md:pb-12 w-full relative z-10 md:-translate-y-0">
          <div className="text-center">
            {/* Badge con la fórmula */}
            <div className="flex justify-center mb-6">
              <div className="relative inline-block">
                {/* Resplandor del borde exterior */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/50 via-blue-400/70 to-cyan-400/50 rounded-full blur-sm animate-pulse"></div>

                {/* Badge */}
                <div className="relative inline-flex items-center gap-2.5 px-4 py-0.5 bg-primary/80 backdrop-blur-sm border border-cyan-400/80 rounded-full">
                  {/* Cerebrito */}
                  <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z" />
                  </svg>
                  <span className="text-white/90 font-sans text-base tracking-wide">Psicologia infanto-juvenil</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 md:space-y-2">
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.5rem] font-bold leading-tight text-white max-w-5xl mx-auto" style={{ fontSize: 'clamp(3rem, calc(2.5vw + 2.5vh + 1rem), 9rem)' }}>
                Soluciones personalizadas
                <br className="hidden xs:block" />
                {" "}basadas en <span className="text-secondary">evidencia científica</span>
                <br className="hidden xs:block" />
              </h1>
              <div className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed h-[5.5rem] md:h-[6.5rem] flex items-center justify-center">
                <TypewriterCycle />
              </div>
            </div>
          </div>
        </div>

        {/* CTA encima de la forma redondeada - Círculo principal */}
        <Link to="/servicios" className="absolute bottom-[60px] md:bottom-[80px] left-1/2 transform -translate-x-1/2 z-30 group">
          {/* Resplandor de neon alrededor del círculo */}
          <div
            className={`absolute rounded-full blur-md transition-all duration-500 ${laserProgress > 0.8
              ? '-inset-3 bg-gradient-to-r from-cyan-400/30 via-blue-400/40 to-cyan-400/30 blur-md'
              : '-inset-3 bg-gradient-to-r from-cyan-400/40 via-blue-400/60 to-cyan-400/40'
              }`}
            style={laserProgress <= 0.8 ? { animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' } : {}}
          ></div>

          {/* Resplandor adicional intenso cuando el láser está cerca */}
          {laserProgress > 0.8 && (
            <>
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400/20 via-blue-400/25 to-cyan-400/20 rounded-full blur-lg"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-300/10 via-blue-300/15 to-cyan-300/10 rounded-full blur-xl"></div>
            </>
          )}

          {/* Bocadillo inferior - Visible en móvil y escritorio */}
          {laserProgress > 0.8 && (
            <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none z-50 top-full mt-4">
              <div className="relative">
                {/* Resplandor del bocadillo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/30 via-blue-400/40 to-cyan-400/30 rounded-full blur-sm"></div>

                {/* Contenido del bocadillo */}
                <div className="relative bg-white rounded-xl px-4 py-2 shadow-lg border border-cyan-400/30">
                  <span className="text-primary font-semibold text-sm whitespace-nowrap">Empieza ahora</span>

                  {/* Flecha del bocadillo apuntando hacia arriba */}
                  <div className="absolute w-4 h-4 bg-white left-1/2 -translate-x-1/2 bottom-full mb-[1px] rotate-[225deg]"></div>
                </div>
              </div>
            </div>
          )}

          {/* Círculo blanco con icono */}
          <div
            className={`relative w-[144px] h-[144px] bg-white rounded-full flex items-center justify-center transition-all duration-500 active:scale-95 active:translate-y-0 ${laserProgress > 0.8
              ? 'shadow-xl scale-110 -translate-y-1'
              : laserProgress > 0.15
                ? 'shadow-lg scale-105 -translate-y-1'
                : 'shadow-lg'
              }`}
          >
            <img src={recurso14} alt="Icono" className="w-[95px] h-[95px]" />
          </div>
        </Link>

      </section>

      {/* Benefits Section */}
      <section className="bg-secondary py-16 md:py-24 relative -mt-[30px] md:mt-0">


        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Imagen pequeña superior */}
          <div className="w-full flex justify-center py-6">
            <img src={recurso4} alt="Familia acompañamiento" className="w-[500px] h-auto object-contain rounded-2xl shadow-card" />
          </div>
          {/* Badge similar al del hero */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-0.5 bg-white/50 backdrop-blur-sm border border-primary rounded-full">
              {/* Cerebrito */}
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 512 512">
                <path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z" />
              </svg>
              <span className="text-primary font-sans text-base tracking-wide">Intervención basada en ciencia</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-6xl font-bold text-center mb-10">
            ¿Qué puedes conseguir?
          </h2>
          <div className="max-w-6xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {benefits.slice(0, 5).map((benefit, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none"
                >
                  <Card className="shadow-card hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-0">
                      <AccordionTrigger className="p-8 hover:no-underline">
                        <div className="flex items-center space-x-6 w-full text-left">
                          <div className="bg-primary/10 p-4 rounded-xl flex-shrink-0">
                            <benefit.icon className="w-8 h-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground">
                              {benefit.title}
                            </h3>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-8">
                        <div className="ml-[88px] space-y-4">
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {benefit.description}
                          </p>
                          <div className="grid gap-3">
                            {benefit.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="font-sans text-lg leading-relaxed text-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </CardContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div ref={benefitsEndRef}></div>
        </div>
      </section>

      {/* Sobre mí - Miguel */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Sobre mí</h2>
              <p className="text-lg text-white/90 mb-6">
                Soy Miguel Olea. De niño un TDAH, hoy psicólogo infanto-juvenil. Uno de los pocos especialistas con doble formación en psicología clínica y análisis de conducta. Mi método se basa en ciencia, no en modas, no solo aplico técnicas sino que entiendo profundamente cómo funcionan y porque, además, para ello, te entiendo a ti y a tu hijo de forma rigurosa, empática y personalizada logrando cambios reales adaptados y duraderos.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-white"></span>
                  <span className="text-white">Psicólogo con mención especial en clínica.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-white"></span>
                  <span className="text-white">Colegiado en el colegio oficial de psicólogos con número: M-43853</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-white"></span>
                  <span className="text-white">Master en psicología general Sanitaria</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-white"></span>
                  <span className="text-white">Master en análisis de conducta aplicado al contexto terapéutico.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-white"></span>
                  <span className="text-white">Formación en epistemología de la ciencia e investigación.</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link to="/servicios">Reserva ahora</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <img src={miguelPhoto} alt="Miguel Olea" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-card" />
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/0 blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section Part 2 - Mismo color que la sección anterior */}
      <section className="bg-secondary py-16 md:py-24 relative overflow-hidden">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-0.5 bg-white/50 backdrop-blur-sm border border-primary rounded-full">
              {/* Cerebrito */}
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 512 512">
                <path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z" />
              </svg>
              <span className="text-primary font-sans text-base tracking-wide">Apoyo continuo y resultados</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            El acompañamiento que necesitas
          </h2>

          <div className="max-w-6xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {acompanamientoBenefits.map((benefit, index) => (
                <AccordionItem
                  key={index}
                  value={`acompanamiento-${index}`}
                  className="border-none"
                >
                  <Card className="shadow-card hover:shadow-soft transition-all duration-300 border-t-4 border-t-primary">
                    <CardContent className="p-0">
                      <AccordionTrigger className="p-8 hover:no-underline">
                        <div className="flex items-center space-x-6 w-full text-left">
                          <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-xl flex-shrink-0">
                            <benefit.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground">
                              {benefit.title}
                            </h3>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-8">
                        <div className="ml-[88px] space-y-4">
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {benefit.description}
                          </p>
                          <div className="grid gap-3">
                            {benefit.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="font-sans text-lg leading-relaxed text-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </CardContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild variant="outline" className="bg-white text-primary hover:bg-gray-50 border-primary px-6 py-4 text-base md:px-12 md:py-7 md:text-xl transition-transform duration-300 hover:scale-110">
              <Link to="/servicios">
                Consigue lo que quieres para tu hijo hoy
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Carrusel */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-0.5 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full">
              {/* Icono de estrella */}
              <Star className="w-4 h-4 text-white fill-white" />
              <span className="text-white font-sans text-base tracking-wide">Testimonios</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
            Lo que dicen las familias
          </h2>
          <p className="text-lg text-white/90 text-center max-w-3xl mx-auto mb-12">
            Familias reales que han transformado su vida con mi acompañamiento profesional
          </p>

          {/* Carrusel Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {/* Duplicamos los testimonios para el efecto de bucle infinito */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card key={index} className="flex-shrink-0 w-80 shadow-card hover:shadow-soft transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
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
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        {/* Orbes flotantes blancos de fondo */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Primera fila de orbes */}
          <div className="absolute bottom-0 left-[5%] w-12 h-12 bg-gradient-to-br from-white/20 to-white/15 rounded-full blur-md animate-float-1"></div>
          <div className="absolute bottom-0 left-[15%] w-16 h-16 bg-gradient-to-br from-white/15 to-white/10 rounded-full blur-lg animate-float-2"></div>
          <div className="absolute bottom-0 left-[25%] w-10 h-10 bg-gradient-to-br from-white/25 to-white/20 rounded-full blur-sm animate-float-3"></div>
          <div className="absolute bottom-0 left-[35%] w-14 h-14 bg-gradient-to-br from-white/18 to-white/12 rounded-full blur-md animate-float-4"></div>
          <div className="absolute bottom-0 left-[45%] w-18 h-18 bg-gradient-to-br from-white/12 to-white/8 rounded-full blur-xl animate-float-5"></div>
          <div className="absolute bottom-0 left-[55%] w-12 h-12 bg-gradient-to-br from-white/22 to-white/16 rounded-full blur-md animate-float-6"></div>
          <div className="absolute bottom-0 left-[65%] w-16 h-16 bg-gradient-to-br from-white/20 to-white/15 rounded-full blur-lg animate-float-7"></div>
          <div className="absolute bottom-0 left-[75%] w-10 h-10 bg-gradient-to-br from-white/15 to-white/10 rounded-full blur-sm animate-float-8"></div>
          <div className="absolute bottom-0 left-[85%] w-14 h-14 bg-gradient-to-br from-white/25 to-white/18 rounded-full blur-md animate-float-9"></div>
          <div className="absolute bottom-0 left-[95%] w-12 h-12 bg-gradient-to-br from-white/18 to-white/12 rounded-full blur-lg animate-float-10"></div>

          {/* Segunda fila de orbes */}
          <div className="absolute bottom-0 left-[8%] w-14 h-14 bg-gradient-to-br from-white/12 to-white/8 rounded-full blur-xl animate-float-11"></div>
          <div className="absolute bottom-0 left-[18%] w-10 h-10 bg-gradient-to-br from-white/22 to-white/16 rounded-full blur-sm animate-float-12"></div>
          <div className="absolute bottom-0 left-[28%] w-16 h-16 bg-gradient-to-br from-white/15 to-white/10 rounded-full blur-md animate-float-13"></div>
          <div className="absolute bottom-0 left-[38%] w-12 h-12 bg-gradient-to-br from-white/18 to-white/12 rounded-full blur-lg animate-float-14"></div>
          <div className="absolute bottom-0 left-[48%] w-14 h-14 bg-gradient-to-br from-white/25 to-white/18 rounded-full blur-md animate-float-15"></div>
          <div className="absolute bottom-0 left-[58%] w-10 h-10 bg-gradient-to-br from-white/20 to-white/15 rounded-full blur-sm animate-float-16"></div>
          <div className="absolute bottom-0 left-[68%] w-16 h-16 bg-gradient-to-br from-white/15 to-white/10 rounded-full blur-xl animate-float-17"></div>
          <div className="absolute bottom-0 left-[78%] w-12 h-12 bg-gradient-to-br from-white/22 to-white/16 rounded-full blur-md animate-float-18"></div>
          <div className="absolute bottom-0 left-[88%] w-14 h-14 bg-gradient-to-br from-white/18 to-white/12 rounded-full blur-lg animate-float-19"></div>
          <div className="absolute bottom-0 left-[98%] w-10 h-10 bg-gradient-to-br from-white/15 to-white/10 rounded-full blur-sm animate-float-20"></div>

          {/* Tercera fila de orbes */}
          <div className="absolute bottom-0 left-[3%] w-16 h-16 bg-gradient-to-br from-white/18 to-white/12 rounded-full blur-lg animate-float-21"></div>
          <div className="absolute bottom-0 left-[13%] w-12 h-12 bg-gradient-to-br from-white/25 to-white/18 rounded-full blur-md animate-float-22"></div>
          <div className="absolute bottom-0 left-[23%] w-14 h-14 bg-gradient-to-br from-white/15 to-white/10 rounded-full blur-sm animate-float-23"></div>
          <div className="absolute bottom-0 left-[33%] w-10 h-10 bg-gradient-to-br from-white/22 to-white/16 rounded-full blur-xl animate-float-24"></div>
          <div className="absolute bottom-0 left-[43%] w-16 h-16 bg-gradient-to-br from-white/18 to-white/12 rounded-full blur-md animate-float-25"></div>
          <div className="absolute bottom-0 left-[53%] w-12 h-12 bg-gradient-to-br from-white/15 to-white/10 rounded-full blur-lg animate-float-26"></div>
          <div className="absolute bottom-0 left-[63%] w-14 h-14 bg-gradient-to-br from-white/25 to-white/18 rounded-full blur-sm animate-float-27"></div>
          <div className="absolute bottom-0 left-[73%] w-10 h-10 bg-gradient-to-br from-white/20 to-white/15 rounded-full blur-xl animate-float-28"></div>
          <div className="absolute bottom-0 left-[83%] w-16 h-16 bg-gradient-to-br from-white/15 to-white/10 rounded-full blur-md animate-float-29"></div>
          <div className="absolute bottom-0 left-[93%] w-12 h-12 bg-gradient-to-br from-white/22 to-white/16 rounded-full blur-lg animate-float-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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

      {/* Popup de Llamada Gratuita */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative">
            {/* Botón de cerrar */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Contenido del popup */}
            <div className="p-6 pt-8 text-center">
              {/* Icono de teléfono */}
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                ¡Llamada gratuita!
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                ¿Tienes dudas sobre si puedo ayudarte con tu hijo? Habla conmigo 15 minutos
                <strong className="text-primary"> completamente gratis</strong> para aclarar
                tus principales dudas y ver si realmente puedo ayudarte.
              </p>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full text-lg px-8"
                  onClick={handleClosePopup}
                  asChild
                >
                  <a
                    href="https://wa.me/34693054790?text=Hola,%20me%20gustaría%20solicitar%20la%20llamada%20gratuita%20de%2015%20minutos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar llamada gratuita
                  </a>
                </Button>

                <button
                  onClick={handleClosePopup}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Ahora no, gracias
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
