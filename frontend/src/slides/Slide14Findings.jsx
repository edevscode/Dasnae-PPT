const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide14Findings() {
  return (
    <>
      <Watermark />
      <h2 className="slide-heading">Findings &amp; Recommendations</h2>
      
      <div className="two-column-layout-top" style={{ marginTop: '24px' }}>
        <div className="column-top">
          <h3 className="serif" style={{ fontSize: '20px', marginBottom: '16px' }}>Key Findings</h3>
          
          <div className="finding-card">
            <div className="finding-card-header">
              <span className="badge badge-high">HIGH</span>
              <strong>No visual confirmation when item is added to cart</strong>
            </div>
          </div>
          
          <div className="finding-card">
            <div className="finding-card-header">
              <span className="badge badge-high">HIGH</span>
              <strong>No delivery address validation at checkout</strong>
            </div>
          </div>
          
          <div className="finding-card">
            <div className="finding-card-header">
              <span className="badge badge-med">MED</span>
              <strong>Non-standard button labels cause brief confusion</strong>
            </div>
          </div>
          
          <div className="finding-card">
            <div className="finding-card-header">
              <span className="badge badge-med">MED</span>
              <strong>Cart item removal lacks undo option</strong>
            </div>
          </div>
        </div>
        
        <div className="column-top">
          <h3 className="serif" style={{ fontSize: '20px', marginBottom: '16px' }}>Recommended Fixes</h3>
          <ul className="rec-list">
            <li><span className="rec-arrow">&rarr;</span> Add toast notification or cart badge counter on add-to-cart</li>
            <li><span className="rec-arrow">&rarr;</span> Require delivery address before order confirmation</li>
            <li><span className="rec-arrow">&rarr;</span> Replace "Enter the Space" with "Sign In" or use both</li>
            <li><span className="rec-arrow">&rarr;</span> Add confirmation dialog before removing cart items</li>
          </ul>
        </div>
      </div>
    </>
  );
}
