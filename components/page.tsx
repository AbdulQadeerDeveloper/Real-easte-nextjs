"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          "https://newsapi.org/v2/everything?q=tesla&from=2025-07-03&sortBy=publishedAt&apiKey=ceb7111d14824eb6a77106b861f5f038"
        );
        const data = await res.json();

        if (!data.articles) throw new Error("No articles returned");

        setArticles(data.articles);
        setError(false);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
          Tesla News Blog
        </h1>

        {loading ? (
          <p className="text-center text-lg">Loading articles...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-lg">
            Failed to fetch news. Check your internet connection.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <div className="relative w-full h-48">
                  {article.urlToImage ? (
                    <Image
                      src={article.urlToImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-t-lg"
                      priority={index < 3}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded-t-lg text-sm text-gray-700">
                      No Image Available
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(article.publishedAt).toLocaleString()}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.description || "No description available."}
                  </p>
                  <Link
                    href={article.url}
                    target="_blank"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
