"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl">
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for courses, TDs, exams..."
          className="w-full p-4 text-lg rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-lg"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 h-full px-8 text-white bg-orange-500 rounded-full hover:bg-orange-600 focus:outline-none"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
