import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="font-display text-lg font-bold text-primary mb-4">
              A su medida
            </h3>
            <p className="text-sm text-white">
              Gabinete de psicología infantil especializado en análisis de conducta aplicado.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="tel:+34693054790"
                className="flex items-center text-sm text-white hover:text-primary transition-colors"
              >
                <Phone size={16} className="mr-2" />
                +34 693 054 790
              </a>
              <a
                href="mailto:contacto@asumedida.com"
                className="flex items-center text-sm text-white hover:text-primary transition-colors"
              >
                <Mail size={16} className="mr-2" />
                contacto@asumedida.com
              </a>
              <div className="flex items-start text-sm text-white">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Información</h4>
            <div className="space-y-2 text-sm text-white">
              <p>Psicólogo colegiado nº M-43853</p>
              <p>Especialista en Psicología General Sanitaria</p>
              <p>Máster en Análisis de Conducta Aplicado</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white text-center text-sm text-white">
          <p>© {new Date().getFullYear()} A su medida - Psicología Infantil. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
