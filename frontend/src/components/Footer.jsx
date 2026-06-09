import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo';

const Footer = () => {
  const cats = ['Микросхемы','Датчики','Резисторы','Конденсаторы','Диоды','Реле','Паяльники','Тестеры'];
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-16">
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Хотите купить товар?</h3>
            <p className="text-gray-400 text-sm">Напишите нам в Telegram — ответим быстро и поможем с выбором!</p>
          </div>
          <a href="https://t.me/+998991232063" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#229ED9] hover:bg-[#1a8cbf] text-white px-8 py-3 rounded-xl transition-all font-semibold text-base shadow-lg flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.888l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.671z"/></svg>
            Написать в Telegram
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Logo size="md" showText={true} />
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">Широкий ассортимент электронных компонентов, инструментов и запчастей.</p>
            <a href="https://t.me/+998991232063" target="_blank" rel="noopener noreferrer"
              className="inline-flex mt-4 w-9 h-9 bg-[#229ED9] hover:bg-[#1a8cbf] rounded-lg items-center justify-center transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.888l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.671z"/></svg>
            </a>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 font-orbitron text-sm tracking-wider">КАТЕГОРИИ</h4>
            <ul className="space-y-2">
              {cats.map((cat) => (
                <li key={cat}>
                  <Link to={`/products?category=${encodeURIComponent(cat)}`} className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2">
                    <span className="text-primary/50">›</span>{cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 font-orbitron text-sm tracking-wider">КОНТАКТЫ</h4>
            <div className="space-y-3">
              {[
                { icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z', text: '+998 99 123 20 63', sub: 'Telegram / Call' },
                { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 10 a 2 2 0 1 0 0.001 0', text: 'Узбекистан', sub: 'Доставка по всей стране' },
                { icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v6l4 2', text: 'Пн–Сб: 9:00–18:00', sub: 'Воскресенье: выходной' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="text-primary flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={item.icon}/></svg>
                  <div>
                    <p className="text-gray-400 text-sm">{item.text}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">© 2024 Smart Electronics. Все права защищены.</p>
          <p className="text-gray-600 text-xs">Электронные компоненты в Узбекистане</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
