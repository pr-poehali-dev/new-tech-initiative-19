import Icon from "@/components/ui/icon";

const details = [
  {
    name: "Дата и время",
    value: "27 июня 2026, 18:00",
    icon: "Calendar",
  },
  {
    name: "Место",
    value: "Одесский РКДЦ",
    icon: "MapPin",
  },
  {
    name: "Дресс-код",
    value: "Торжественный",
    icon: "Sparkles",
  },
  {
    name: "Формат",
    value: "Районный выпускной",
    icon: "Users",
  },
  {
    name: "Адрес",
    value: "с. Одесское, ул. Ленина, 27",
    icon: "Navigation",
  },
];

export function Pricing() {
  return (
    <section id="location" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-amber mb-4 block">Детали</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4 text-balance">
            Всё, что нужно знать
          </h2>
          <p className="text-muted-foreground text-lg">Сохраните дату и приходите вовремя — этот вечер ждёт вас.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {details.map((item, index) => (
            <div
              key={index}
              className="p-8 md:p-10 rounded-2xl border bg-card border-border flex items-start gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                <Icon name={item.icon} size={22} className="text-sage" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">{item.name}</p>
                <p className="font-serif text-2xl text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}