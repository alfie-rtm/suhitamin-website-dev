// Videos.jsx — Content/YouTube section
const VIDEO_THUMBS = [
  { num:'01', title:'How to Master Networking in 12mins', tag:'Networking', dur:'14:33', vid:'BZRVeo_LNsM' },
  { num:'02', title:'Fastest Way to Make $1M After Doing it 14+ Times', tag:'Wealth Building', dur:'37:25', vid:'7QqLI3LJjpE' },
  { num:'03', title:"If you don't understand Jensen Huang, you don't understand business", tag:'Leadership', dur:'13:27', vid:'LhLhKW0IN8U' },
  { num:'04', title:'My AI Business is Boring, But Makes Me $533k/month', tag:'AI Business', dur:'13:36', vid:'s-8PJbzDsuA' },
];

const PlayIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="rgba(0,102,255,0.9)"/>
    <polygon points="13,10 24,16 13,22" fill="white"/>
  </svg>
);

const VideosComponent = ({ lightMode }) => {
  const [hov, setHov] = React.useState(null);

  const bg      = lightMode ? '#f2f4f8'  : '#000711';
  const cardBg  = lightMode ? '#e8eaf2'  : '#0a1018';
  const cardHov = lightMode ? '#dde0ec'  : '#0d1525';
  const border  = lightMode ? 'rgba(8,16,30,0.10)' : 'rgba(255,255,255,0.08)';
  const h2Clr   = lightMode ? '#08101e' : '#fff';
  const h2Dim   = lightMode ? 'rgba(8,16,30,0.40)' : 'rgba(255,255,255,0.45)';
  const tagClr  = lightMode ? 'rgba(8,16,30,0.40)' : 'rgba(255,255,255,0.38)';
  const titleClr= lightMode ? '#08101e' : '#fff';
  const durClr  = lightMode ? 'rgba(8,16,30,0.45)' : 'rgba(255,255,255,0.40)';

  return (
    <section id="youtube" style={{padding:'128px 48px',background:bg,transition:'background 0.6s ease',overflow:'hidden'}}>
      <div style={{maxWidth:1280,margin:'0 auto'}}>
        {/* Header */}
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:64,flexWrap:'wrap',gap:16}}>
          <div>
            <p style={{fontSize:11,textTransform:'uppercase',letterSpacing:'0.3em',color:'#0066ff',marginBottom:14,fontFamily:"'Saira',sans-serif",fontWeight:600}}>The Content</p>
            <h2 style={{fontFamily:"'Saira',sans-serif",fontSize:'clamp(2.2rem,4vw,3.5rem)',fontWeight:700,letterSpacing:'-0.03em',lineHeight:1.05,color:h2Clr,margin:0}}>
              Experience First <em style={{fontStyle:'italic',fontWeight:300,color:h2Dim}}>Advice</em>
            </h2>
          </div>
          <a href="https://www.youtube.com/@SuhitBusiness" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:8,fontSize:11,fontWeight:700,fontFamily:"'Saira',sans-serif",textTransform:'uppercase',letterSpacing:'0.1em',color:'#0066ff',textDecoration:'none',borderBottom:'1px solid #0066ff',paddingBottom:2}}>
            View Channel →
          </a>
        </div>

        {/* Watch Now sticky-style bar */}
        <div style={{
          display:'flex',alignItems:'center',gap:16,padding:'14px 20px',
          background:lightMode?'#08101e':'#fff',borderRadius:2,marginBottom:32,cursor:'pointer',
          transition:'opacity 0.2s',
        }}
          onClick={()=>window.open('https://www.youtube.com/@SuhitBusiness','_blank')}
          onMouseEnter={e=>e.currentTarget.style.opacity='0.88'}
          onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
          <div style={{width:48,height:36,background:'rgba(255,255,255,0.1)',borderRadius:1,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,overflow:'hidden'}}>
            <div style={{width:'100%',height:'100%',background:'linear-gradient(135deg,#0a1530,#000711)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <span style={{color:'#0066ff',fontSize:10,fontWeight:800,fontFamily:"'Saira',sans-serif"}}>SA</span>
            </div>
          </div>
          <span style={{fontSize:13,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.12em',color:lightMode?'#fff':'#08101e',fontFamily:"'Saira',sans-serif",flex:1}}>Watch Now</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><polygon points="5,3 15,9 5,15" fill={lightMode?'#fff':'#08101e'}/></svg>
        </div>

        {/* Video grid */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
          {VIDEO_THUMBS.map((v,i) => (
            <div key={i}
              onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
              onClick={()=>window.open(`https://www.youtube.com/watch?v=${v.vid}`,'_blank')}
              style={{cursor:'pointer',transition:'transform 0.25s ease',transform:hov===i?'translateY(-4px)':'none'}}>
              {/* Thumbnail */}
              <div style={{
                aspectRatio:'16/9',borderRadius:2,border:`1px solid ${border}`,
                background:hov===i?cardHov:cardBg,
                display:'flex',alignItems:'center',justifyContent:'center',
                position:'relative',overflow:'hidden',
                transition:'background 0.25s',
              }}>
                {/* YouTube thumbnail bg */}
                <div style={{position:'absolute',inset:0,backgroundImage:`url(https://img.youtube.com/vi/${v.vid}/maxresdefault.jpg)`,backgroundSize:'cover',backgroundPosition:'center'}}/>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.25) 100%)'}}/>
                <div style={{position:'absolute',bottom:8,left:10,fontFamily:'monospace',fontSize:10,color:'rgba(255,255,255,0.4)',letterSpacing:'0.05em'}}>{v.dur}</div>
                <div style={{opacity:hov===i?1:0,transition:'opacity 0.2s',position:'relative',zIndex:2}}><PlayIcon/></div>
                <span style={{position:'absolute',top:8,right:8,fontFamily:'monospace',fontSize:10,color:'#0066ff'}}>{v.num}</span>
              </div>
              {/* Meta */}
              <div style={{padding:'12px 0 0'}}>
                <div style={{fontSize:9,textTransform:'uppercase',letterSpacing:'0.12em',color:tagClr,fontFamily:"'Saira',sans-serif",marginBottom:6}}>{v.tag}</div>
                <div style={{fontSize:13,fontWeight:700,color:titleClr,fontFamily:"'Saira',sans-serif",lineHeight:1.35,letterSpacing:'-0.01em'}}>{v.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social channels */}
        <div style={{display:'flex',gap:24,marginTop:48,paddingTop:32,borderTop:`1px solid ${border}`}}>
          {[
            {label:'YouTube',url:'https://www.youtube.com/@SuhitBusiness'},
            {label:'LinkedIn',url:'https://www.linkedin.com/in/suhitamin/'},
            {label:'X / Twitter',url:'https://x.com/SuhitAmin'},
            {label:'Instagram',url:'https://www.instagram.com/suhitamin'},
            {label:'Newsletter',url:'#newsletter'},
          ].map(s=>(
            <a key={s.label} href={s.url} target={s.url.startsWith('http')?'_blank':'_self'} rel={s.url.startsWith('http')?'noopener noreferrer':undefined} style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',color:'rgba(0,102,255,0.8)',textDecoration:'none',fontFamily:"'Saira',sans-serif",transition:'color 0.2s'}}
              onMouseEnter={e=>e.target.style.color='#0066ff'}
              onMouseLeave={e=>e.target.style.color='rgba(0,102,255,0.8)'}
              onClick={s.url==='#newsletter'?()=>document.getElementById('newsletter')?.scrollIntoView({behavior:'smooth'}):undefined}>{s.label} →</a>
          ))}
        </div>
      </div>
    </section>
  );
};
Object.assign(window, { VideosComponent });
