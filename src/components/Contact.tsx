import { useState, FormEvent } from "react";
import func2url from "../../backend/func2url.json";

const RSVP_URL = func2url.rsvp;

export function Contact() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(RSVP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() }),
      });
      if (!res.ok) throw new Error("Ошибка сервера");
      setSubmitted(true);
    } catch {
      setError("Не удалось отправить. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">Подтверждение</span>
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-6 text-balance">
          Я приду на выпускной!
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Оставьте своё имя, чтобы мы знали, что вы будете — и могли подготовить всё для вас.
        </p>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-sage/10 border border-sage/20">
            <p className="text-foreground font-serif text-2xl mb-2">Ждём вас, {name}!</p>
            <p className="text-muted-foreground">До встречи 27 июня в 18:00 в Одесском РКДЦ.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sage/30 transition-all duration-300"
              required
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity duration-300 whitespace-nowrap disabled:opacity-60"
            >
              {loading ? "Отправляем..." : "Я приду!"}
            </button>
          </form>
        )}
        {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
      </div>
    </section>
  );
}
