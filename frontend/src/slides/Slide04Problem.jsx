const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide04Problem() {
  return (
    <>
      <Watermark />
      <h2 className="slide-heading">The Problem</h2>
      
      <div className="grid-3-col">
        <div className="accent-card">
          <div style={{ fontSize: '36px', marginBottom: '16px' }}>&#9201;</div>
          <h3 className="serif" style={{ fontSize: '20px', marginBottom: '12px' }}>Long Wait Times</h3>
          <p className="body-text" style={{ fontSize: '14px', marginBottom: 0 }}>
            Manual order processing causes delays and miscommunication between 
            customers and staff.
          </p>
        </div>
        
        <div className="accent-card">
          <div style={{ fontSize: '36px', marginBottom: '16px' }}>&#127869;</div>
          <h3 className="serif" style={{ fontSize: '20px', marginBottom: '12px' }}>Limited Menu Visibility</h3>
          <p className="body-text" style={{ fontSize: '14px', marginBottom: 0 }}>
            Customers cannot easily browse descriptions, filter items, or 
            make informed choices.
          </p>
        </div>
        
        <div className="accent-card">
          <div style={{ fontSize: '36px', marginBottom: '16px' }}>&#128193;</div>
          <h3 className="serif" style={{ fontSize: '20px', marginBottom: '12px' }}>No Order Tracking</h3>
          <p className="body-text" style={{ fontSize: '14px', marginBottom: 0 }}>
            Customers receive no digital confirmation or status updates 
            after placing an order.
          </p>
        </div>
      </div>
    </>
  );
}
