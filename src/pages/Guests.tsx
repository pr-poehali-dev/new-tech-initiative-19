import { useEffect, useState } from "react";
import func2url from "../../backend/func2url.json";

const RSVP_URL = func2url.rsvp;

interface Guest {
  id: number;
  name: string;
  created_at: string;
}

export default function Guests() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(RSVP_URL)
      .then((r) => r.json())
      .then((data) => setGuests(data.guests || []))
      .catch(() => setError("Не удалось загрузить список"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 inline-block">
          ← На главную
        </a>
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-2">
          Список гостей
        </h1>
        <p className="text-muted-foreground mb-10">Выпускной вечер · 27 июня 2026</p>

        {loading && <p className="text-muted-foreground">Загружаем...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <>
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/10 text-sage text-sm">
              Всего подтвердили: <strong>{guests.length}</strong>
            </div>

            {guests.length === 0 ? (
              <p className="text-muted-foreground">Пока никто не подтвердил приход.</p>
            ) : (
              <ul className="space-y-3">
                {guests.map((g, i) => (
                  <li
                    key={g.id}
                    className="flex items-center justify-between px-6 py-4 rounded-2xl bg-card border border-border"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground text-sm w-6 text-right">{i + 1}.</span>
                      <span className="text-foreground font-medium">{g.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(g.created_at).toLocaleString("ru-RU", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}
