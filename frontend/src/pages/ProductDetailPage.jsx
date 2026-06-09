import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProduct, useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

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

const ProductDetailPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const { products: related } = useProducts({ category: product?.category });
  const fmt = (p) => new Intl.NumberFormat('ru-UZ').format(p) + ' сум';

  if (loading) return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="skeleton aspect-square rounded-2xl" />
        <div className="space-y-4">
          <div className="skeleton h-4 w-1/3 rounded"/><div className="skeleton h-8 rounded"/>
          <div className="skeleton h-8 w-1/2 rounded"/><div className="skeleton h-24 rounded"/>
          <div className="skeleton h-12 rounded-xl"/>
        </div>
      </div>
    </div>
  );

  if (error || !product) return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <div className="text-5xl mb-4">😕</div>
      <h2 className="text-white text-xl font-bold mb-2">Товар не найден</h2>
      <Link to="/products" className="btn-primary px-6 py-3 rounded-xl inline-flex items-center gap-2 mt-4">← Вернуться к каталогу</Link>
    </div>
  );

  const relatedProducts = related.filter((p) => p.id !== product.id).slice(0, 4);
  const icon = ICONS[product.category] || '📦';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
        <Link to="/" className="hover:text-primary transition-colors">Главная</Link><span>›</span>
        <Link to="/products" className="hover:text-primary transition-colors">Каталог</Link><span>›</span>
        <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-primary transition-colors">{product.category}</Link><span>›</span>
        <span className="text-gray-300 truncate max-w-xs">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-14">
        {/* Image */}
        <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden">
          <div className="aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-dark-hover to-dark-card relative">
            <span style={{ fontSize: '96px', lineHeight: 1, filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.5))' }}>{icon}</span>
            <span className="text-gray-600 text-sm mt-4">{product.category}</span>
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                <line x1="0" y1="200" x2="140" y2="200" stroke="#00d4ff" strokeWidth="1"/>
                <line x1="260" y1="200" x2="400" y2="200" stroke="#00d4ff" strokeWidth="1"/>
                <line x1="200" y1="0" x2="200" y2="140" stroke="#00d4ff" strokeWidth="1"/>
                <line x1="200" y1="260" x2="200" y2="400" stroke="#00d4ff" strokeWidth="1"/>
                <rect x="140" y="140" width="120" height="120" rx="8" stroke="#00d4ff" strokeWidth="1" strokeDasharray="5 3"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <Link to={`/products?category=${encodeURIComponent(product.category)}`}
            className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/30 text-primary text-xs px-3 py-1 rounded-full mb-3 w-fit hover:bg-primary/20 transition-colors">
            {icon} {product.category}
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{product.name}</h1>
          <div className="flex items-center gap-4 mb-5 p-4 bg-dark-card border border-dark-border rounded-xl">
            <div>
              <p className="text-gray-500 text-xs mb-1">Цена</p>
              <p className="text-3xl font-bold text-primary font-orbitron" style={{ textShadow: '0 0 15px #00d4ff60' }}>{fmt(product.price)}</p>
            </div>
            {product.inStock && (
              <div className="ml-auto flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-sm px-3 py-1.5 rounded-lg">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>В наличии
              </div>
            )}
          </div>
          <div className="mb-5">
            <h3 className="text-white font-semibold mb-2 text-sm">Описание</h3>
            <p className="text-gray-400 leading-relaxed">{product.description}</p>
          </div>
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3 text-sm">Характеристики</h3>
              <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
                {Object.entries(product.specs).map(([key, value], i, arr) => (
                  <div key={key} className={`flex items-center justify-between px-4 py-2.5 text-sm ${i !== arr.length - 1 ? 'border-b border-dark-border' : ''}`}>
                    <span className="text-gray-500">{key}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <a href="https://t.me/+998991232063" target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-[#229ED9] hover:bg-[#1a8cbf] text-white px-6 py-4 rounded-xl transition-all font-semibold text-base"
              style={{ boxShadow: '0 4px 20px rgba(34,158,217,0.3)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.888l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.671z"/></svg>
              Заказать через Telegram
            </a>
            <Link to="/products" className="flex items-center justify-center gap-2 bg-dark-card border border-dark-border hover:border-primary/40 text-gray-400 hover:text-white px-6 py-4 rounded-xl transition-all text-sm">
              ← Каталог
            </Link>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-white font-orbitron"><span className="text-primary">{'// '}</span>ПОХОЖИЕ ТОВАРЫ</h2>
            <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="text-primary hover:text-primary-light text-sm transition-colors">Смотреть все →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {relatedProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
