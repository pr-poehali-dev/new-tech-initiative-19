export function Philosophy() {
  return (
    <section id="details" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="/minimal-scandinavian-workspace-with-natural-light-.jpg"
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
              Вечер, который вы заслужили
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Районный выпускной — это особый праздник, где встретятся выпускники со всего района.
                Музыка, торжественная атмосфера и незабываемые моменты в одном из лучших культурных
                центров Одессы.
              </p>
              <p>
                Одесский РКДЦ готовит для вас тёплый приём: живая музыка, фотозона, праздничный стол
                и всё, что нужно для настоящего праздника выпускников.
              </p>
            </div>
            <div className="pt-4">
              <a href="#program" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Программа вечера</span>
                <span className="text-terracotta group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
