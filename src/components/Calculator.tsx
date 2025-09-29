import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator as CalcIcon } from "lucide-react";

const Calculator = () => {
  const [area, setArea] = useState<string>("");
  const pricePerSqm = 40000;
  
  const total = area ? parseFloat(area) * pricePerSqm : 0;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <CalcIcon className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-3xl md:text-4xl">
                Калькулятор стоимости
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Узнайте приблизительную стоимость за 1 минуту
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="area" className="text-lg">
                  Площадь антресольного этажа (м²)
                </Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="Введите площадь в м²"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="text-lg h-14"
                  min="0"
                  step="0.1"
                />
              </div>

              <div className="bg-primary/5 rounded-xl p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Цена за м²:</span>
                  <span className="text-xl font-semibold">
                    {pricePerSqm.toLocaleString()} тг
                  </span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Итого:</span>
                  <span className="text-3xl font-bold text-accent">
                    {total.toLocaleString()} тг
                  </span>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground text-center">
                  * Итоговая стоимость зависит от сложности проекта, типа покрытия и дополнительных элементов
                </p>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Получить точный расчет
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
