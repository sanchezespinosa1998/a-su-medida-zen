/**
 * Utilidades para enviar eventos de TikTok usando la API de servidor
 * Este método es útil para eventos que necesitan mayor precisión o para enviar desde el backend
 * 
 * DOCUMENTACIÓN: https://business-api.tiktok.com/portal/docs?id=1708582777309186
 */

// Token de acceso de TikTok (obtener de TikTok Events Manager)
const TIKTOK_ACCESS_TOKEN = '4dcb278970282db86592eda7192288207b1fba4e';
const PIXEL_ID = 'D40J6FRC77UACP4090RG'; // Tu pixel ID

export interface TikTokServerEvent {
  event: string;
  event_id?: string;
  timestamp?: string;
  properties?: Record<string, any>;
  context?: {
    page?: {
      url: string;
      referrer?: string;
    };
    user_agent?: string;
    ip?: string;
  };
}

/**
 * Envía un evento a TikTok usando la API de servidor
 * 
 * Esta función debería llamarse desde un endpoint del servidor para mayor seguridad
 * NO la uses directamente desde el cliente con el token expuesto
 */
export async function sendServerEvent(event: TikTokServerEvent) {
  try {
    const response = await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
      method: 'POST',
      headers: {
        'Access-Token': TIKTOK_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pixel_code: PIXEL_ID,
        data: [{
          event: event.event,
          event_id: event.event_id || generateEventId(),
          timestamp: event.timestamp || new Date().toISOString(),
          properties: event.properties || {},
          context: event.context || {}
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error al enviar evento a TikTok:', errorData);
      return { success: false, error: errorData };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error de red al enviar evento a TikTok:', error);
    return { success: false, error };
  }
}

/**
 * Genera un ID único para el evento
 */
function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Helper para enviar eventos de conversión desde el servidor
 * 
 * Ejemplos de uso:
 * - Cuando un usuario completa un pago (mejor enviarlo desde el servidor)
 * - Para evitar que usuarios bloqueen el tracking del lado del cliente
 * - Para mayor precisión en eventos críticos
 */
export const TikTokServerEvents = {
  /**
   * Envía un evento de contacto
   */
  async sendContact(properties?: Record<string, any>) {
    return sendServerEvent({
      event: 'Contact',
      properties
    });
  },

  /**
   * Envía un evento de completar pago
   */
  async sendCompletePayment(properties?: Record<string, any>) {
    return sendServerEvent({
      event: 'CompletePayment',
      properties
    });
  },

  /**
   * Envía un evento personalizado
   */
  async sendCustom(eventName: string, properties?: Record<string, any>) {
    return sendServerEvent({
      event: eventName,
      properties
    });
  }
};

/**
 * NOTA IMPORTANTE DE SEGURIDAD:
 * 
 * Este archivo contiene el token de acceso de TikTok. 
 * Para producción, DEBES mover este token a variables de entorno del servidor.
 * 
 * EJEMPLO DE USO EN EL BACKEND (Node.js/Express):
 * 
 * // server/api/tiktok/route.ts
 * import { TikTokServerEvents } from '@/utils/tiktokServerAPI';
 * 
 * export async function POST(request: Request) {
 *   const { event, properties } = await request.json();
 *   
 *   const result = await TikTokServerEvents.sendCustom(event, properties);
 *   
 *   return Response.json(result);
 * }
 * 
 * Luego desde el cliente:
 * fetch('/api/tiktok', {
 *   method: 'POST',
 *   body: JSON.stringify({ 
 *     event: 'CompletePayment',
 *     properties: { value: 60, currency: 'EUR' }
 *   })
 * });
 */

