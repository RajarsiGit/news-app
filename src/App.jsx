import { useEffect, useState } from "react";

// Random News App
// Uses the NewsAPI.org top-headlines endpoint
// Requires an API key (get one free at https://newsapi.org)
// Drop this component into a Vite + React project (src/App.jsx) and run `npm run dev`.
// Add your API key to an environment variable (e.g., VITE_NEWSAPI_KEY).

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRandomArticles = async () => {
    try {
      setLoading(true);
      setError("");

      const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
      if (!apiKey)
        throw new Error("Missing API key. Add VITE_NEWSAPI_KEY to .env");

      // Fetch top headlines (default: US). Change country/category to your needs.
      const resp = await fetch(
        `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey}`
      );
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();
      const items = data?.articles ?? [];
      if (items.length < 3)
        throw new Error("Not enough articles available right now.");

      // Pick 3 random unique articles
      const selected = [];
      const usedIndexes = new Set();
      while (selected.length < 3 && usedIndexes.size < items.length) {
        const idx = Math.floor(Math.random() * items.length);
        if (!usedIndexes.has(idx)) {
          usedIndexes.add(idx);
          selected.push(items[idx]);
        }
      }
      setArticles(selected);
    } catch (e) {
      setError(e?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <header className="mb-4 flex items-center justify-between gap-3">
          <h1 className="text-2xl font-bold tracking-tight">News App</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchRandomArticles}
              disabled={loading}
              className="px-4 py-2 rounded-xl border bg-white hover:bg-gray-100 active:scale-[0.99] transition disabled:opacity-60"
            >
              {loading ? "Loading…" : "Shuffle"}
            </button>
            <a
              href="https://newsapi.org/"
              target="_blank"
              rel="noreferrer"
              className="text-sm underline underline-offset-4 opacity-70 hover:opacity-100"
            >
              Powered by GNews API
            </a>
          </div>
        </header>

        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            {error}
          </div>
        )}

        <main className="flex flex-col gap-6">
          {!articles.length && !loading ? (
            <div className="p-8 text-center text-gray-500">
              No articles to display.
            </div>
          ) : (
            articles.map((article, i) => (
              <ArticleCard key={i} article={article} loading={loading} />
            ))
          )}
        </main>
      </div>
    </div>
  );
}

function ArticleCard({ article, loading }) {
  if (loading) {
    return (
      <div className="p-8 animate-pulse border rounded-2xl shadow-sm">
        <div className="h-40 w-full bg-gray-200" />
        <div className="p-4 space-y-3">
          <div className="h-6 w-3/4 bg-gray-200" />
          <div className="h-4 w-full bg-gray-200" />
          <div className="h-4 w-11/12 bg-gray-200" />
        </div>
      </div>
    );
  }

  if (!article) return null;

  const {
    title,
    url,
    image: imageUrl,
    description,
    source,
    publishedAt,
  } = article;

  return (
    <article className="rounded-2xl border bg-white shadow-sm overflow-hidden flex flex-col">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="h-40 w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="h-40 w-full bg-gray-100 flex items-center justify-center text-gray-400">
          No image
        </div>
      )}

      <div className="p-4 flex flex-col flex-1 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-lg font-semibold leading-snug line-clamp-2">
            {title}
          </h2>
          {source?.name && (
            <span className="shrink-0 rounded-full border px-2 py-0.5 text-xs bg-gray-50">
              {source.name}
            </span>
          )}
        </div>
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 flex-1">
          {description || "No description available."}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border px-2 py-1 hover:bg-gray-50"
          >
            Read ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function formatDate(d) {
  try {
    return new Date(d).toLocaleString();
  } catch {
    return d ?? "";
  }
}
