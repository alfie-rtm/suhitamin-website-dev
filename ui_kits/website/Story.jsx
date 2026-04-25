// Story.jsx — light/dark aware
const milestones = [
  { year:'2014', title:'Diagnosed', body:'Diagnosed with cancer at 19. Started a small agency from a hospital ward.' },
  { year:'2017', title:'Saulderson Media Founded', body:'Built one of the UK\'s first dedicated influencer marketing agencies.' },
  { year:'2019', title:'Scottish Young Edge Award', body:'Recognised for entrepreneurship and resilience.' },
  { year:'2020', title:'Forbes 30 Under 30', body:'Named to the Forbes Europe 30 Under 30 list for marketing & advertising.' },
  { year:'2023', title:'TEDx Stage', body:'Spoke on building a business through adversity.' },
  { year:'2025', title:'Exit', body:'Acquired. Transitioned to investing, writing, and operator advisory.' },
];

const StoryComponent = ({ lightMode }) => {
  const bg      = lightMode ? '#eaedf3'  : '#0a1018';
  const lineClr = lightMode ? 'rgba(8,16,30,0.15)' : 'rgba(255,255,255,0.18)';
  const h2Clr   = lightMode ? '#08101e' : '#fff';
  const h2Dim   = lightMode ? 'rgba(8,16,30,0.40)' : 'rgba(255,255,255,0.45)';
  const h3Clr   = lightMode ? '#08101e' : '#fff';
  const bodyClr = lightMode ? 'rgba(8,16,30,0.55)' : 'rgba(255,255,255,0.55)';
  const dotRing = lightMode ? '#eaedf3' : '#0a1018';

  return (
    <section id="story" style={{padding:'128px 48px',background:bg,position:'relative',overflow:'hidden',transition:'background 0.6s ease'}}>
      <div style={{maxWidth:960,margin:'0 auto',position:'relative'}}>
        <div style={{textAlign:'center',marginBottom:80}}>
          <p style={{fontSize:11,textTransform:'uppercase',letterSpacing:'0.3em',color:'#0066ff',marginBottom:16,fontFamily:"'Saira',sans-serif",fontWeight:600}}>The Story</p>
          <h2 style={{fontFamily:"'Saira',sans-serif",fontSize:'clamp(2.5rem,5vw,4.5rem)',fontWeight:700,letterSpacing:'-0.03em',lineHeight:1.1,color:h2Clr,margin:0}}>
            From a hospital ward<br/>
            <em style={{fontStyle:'italic',fontWeight:300,color:h2Dim}}>to an exit.</em>
          </h2>
        </div>
        <div style={{position:'relative'}}>
          <div style={{position:'absolute',left:'50%',top:0,bottom:0,width:1,background:`linear-gradient(to bottom,transparent,${lineClr},transparent)`,transform:'translateX(-50%)'}}/>
          {milestones.map((m,i) => (
            <div key={m.year} style={{display:'flex',alignItems:'center',marginBottom:i===milestones.length-1?0:64,flexDirection:i%2===0?'row':'row-reverse',position:'relative'}}>
              <div style={{width:'50%',padding:'0 48px',textAlign:i%2===0?'right':'left'}}>
                <span style={{fontFamily:'monospace',fontSize:12,color:'#0066ff',letterSpacing:'0.05em'}}>{m.year}</span>
                <h3 style={{fontFamily:"'Saira',sans-serif",fontSize:26,fontWeight:700,color:h3Clr,margin:'8px 0 10px',letterSpacing:'-0.02em'}}>{m.title}</h3>
                <p style={{fontSize:14,color:bodyClr,lineHeight:1.7,fontFamily:"'Saira',sans-serif",margin:0}}>{m.body}</p>
              </div>
              <div style={{position:'absolute',left:'50%',transform:'translateX(-50%)',width:12,height:12,borderRadius:'50%',background:'#0066ff',boxShadow:`0 0 0 4px ${dotRing}`,zIndex:2}}/>
              <div style={{width:'50%'}}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
Object.assign(window, { StoryComponent });
