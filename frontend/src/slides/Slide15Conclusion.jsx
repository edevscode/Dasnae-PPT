const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide15Conclusion() {
  return (
    <>
      <Watermark />
      <h2 className="slide-heading" style={{ textAlign: 'center' }}>Conclusion</h2>
      
      <p className="body-text" style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '18px', maxWidth: '800px', margin: '0 auto 32px' }}>
        "The Dasnae Café prototype successfully demonstrates a user-centered 
        food ordering experience &mdash; achieving a 93% overall task completion rate 
        and a positive average SUS score."
      </p>
      
      <div className="grid-3-col" style={{ marginBottom: '48px' }}>
        <div className="accent-card" style={{ textAlign: 'center' }}>
          <h3 className="serif" style={{ fontSize: '18px', marginBottom: '12px' }}>Designed with Purpose</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.5 }}>10 HCI principles applied across 8 interactive screens.</p>
        </div>
        
        <div className="accent-card" style={{ textAlign: 'center' }}>
          <h3 className="serif" style={{ fontSize: '18px', marginBottom: '12px' }}>Validated with Users</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.5 }}>Tested with real participants using Think-Aloud and SUS methods.</p>
        </div>
        
        <div className="accent-card" style={{ textAlign: 'center' }}>
          <h3 className="serif" style={{ fontSize: '18px', marginBottom: '12px' }}>Room to Grow</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.5 }}>8 actionable recommendations identified for the next iteration.</p>
        </div>
      </div>
      
      <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '20px', color: 'var(--primary-brown)', textAlign: 'center' }}>
        "Every great interface starts with understanding the person behind the screen."
      </p>
    </>
  );
}
