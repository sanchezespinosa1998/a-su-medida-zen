# 🧪 Test de Evento TikTok - Código TEST51427

## ✅ Configuración Completada

El evento de prueba está configurado y listo para ser enviado.

## 🚀 Cómo Probar el Evento

### Opción 1: Desde la Consola del Navegador (Recomendado)

1. Abre tu aplicación en el navegador
2. Abre las DevTools (F12)
3. Ve a la pestaña "Console"
4. Ejecuta uno de estos comandos:

```javascript
// Enviar evento con el código por defecto (TEST51427)
window.testTikTok()

// O especificar otro código
window.testTikTok('TEST51427')
```

### Opción 2: Verificar Eventos Automáticos

Los siguientes eventos se envían automáticamente:

- ✅ **PageView** - Al cambiar de página
- ✅ **WhatsAppClick** - Al hacer clic en cualquier botón de WhatsApp
- ✅ **VideosClick** - Al hacer clic en videos de TikTok
- ✅ **ButtonClick** - Al hacer clic en botones CTA
- ✅ **ReserveIntent** - Al hacer clic en "Reservar cita"

### Opción 3: Testing Manual en la Aplicación

Simplemente usa la aplicación normalmente:
- Haz clic en cualquier botón de WhatsApp
- Haz clic en "Reservar cita"
- Navega entre páginas
- Haz clic en videos

Cada acción enviará un evento a TikTok.

## 🔍 Cómo Verificar que el Evento se Envió

### En la Consola del Navegador

Verás mensajes como:
```
🧪 Enviando evento de prueba a TikTok... {test_code: "TEST51427", ...}
✅ Evento TikTok enviado: TestEvent {test_code: "TEST51427", ...}
```

### En la Pestaña Network

1. Abre DevTools (F12)
2. Ve a la pestaña "Network"
3. Filtra por "analytics.tiktok.com"
4. Deberías ver peticiones a `events.js`

### En TikTok Ads Manager

1. Accede a [TikTok Ads Manager](https://ads.tiktok.com/)
2. Ve a Events Manager
3. Selecciona tu pixel: `D40J6FRC77UACP4090RG`
4. Verifica los eventos en tiempo real

## 📊 Datos del Evento de Prueba

Cuando ejecutas `window.testTikTok()`:

```json
{
  "event": "TestEvent",
  "test_code": "TEST51427",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "source": "manual_test"
}
```

## 🛠️ Solución de Problemas

### El evento no se envía

1. Verifica que el pixel esté cargado:
```javascript
// En la consola, ejecuta:
console.log(window.ttq)
// Debería mostrar el objeto ttq de TikTok
```

2. Revisa la consola para errores

3. Verifica que estés en el dominio correcto

### No veo los eventos en TikTok Ads Manager

1. Espera unos minutos (los eventos pueden tardar en aparecer)
2. Verifica que estés mirando el pixel correcto
3. Comprueba que los eventos estén en "Eventos en tiempo real"
4. Asegúrate de que el pixel esté activado

## 📝 Funciones de Test Disponibles

### Desde la Consola

```javascript
// Test básico
window.testTikTok()

// Test con código personalizado
window.testTikTok('MI_CODIGO_CUSTOM')

// Test de WhatsApp
trackWhatsAppClick('test_location')

// Test de botón
trackButtonClick('Test Button', 'test_location')
```

### Desde el Código

```typescript
import { sendTestEvent, trackWhatsAppClick } from "@/utils/tiktokPixel";

// Enviar evento de prueba
sendTestEvent('TEST51427');

// Test de WhatsApp
trackWhatsAppClick('mi_test');
```

## ⚡ Eventos Disponibles para Testing

```typescript
import { 
  sendTestEvent,           // TestEvent
  trackWhatsAppClick,      // WhatsAppClick
  trackVideoView,          // VideosClick
  trackButtonClick,        // ClickButton
  trackReserveIntent,      // AddToCart
  trackTikTokEvent         // Evento personalizado
} from "@/utils/tiktokPixel";
```

## 🎯 Ejemplo de Uso Completo

```javascript
// 1. Test básico
window.testTikTok('TEST51427')

// 2. Ver resultado en consola
// Deberías ver: "✅ Evento TikTok enviado: TestEvent"

// 3. Verificar en Network tab
// Busca peticiones a analytics.tiktok.com

// 4. Verificar en TikTok Ads Manager
// Eventos > Eventos en tiempo real
```

## 🔗 Enlaces Útiles

- [TikTok Ads Manager](https://ads.tiktok.com/)
- [Events Manager](https://ads.tiktok.com/help/article?aid=10028)
- [Pixel Helper Extension](https://chrome.google.com/webstore/detail/tiktok-pixel-helper/oogphakifnafmdbjinlcjebpnlklfomj) - Para verificar el pixel

## 📧 Contacto de Soporte

Si tienes problemas con el tracking:
1. Revisa la consola del navegador
2. Verifica que el pixel esté activo en TikTok Ads Manager
3. Contacta al soporte de TikTok si el problema persiste

---

**Nota**: Los eventos de prueba están diseñados para verificar la conexión con TikTok. Una vez confirmado que funcionan, puedes eliminar o comentar las funciones de test en producción.

