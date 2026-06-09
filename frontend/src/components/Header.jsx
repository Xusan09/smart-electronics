import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo';

const NAV_ITEMS = [
  { label: 'Все товары', path: '/products' },
  { label: 'Микросхемы', path: '/products?category=%D0%9C%D0%B8%D0%BA%D1%80%D0%BE%D1%81%D1%85%D0%B5%D0%BC%D1%8B' },
  { label: 'Датчики', path: '/products?category=%D0%94%D0%B0%D1%82%D1%87%D0%B8%D0%BA%D0%B8' },
  { label: 'Резисторы', path: '/products?category=%D0%A0%D0%B5%D0%B7%D0%B8%D1%81%D1%82%D0%BE%D1%80%D1%8B' },
  { label: 'Паяльники', path: '/products?category=%D0%9F%D0%B0%D1%8F%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B8' },
  { label: 'Тестеры', path: '/products?category=%D0%A2%D0%B5%D1%81%D1%82%D0%B5%D1%80%D1%8B' },
  { label: 'Кабели', path: '/products?category=LAN+%D0%BA%D0%B0%D0%B1%D0%B5%D0%BB%D0%B8' },
  { label: 'Светодиоды', path: '/products?category=%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%D0%BE%D0%B4%D1%8B' },
];

const Header = () => {
  const [search, setSearch] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) { navigate(`/products?search=${encodeURIComponent(search.trim())}`); setMenuOpen(false); }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-md border-b border-primary/20 shadow-lg' : 'bg-dark/80 backdrop-blur-sm border-b border-dark-border'}`}>
      <div className="bg-primary/10 border-b border-primary/10 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-gray-400">
          <span>🔧 Smart Electronics — Электронные компоненты в Узбекистане</span>
          <a href="https://t.me/+998991232063" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.888l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.671z"/></svg>
            +998 99 123 20 63
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex-shrink-0"><Logo size="md" showText={true} /></Link>
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-auto hidden sm:flex">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Поиск компонентов, датчиков, кабелей..."
              className="w-full bg-dark-card border border-dark-border rounded-l-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 text-sm" />
            <button type="submit" className="bg-primary hover:bg-primary-dark text-dark font-semibold px-5 py-2.5 rounded-r-lg transition-all text-sm flex items-center gap-2 flex-shrink-0" style={{ boxShadow: '0 0 10px #00d4ff40' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Найти
            </button>
          </form>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="https://t.me/+998991232063" target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#229ED9] hover:bg-[#1a8cbf] text-white px-4 py-2 rounded-lg transition-all text-sm font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.888l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.671z"/></svg>
              Telegram
            </a>
            <button className="sm:hidden text-gray-400 hover:text-primary transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="sm:hidden mt-3 pb-2 border-t border-dark-border pt-3 flex flex-col gap-3">
            <form onSubmit={handleSearch} className="flex">
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Поиск товаров..."
                className="flex-1 bg-dark-card border border-dark-border rounded-l-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 text-sm" />
              <button type="submit" className="bg-primary text-dark px-4 py-2 rounded-r-lg text-sm font-semibold">Найти</button>
            </form>
            <a href="https://t.me/+998991232063" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#229ED9] text-white px-4 py-2 rounded-lg text-sm font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.888l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.671z"/></svg>
              Написать в Telegram
            </a>
          </div>
        )}
      </div>
      <nav className="border-t border-dark-border hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1 py-1.5 overflow-x-auto">
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} to={item.path} className="whitespace-nowrap px-3 py-1.5 text-xs text-gray-400 hover:text-primary hover:bg-primary/10 rounded-md transition-all duration-200">{item.label}</Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
