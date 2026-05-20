const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12C12 12 9 10 7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12C12 12 15 10 17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide01Title() {
  return (
    <div className="centered-layout">
      <Watermark />
      <svg className="icon-main" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12C12 12 9 10 7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12C12 12 15 10 17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      
      <h1 className="title-text">Dasnae Café</h1>
      <h2 className="subtitle-text">Design and Evaluation of a User-Centered Food Ordering Web Application</h2>
      
      <div className="divider-centered"></div>
      
      <p className="label-text">Human-Computer Interaction &mdash; Final Project</p>
      
      <p className="group-text">
        <strong>tewup</strong><br/>
        Celestino, Carlo M. &middot; Geronimo, Eron Dave G. &middot; Santiago, Mark Angelo J.
      </p>
      
      <p className="footer-text">&copy; 2024 Dasnae Caffe &middot; Handcrafted in the quiet hours</p>
    </div>
  );
}
