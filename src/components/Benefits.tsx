import { Award, Clock, Shield, Wrench, DollarSign, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Wrench,
    title: "Полный цикл работ",
    description: "От замера до монтажа — все этапы под контролем",
  },
  {
    icon: Award,
    title: "Индивидуальный проект",
    description: "Разработка под каждое помещение с учетом всех особенностей",
  },
  {
    icon: Shield,
    title: "Прочные материалы",
    description: "Профессиональная сборка и качественные металлоконструкции",
  },
  {
    icon: Clock,
    title: "Быстрые сроки",
    description: "От 5–7 дней — без лишней бюрократии",
  },
  {
    icon: DollarSign,
    title: "Честные цены",
    description: "От 40 000 тг/м² — прозрачное ценообразование",
  },
  {
    icon: CheckCircle2,
    title: "Гарантия качества",
    description: "Официальная гарантия на конструкцию и монтаж",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональный подход на каждом этапе
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
