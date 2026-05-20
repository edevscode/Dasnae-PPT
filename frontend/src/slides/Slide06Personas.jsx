const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide06Personas() {
  return (
    <>
      <Watermark />
      <h2 className="slide-heading">Who Are Our Users?</h2>
      
      <div className="grid-3-col">
        <div className="accent-card" style={{ padding: '24px 20px' }}>
          <div className="persona-avatar">V</div>
          <h3 className="persona-name">Vito Cruz</h3>
          <p className="persona-desc">25, College Student &mdash; <i>"The Regular"</i></p>
          <div className="persona-info">
            <strong>Goal:</strong><br/>
            Order her usual drink quickly without distraction.
          </div>
          <div className="persona-info">
            <strong>Frustration:</strong><br/>
            Slow browsing, long lines.
          </div>
          <div className="persona-info" style={{ marginTop: 'auto' }}>
            <strong>Tech Level:</strong><br/>
            &#9679;&#9679;&#9679;&#9679;&#9675; High
          </div>
        </div>

        <div className="accent-card" style={{ padding: '24px 20px' }}>
          <div className="persona-avatar">G</div>
          <h3 className="persona-name">Mr. Gabriel</h3>
          <p className="persona-desc">25, College Student &mdash; <i>"The Explorer"</i></p>
          <div className="persona-info">
            <strong>Goal:</strong><br/>
            Discover new drinks and filter by category.
          </div>
          <div className="persona-info">
            <strong>Frustration:</strong><br/>
            Too many options, no way to narrow down.
          </div>
          <div className="persona-info" style={{ marginTop: 'auto' }}>
            <strong>Tech Level:</strong><br/>
            &#9679;&#9679;&#9679;&#9675;&#9675; Moderate
          </div>
        </div>

        <div className="accent-card" style={{ padding: '24px 20px' }}>
          <div className="persona-avatar">C</div>
          <h3 className="persona-name">Carl Abalos</h3>
          <p className="persona-desc">31, College Student &mdash; <i>"Health-Conscious"</i></p>
          <div className="persona-info">
            <strong>Goal:</strong><br/>
            Find tea options and add dietary notes.
          </div>
          <div className="persona-info">
            <strong>Frustration:</strong><br/>
            No allergen info, no early customization.
          </div>
          <div className="persona-info" style={{ marginTop: 'auto' }}>
            <strong>Tech Level:</strong><br/>
            &#9679;&#9679;&#9679;&#9679;&#9675; Moderate-High
          </div>
        </div>
      </div>
    </>
  );
}
