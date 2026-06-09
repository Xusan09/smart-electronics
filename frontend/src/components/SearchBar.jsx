import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ large = false, initialValue = '' }) => {
  const [query, setQuery] = useState(initialValue);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/products?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex">
        <div className="relative flex-1">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" width={large ? 20 : 16} height={large ? 20 : 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text" value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder={large ? 'Поиск: микросхемы, датчики, кабели, паяльники...' : 'Поиск товаров...'}
            className={`w-full bg-dark-card border border-dark-border rounded-l-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 transition-all duration-200 ${large ? 'pl-12 pr-4 py-4 text-base' : 'pl-10 pr-3 py-2.5 text-sm'}`}
            style={{ background: '#0f1629' }}
          />
        </div>
        <button type="submit" className={`bg-primary hover:bg-primary-dark text-dark font-bold rounded-r-xl transition-all duration-200 flex items-center gap-2 flex-shrink-0 ${large ? 'px-8 py-4 text-base' : 'px-5 py-2.5 text-sm'}`} style={{ boxShadow: '0 0 15px #00d4ff40' }}>
          <svg width={large ? 20 : 16} height={large ? 20 : 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Найти
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
