import { useState } from "react";
import Icon from "@/components/ui/icon";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl tracking-tight text-foreground">
          Выпускной '26
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#details"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            О вечере
          </a>
          <a
            href="#program"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Программа
          </a>
          <a
            href="#location"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Место
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Контакты
          </a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 bg-primary text-primary-foreground text-sm rounded-full hover:opacity-90 transition-opacity duration-300"
        >
          Я приду!
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Открыть меню"
        >
          {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <div className="flex flex-col px-6 py-6 gap-4">
            <a href="#details" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">О вечере</a>
            <a href="#program" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Программа</a>
            <a href="#location" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Место</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm rounded-full text-center"
            >
              Я приду!
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
