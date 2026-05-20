const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide08Prototype() {
  const screens = [
    { title: "Login & Register", desc: "Email/password + Google sign-in simulation" },
    { title: "Menu", desc: "Category filter, search, infinite scroll product grid" },
    { title: "Cart", desc: "Quantity controls, special request notes, order summary" },
    { title: "Checkout", desc: "Delivery vs. pickup, payment method, order confirmation" },
    { title: "Profile", desc: "Loyalty points, order history, account settings" },
    { title: "Notifications & Messages", desc: "In-app alerts and messaging interface" }
  ];

  return (
    <>
      <Watermark />
      <h2 className="slide-heading" style={{ marginBottom: '8px' }}>High-Fidelity Prototype</h2>
      <h3 className="slide-subheading">Built with React 18 &middot; TypeScript &middot; Vite &middot; Tailwind CSS</h3>
      
      <div className="grid-2x3">
        {screens.map((screen, idx) => (
          <div className="screen-card" key={idx}>
            <h4 className="screen-title">{screen.title}</h4>
            <p className="screen-desc">{screen.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
