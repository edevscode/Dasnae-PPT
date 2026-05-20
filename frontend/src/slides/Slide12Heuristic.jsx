const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide12Heuristic() {
  return (
    <>
      <Watermark />
      <h2 className="slide-heading" style={{ marginBottom: '8px' }}>Heuristic Evaluation</h2>
      <h3 className="slide-subheading">Based on Jakob Nielsen's 10 Usability Heuristics</h3>
      
      <table className="table-container" style={{ marginTop: '16px' }}>
        <thead>
          <tr>
            <th style={{ width: '45%' }}>Issue</th>
            <th style={{ width: '35%' }}>Heuristic</th>
            <th style={{ width: '20%' }}>Severity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No feedback after adding item to cart</td>
            <td>Visibility of System Status</td>
            <td><span className="badge badge-high">HIGH</span></td>
          </tr>
          <tr>
            <td>Delivery address field has no validation</td>
            <td>Error Prevention</td>
            <td><span className="badge badge-high">HIGH</span></td>
          </tr>
          <tr>
            <td>"Enter the Space" label may confuse first-time users</td>
            <td>Real World Match</td>
            <td><span className="badge badge-med">MED</span></td>
          </tr>
          <tr>
            <td>No undo after removing a cart item</td>
            <td>User Control</td>
            <td><span className="badge badge-med">MED</span></td>
          </tr>
          <tr>
            <td>Inconsistent input styles (Login vs Register)</td>
            <td>Consistency</td>
            <td><span className="badge badge-med">MED</span></td>
          </tr>
          <tr>
            <td>No quick reorder from Profile</td>
            <td>Efficiency</td>
            <td><span className="badge badge-low">LOW</span></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
