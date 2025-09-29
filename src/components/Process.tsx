import { Phone, Ruler, FileText, FileSignature, Factory, Wrench } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Заявка",
    description: "Вы звоните или оставляете заявку на сайте",
  },
  {
    icon: Ruler,
    number: "02",
    title: "Замер",
    description: "Наш специалист бесплатно выезжает на объект",
  },
  {
    icon: FileText,
    number: "03",
    title: "Проект и смета",
    description: "Рассчитываем стоимость за 24 часа",
  },
  {
    icon: FileSignature,
    number: "04",
    title: "Договор",
    description: "Фиксируем цену и сроки",
  },
  {
    icon: Factory,
    number: "05",
    title: "Производство",
    description: "Изготавливаем конструкции на собственном производстве",
  },
  {
    icon: Wrench,
    number: "06",
    title: "Монтаж",
    description: "Доставка и установка за 4-7 дней",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простой и прозрачный процесс от заявки до установки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-4xl font-bold text-accent/20">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
