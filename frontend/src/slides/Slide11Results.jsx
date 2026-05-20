const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide11Results() {
  return (
    <>
      <Watermark />
      <h2 className="slide-heading">Testing Results</h2>
      
      <div className="two-column-layout-top">
        <div className="column-top" style={{ flex: 1.2 }}>
          <table className="table-container" style={{ marginTop: 0 }}>
            <thead>
              <tr>
                <th>Task</th>
                <th>Completion Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Register Account</td><td>100%</td></tr>
              <tr><td>Add Item to Cart</td><td>90%</td></tr>
              <tr><td>Filter by Category</td><td>90%</td></tr>
              <tr><td>Search for Item</td><td>90%</td></tr>
              <tr><td>Change Quantity</td><td>80%</td></tr>
              <tr><td>Add Special Note</td><td>100%</td></tr>
              <tr><td>Select Pickup</td><td>100%</td></tr>
              <tr><td>Confirm Order</td><td>100%</td></tr>
              <tr><td>Find Loyalty Points</td><td>90%</td></tr>
              <tr>
                <td><strong className="highlight">Overall</strong></td>
                <td><strong className="highlight">93%</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="column-top">
          <div className="sus-highlight">
            <div className="sus-score">82</div>
            <div className="sus-label">Average SUS Score</div>
            <div className="sus-sublabel">Target: &ge; 68 (Above Average)</div>
            <div className="sus-badge">A &mdash; Excellent</div>
          </div>
          <p style={{ fontSize: '12px', fontStyle: 'italic', marginTop: '12px', textAlign: 'center', color: 'var(--text-muted)' }}>
            *Based on simulated data for presentation purposes.
          </p>
        </div>
      </div>
    </>
  );
}
