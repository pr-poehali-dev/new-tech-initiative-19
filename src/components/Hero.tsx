import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const TARGET_DATE = new Date("2026-06-27T18:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/10 text-sage mb-8">
          <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
          <span className="text-sm">Одесский РКДЦ</span>
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.1] text-balance mb-6">
          Выпуск
          <br />
          <span className="italic">2026</span>
        </h1>

        {/* Date */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 tracking-wide">
          27 июня 2026 · 18:00
        </p>

        {/* Countdown */}
        <div className="flex items-end justify-center gap-4 md:gap-8 mb-14">
          {[
            { value: timeLeft.days, label: "дней" },
            { value: timeLeft.hours, label: "часов" },
            { value: timeLeft.minutes, label: "минут" },
            { value: timeLeft.seconds, label: "секунд" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground tabular-nums leading-none">
                {pad(item.value)}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#details"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base hover:opacity-90 transition-all duration-300"
          >
            Подробнее о вечере
            <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#location"
            className="inline-flex items-center gap-2 px-8 py-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Как добраться
          </a>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-border" />
      </div>
    </section>
  );
}