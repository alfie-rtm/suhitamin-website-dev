// Hero.jsx — Full-screen with folder nav, no separate nav bar
const FOLDERS = [
  { id:'projects',    label:'Projects',    emoji:'📁', x:'-52%', y:'-185%' },
  { id:'investing',   label:'Investing',   emoji:'📁', x:'38%',  y:'-195%' },
  { id:'youtube',     label:'Content',     emoji:'📁', x:'-55%', y:'118%'  },
  { id:'speaking',    label:'Speaking',    emoji:'📁', x:'40%',  y:'108%'  },
];

const MacFolder = ({ label, href, style }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        display:'flex', flexDirection:'column', alignItems:'center', gap:7,
        textDecoration:'none', cursor:'pointer',
        transform: hov ? 'translateY(-5px) scale(1.08)' : 'none',
        transition:'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        ...style,
      }}>
      {/* Folder body */}
      <div style={{position:'relative', width:86, height:70}}>
        {/* Tab */}
        <div style={{
          position:'absolute', top:-11, left:0, width:34, height:12,
          background: hov ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.10)',
          border:'1px solid rgba(255,255,255,0.20)',
          borderBottom:'none', borderRadius:'4px 4px 0 0',
          backdropFilter:'blur(12px)',
          transition:'background 0.2s',
        }}/>
        {/* Body */}
        <div style={{
          position:'absolute', inset:0,
          background: hov ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.09)',
          border:'1px solid rgba(255,255,255,0.22)',
          borderRadius:'0 4px 4px 4px',
          backdropFilter:'blur(16px)',
          display:'flex', alignItems:'center', justifyContent:'center',
          transition:'background 0.2s',
          boxShadow: hov ? '0 8px 32px rgba(0,102,255,0.25)' : '0 4px 16px rgba(0,0,0,0.3)',
        }}>
          {/* Inner icon */}
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:2}}>
            <div style={{
              width:28, height:20, borderRadius:2,
              background:'linear-gradient(135deg, #0066ff, #5694ff)',
              opacity: hov ? 1 : 0.7,
              transition:'opacity 0.2s',
            }}/>
            <div style={{width:20, height:3, borderRadius:1, background:'rgba(255,255,255,0.3)'}}/>
            <div style={{width:24, height:2, borderRadius:1, background:'rgba(255,255,255,0.2)'}}/>
          </div>
        </div>
      </div>
      {/* Label */}
      <span style={{
        fontSize:10, textTransform:'uppercase', letterSpacing:'0.16em',
        color: hov ? '#fff' : 'rgba(255,255,255,0.65)',
        fontFamily:"'Saira',sans-serif", fontWeight:600, whiteSpace:'nowrap',
        transition:'color 0.2s',
        textShadow:'0 1px 8px rgba(0,0,0,0.5)',
      }}>{label}</span>
    </a>
  );
};

const HeroComponent = ({ onLightMode }) => {
  const sectionRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect   = sectionRef.current.getBoundingClientRect();
      const sH     = sectionRef.current.offsetHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / (sH - window.innerHeight)));
      setProgress(p);
      if (onLightMode) onLightMode(p > 0.78);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onLightMode]);

  // Phase 1 (0-50%): Everything zooms together
  // Phase 2 (50-70%): Content fades out
  const phase1 = Math.min(1, progress / 0.50);
  const phase2 = Math.max(0, Math.min(1, (progress - 0.50) / 0.20));

  const globalScale = 1 + phase1 * 60;        // 1→61x: "A" fills viewport
  const contentOp    = Math.max(0, 1 - phase2);
  const blobOp       = Math.max(0, 1 - phase1 * 2);
  const vignetteOp   = Math.max(0, 1 - phase2);
  const eyebrowOp    = Math.max(0, 1 - phase1 * 3);
  const tagOp        = Math.max(0, 1 - phase1 * 4);
  const folderOp     = Math.max(0, 1 - phase1 * 2);

  const LETTERS = [
    {ch:'S'},{ch:'U'},{ch:'H'},{ch:'I'},{ch:'T'},
    {ch:'\u00A0'},
    {ch:'A'},{ch:'M'},{ch:'I'},{ch:'N'},{ch:'.'},
  ];

  return (
    <section ref={sectionRef} id="top" style={{height:'600vh', position:'relative'}}>
      <div style={{
        position:'sticky', top:0, height:'100vh', overflow:'hidden',
        background:'#000711', display:'flex', alignItems:'center', justifyContent:'center',
      }}>
        <style>{`
          @keyframes bH1{0%,100%{transform:translateY(-50%) scale(1);opacity:.8}50%{transform:translateY(-56%) scale(1.1);opacity:.55}}
          @keyframes bH2{0%,100%{transform:translateY(-50%) scale(1);opacity:.65}55%{transform:translateY(-44%) scale(1.07);opacity:.45}}
          @keyframes bH3{0%,100%{transform:translateX(-50%) scale(1);opacity:.5}50%{transform:translateX(-46%) scale(1.16);opacity:.28}}
        `}</style>

        {/* Blobs */}
        <div style={{position:'absolute',inset:0,pointerEvents:'none',overflow:'hidden',opacity:blobOp}}>
          <div style={{position:'absolute',width:'800px',height:'800px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,102,255,0.22) 0%,transparent 68%)',top:'50%',left:'-120px',animation:'bH1 9s ease-in-out infinite'}}/>
          <div style={{position:'absolute',width:'700px',height:'700px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,102,255,0.16) 0%,transparent 68%)',top:'50%',right:'-100px',animation:'bH2 11s ease-in-out infinite'}}/>
          <div style={{position:'absolute',width:'500px',height:'500px',borderRadius:'50%',background:'radial-gradient(circle,rgba(86,148,255,0.12) 0%,transparent 65%)',top:'8%',left:'50%',animation:'bH3 7s ease-in-out infinite'}}/>
        </div>

        {/* Vignette */}
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(0,7,17,0.55) 0%,transparent 35%,rgba(0,7,17,0.7) 100%)',pointerEvents:'none',zIndex:1}}/>

        {/* Main content — zooms on scroll, origin on "A" */}
        <div style={{
          position:'relative', zIndex:2, textAlign:'center',
          transformOrigin:'58% center',
          transform:`scale(${globalScale})`, willChange:'transform',
        }}>
          {/* Eyebrow */}
          <p style={{
            fontSize:13, textTransform:'uppercase', letterSpacing:'0.3em',
            color:'#0066ff', marginBottom:22, fontFamily:"'Saira',sans-serif",
            fontWeight:600, opacity:eyebrowOp, whiteSpace:'nowrap',
          }}>Forbes 30 Under 30 — Exited Founder</p>

          {/* Title — each letter individually scaled */}
          <div style={{position:'relative'}}>
            <h1 style={{
              fontFamily:"'Saira',sans-serif", fontWeight:800,
              lineHeight:0.88, letterSpacing:'-0.04em', margin:0,
              display:'flex', alignItems:'baseline', justifyContent:'center',
              whiteSpace:'nowrap', position:'relative',
              fontSize:'clamp(5rem,9.5vw,10.5rem)',
            }}>
              {LETTERS.map((l, i) => (
                <span key={i} style={{
                  color:'#ffffff',
                  display:'inline-block',
                  transformOrigin:'center bottom',
                  position:'relative',
                  transition:'opacity 0.04s',
                }}>{l.ch}</span>
              ))}
            </h1>

            {/* macOS Folder Nav — positioned relative to text */}
            <div style={{
              position:'absolute', inset:0,
              opacity:folderOp, transition:'opacity 0.15s',
              pointerEvents: folderOp < 0.05 ? 'none' : 'auto',
            }}>
              {FOLDERS.map(f => (
                <div key={f.id} style={{
                  position:'absolute', left:'50%', top:'50%',
                  transform:`translate(${f.x}, ${f.y})`,
                }}>
                  <MacFolder label={f.label} href={`#${f.id}`}/>
                </div>
              ))}
            </div>
          </div>

          {/* Subtitle */}
          <p style={{
            maxWidth:480, fontSize:16, color:'rgba(255,255,255,0.65)',
            lineHeight:1.75, fontFamily:"'Saira',sans-serif",
            margin:'26px auto 0', opacity:eyebrowOp,
          }}>
            Built and sold a multi-7-figure agency at 24. Now I invest,
            and help scaling entrepreneurs build category-defining agencies.
          </p>

          {/* Tags */}
          <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:18,justifyContent:'center',opacity:tagOp}}>
            {['Founder','Investor','Speaker'].map(w=>(
              <span key={w} style={{
                padding:'5px 13px',fontSize:9,textTransform:'uppercase',
                letterSpacing:'0.12em',borderRadius:2,
                border:'1px solid rgba(255,255,255,0.15)',
                color:'rgba(255,255,255,0.55)',fontFamily:"'Saira',sans-serif",
              }}>{w}</span>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position:'absolute',bottom:110,left:'50%',transform:'translateX(-50%)',
          zIndex:3,display:'flex',flexDirection:'column',alignItems:'center',gap:6,
          opacity:Math.max(0,1-progress*8),
        }}>
          <div style={{width:1,height:32,background:'rgba(255,255,255,0.2)'}}/>
          <span style={{fontSize:9,textTransform:'uppercase',letterSpacing:'0.2em',color:'rgba(255,255,255,0.25)',fontFamily:"'Saira',sans-serif"}}>Scroll</span>
        </div>

      </div>
    </section>
  );
};
Object.assign(window, { HeroComponent, MacFolder });
