# Integración de TikTok Pixel

Esta aplicación está configurada para enviar eventos a TikTok Pixel para tracking y optimización de campañas publicitarias.

## ✅ Configuración Actual

### Pixel ID
- **ID del Pixel:** `D40J6FRC77UACP4090RG`
- **Token de Acceso:** `4dcb278970282db86592eda7192288207b1fba4e`

### Método de Integración
La aplicación usa **TikTok Pixel SDK** (método de píxel web) que carga automáticamente en cada página.

## 📊 Eventos Implementados

### 1. Eventos Automáticos
- ✅ **PageView**: Se envía automáticamente en cada cambio de página (vía `App.tsx`)

### 2. Eventos de Contacto (WhatsApp)
- ✅ Botón flotante de WhatsApp
- ✅ Botones de "Reserva ahora" en Header (desktop y móvil)
- ✅ Botones de contacto en todas las páginas:
  - Home page
  - Servicios page
  - Dudas page
  - Sobre mí page
  - Videos page

### 3. Eventos de Conversión
- ✅ Intención de reserva (AddToCart) cuando usuario hace clic en reservar cita
- ✅ Selección de servicios específicos

### 4. Eventos de Contenido
- ✅ Clics en videos de TikTok
- ✅ Clic en "Seguir en TikTok"
- ✅ Clic en botones CTA

## 🔧 Archivos Modificados

### Utilidades de Tracking
- `src/utils/tiktokPixel.ts` - Funciones helper para tracking del lado del cliente
- `src/utils/tiktokServerAPI.ts` - Funciones para API de servidor (opcional)

### Componentes con Tracking
- `src/components/WhatsAppButton.tsx` - Botón flotante de WhatsApp
- `src/components/Header.tsx` - Header con botón de reserva

### Páginas con Tracking
- `src/pages/Home.tsx` - Página principal con múltiples CTAs
- `src/pages/Servicios.tsx` - Página de servicios con reservas
- `src/pages/Dudas.tsx` - Página de preguntas frecuentes
- `src/pages/SobreMi.tsx` - Página "Sobre mí"
- `src/pages/Videos.tsx` - Página de videos de TikTok

## 📝 Funciones de Tracking Disponibles

```typescript
// Trackear clic en WhatsApp
trackWhatsAppClick(buttonLocation: string)

// Trackear visualización de contenido
trackViewContent(contentType: string, contentId?: string)

// Trackear clic en botón
trackButtonClick(buttonName: string, buttonLocation?: string)

// Trackear intención de reserva
trackReserveIntent(serviceName?: string)

// Trackear visualización de video
trackVideoView(videoTitle: string, videoUrl: string)

// Enviar evento personalizado
trackTikTokEvent(eventName: string, data?: Record<string, any>)
```

## 🚀 Cómo Agregar Tracking a Nuevos Elementos

1. Importa la función necesaria:
```typescript
import { trackWhatsAppClick } from "@/utils/tiktokPixel";
```

2. Agrega el onClick:
```typescript
<a
  href="https://wa.me/34693054790"
  onClick={() => trackWhatsAppClick('tu_ubicacion')}
>
  Contactar
</a>
```

## 🔒 Seguridad del Token

El token de acceso está actualmente en:
- ❌ `src/utils/tiktokServerAPI.ts` (expuesto en el cliente)

**Para producción, mueve el token a:**
- ✅ Variables de entorno del servidor
- ✅ API endpoint privado

### Ejemplo de uso seguro del token:

1. Crea un endpoint en tu servidor:
```typescript
// server/api/tiktok/route.ts
export async function POST(request: Request) {
  const { event, properties } = await request.json();
  
  const result = await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
    method: 'POST',
    headers: {
      'Access-Token': process.env.TIKTOK_ACCESS_TOKEN, // Desde env variables
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      pixel_code: process.env.TIKTOK_PIXEL_ID,
      data: [{ event, properties, ... }]
    })
  });
  
  return Response.json(await result.json());
}
```

2. Llama desde el cliente:
```typescript
fetch('/api/tiktok', {
  method: 'POST',
  body: JSON.stringify({ 
    event: 'CompletePayment',
    properties: { value: 60, currency: 'EUR' }
  })
});
```

## 🧪 Verificación

### Verificar que los eventos se envían:
1. Abre las DevTools del navegador (F12)
2. Ve a la pestaña "Network"
3. Filtra por "analytics.tiktok.com"
4. Haz clic en cualquier botón de WhatsApp o CTA
5. Deberías ver peticiones a `events.js` con los eventos enviados

### Verificar en TikTok Ads Manager:
1. Accede a TikTok Ads Manager
2. Ve a Events Manager
3. Selecciona tu pixel `D40J6FRC77UACP4090RG`
4. Revisa los eventos recibidos en tiempo real

## 📈 Eventos Personalizados Creados

- `WhatsAppClick` - Clic en cualquier botón de WhatsApp
- `VideosClick` - Clic en videos de TikTok
- `FollowTikTok` - Clic en botón "Seguir en TikTok"

Estos eventos aparecerán en TikTok Ads Manager como "Custom Events".

## ⚠️ Consideraciones

1. **Consentimiento de cookies**: Actualmente no hay gestión de consentimiento de cookies. Considera agregar `ttq.disableCookie()` si es necesario para cumplir con GDPR/LGPD.

2. **Eventos duplicados**: Para evitar duplicados, TikTok recomienda usar `event_id` único. La implementación actual no los genera, pero se puede agregar fácilmente.

3. **Optimización**: Los eventos se envían de forma asíncrona y no bloquean la navegación del usuario.

## 📚 Recursos

- [Documentación Oficial de TikTok Pixel](https://ads.tiktok.com/help/article?aid=10028)
- [API de Eventos de TikTok](https://business-api.tiktok.com/portal/docs?id=1708582777309186)
- [Guía de Implementación](https://ads.tiktok.com/help/article?aid=9502)

## 🆘 Soporte

Para problemas con el tracking:
1. Verifica que el pixel esté cargado correctamente en `index.html`
2. Revisa la consola del navegador para errores
3. Verifica que los eventos aparezcan en TikTok Ads Manager
4. Contacta al soporte de TikTok si los eventos no se registran

