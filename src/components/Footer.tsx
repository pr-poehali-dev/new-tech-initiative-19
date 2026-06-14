export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="font-serif text-2xl tracking-tight text-foreground">
            Выпускной '26
          </a>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <a href="#details" className="hover:text-foreground transition-colors duration-300">О вечере</a>
            <a href="#program" className="hover:text-foreground transition-colors duration-300">Программа</a>
            <a href="#location" className="hover:text-foreground transition-colors duration-300">Место</a>
            <a href="#contact" className="hover:text-foreground transition-colors duration-300">Контакты</a>
          </div>

          <p className="text-sm text-muted-foreground">Одесский РКДЦ · 27 июня 2026</p>
        </div>

        <div className="mt-20 text-center">
          <span className="font-serif text-[12rem] md:text-[16rem] leading-none text-border/50 select-none">'26</span>
        </div>
      </div>
    </footer>
  );
}
