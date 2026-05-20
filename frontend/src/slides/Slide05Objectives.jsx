const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide05Objectives() {
  const objectives = [
    "Apply HCI principles in designing user interfaces",
    "Conduct user analysis and task analysis",
    "Create low-fidelity and high-fidelity prototypes",
    "Apply usability heuristics and accessibility standards",
    "Conduct usability testing with real users",
    "Document findings and provide improvement recommendations"
  ];

  return (
    <>
      <Watermark />
      <h2 className="slide-heading">Project Objectives</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '24px' }}>
        {objectives.map((obj, index) => (
          <div className="objective-pill" key={index}>
            <div className="objective-number">{index + 1}</div>
            <div>{obj}</div>
          </div>
        ))}
      </div>
    </>
  );
}
