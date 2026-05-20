const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12C12 12 9 10 7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12C12 12 15 10 17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide03Background() {
  return (
    <>
      <Watermark />
      <h2 className="slide-heading">Background</h2>
      
      <div className="two-column-layout">
        <div className="column" style={{ flex: 1.5 }}>
          <p className="body-text">
            The food service industry has shifted significantly toward digital ordering 
            platforms. Customers of specialty cafés expect convenience, speed, and a 
            personalized experience that reflects the brand they love.
          </p>
          <p className="body-text">
            Dasnae Café is a specialty café concept that values quiet, intentional 
            ambiance &mdash; but lacked a digital ordering platform that matched its identity.
          </p>
        </div>
        
        <div className="column">
          <div className="accent-card">
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>&#2615;</div>
            <h3 className="serif" style={{ fontSize: '20px', marginBottom: '12px' }}>Why This Matters</h3>
            <p className="body-text" style={{ fontSize: '15px', marginBottom: 0 }}>
              Without a user-centered digital system, cafés risk long queues, 
              miscommunication, and losing tech-savvy customers to competitors.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
