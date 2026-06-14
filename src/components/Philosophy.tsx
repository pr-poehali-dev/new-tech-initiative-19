export function Philosophy() {
  return (
    <section id="details" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/eec280e8-92a8-4e9a-a579-3b83031bb80c/bucket/5339ad8a-12b6-4dd6-a2c8-9666a17c18f9.jpeg"
              alt="Вечер выпускного"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                «Этот вечер — не просто праздник. Это момент, который останется с вами навсегда.»
              </p>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">О вечере</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              Дорогие друзья и уважаемые гости!
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Мы с радостью и волнением приглашаем вас на торжественное мероприятие — Выпускной вечер 2026!
              </p>
              <p>
                Этот день особенный. Позади годы учёбы, труда, открытий и незабываемых моментов. Впереди — новая жизнь, новые горизонты и большие мечты.
              </p>
              <p>
                Мы хотим разделить этот праздник с теми, кто был рядом, поддерживал, верил и любил. Именно поэтому мы ждём вас — наших самых дорогих и близких людей!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}