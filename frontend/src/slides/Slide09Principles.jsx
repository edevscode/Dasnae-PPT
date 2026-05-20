import React from 'react';

const Watermark = () => (
  <svg className="watermark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8C15 8 19 8 20 12C21 16 17 21 12 22C7 21 3 16 4 12C5 8 9 8 9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Slide09Principles() {
  const principles = [
    { name: "Consistency", desc: "Unified color palette and typography across all 8 screens" },
    { name: "Visibility", desc: "Active nav tab highlighted with indicator dot and bold weight" },
    { name: "Feedback", desc: "Buttons scale on press; login error shown inline in red" },
    { name: "Simplicity", desc: "Minimal card layout — only image, name, price shown" },
    { name: "User Control", desc: "Remove cart items; toggle delivery/pickup freely" },
    { name: "Error Prevention", desc: "Confirm Order disabled when cart is empty" },
    { name: "Recognition over Recall", desc: "Item details visible on card without extra taps" },
    { name: "Learnability", desc: "New users reach checkout in under 5 steps" },
    { name: "Efficiency", desc: "One-tap add to cart; infinite scroll loads more automatically" },
    { name: "Aesthetic Design", desc: "Warm café palette with serif typography and soft shadows" }
  ];

  return (
    <>
      <Watermark />
      <h2 className="slide-heading">HCI Principles Applied</h2>
      
      <div className="grid-2x5">
        {principles.map((p, idx) => (
          <div className="principle-card" key={idx}>
            <div className="principle-number">{idx + 1}.</div>
            <div className="principle-content">
              <span className="principle-title">{p.name}</span>
              <span className="principle-desc">{p.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
