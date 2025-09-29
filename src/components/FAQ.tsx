import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Сколько занимает монтаж?",
    answer: "От 4 до 7 дней в зависимости от сложности проекта и площади антресольного этажа. Простые конструкции устанавливаем за 4-5 дней, более сложные проекты могут занять до недели.",
  },
  {
    question: "Можно ли платить частями?",
    answer: "Да, предусмотрена поэтапная оплата. Обычно это 50% предоплата перед началом производства и 50% после завершения монтажа. Возможны индивидуальные условия по согласованию.",
  },
  {
    question: "Делаете ли вы проекты для бизнеса?",
    answer: "Да, мы работаем с кафе, магазинами, складами, офисами и частными заказами. Имеем большой опыт реализации коммерческих проектов любой сложности.",
  },
  {
    question: "Какую нагрузку выдерживают ваши конструкции?",
    answer: "Наши антресольные этажи рассчитаны на нагрузку от 300 до 500 кг/м² в зависимости от проекта. Точные параметры определяются на этапе проектирования с учетом назначения помещения.",
  },
  {
    question: "Нужны ли разрешения для установки?",
    answer: "Для большинства коммерческих помещений не требуется специальных разрешений, так как антресоль — это не перепланировка. Однако мы рекомендуем уточнить этот вопрос у собственника здания.",
  },
  {
    question: "Какая гарантия на конструкцию?",
    answer: "Предоставляем гарантию 2 года на металлоконструкции и 1 год на монтажные работы. При правильной эксплуатации наши конструкции служат десятилетиями.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответы на популярные вопросы о наших услугах
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
