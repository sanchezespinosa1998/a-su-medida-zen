import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
