// Newsletter.jsx — light/dark aware
const NewsletterComponent = ({ lightMode }) => {
  const [email, setEmail]       = React.useState('');
  const [submitted, setSubmit]  = React.useState(false);
  const [focused, setFocused]   = React.useState(false);
  const [btnHov, setBtnHov]     = React.useState(false);

  const bg      = lightMode ? '#eaedf3'  : '#0a1018';
  const h2Clr   = lightMode ? '#08101e' : '#fff';
  const bodyClr = lightMode ? 'rgba(8,16,30,0.60)' : 'rgba(255,255,255,0.65)';
  const inputBg = lightMode ? 'rgba(8,16,30,0.05)' : 'rgba(255,255,255,0.05)';
  const inputBdr= focused ? '#0066ff' : (lightMode ? 'rgba(8,16,30,0.15)' : 'rgba(255,255,255,0.10)');
  const inputClr= lightMode ? '#08101e' : '#fff';
  const phClr   = lightMode ? 'rgba(8,16,30,0.35)' : 'rgba(255,255,255,0.35)';
  const noteClr = lightMode ? 'rgba(8,16,30,0.30)' : 'rgba(255,255,255,0.25)';

  return (
    <section id="newsletter" style={{padding:'128px 48px',background:bg,transition:'background 0.6s ease'}}>
      <div style={{maxWidth:640,margin:'0 auto',textAlign:'center'}}>
        <p style={{fontSize:11,textTransform:'uppercase',letterSpacing:'0.3em',color:'#0066ff',marginBottom:16,fontFamily:"'Saira',sans-serif",fontWeight:600}}>Newsletter</p>
        <h2 style={{fontFamily:"'Saira',sans-serif",fontSize:'clamp(2.2rem,4vw,3.5rem)',fontWeight:700,letterSpacing:'-0.03em',lineHeight:1.1,color:h2Clr,marginBottom:20}}>
          The unfiltered <em style={{fontStyle:'italic',fontWeight:300,color:lightMode?'rgba(8,16,30,0.45)':'rgba(255,255,255,0.55)'}}>playbook.</em>
        </h2>
        <p style={{fontSize:15,color:bodyClr,lineHeight:1.75,fontFamily:"'Saira',sans-serif",marginBottom:40}}>
          One email a week on building, selling, and operating high-margin businesses. No fluff, no sponsors, no AI-generated filler.
        </p>
        <form onSubmit={e=>{e.preventDefault();setSubmit(true);}} style={{display:'flex',gap:8,maxWidth:440,margin:'0 auto'}}>
          <input type="email" required value={email} onChange={e=>setEmail(e.target.value)}
            onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
            placeholder="you@domain.com"
            style={{flex:1,padding:'13px 18px',borderRadius:2,background:inputBg,border:`1px solid ${inputBdr}`,color:inputClr,fontSize:14,fontFamily:"'Saira',sans-serif",outline:'none',transition:'border-color 0.2s'}}/>
          <button type="submit" onMouseEnter={()=>setBtnHov(true)} onMouseLeave={()=>setBtnHov(false)}
            style={{padding:'13px 22px',borderRadius:2,border:'none',cursor:'pointer',background:btnHov?'#f2f4f8':'#0066ff',color:btnHov?'#08101e':'#fff',fontSize:12,fontWeight:700,fontFamily:"'Saira',sans-serif",transition:'all 0.25s',whiteSpace:'nowrap',letterSpacing:'0.06em',textTransform:'uppercase',isolation:'isolate'}}>
            {submitted?'Subscribed ✓':'Subscribe'}
          </button>
        </form>
        <p style={{fontSize:11,color:noteClr,marginTop:16,fontFamily:"'Saira',sans-serif"}}>No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};
Object.assign(window, { NewsletterComponent });
