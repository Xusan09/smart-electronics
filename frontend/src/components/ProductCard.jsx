import React from 'react';
import { Link } from 'react-router-dom';

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

const ProductCard = ({ product }) => {
  const fmt = (p) => new Intl.NumberFormat('ru-UZ').format(p) + ' сум';
  const icon = ICONS[product.category] || '📦';

  return (
    <Link to={`/products/${product.id}`} className="block group">
      <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden card-hover h-full flex flex-col">
        <div className="relative bg-dark-hover aspect-square overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-dark-hover to-dark-card gap-2">
            <span style={{ fontSize: '52px', lineHeight: 1, filter: 'drop-shadow(0 0 8px rgba(0,212,255,0.4))' }}>{icon}</span>
            <span className="text-xs text-gray-600">{product.category}</span>
          </div>
          {product.inStock && (
            <div className="absolute top-2 right-2 bg-green-500/20 border border-green-500/40 text-green-400 text-xs px-2 py-0.5 rounded-full">В наличии</div>
          )}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-3 flex flex-col flex-1">
          <p className="text-xs text-primary/70 mb-1 font-medium">{product.category}</p>
          <h3 className="text-white text-sm font-medium leading-snug mb-2 flex-1 group-hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
          <p className="text-gray-500 text-xs mb-3 line-clamp-2 leading-relaxed">{product.description}</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-primary font-bold text-base" style={{ textShadow: '0 0 8px #00d4ff60' }}>{fmt(product.price)}</span>
            <a href="https://t.me/+998991232063" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 bg-[#229ED9] hover:bg-[#1a8cbf] text-white text-xs px-2.5 py-1.5 rounded-lg transition-all duration-200 font-medium">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.888l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.671z"/>
              </svg>
              Купить
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
