import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

// Importar las imágenes de TikTok
import tiktok1 from "@/assets/tiktok screenshooot/Screenshot 2025-10-16 091357.png";
import tiktok2 from "@/assets/tiktok screenshooot/Screenshot 2025-10-16 091414.png";
import tiktok3 from "@/assets/tiktok screenshooot/Screenshot 2025-10-16 091441.png";
import tiktok4 from "@/assets/tiktok screenshooot/Screenshot 2025-10-16 091505.png";
import tiktok5 from "@/assets/tiktok screenshooot/Screenshot 2025-10-16 091524.png";
import tiktok6 from "@/assets/tiktok screenshooot/Screenshot 2025-10-16 091541.png";
import tiktok7 from "@/assets/tiktok screenshooot/Screenshot 2025-10-16 091556.png";
import tiktok8 from "@/assets/tiktok screenshooot/Screenshot 2025-10-16 091612.png";
import tiktok9 from "@/assets/tiktok screenshooot/Screenshot 2025-10-16 091636.png";

const Videos = () => {
  // Videos con thumbnails reales de TikTok
  const videoCategories = [
    {
      category: "Conducta infantil",
      videos: [
        {
          title: "Medicación para el TDAH",
          url: "https://www.tiktok.com/@a_su_medida/video/7539979797250821398",
          thumbnail: tiktok1,
        },
        {
          title: "La ciencia encuentra las causas del TDAH",
          url: "https://www.tiktok.com/@a_su_medida/video/7548916362312305942",
          thumbnail: tiktok2,
        },
        {
          title: "El TDAH no es una enfermedad",
          url: "https://www.tiktok.com/@a_su_medida/video/7560419933461433603",
          thumbnail: tiktok3,
        },
      ],
    },
    {
      category: "Educación emocional",
      videos: [
        {
          title: "Medicación en el TDAH",
          url: "https://www.tiktok.com/@a_su_medida/video/7558175910323801347",
          thumbnail: tiktok4,
        },
        {
          title: "Diagnóstico del TDAH",
          url: "https://www.tiktok.com/@a_su_medida/video/7557052946425466134",
          thumbnail: tiktok5,
        },
        {
          title: "Desmintiendo virales",
          url: "https://www.tiktok.com/@a_su_medida/video/7555579233410567446",
          thumbnail: tiktok6,
        },
      ],
    },
    {
      category: "Consejos para padres",
      videos: [
        {
          title: "Malas prácticas en el TDAH",
          url: "https://www.tiktok.com/@a_su_medida/video/7554674868055182614",
          thumbnail: tiktok7,
        },
        {
          title: "Historia de un niño con TDAH",
          url: "https://www.tiktok.com/@a_su_medida/video/7553717123693022486",
          thumbnail: tiktok8,
        },
        {
          title: "El eterno debate sobre el TDAH",
          url: "https://www.tiktok.com/@a_su_medida/video/7551399099174554902",
          thumbnail: tiktok9,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24 pt-36 md:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Mis vídeos de TikTok
            </h1>
            <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </div>
          <p className="text-lg text-muted-foreground">
            Contenido sobre psicología infantil, conducta y estrategias para padres.
            Videos cortos con ejemplos reales y consejos aplicables.
          </p>
        </div>

        {/* Video Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoCategories.flatMap((category) =>
              category.videos.map((video, vidIndex) => (
                <Card
                  key={vidIndex}
                  className="shadow-card hover:shadow-soft transition-all overflow-hidden group"
                >
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {/* Formato vertical de TikTok 9:16 */}
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay con icono de TikTok */}
                      <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                      </div>
                      {/* Overlay hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                    </CardContent>
                  </a>
                </Card>
              ))
            )}
          </div>
        </div>

        {/* TikTok Follow Section */}
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-8 md:p-12 rounded-2xl text-center max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            <h3 className="text-2xl font-bold">Sígueme en TikTok</h3>
          </div>
          <p className="text-lg opacity-90 mb-6">
            Comparto contenido diario sobre psicología infantil, consejos prácticos
            para padres y estrategias basadas en evidencia. ¡No te lo pierdas!
          </p>
          <Button size="lg" asChild variant="secondary" className="text-lg px-8">
            <a
              href="https://www.tiktok.com/@a_su_medida"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seguir en TikTok
            </a>
          </Button>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white p-8 md:p-12 rounded-2xl text-center max-w-6xl mx-auto">
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
