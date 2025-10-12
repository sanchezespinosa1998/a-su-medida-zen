import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Play } from "lucide-react";

const Videos = () => {
  // Placeholder videos - estos se pueden reemplazar con URLs reales
  const videoCategories = [
    {
      category: "Conducta infantil",
      videos: [
        {
          title: "Cómo entender las rabietas desde el análisis de conducta",
          platform: "TikTok",
          url: "#",
        },
        {
          title: "Estrategias para manejar comportamientos disruptivos",
          platform: "Instagram",
          url: "#",
        },
        {
          title: "El ABC de la conducta explicado para padres",
          platform: "YouTube",
          url: "#",
        },
      ],
    },
    {
      category: "Educación emocional",
      videos: [
        {
          title: "Validación emocional: qué es y cómo aplicarla",
          platform: "Instagram",
          url: "#",
        },
        {
          title: "Enseñar a los niños a reconocer sus emociones",
          platform: "TikTok",
          url: "#",
        },
        {
          title: "Gestión del enfado en niños pequeños",
          platform: "YouTube",
          url: "#",
        },
      ],
    },
    {
      category: "Consejos para padres",
      videos: [
        {
          title: "Cómo establecer límites efectivos sin gritos",
          platform: "TikTok",
          url: "#",
        },
        {
          title: "Refuerzo positivo: errores comunes que cometemos",
          platform: "Instagram",
          url: "#",
        },
        {
          title: "Rutinas que funcionan para niños con TDAH",
          platform: "YouTube",
          url: "#",
        },
      ],
    },
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "TikTok":
        return "bg-[#000000] text-white";
      case "Instagram":
        return "bg-gradient-to-r from-purple-600 to-pink-600 text-white";
      case "YouTube":
        return "bg-[#FF0000] text-white";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Vídeos sobre psicología infantil
          </h1>
          <p className="text-lg text-muted-foreground">
            Aquí encontrarás mis vídeos sobre psicología infantil, conducta y
            estrategias para padres. Todos con ejemplos reales y consejos
            aplicables.
          </p>
        </div>

        {/* Video Categories */}
        <div className="space-y-16 mb-16">
          {videoCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-2xl font-bold mb-8 text-primary">
                {category.category}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.videos.map((video, vidIndex) => (
                  <Card
                    key={vidIndex}
                    className="shadow-card hover:shadow-soft transition-all group cursor-pointer"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                        <Play className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs px-3 py-1 rounded-full ${getPlatformColor(
                            video.platform
                          )}`}
                        >
                          {video.platform}
                        </span>
                        <Button size="sm" variant="ghost" asChild>
                          <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links Section */}
        <div className="bg-secondary p-8 md:p-12 rounded-2xl text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-4">Sígueme en redes sociales</h3>
          <p className="text-muted-foreground mb-6">
            Comparto contenido regularmente sobre psicología infantil, consejos
            para padres y estrategias basadas en evidencia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="gradient-hero text-white p-8 md:p-12 rounded-2xl text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            ¿Te ha ayudado algún vídeo?
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Si los vídeos te han resultado útiles, imagina lo que podemos lograr
            en una sesión personalizada diseñada específicamente para tu hijo.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8">
            <a
              href="https://wa.me/34693054790?text=Hola,%20me%20gustaría%20reservar%20una%20sesión%20personalizada"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserva una sesión personalizada
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Videos;
