// Testimonials.jsx — light/dark aware
const quotes = [
  { quote:"Suhit's mentorship has ultimately been the driving force behind our success at Augmentum. His support from day one has allowed us to scale to a 7-figure ARR within 4 years at healthy margins, all while avoiding significant mistakes we would've made without his guidance. I can 100% say we wouldn't be here without him - highly recommend.", name:'Sambhav Chadha', role:'Co Founder of Augmentum Media' },
  { quote:"Suhit's mentorship has opened up doors we never knew existed. It's truly powerful having someone in your corner who knows a lot more than you do. Despite his success Suhit always shows up and is always working hard. Every hour spent with him is truly the most humbling experience - you realise just how much more there is to learn.", name:'Reyan', role:'Founder of IRG Media' },
];

const TestimonialsComponent = ({ lightMode }) => {
  const bg       = lightMode ? '#f2f4f8'  : '#000711';
  const cardBg   = lightMode ? 'linear-gradient(135deg,#eaecf5,#f2f4f8)' : 'linear-gradient(135deg,#0a1530,#000711)';
  const border   = lightMode ? 'rgba(8,16,30,0.10)' : 'rgba(255,255,255,0.10)';
  const qClr     = lightMode ? 'rgba(8,16,30,0.80)' : 'rgba(255,255,255,0.88)';
  const nameClr  = lightMode ? '#08101e' : '#fff';
  const roleClr  = lightMode ? 'rgba(8,16,30,0.40)' : 'rgba(255,255,255,0.45)';
  const divClr   = lightMode ? 'rgba(8,16,30,0.10)' : 'rgba(255,255,255,0.10)';

  return (
    <section style={{padding:'128px 48px',background:bg,transition:'background 0.6s ease'}}>
      <div style={{maxWidth:1152,margin:'0 auto'}}>
        <p style={{fontSize:11,textTransform:'uppercase',letterSpacing:'0.3em',color:'#0066ff',marginBottom:48,textAlign:'center',fontFamily:"'Saira',sans-serif",fontWeight:600}}>Agencies I&apos;ve helped scale</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
          {quotes.map((q,i) => (
            <figure key={i} style={{border:`1px solid ${border}`,borderRadius:2,padding:40,margin:0,background:cardBg}}>
              <span style={{fontFamily:"'Saira',sans-serif",fontSize:64,fontWeight:800,color:'#0066ff',lineHeight:1,display:'block'}}>&ldquo;</span>
              <blockquote style={{fontFamily:"'Saira',sans-serif",fontSize:17,lineHeight:1.7,color:qClr,marginTop:16,padding:0,border:'none'}}>{q.quote}</blockquote>
              <figcaption style={{marginTop:24,paddingTop:24,borderTop:`1px solid ${divClr}`}}>
                <div style={{fontSize:14,fontWeight:600,color:nameClr,fontFamily:"'Saira',sans-serif"}}>{q.name}</div>
                <div style={{fontSize:12,color:roleClr,fontFamily:"'Saira',sans-serif",marginTop:2}}>{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
Object.assign(window, { TestimonialsComponent });
