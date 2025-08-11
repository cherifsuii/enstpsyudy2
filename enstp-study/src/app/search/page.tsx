'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface SearchResult {
  url: string;
  label: string;
  subject: string;
  breadcrumb: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetch(`/api/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [query]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Search Results for "{query}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((result, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow-md">
              <Link href={result.url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-orange-500 hover:underline">
                {result.label}
              </Link>
              <p className="text-gray-600">Subject: {result.subject}</p>
              <p className="text-sm text-gray-500">Path: {result.breadcrumb}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{query}".</p>
      )}
    </div>
  );
}
