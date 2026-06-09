import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import { useProducts, useCategories } from '../hooks/useProducts';

const ICONS = {
  'Микросхемы':'🔧','Конденсаторы':'⚡','Резисторы':'〰️','Диоды':'▶','Реле':'🔌',
  'Датчики':'📡','Паяльники':'🔥','Паяльная химия':'🧪','Фильтры для пылесосов':'🌀',
  'Тестеры':'📏','Щупы тестера':'🔍','Усилители':'🔊','LAN кабели':'🌐',
  'Штекеры':'🔗','HDMI кабели':'📺','Кусачки':'✂️','Моторы':'⚙️','Фреоны':'❄️',
  'Предохранители':'🛡️','Выключатели':'💡','Кнопки':'🔘','Вилки':'🔌',
  'Батарейки':'🔋','Пульты':'📱','Динамики':'🔈','Фонари':'🔦',
  'Машинки для стрижки':'✂️','Подставки':'📱','Кронштейны':'🖥️',
  'Подсветка':'💫','Светодиоды':'💡','Запчасти для колонок':'🔊','Запчасти для техники':'🔧',
};

const HomePage = () => {
  const { products, loading } = useProducts({});
  const { categories } = useCategories();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-card to-dark" />
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 20% 50%, #00d4ff08 0%, transparent 50%), radial-gradient(circle at 80% 50%, #00d4ff05 0%, transparent 50%)` }} />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
              <span className="text-primary text-sm font-medium">Электронные компоненты в наличии</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-4 leading-tight">
              <span className="text-white">SMART </span>
              <span className="gradient-text">ELECTRONICS</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Микросхемы, датчики, кабели, инструменты и многое другое — всё для ваших проектов и ремонта
            </p>
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar large={true} />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {['Микросхемы','Датчики','Паяльники','Кабели','Резисторы','Тестеры'].map((tag) => (
                <Link key={tag} to={`/products?category=${encodeURIComponent(tag)}`}
                  className="px-3 py-1.5 bg-dark-card border border-dark-border hover:border-primary/40 text-gray-400 hover:text-primary rounded-full text-xs transition-all duration-200">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-dark-border bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{icon:'📦',value:'58+',label:'Товаров'},{icon:'🗂️',value:'30+',label:'Категорий'},{icon:'⚡',value:'Быстро',label:'Доставка'},{icon:'💬',value:'Telegram',label:'Поддержка'}].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-primary font-bold text-xl font-orbitron">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white font-orbitron"><span className="text-primary">{'// '}</span>КАТЕГОРИИ</h2>
          <Link to="/products" className="text-primary hover:text-primary-light text-sm transition-colors flex items-center gap-1">Все товары <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {categories.map((cat) => (
            <Link key={cat} to={`/products?category=${encodeURIComponent(cat)}`}
              className="flex flex-col items-center gap-2 p-3 bg-dark-card border border-dark-border hover:border-primary/40 rounded-xl transition-all duration-200 group text-center">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{ICONS[cat] || '📦'}</span>
              <span className="text-gray-400 group-hover:text-primary text-xs leading-tight transition-colors">{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white font-orbitron"><span className="text-primary">{'// '}</span>ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
          <Link to="/products" className="text-primary hover:text-primary-light text-sm transition-colors flex items-center gap-1">Все товары <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
        </div>
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_,i) => (
              <div key={i} className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
                <div className="skeleton aspect-square" />
                <div className="p-3 space-y-2"><div className="skeleton h-3 w-1/2 rounded"/><div className="skeleton h-4 rounded"/><div className="skeleton h-8 rounded"/></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
        <div className="text-center mt-8">
          <Link to="/products" className="inline-flex items-center gap-3 btn-primary text-base px-8 py-3 rounded-xl">
            Смотреть все товары
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-dark-card via-primary/5 to-dark-card p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-orbitron mb-2">Готовы сделать заказ?</h3>
              <p className="text-gray-400 max-w-md">Свяжитесь через Telegram — ответим на все вопросы и оформим заказ!</p>
            </div>
            <a href="https://t.me/+998991232063" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#229ED9] hover:bg-[#1a8cbf] text-white px-8 py-4 rounded-xl transition-all font-semibold text-lg shadow-xl flex-shrink-0 whitespace-nowrap"
              style={{ boxShadow: '0 4px 24px rgba(34,158,217,0.3)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.888l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.671z"/></svg>
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
