// Utilidades para TikTok Pixel
declare global {
  interface Window {
    ttq?: {
      track: (event: string, data?: any) => void;
      page: () => void;
      identify: (data?: any) => void;
      instance: (instanceId: string) => any;
      load: (pixelId: string, options?: any) => void;
    };
  }
}

/**
 * Función helper para enviar eventos a TikTok Pixel de forma segura
 */
export const trackTikTokEvent = (event: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.ttq) {
    try {
      if (data) {
        window.ttq.track(event, data);
      } else {
        window.ttq.track(event);
      }
      console.log('✅ Evento TikTok enviado:', event, data);
    } catch (error) {
      console.error('Error al enviar evento a TikTok Pixel:', error);
    }
  } else {
    console.warn('⚠️ TikTok Pixel no está cargado aún');
  }
};

/**
 * Tipos de eventos predefinidos para facilitar el uso
 */
export const TikTokEvents = {
  // Eventos de navegación
  PAGE_VIEW: 'PageView',
  
  // Eventos de contacto
  CONTACT: 'Contact',
  SUBMIT_FORM: 'SubmitForm',
  
  // Eventos de contenido
  VIEW_CONTENT: 'ViewContent',
  SEARCH: 'Search',
  
  // Eventos de engagement
  CLICK_BUTTON: 'ClickButton',
  ADD_TO_CALENDAR: 'AddToCart', // Reutilizando AddToCart para reservas
  INITIATE_CHECKOUT: 'InitiateCheckout',
  COMPLETE_PAYMENT: 'CompletePayment',
  
  // Eventos personalizados
  WHATSAPP_CLICK: 'WhatsAppClick',
  VIDEOS_CLICK: 'VideosClick',
  FOLLOW_TIKTOK: 'FollowTikTok',
};

/**
 * Trackea clics en WhatsApp
 */
export const trackWhatsAppClick = (buttonLocation: string = 'unknown') => {
  trackTikTokEvent(TikTokEvents.WHATSAPP_CLICK, {
    button_location: buttonLocation,
  });
};

/**
 * Trackea visualización de contenido
 */
export const trackViewContent = (contentType: string, contentId?: string) => {
  trackTikTokEvent(TikTokEvents.VIEW_CONTENT, {
    content_type: contentType,
    content_id: contentId,
  });
};

/**
 * Trackea clics en botones
 */
export const trackButtonClick = (buttonName: string, buttonLocation?: string) => {
  trackTikTokEvent(TikTokEvents.CLICK_BUTTON, {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

/**
 * Trackea intención de reservar servicio
 */
export const trackReserveIntent = (serviceName?: string) => {
  trackTikTokEvent(TikTokEvents.ADD_TO_CALENDAR, {
    content_type: 'service_reservation',
    service_name: serviceName,
  });
};

/**
 * Trackea visualización de videos
 */
export const trackVideoView = (videoTitle: string, videoUrl: string) => {
  trackTikTokEvent(TikTokEvents.VIDEOS_CLICK, {
    video_title: videoTitle,
    video_url: videoUrl,
  });
};

/**
 * Función para enviar eventos de prueba
 */
export const sendTestEvent = (testCode?: string) => {
  const testData = {
    test_code: testCode || 'TEST51427',
    timestamp: new Date().toISOString(),
    source: 'manual_test',
  };
  
  console.log('🧪 Enviando evento de prueba a TikTok...', testData);
  trackTikTokEvent('TestEvent', testData);
};

