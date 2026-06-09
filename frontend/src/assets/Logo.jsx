import React from 'react';

const Logo = ({ size = 'md', showText = true }) => {
  const sizes = {
    sm: { icon: 32, fontSize: '16px', subFont: '8px' },
    md: { icon: 48, fontSize: '22px', subFont: '10px' },
    lg: { icon: 64, fontSize: '30px', subFont: '13px' },
  };
  const s = sizes[size] || sizes.md;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" stroke="#00d4ff" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        <rect x="8" y="8" width="48" height="48" rx="8" fill="#0f1629" stroke="#00d4ff" strokeWidth="1.5" />
        <line x1="8" y1="32" x2="16" y2="32" stroke="#00d4ff" strokeWidth="1.5" opacity="0.6" />
        <line x1="48" y1="32" x2="56" y2="32" stroke="#00d4ff" strokeWidth="1.5" opacity="0.6" />
        <line x1="32" y1="8" x2="32" y2="16" stroke="#00d4ff" strokeWidth="1.5" opacity="0.6" />
        <line x1="32" y1="48" x2="32" y2="56" stroke="#00d4ff" strokeWidth="1.5" opacity="0.6" />
        <circle cx="16" cy="16" r="2" fill="#00d4ff" opacity="0.5" />
        <circle cx="48" cy="16" r="2" fill="#00d4ff" opacity="0.5" />
        <circle cx="16" cy="48" r="2" fill="#00d4ff" opacity="0.5" />
        <circle cx="48" cy="48" r="2" fill="#00d4ff" opacity="0.5" />
        <rect x="22" y="22" width="20" height="20" rx="3" fill="#00d4ff" opacity="0.15" stroke="#00d4ff" strokeWidth="1.5" />
        <line x1="16" y1="26" x2="22" y2="26" stroke="#00d4ff" strokeWidth="1.5" />
        <line x1="16" y1="32" x2="22" y2="32" stroke="#00d4ff" strokeWidth="1.5" />
        <line x1="16" y1="38" x2="22" y2="38" stroke="#00d4ff" strokeWidth="1.5" />
        <line x1="42" y1="26" x2="48" y2="26" stroke="#00d4ff" strokeWidth="1.5" />
        <line x1="42" y1="32" x2="48" y2="32" stroke="#00d4ff" strokeWidth="1.5" />
        <line x1="42" y1="38" x2="48" y2="38" stroke="#00d4ff" strokeWidth="1.5" />
        <line x1="26" y1="16" x2="26" y2="22" stroke="#00d4ff" strokeWidth="1.5" />
        <line x1="38" y1="16" x2="38" y2="22" stroke="#00d4ff" strokeWidth="1.5" />
        <line x1="26" y1="42" x2="26" y2="48" stroke="#00d4ff" strokeWidth="1.5" />
        <line x1="38" y1="42" x2="38" y2="48" stroke="#00d4ff" strokeWidth="1.5" />
        <path d="M34 24 L29 33 L33 33 L30 40 L35 31 L31 31 Z" fill="#00d4ff" />
        <circle cx="16" cy="26" r="1.5" fill="#00d4ff" />
        <circle cx="16" cy="32" r="1.5" fill="#00d4ff" />
        <circle cx="16" cy="38" r="1.5" fill="#00d4ff" />
        <circle cx="48" cy="26" r="1.5" fill="#00d4ff" />
        <circle cx="48" cy="32" r="1.5" fill="#00d4ff" />
        <circle cx="48" cy="38" r="1.5" fill="#00d4ff" />
      </svg>
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: s.fontSize, fontWeight: 700, background: 'linear-gradient(135deg, #00d4ff, #66e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '0.05em' }}>
            SMART
          </span>
          <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: s.subFont, fontWeight: 400, color: '#00d4ff99', letterSpacing: '0.3em', marginTop: '2px' }}>
            ELECTRONICS
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
