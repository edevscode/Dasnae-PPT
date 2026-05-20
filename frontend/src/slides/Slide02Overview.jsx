const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12C12 12 9 10 7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12C12 12 15 10 17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide02Overview() {
  return (
    <>
      <Watermark />
      <h2 className="slide-heading">What We'll Cover</h2>
      
      <div className="two-column-layout">
        <div className="column">
          <ol className="agenda-list">
            <li>Background & Problem Statement</li>
            <li>User Analysis & Personas</li>
            <li>Task Analysis</li>
            <li>Prototype Design</li>
            <li>Design Principles Applied</li>
            <li>Usability Testing & Results</li>
            <li>Heuristic Evaluation</li>
            <li>Accessibility Evaluation</li>
            <li>Findings & Recommendations</li>
          </ol>
        </div>
        
        <div className="column" style={{ alignItems: 'center' }}>
          <div className="phone-mockup">
            <h2 className="serif" style={{ fontSize: '24px' }}>Dasnae Café</h2>
          </div>
        </div>
      </div>
    </>
  );
}
