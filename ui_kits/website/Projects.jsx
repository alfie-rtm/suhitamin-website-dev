// Projects.jsx — light/dark aware
const projects = [
  { num:'01', title:'Saulderson Media', tag:'Influencer Marketing Agency',
    body:'The agency I founded, scaled, and exited. Now operating as an independent brand serving global creators and DTC brands.' },
  { num:'02', title:'Angel Portfolio', tag:'Early-Stage Investing',
    body:'Backing exceptional founders building in creator economy, AI tooling, and consumer software. Cheque size £10k–£50k.' },
  { num:'03', title:'YouTube', tag:'Long-Form Content',
    body:'Unpacking the real mechanics of building and selling agencies — operations, hiring, and the parts nobody else talks about.' },
  { num:'04', title:'Consulting', tag:'1:1 Operator Advisory',
    body:'Working with a small number of agency founders each year on positioning, sales, and exit-readiness.' },
];

const ProjectsComponent = ({ lightMode }) => {
  const [hovered, setHovered] = React.useState(null);
  const bg     = lightMode ? '#f2f4f8'  : '#000711';
  const bgHov  = lightMode ? '#eaedf3'  : '#0a1530';
  const gridBg = lightMode ? 'rgba(8,16,30,0.12)' : 'rgba(255,255,255,0.10)';
  const eyebrow = '#0066ff';
  const h2Color = lightMode ? '#08101e' : '#fff';
  const h2Dim   = lightMode ? 'rgba(8,16,30,0.40)' : 'rgba(255,255,255,0.45)';
  const tagClr  = lightMode ? 'rgba(8,16,30,0.32)' : 'rgba(255,255,255,0.35)';
  const bodyClr = lightMode ? 'rgba(8,16,30,0.55)' : 'rgba(255,255,255,0.55)';
  const linkClr = lightMode ? 'rgba(8,16,30,0.35)' : 'rgba(255,255,255,0.4)';
  const linkHov = lightMode ? '#08101e' : '#fff';
  const h3Hov   = '#0066ff';

  return (
    <section id="projects" style={{ padding:'128px 48px', background:bg, transition:'background 0.6s ease', position:'relative' }}>
      <div style={{maxWidth:1280, margin:'0 auto'}}>
        <div style={{marginBottom:80}}>
          <p style={{fontSize:11,textTransform:'uppercase',letterSpacing:'0.3em',color:eyebrow,marginBottom:16,fontFamily:"'Saira',sans-serif",fontWeight:600}}>What I&apos;m building</p>
          <h2 style={{fontFamily:"'Saira',sans-serif",fontSize:'clamp(2.5rem,5vw,4.5rem)',fontWeight:700,letterSpacing:'-0.03em',lineHeight:1.05,color:h2Color,margin:0}}>
            Four bets, <em style={{fontStyle:'italic',fontWeight:300,color:h2Dim}}>one mission.</em>
          </h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:gridBg}}>
          {projects.map((p,i) => (
            <div key={p.num}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered===i ? bgHov : bg,
                padding:'56px', cursor:'pointer',
                transition:'background 0.25s ease',
                display:'flex', flexDirection:'column',
              }}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:32}}>
                <span style={{fontFamily:'monospace',fontSize:12,color:'#0066ff'}}>{p.num}</span>
                <span style={{fontSize:10,textTransform:'uppercase',letterSpacing:'0.15em',color:tagClr,fontFamily:"'Saira',sans-serif"}}>{p.tag}</span>
              </div>
              <h3 style={{fontFamily:"'Saira',sans-serif",fontSize:'clamp(1.75rem,2.5vw,2.25rem)',fontWeight:700,letterSpacing:'-0.02em',color:hovered===i ? h3Hov : h2Color,marginBottom:16,transition:'color 0.25s',flex:1}}>{p.title}</h3>
              <p style={{fontSize:14,color:bodyClr,lineHeight:1.7,fontFamily:"'Saira',sans-serif",maxWidth:400,margin:0}}>{p.body}</p>
              <div style={{marginTop:24,fontSize:13,fontFamily:"'Saira',sans-serif",color:hovered===i ? linkHov : linkClr,display:'inline-flex',alignItems:'center',gap:6,transition:'color 0.25s'}}>
                Learn more <span style={{transform:hovered===i?'translateX(4px)':'translateX(0)',display:'inline-block',transition:'transform 0.25s'}}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
Object.assign(window, { ProjectsComponent });
