import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">KTM Group</h3>
            <p className="text-primary-foreground/80 mb-4">
              Проектирование и монтаж антресольных этажей и металлоконструкций под ключ
            </p>
            <div className="flex gap-3">
              <Button
                variant="outlineLight"
                size="icon"
                asChild
              >
                <a href="https://www.instagram.com/_ktmgroup?igsh=bTRpcGE1eGQwZzNu" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outlineLight"
                size="icon"
                asChild
              >
                <a href="https://wa.me/77758887716" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a 
                href="tel:+77758887716" 
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+7 (775) 888-77-16</span>
              </a>
              <a 
                href="tel:+77078707791" 
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+7 (707) 870-77-91</span>
              </a>
              <a 
                href="mailto:aidik060405@gmail.com" 
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>aidik060405@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>г. Астана, Найзакара 2/6</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">
                Антресольные этажи
              </li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">
                Металлические лестницы
              </li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">
                Ограждения и перила
              </li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">
                Металлокаркасы
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">График работы</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб: 10:00 - 16:00</p>
              <p>Вс: выходной</p>
              <p className="mt-4 text-accent font-semibold">
                Выезд замерщика 24/7
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 KTM Group. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
