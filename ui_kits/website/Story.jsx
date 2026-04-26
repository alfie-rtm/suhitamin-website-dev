// Story.jsx — light/dark aware
const milestones = [
  { year:'Aug 2014', title:'Started YouTube', body:'Started gaming and creating YouTube content, beginning to build an audience and learning the business side of the platform.', img:'../../assets/story-2014-08.jpg' },
  { year:'Jan 2018', title:'ESL', body:'Hired by ESL (the world\'s biggest esports company), becoming one of its youngest employees.', img:'../../assets/story-2018-01.jpg' },
  { year:'Feb 2018', title:'Diagnosed', body:'Diagnosed with Stage 2A Hodgkin Lymphoma. Underwent 12 rounds of chemotherapy while still attending school and working at ESL.', img:'../../assets/story-2018-02.jpg' },
  { year:'Jun 2018', title:'Scottish Highers', body:'Completed his Scottish Highers at Hutcheson\'s Grammar School, achieving 6 A\'s despite recovering from chemotherapy, and was appointed as Deputy Head Boy.', img:'../../assets/story-2018-06.jpg' },
  { year:'Jul 2018', title:'Saulderson Media Founded', body:'Launched his own influencer marketing agency, Saulderson Media, driven by the motivation to "go out doing something big" after his cancer diagnosis. Within the 1st year, turned over £100,000.', img:'../../assets/story-2018-07.jpg' },
  { year:'Sep 2019', title:'University of St Andrews', body:'Enrolled at the University of St Andrews to study Economics and Management.', img:'../../assets/story-2019-09.jpg' },
  { year:'Dec 2023', title:'Growth', body:'Saulderson Media achieves a 43% annual revenue growth rate and completes over 400 campaigns, generating over 500 million organic views.', img:'../../assets/story-2023-12.jpg' },
  { year:'Apr 2025', title:'Forbes 30 Under 30', body:'Named to the Forbes 30 Under 30 Europe Media & Marketing (2025) list.', img:'../../assets/story-2025-04.jpg' },
  { year:'Oct 2025', title:'Exit', body:'Suhit Amin exits Saulderson Media for a multi 7-figure sum to Journey Further and now operates as their VP of Influencer Strategy during his transition period.', img:'../../assets/story-2025-10.jpg' },
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
            From cancer at 16<br/>
            <em style={{fontStyle:'italic',fontWeight:300,color:h2Dim}}>to selling a business at 24.</em>
          </h2>
        </div>
        <div style={{position:'relative'}}>
          <div style={{position:'absolute',left:'50%',top:0,bottom:0,width:1,background:`linear-gradient(to bottom,transparent,${lineClr},transparent)`,transform:'translateX(-50%)'}}/>
          {milestones.map((m,i) => (
            <div key={m.year} style={{display:'flex',alignItems:'center',marginBottom:i===milestones.length-1?0:120,flexDirection:i%2===0?'row':'row-reverse',position:'relative'}}>
              <div style={{width:'50%',padding:'0 48px',textAlign:i%2===0?'right':'left'}}>
                <span style={{fontFamily:'monospace',fontSize:12,color:'#0066ff',letterSpacing:'0.05em'}}>{m.year}</span>
                <h3 style={{fontFamily:"'Saira',sans-serif",fontSize:26,fontWeight:700,color:h3Clr,margin:'8px 0 10px',letterSpacing:'-0.02em'}}>{m.title}</h3>
                <p style={{fontSize:14,color:bodyClr,lineHeight:1.7,fontFamily:"'Saira',sans-serif",margin:0}}>{m.body}</p>
              </div>
              <div style={{position:'absolute',left:'50%',transform:'translateX(-50%)',width:12,height:12,borderRadius:'50%',background:'#0066ff',boxShadow:`0 0 0 4px ${dotRing}`,zIndex:2}}/>
              <div style={{width:'50%',padding:'0 48px',display:'flex',justifyContent:i%2===0?'flex-start':'flex-end',alignItems:'center'}}>
                <div style={{width:'100%',maxWidth:480,aspectRatio:'16/9',borderRadius:2,position:'relative',overflow:'hidden',border:`1px solid ${lightMode?'rgba(8,16,30,0.10)':'rgba(255,255,255,0.10)'}`}}>
                  <img src={m.img} alt={`${m.year} — ${m.title}`} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.2) 100%)'}} />
                </div>
              </div>
            </div>
          ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
Object.assign(window, { StoryComponent });
