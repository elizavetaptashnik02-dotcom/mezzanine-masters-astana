import { Card, CardContent } from "@/components/ui/card";
import mezzanineImage from "@/assets/service-mezzanine.jpg";
import stairsImage from "@/assets/service-stairs.jpg";
import railingsImage from "@/assets/service-railings.jpg";

const services = [
  {
    image: mezzanineImage,
    title: "Антресольные этажи (мезонин)",
    description: "Для офиса, склада, магазина или дома. Прочные металлические конструкции с оптимальной нагрузкой",
  },
  {
    image: stairsImage,
    title: "Лестницы и металлокаркасы",
    description: "Прямые, Г-образные, винтовые — любая конфигурация под ваше пространство",
  },
  {
    image: railingsImage,
    title: "Ограждения и перила",
    description: "Безопасные и стильные решения с современным дизайном",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наши решения
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Металлоконструкции для любых задач
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-card rounded-2xl p-8 shadow-lg">
            <p className="text-lg font-semibold mb-2">Покрытия полов</p>
            <p className="text-muted-foreground mb-4">Фанера, металл, бетон — выбирайте оптимальный вариант</p>
            <p className="text-accent font-semibold text-lg">
              Хотите индивидуальное решение? Разработаем проект под ваши задачи
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
