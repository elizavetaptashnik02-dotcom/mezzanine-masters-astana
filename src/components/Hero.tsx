import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-mezzanine.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 35, 50, 0.95) 0%, rgba(26, 35, 50, 0.7) 100%), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Антресольные этажи и металлоконструкции в Астане
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Увеличьте полезную площадь вашего помещения в 2 раза — без перепланировки и лишних затрат
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
            <p className="text-lg text-white/95 mb-4">
              Мы проектируем, производим и устанавливаем прочные антресольные этажи и металлоконструкции «под ключ». 
              Подойдут для магазинов, ресторанов, офисов, складов и частных домов.
            </p>
            <p className="text-xl font-semibold text-accent">
              Бесплатный выезд замерщика и расчет за 24 часа!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToForm}
              className="group"
            >
              Рассчитать стоимость
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outlineLight" 
              size="xl"
              asChild
            >
              <a href="tel:+77000000000">
                <Phone className="mr-2" />
                Позвонить сейчас
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
