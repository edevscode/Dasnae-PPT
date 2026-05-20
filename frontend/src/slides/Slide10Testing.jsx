const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Slide10Testing() {
  return (
    <>
      <Watermark />
      <h2 className="slide-heading">Usability Testing</h2>

      <div className="two-column-layout-top">
        <div className="column-top">
          <h3 className="serif" style={{ fontSize: '20px', marginBottom: '16px' }}>Methods Used</h3>
          <ul className="agenda-list" style={{ fontSize: '16px' }}>
            <li style={{ fontSize: '16px' }}>&bull; Think-Aloud Method</li>
            <li style={{ fontSize: '16px' }}>&bull; Observation &amp; Note-Taking</li>
            <li style={{ fontSize: '16px' }}>&bull; Task Completion Testing (9 tasks)</li>
            <li style={{ fontSize: '16px' }}>&bull; System Usability Scale (SUS)</li>
          </ul>

          <div className="quote-box">
            "You are a new customer of Dasnae Café. Register, explore the menu,
            add items to your cart, and complete an order."
          </div>
        </div>

        <div className="column-top">
          <h3 className="serif" style={{ fontSize: '20px', marginBottom: '16px' }}>Participants</h3>
          <div className="stat-cards-row">
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Participants</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">9</div>
              <div className="stat-label">Tasks Given</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5 min</div>
              <div className="stat-label">Avg. Session</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
