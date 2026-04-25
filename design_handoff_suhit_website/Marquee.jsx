// Marquee.jsx — Suhit Amin Website UI Kit
const MarqueeComponent = ({ lightMode }) => {
  const bg      = lightMode ? '#e4e8f0' : '#0a1018';
  const border  = lightMode ? 'rgba(8,16,30,0.10)' : 'rgba(255,255,255,0.08)';
  const txtClr  = lightMode ? 'rgba(8,16,30,0.55)'  : 'rgba(255,255,255,0.65)';
  const txtHov  = lightMode ? 'rgba(8,16,30,0.90)'  : 'rgba(255,255,255,0.95)';
  const txtShd  = lightMode ? '0 0 20px rgba(0,102,255,0.12)' : '0 0 20px rgba(255,255,255,0.15),0 0 40px rgba(0,102,255,0.08)';
  const txtShdH = lightMode ? '0 0 24px rgba(0,102,255,0.25)' : '0 0 24px rgba(255,255,255,0.35),0 0 50px rgba(0,102,255,0.2)';

  const items = [
    'Forbes 30 Under 30','TEDx Speaker','Scottish Young Edge Award',
    'Saulderson Media — Acquired','The Diary of an Entrepreneur','Angel Investor',
  ];
  const doubled = [...items, ...items];

  return (
    <div style={{
      borderTop:`1px solid ${border}`,
      borderBottom:`1px solid ${border}`,
      padding:'28px 0', overflow:'hidden', background:bg,
      transition:'background 0.6s ease',
    }}>
      <style>{`
        @keyframes sa-marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .sa-marquee-track { animation: sa-marquee 28s linear infinite; }
        .sa-marquee-item { display:flex; align-items:center; gap:28px; padding:0 24px; font-family:'Saira',sans-serif; font-size:18px; font-weight:700; text-transform:uppercase; letter-spacing:0.2em; color:${txtClr}; text-shadow:${txtShd}; transition:color 0.3s,text-shadow 0.3s; }
        .sa-marquee-item:hover { color:${txtHov}; text-shadow:${txtShdH}; }
        .sa-marquee-sep { color:#0066ff; font-size:22px; line-height:1; text-shadow:0 0 12px rgba(0,102,255,0.7),0 0 28px rgba(0,102,255,0.4); }
      `}</style>
      <div className="sa-marquee-track" style={{display:'flex', whiteSpace:'nowrap'}}>
        {doubled.map((item,i) => (
          <div key={i} className="sa-marquee-item">
            {item}<span className="sa-marquee-sep">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
Object.assign(window, { MarqueeComponent });
