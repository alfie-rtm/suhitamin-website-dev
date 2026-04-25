// Hero.jsx — Full-screen with folder nav, no separate nav bar
// Floating folders — organic drift + mouse parallax
// Zoom effect: "A" in "Amin" fills viewport on scroll, transitioning to WHITE

const FOLDERS = [
  { id:'projects',  label:'Projects',  x:'-500%', y:'-250%', dur:'8s', delay:'0s',   rot:-3, drift:[{x:2,y:-3,r:0.3},{x:-1,y:2,r:-0.2},{x:2,y:-2,r:0.2},{x:-1,y:1,r:-0.3}] },
  { id:'investing', label:'Investing', x:'500%',  y:'-195%', dur:'9.5s', delay:'1.5s', rot:2,  drift:[{x:-2,y:-1,r:-0.3},{x:1,y:2,r:0.2},{x:-1,y:-2,r:-0.2},{x:2,y:1,r:0.3}] },
  { id:'youtube',   label:'Content',   x:'-400%', y:'300%',  dur:'7s', delay:'3s',   rot:-1, drift:[{x:1,y:2,r:0.2},{x:-2,y:-1,r:-0.3},{x:1,y:2,r:0.3},{x:-1,y:-1,r:-0.2}] },
  { id:'speaking',  label:'Speaking',  x:'350%',  y:'250%',  dur:'10s', delay:'0.5s', rot:3,  drift:[{x:-1,y:-2,r:-0.2},{x:2,y:1,r:0.3},{x:-2,y:-1,r:-0.3},{x:1,y:2,r:0.2}] },
];

const MacFolder = ({ label, href, dur, delay, rot, drift }) => {
  const [hov, setHov] = React.useState(false);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setTilt({ x: (e.clientY - cy) / 12, y: (cx - e.clientX) / 12 });
  };
  const handleMouseLeave = () => { setHov(false); setTilt({ x: 0, y: 0 }); };

  const floatName = `float_${label.replace(/\s/g,'')}`;
  const kf = drift.map((d, i) => `${(i + 1) * 20}%  { transform: translate(${d.x}px, ${d.y}px) rotate(${rot + d.r}deg); }`).join('\n          ');

  return (
    <a href={href} onMouseEnter={()=>setHov(true)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:7, textDecoration:'none', cursor:'pointer',
        animation: `${floatName} ${dur} ease-in-out ${delay} infinite`,
        transform: hov ? `translateY(-8px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.12)` : `rotate(${rot}deg)`,
        transformStyle:'preserve-3d', perspective:600,
        transition:'transform 0.25s cubic-bezier(0.4,0,0.2,1)',
        filter: hov ? 'drop-shadow(0 0 20px rgba(0,102,255,0.4))' : 'none',
      }}>
      <div style={{ position:'relative', width:86, height:70, transform: `translateZ(${hov ? 20 : 0}px)`, transition:'transform 0.25s cubic-bezier(0.4,0,0.2,1)' }}>
        <div style={{ position:'absolute', top:-11, left:0, width:34, height:12, background: hov ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.10)', border:'1px solid rgba(255,255,255,0.25)', borderBottom:'none', borderRadius:'4px 4px 0 0', backdropFilter:'blur(12px)', transition:'background 0.2s' }}/>
        <div style={{ position:'absolute', inset:0, background: hov ? 'rgba(255,255,255,0.20)' : 'rgba(255,255,255,0.09)', border:'1px solid rgba(255,255,255,0.28)', borderRadius:'0 4px 4px 4px', backdropFilter:'blur(16px)', display:'flex', alignItems:'center', justifyContent:'center', transition:'background 0.2s, box-shadow 0.3s', boxShadow: hov ? '0 12px 40px rgba(0,102,255,0.35), inset 0 1px 0 rgba(255,255,255,0.15)' : '0 4px 16px rgba(0,0,0,0.3)' }}>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:2}}>
            <div style={{ width:28, height:20, borderRadius:2, background:'linear-gradient(135deg, #0066ff, #5694ff)', opacity: hov ? 1 : 0.7, transition:'opacity 0.2s' }}/>
            <div style={{width:20, height:3, borderRadius:1, background:'rgba(255,255,255,0.3)'}}/>
            <div style={{width:24, height:2, borderRadius:1, background:'rgba(255,255,255,0.2)'}}/>
          </div>
        </div>
      </div>
      <span style={{ fontSize:10, textTransform:'uppercase', letterSpacing:'0.16em', color: hov ? '#fff' : 'rgba(255,255,255,0.65)', fontFamily:"'Saira',sans-serif", fontWeight:600, whiteSpace:'nowrap', transition:'color 0.2s', textShadow:'0 1px 8px rgba(0,0,0,0.5)', transform: `translateZ(${hov ? 10 : 0}px)` }}>{label}</span>
      <style>{`@keyframes ${floatName} { 0%, 100% { transform: translate(0, 0) rotate(${rot}deg); } ${kf} }`}</style>
    </a>
  );
};

const HeroComponent = ({ onLightMode }) => {
  const sectionRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sH = sectionRef.current.offsetHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / (sH - window.innerHeight)));
      setProgress(p);
      if (onLightMode) onLightMode(p > 0.55);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onLightMode]);

  React.useEffect(() => {
    const onMove = (e) => {
      const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
      setMouse({ x: (e.clientX - cx) / cx, y: (e.clientY - cy) / cy });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Phase 1 (0-35%): Zoom "A" to fill viewport — scale 1→300
  // Phase 2 (35-55%): Content fades out
  // Phase 3 (55-75%): Background transitions dark → white
  const phase1 = Math.min(1, progress / 0.35);
  const phase2 = Math.max(0, Math.min(1, (progress - 0.35) / 0.20));
  const phase3 = Math.max(0, Math.min(1, (progress - 0.55) / 0.20));

  const globalScale = 1 + phase1 * 300;
  const contentOp   = Math.max(0, 1 - phase2);
  const blobOp      = Math.max(0, 1 - phase1 * 2);
  const vignetteOp  = Math.max(0, 1 - phase2 * 1.5);

  // Background: #000711 → #f2f4f8
  const bgR = Math.round(242 * phase3);
  const bgG = Math.round(7 + 237 * phase3);
  const bgB = Math.round(17 + 231 * phase3);
  const bgColor = `rgb(${bgR}, ${bgG}, ${bgB})`;

  // Text adapts to bg lightness
  const isLight = phase3 > 0.5;
  const textBase = isLight ? '#08101e' : '#ffffff';
  const textDim  = isLight ? 'rgba(8,16,30,0.55)' : 'rgba(255,255,255,0.65)';
  const tagClr   = isLight ? 'rgba(8,16,30,0.55)' : 'rgba(255,255,255,0.55)';
  const tagBdr   = isLight ? 'rgba(8,16,30,0.15)' : 'rgba(255,255,255,0.15)';
  const eyebrow  = isLight ? '#004ecc' : '#0066ff';
  const scrollLn = isLight ? 'rgba(8,16,30,0.2)' : 'rgba(255,255,255,0.2)';
  const scrollLbl= isLight ? 'rgba(8,16,30,0.25)' : 'rgba(255,255,255,0.25)';

  const LETTERS = [
    {ch:'S'},{ch:'U'},{ch:'H'},{ch:'I'},{ch:'T'},
    {ch:'\u00A0'},
    {ch:'A'},{ch:'M'},{ch:'I'},{ch:'N'},{ch:'.'},
  ];

  return (
    <section ref={sectionRef} id="top" style={{height:'600vh', position:'relative'}}>
      <div style={{
        position:'sticky', top:0, height:'100vh', overflow:'hidden',
        background: bgColor, display:'flex', alignItems:'center', justifyContent:'center',
        transition: 'background 0.1s linear',
      }}>
        <style>{`
          @keyframes bH1{0%,100%{transform:translateY(-50%) scale(1);opacity:.8}50%{transform:translateY(-56%) scale(1.1);opacity:.55}}
          @keyframes bH2{0%,100%{transform:translateY(-50%) scale(1);opacity:.65}55%{transform:translateY(-44%) scale(1.07);opacity:.45}}
          @keyframes bH3{0%,100%{transform:translateX(-50%) scale(1);opacity:.5}50%{transform:translateX(-46%) scale(1.16);opacity:.28}}
        `}</style>

        {/* Blobs — fade early */}
        <div style={{position:'absolute',inset:0,pointerEvents:'none',overflow:'hidden',opacity:blobOp}}>
          <div style={{position:'absolute',width:'800px',height:'800px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,102,255,0.22) 0%,transparent 68%)',top:'50%',left:'-120px',animation:'bH1 9s ease-in-out infinite'}}/>
          <div style={{position:'absolute',width:'700px',height:'700px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,102,255,0.16) 0%,transparent 68%)',top:'50%',right:'-100px',animation:'bH2 11s ease-in-out infinite'}}/>
          <div style={{position:'absolute',width:'500px',height:'500px',borderRadius:'50%',background:'radial-gradient(circle,rgba(86,148,255,0.12) 0%,transparent 65%)',top:'8%',left:'50%',animation:'bH3 7s ease-in-out infinite'}}/>
        </div>

        {/* Vignette — fades as bg lightens */}
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(0,7,17,0.55) 0%,transparent 35%,rgba(0,7,17,0.7) 100%)',pointerEvents:'none',zIndex:1,opacity:vignetteOp}}/>

        {/* Main content */}
        <div style={{
          position:'relative', zIndex:2, textAlign:'center',
          transformOrigin:'52% center',
          transform:`scale(${globalScale})`, willChange:'transform',
          opacity: contentOp,
          transition: 'opacity 0.08s linear',
        }}>
          <p style={{ fontSize:13, textTransform:'uppercase', letterSpacing:'0.3em', color: eyebrow, marginBottom:22, fontFamily:"'Saira',sans-serif", fontWeight:600, whiteSpace:'nowrap' }}>Forbes 30 Under 30 — Exited Founder</p>

          <div style={{position:'relative'}}>
            <h1 style={{ fontFamily:"'Saira',sans-serif", fontWeight:800, lineHeight:0.88, letterSpacing:'-0.04em', margin:0, display:'flex', alignItems:'baseline', justifyContent:'center', whiteSpace:'nowrap', position:'relative', fontSize:'clamp(5rem,9.5vw,10.5rem)', color: textBase }}>
              {LETTERS.map((l, i) => (
                <span key={i} style={{display:'inline-block',transformOrigin:'center bottom'}}>{l.ch}</span>
              ))}
            </h1>

            <div style={{ position:'absolute', inset:0, pointerEvents: contentOp < 0.05 ? 'none' : 'auto', transform: `translate(${mouse.x * -8}px, ${mouse.y * -8}px)`, transition:'transform 0.4s ease-out' }}>
              {FOLDERS.map(f => (
                <div key={f.id} style={{position:'absolute', left:'50%', top:'50%', transform:`translate(${f.x}, ${f.y})`}}>
                  <MacFolder label={f.label} href={`#${f.id}`} dur={f.dur} delay={f.delay} rot={f.rot} drift={f.drift}/>
                </div>
              ))}
            </div>
          </div>

          <p style={{ maxWidth:480, fontSize:16, color: textDim, lineHeight:1.75, fontFamily:"'Saira',sans-serif", margin:'26px auto 0' }}>
            Built and sold a multi-7-figure agency at 24. Now I invest, and help scaling entrepreneurs build category-defining agencies.
          </p>

          <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:18,justifyContent:'center'}}>
            {['Founder','Investor','Speaker'].map(w=> (
              <span key={w} style={{ padding:'5px 13px', fontSize:9, textTransform:'uppercase', letterSpacing:'0.12em', borderRadius:2, border:`1px solid ${tagBdr}`, color: tagClr, fontFamily:"'Saira',sans-serif" }}>{w}</span>
            ))}
          </div>
        </div>

        <div style={{ position:'absolute',bottom:110,left:'50%',transform:'translateX(-50%)', zIndex:3, display:'flex', flexDirection:'column', alignItems:'center', gap:6, opacity:Math.max(0,1-progress*5) }}>
          <div style={{width:1,height:32,background:scrollLn}}/>
          <span style={{fontSize:9,textTransform:'uppercase',letterSpacing:'0.2em',color:scrollLbl,fontFamily:"'Saira',sans-serif"}}>Scroll</span>
        </div>
      </div>
    </section>
  );
};
Object.assign(window, { HeroComponent, MacFolder });
