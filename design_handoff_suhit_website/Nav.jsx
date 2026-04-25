// Nav.jsx — Bottom center at rest → top center on scroll (same width)
const NavComponent = ({ lightMode }) => {
  const [scrolled, setScrolled]   = React.useState(false);
  const [visible,  setVisible]    = React.useState(true);
  const [borderBg, setBorderBg]   = React.useState('rgba(255,255,255,0.12)');
  const navRef  = React.useRef(null);
  const lastY   = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > window.innerHeight * 0.3);
      if (y > lastY.current + 6) setVisible(false);
      else if (y < lastY.current - 6) setVisible(true);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Colors adapt to light/dark mode
  const bg      = lightMode ? 'rgba(242,244,248,0.80)' : 'rgba(0,7,17,0.65)';
  const border  = lightMode ? 'rgba(8,16,30,0.12)'     : borderBg;
  const linkClr = lightMode ? 'rgba(8,16,30,0.60)'     : 'rgba(255,255,255,0.58)';
  const linkHov = lightMode ? '#08101e'                 : '#fff';
  const ulClr   = lightMode ? '#08101e'                 : '#fff';
  const logoFilter = lightMode ? 'invert(0)' : 'invert(1)';

  const position = scrolled
    ? { top:16,  bottom:'auto', left:'50%', transform: visible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-80px)' }
    : { bottom:24, top:'auto',  left:'50%', transform: visible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(80px)' };

  return (
    <>
      <style>{`
        .sa-nav-link {
          font-size:13px; text-decoration:none; padding-bottom:2px;
          position:relative; font-weight:500; font-family:'Saira',sans-serif;
          transition:color 0.25s; color:${linkClr};
        }
        .sa-nav-link::after {
          content:''; position:absolute; bottom:0; left:0;
          width:0; height:1px; background:${ulClr};
          transition:width 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .sa-nav-link:hover { color:${linkHov}; }
        .sa-nav-link:hover::after { width:100%; }
        .sa-cta {
          font-size:12px; font-weight:700; font-family:'Saira',sans-serif;
          padding:10px 22px; border-radius:2px; border:none;
          background:#0066ff; color:#fff;
          text-decoration:none; cursor:pointer;
          position:relative; overflow:hidden; isolation:isolate;
          letter-spacing:0.06em; text-transform:uppercase;
          transition:color 0.35s; display:inline-block;
        }
        .sa-cta::before {
          content:''; position:absolute; inset:0; left:-101%;
          background:#f2f4f8; transition:left 0.38s cubic-bezier(0.4,0,0.2,1); z-index:-1;
        }
        .sa-cta:hover { color:#08101e; }
        .sa-cta:hover::before { left:0; }
      `}</style>
      <div
        ref={navRef}
        onMouseMove={e => {
          if (lightMode) return;
          const r = navRef.current.getBoundingClientRect();
          const x = ((e.clientX - r.left) / r.width)  * 100;
          const y = ((e.clientY - r.top)  / r.height) * 100;
          setBorderBg(`radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.07) 45%, rgba(255,255,255,0.10) 100%)`);
        }}
        onMouseLeave={() => setBorderBg('rgba(255,255,255,0.12)')}
        style={{
          position:'fixed', zIndex:50, width:600,
          ...position,
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transition:'all 0.45s cubic-bezier(0.4,0,0.2,1)',
          borderRadius:2,
          border:`1px solid ${border}`,
        }}>
        <div style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          padding:'12px 24px',
          background:bg,
          backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)',
          borderRadius:1,
        }}>
          <a href="#top">
            <img src="../../assets/logo.png" alt="Suhit Amin"
              style={{height:34, filter:logoFilter, display:'block'}} />
          </a>
          <nav style={{display:'flex', gap:28}}>
            {['Projects','Story','Speaking','Newsletter'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="sa-nav-link">{l}</a>
            ))}
          </nav>
          <a href="#contact" className="sa-cta" style={{backgroundColor:'#0066ff', color:'#fff'}}>Get in touch</a>
        </div>
      </div>
    </>
  );
};
Object.assign(window, { NavComponent });
