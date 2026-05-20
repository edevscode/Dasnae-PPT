const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide13Accessibility() {
  return (
    <>
      <Watermark />
      <h2 className="slide-heading">Accessibility Evaluation</h2>
      
      <div className="two-column-layout-top" style={{ marginTop: '32px' }}>
        <div className="column-top">
          <h3 className="serif" style={{ fontSize: '20px', color: 'var(--success-green)' }}>PASS</h3>
          <ul className="checklist">
            <li><span className="check-pass">&#10003;</span> Font readability (11px&ndash;38px clear hierarchy)</li>
            <li><span className="check-pass">&#10003;</span> Button sizes meet 44&times;44px touch target standard</li>
            <li><span className="check-pass">&#10003;</span> Form labels properly associated with inputs</li>
            <li><span className="check-pass">&#10003;</span> Product images include descriptive alt text</li>
            <li><span className="check-pass">&#10003;</span> Fully responsive (mobile + desktop)</li>
          </ul>
        </div>
        
        <div className="column-top">
          <h3 className="serif" style={{ fontSize: '20px', color: 'var(--warning-amber)' }}>NEEDS IMPROVEMENT</h3>
          <ul className="checklist">
            <li><span className="check-fail">&#9888;</span> Placeholder text contrast may fall below 4.5:1 (WCAG AA)</li>
            <li><span className="check-fail">&#9888;</span> Icon-only buttons missing aria-label attributes</li>
            <li><span className="check-fail">&#9888;</span> No explicit focus-visible styles on navigation buttons</li>
          </ul>
        </div>
      </div>
    </>
  );
}
