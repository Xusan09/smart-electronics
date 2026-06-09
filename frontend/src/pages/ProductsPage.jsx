import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProducts, useCategories } from '../hooks/useProducts';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const categoryQuery = searchParams.get('category') || '';
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { products, loading, error } = useProducts({ search: searchQuery, category: categoryQuery });
  const { categories } = useCategories();

  useEffect(() => { setLocalSearch(searchQuery); }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    const p = new URLSearchParams();
    if (localSearch.trim()) p.set('search', localSearch.trim());
    if (categoryQuery) p.set('category', categoryQuery);
    setSearchParams(p);
  };

  const handleCategory = (cat) => {
    const p = new URLSearchParams();
    if (cat) p.set('category', cat);
    if (searchQuery) p.set('search', searchQuery);
    setSearchParams(p);
    setSidebarOpen(false);
  };

  const clearFilters = () => { setLocalSearch(''); setSearchParams(new URLSearchParams()); };
  const hasFilters = searchQuery || categoryQuery;
  const title = categoryQuery ? categoryQuery : searchQuery ? `Результаты: "${searchQuery}"` : 'Все товары';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
        <span>›</span>
        <span className="text-gray-300">{title}</span>
      </div>
      <div className="flex gap-6">
        {/* Sidebar desktop */}
        <aside className="hidden md:block w-56 flex-shrink-0">
          <div className="sticky top-24 bg-dark-card border border-dark-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-dark-border">
              <h3 className="text-white font-semibold text-sm font-orbitron tracking-wider">КАТЕГОРИИ</h3>
            </div>
            <div className="p-2 max-h-[70vh] overflow-y-auto">
              <button onClick={() => handleCategory('')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 ${!categoryQuery ? 'bg-primary/15 text-primary border border-primary/30' : 'text-gray-400 hover:text-white hover:bg-dark-hover'}`}>
                Все товары
              </button>
              {categories.map((cat) => (
                <button key={cat} onClick={() => handleCategory(cat)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 mt-0.5 ${categoryQuery === cat ? 'bg-primary/15 text-primary border border-primary/30' : 'text-gray-400 hover:text-white hover:bg-dark-hover'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-6">
            <form onSubmit={handleSearch} className="flex flex-1 max-w-lg">
              <input type="text" value={localSearch} onChange={(e) => setLocalSearch(e.target.value)} placeholder="Поиск товаров..."
                className="flex-1 bg-dark-card border border-dark-border rounded-l-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 text-sm" />
              <button type="submit" className="bg-primary hover:bg-primary-dark text-dark font-semibold px-4 py-2.5 rounded-r-lg transition-all text-sm flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                Найти
              </button>
            </form>
            <button onClick={() => setSidebarOpen(true)} className="md:hidden flex items-center gap-2 bg-dark-card border border-dark-border text-gray-400 hover:text-primary px-3 py-2.5 rounded-lg text-sm transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="9" y1="18" x2="15" y2="18"/></svg>
              Фильтр
            </button>
            {hasFilters && (
              <button onClick={clearFilters} className="flex items-center gap-1.5 text-gray-400 hover:text-red-400 text-sm transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Сбросить
              </button>
            )}
          </div>

          {hasFilters && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {categoryQuery && <span className="flex items-center gap-1.5 bg-primary/10 border border-primary/30 text-primary text-xs px-3 py-1 rounded-full">{categoryQuery}<button onClick={() => handleCategory('')} className="hover:text-white ml-0.5">×</button></span>}
              {searchQuery && <span className="flex items-center gap-1.5 bg-primary/10 border border-primary/30 text-primary text-xs px-3 py-1 rounded-full">Поиск: {searchQuery}<button onClick={() => { setLocalSearch(''); const p = new URLSearchParams(); if (categoryQuery) p.set('category', categoryQuery); setSearchParams(p); }} className="hover:text-white ml-0.5">×</button></span>}
            </div>
          )}

          <div className="flex items-center justify-between mb-5">
            <h1 className="text-xl font-bold text-white font-orbitron"><span className="text-primary">{'// '}</span>{title.toUpperCase()}</h1>
            {!loading && <span className="text-gray-500 text-sm">{products.length} {products.length === 1 ? 'товар' : products.length < 5 ? 'товара' : 'товаров'}</span>}
          </div>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(12)].map((_,i) => (
                <div key={i} className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
                  <div className="skeleton aspect-square" />
                  <div className="p-3 space-y-2"><div className="skeleton h-3 w-1/2 rounded"/><div className="skeleton h-4 rounded"/><div className="skeleton h-8 rounded"/></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20"><div className="text-4xl mb-4">⚠️</div><p className="text-red-400">{error}</p></div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-white text-lg font-semibold mb-2">Товары не найдены</h3>
              <p className="text-gray-400 mb-6">Попробуйте изменить запрос</p>
              <button onClick={clearFilters} className="btn-primary px-6 py-2.5 rounded-lg text-sm">Показать все товары</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-dark-card border-r border-dark-border p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold font-orbitron">КАТЕГОРИИ</h3>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <button onClick={() => handleCategory('')} className={`w-full text-left px-3 py-2.5 rounded-lg text-sm mb-1 ${!categoryQuery ? 'bg-primary/15 text-primary' : 'text-gray-400 hover:bg-dark-hover'}`}>Все товары</button>
            {categories.map((cat) => (
              <button key={cat} onClick={() => handleCategory(cat)} className={`w-full text-left px-3 py-2.5 rounded-lg text-sm mb-1 ${categoryQuery === cat ? 'bg-primary/15 text-primary' : 'text-gray-400 hover:bg-dark-hover'}`}>{cat}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
