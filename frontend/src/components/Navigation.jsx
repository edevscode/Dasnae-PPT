export default function Navigation({ current, total, onNext, onPrev }) {
  const progress = total > 1 ? ((current - 1) / (total - 1)) * 100 : 0;

  return (
    <div className="navigation-bar">
      <div className="nav-progress-bar" style={{ width: `${progress}%` }} />
      <button className="nav-btn" onClick={onPrev} disabled={current === 1}>
        &larr; PREV
      </button>
      <div className="nav-counter">
        {current} / {total}
      </div>
      <button className="nav-btn" onClick={onNext} disabled={current === total}>
        NEXT &rarr;
      </button>
    </div>
  );
}
