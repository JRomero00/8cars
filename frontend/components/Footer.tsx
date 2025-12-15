import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo y Descripción */}
          <div className="md:col-span-2">
            <div className="text-3xl font-display font-bold mb-4">
              <span className="text-white">8</span>
              <span className="text-accent">cars</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Tu casa para vender tu vehículo. Automotora digital enfocada en
              confianza, seguridad y servicio personalizado.
            </p>
            <div className="flex space-x-4">
              
                href="https://instagram.com/8cars"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-accent p-3 rounded-full transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              
                href="mailto:contacto@8cars.cl"
                className="bg-white/10 hover:bg-accent p-3 rounded-full transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              
                href="tel:+56912345678"
                className="bg-white/10 hover:bg-accent p-3 rounded-full transition-colors duration-200"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/catalogo"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link
                  href="/fierrero"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Fierrero
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-300">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span>Santiago, Chile</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-300">
                <Phone size={20} className="mt-0.5 flex-shrink-0" />
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-300">
                <Mail size={20} className="mt-0.5 flex-shrink-0" />
                <span>contacto@8cars.cl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 8cars. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}