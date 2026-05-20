export default function Slide16ThankYou() {
  return (
    <div className="centered-layout">
      <svg style={{ width: '80px', height: '80px', color: 'var(--primary-brown)', marginBottom: '24px' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12C12 12 9 10 7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12C12 12 15 10 17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      
      <h1 className="serif" style={{ fontSize: '48px', color: 'var(--primary-brown)', marginBottom: '16px' }}>Thank You</h1>
      <p className="serif" style={{ fontStyle: 'italic', fontSize: '20px', color: 'var(--text-muted)' }}>Open for Questions</p>
      
      <div className="divider-centered"></div>
      
      <p className="group-text" style={{ marginBottom: '24px' }}>
        <strong>tewup</strong><br/>
        Celestino &middot; Geronimo &middot; Santiago
      </p>
      
      <p className="footer-text">HCI Final Project &middot; Dr. Yanga's Colleges Inc. &middot; 2026</p>
    </div>
  );
}
