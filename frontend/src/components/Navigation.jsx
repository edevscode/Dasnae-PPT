export default function Navigation({ current, total, onNext, onPrev }) {
  return (
    <div className="navigation-bar">
      <button 
        className="nav-btn" 
        onClick={onPrev} 
        disabled={current === 1}
      >
        &larr; PREV
      </button>
      <div className="nav-counter">
        Slide {current} of {total}
      </div>
      <button 
        className="nav-btn" 
        onClick={onNext} 
        disabled={current === total}
      >
        NEXT &rarr;
      </button>
    </div>
  );
}
