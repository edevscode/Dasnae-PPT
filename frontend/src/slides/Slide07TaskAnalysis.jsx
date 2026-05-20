import React from 'react';

const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide07TaskAnalysis() {
  const steps = ["Open App", "Login", "Browse Menu", "Add to Cart", "Review Cart", "Checkout", "Order Confirmed"];
  
  return (
    <>
      <Watermark />
      <h2 className="slide-heading">Primary Ordering Flow</h2>
      
      <div className="flow-diagram">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="flow-step">{step}</div>
            {idx < steps.length - 1 && <div className="flow-arrow">&rarr;</div>}
          </React.Fragment>
        ))}
      </div>
      
      <table className="table-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <thead>
          <tr>
            <th>Key User Tasks</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Browse &amp; filter menu</td>
            <td><strong>High</strong></td>
          </tr>
          <tr>
            <td>Add items to cart</td>
            <td><strong>High</strong></td>
          </tr>
          <tr>
            <td>Checkout with notes</td>
            <td><strong>High</strong></td>
          </tr>
          <tr>
            <td>View loyalty points</td>
            <td>Medium</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
