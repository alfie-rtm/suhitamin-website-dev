// Footer.jsx — light/dark aware
const FooterComponent = ({ lightMode }) => {
  const bg      = lightMode ? '#f2f4f8'  : '#000711';
  const border  = lightMode ? 'rgba(8,16,30,0.08)' : 'rgba(255,255,255,0.08)';
  const logoFlt = lightMode ? 'invert(0)' : 'invert(1)';
  const bodyClr = lightMode ? 'rgba(8,16,30,0.45)' : 'rgba(255,255,255,0.45)';
  const labelClr= lightMode ? 'rgba(8,16,30,0.30)' : 'rgba(255,255,255,0.35)';
  const linkClr = lightMode ? 'rgba(8,16,30,0.70)' : 'rgba(255,255,255,0.75)';
  const metaClr = lightMode ? 'rgba(8,16,30,0.25)' : 'rgba(255,255,255,0.25)';

  const lnk = {color:linkClr,textDecoration:'none',fontSize:13,fontFamily:"'Saira',sans-serif",display:'block',transition:'color 0.2s'};

  return (
    <footer id="contact" style={{borderTop:`1px solid ${border}`,padding:'64px 48px',background:bg,transition:'background 0.6s ease'}}>
      <div style={{maxWidth:1280,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:48}}>
        <div>
          <img src="../../assets/logo.png" alt="Suhit Amin" style={{height:28,filter:logoFlt,display:'block',marginBottom:16}}/>
          <p style={{fontSize:13,color:bodyClr,lineHeight:1.7,maxWidth:240,fontFamily:"'Saira',sans-serif",margin:0}}>Exited founder, investor, and operator advisor based in the UK.</p>
        </div>
        <div>
          <h4 style={{fontSize:10,textTransform:'uppercase',letterSpacing:'0.2em',color:labelClr,marginBottom:16,fontFamily:"'Saira',sans-serif"}}>Get in touch</h4>
          <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:8}}>
            {['hello@suhitamin.com','speaking@suhitamin.com','invest@suhitamin.com'].map(e=>(
              <li key={e}><a href={`mailto:${e}`} style={lnk}
                onMouseEnter={ev=>ev.target.style.color='#0066ff'}
                onMouseLeave={ev=>ev.target.style.color=linkClr}>{e}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{fontSize:10,textTransform:'uppercase',letterSpacing:'0.2em',color:labelClr,marginBottom:16,fontFamily:"'Saira',sans-serif"}}>Elsewhere</h4>
          <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:8}}>
            {['YouTube','LinkedIn','X / Twitter'].map(s=>(
              <li key={s}><a href="#" style={lnk}
                onMouseEnter={ev=>ev.target.style.color='#0066ff'}
                onMouseLeave={ev=>ev.target.style.color=linkClr}>{s}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{maxWidth:1280,margin:'48px auto 0',paddingTop:24,borderTop:`1px solid ${border}`,display:'flex',justifyContent:'space-between',fontSize:11,color:metaClr,fontFamily:"'Saira',sans-serif"}}>
        <span>© {new Date().getFullYear()} Suhit Amin. All rights reserved.</span>
        <span>Designed with intent.</span>
      </div>
    </footer>
  );
};
Object.assign(window, { FooterComponent });
