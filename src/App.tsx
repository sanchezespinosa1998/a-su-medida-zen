import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Wrench } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Dudas from "./pages/Dudas";
import SobreMi from "./pages/SobreMi";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";
import { sendTestEvent } from "./utils/tiktokPixel";

const queryClient = new QueryClient();

// Configurar función global para testing desde la consola
declare global {
  interface Window {
    testTikTok?: (code?: string) => void;
  }
}

// Modo mantenimiento - Cambiar a false para desactivar
const MAINTENANCE_MODE = true;

// Componente para hacer scroll al top en cada cambio de ruta y trackear con TikTok Pixel
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Trackear cambio de página con TikTok Pixel
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.page();
    }
  }, [pathname]);

  return null;
};

const MaintenanceOverlay = () => {
  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9999] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="relative flex justify-center mb-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30">
              <Wrench className="w-12 h-12 text-primary animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Sitio en Mantenimiento
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Estamos realizando mejoras para ofrecerte una mejor experiencia.
          </p>
          <p className="text-lg text-white/60">
            Volveremos muy pronto. Gracias por tu paciencia.
          </p>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-primary text-sm font-semibold">
            Miguel Olea - Psicología Infanto-Juvenil
          </p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  // Configurar función de test global en el mount
  useEffect(() => {
    window.testTikTok = (code?: string) => {
      sendTestEvent(code || 'TEST51427');
    };
    
    console.log('🧪 Función de test TikTok configurada. Usa: window.testTikTok()');
    console.log('🧪 Para enviar con código específico: window.testTikTok("TU_CODIGO")');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/dudas" element={<Dudas />} />
                <Route path="/sobre-mi" element={<SobreMi />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
          {MAINTENANCE_MODE && <MaintenanceOverlay />}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
