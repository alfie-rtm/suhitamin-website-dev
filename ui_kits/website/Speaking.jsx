// Speaking.jsx — light/dark aware
const stages = ['TEDx','Forbes','Web Summit','Slush'];

const SpeakingComponent = ({ lightMode }) => {
  const [ctaHov, setCtaHov] = React.useState(false);
  const bg      = lightMode ? '#eaedf3'  : '#000711';
  const grad    = lightMode ? 'linear-gradient(135deg,#dde2f0,#eaedf3 50%,#dde2f0)' : 'linear-gradient(135deg,#0a1530,#000711 50%,#0a1530)';
  const h2Clr   = lightMode ? '#08101e' : '#fff';
  const h2Dim   = lightMode ? 'rgba(8,16,30,0.40)' : 'rgba(255,255,255,0.45)';
  const bodyClr = lightMode ? 'rgba(8,16,30,0.60)' : 'rgba(255,255,255,0.65)';
  const tileBdr = lightMode ? 'rgba(8,16,30,0.12)' : 'rgba(255,255,255,0.10)';
  const tileBg  = lightMode ? 'rgba(8,16,30,0.04)' : 'rgba(255,255,255,0.04)';
  const tileTxt = lightMode ? 'rgba(8,16,30,0.70)' : 'rgba(255,255,255,0.75)';

  return (
    <section id="speaking" style={{padding:'128px 48px',position:'relative',overflow:'hidden',transition:'background 0.6s ease'}}>
      <div style={{position:'absolute',inset:0,background:grad}}/>
      <div style={{maxWidth:1152,margin:'0 auto',position:'relative',display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'center'}}>
        <div>
          <p style={{fontSize:11,textTransform:'uppercase',letterSpacing:'0.3em',color:'#0066ff',marginBottom:16,fontFamily:"'Saira',sans-serif",fontWeight:600}}>Speaking</p>
          <h2 style={{fontFamily:"'Saira',sans-serif",fontSize:'clamp(2.2rem,4vw,3.5rem)',fontWeight:700,letterSpacing:'-0.03em',lineHeight:1.1,color:h2Clr,marginBottom:24}}>
            Stages, podcasts, <em style={{fontStyle:'italic',fontWeight:300,color:h2Dim}}>and stories.</em>
          </h2>
          <p style={{fontSize:15,color:bodyClr,lineHeight:1.75,fontFamily:"'Saira',sans-serif",marginBottom:32,maxWidth:400}}>
            From TEDx to industry keynotes, I speak about building businesses through adversity, the creator economy, and what really moves the needle as a founder.
          </p>
          <a href="#contact" onMouseEnter={()=>setCtaHov(true)} onMouseLeave={()=>setCtaHov(false)}
            style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 28px',borderRadius:2,background:ctaHov?'#f2f4f8':'#0066ff',color:ctaHov?'#08101e':'#fff',fontFamily:"'Saira',sans-serif",fontSize:13,fontWeight:600,textDecoration:'none',transition:'all 0.3s',letterSpacing:'0.04em',textTransform:'uppercase'}}>
            Book a stage →
          </a>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          {stages.map(s => (
            <div key={s} style={{aspectRatio:'1',border:`1px solid ${tileBdr}`,borderRadius:2,display:'flex',alignItems:'center',justifyContent:'center',background:tileBg,backdropFilter:'blur(8px)'}}>
              <span style={{fontFamily:"'Saira',sans-serif",fontSize:18,fontWeight:700,color:tileTxt,textTransform:'uppercase',letterSpacing:'-0.01em'}}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
Object.assign(window, { SpeakingComponent });
