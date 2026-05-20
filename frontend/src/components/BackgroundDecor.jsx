const Bean = ({ size, style }) => (
  <svg width={size} height={size * 0.72} viewBox="0 0 40 29" fill="none" style={style}>
    <ellipse cx="20" cy="14.5" rx="18.5" ry="12.5" fill="currentColor" />
    <path
      d="M20 2 C13 8 13 21 20 27"
      stroke="#FDF6EC" strokeWidth="2.8" strokeLinecap="round" fill="none"
    />
  </svg>
);

const Steam = ({ size, style }) => (
  <svg width={size * 0.65} height={size} viewBox="0 0 26 48" fill="none" style={style}>
    <path d="M5 44 Q0 34 5 26 Q10 18 5 10 Q0 2 5 0"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M18 44 Q13 34 18 26 Q23 18 18 10 Q13 2 18 0"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

const Cup = ({ size, style }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none" style={style}>
    <ellipse cx="22" cy="8" rx="13" ry="5" fill="currentColor" opacity="0.35" />
    <rect x="3" y="11" width="38" height="5" rx="2.5" fill="currentColor" />
    <path d="M5 16 L9 37 Q9 40 12 40 L32 40 Q35 40 35 37 L39 16 Z" fill="currentColor" />
    <path d="M35 20 Q44 20 44 27 Q44 34 35 34"
      stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" fill="none" />
    <path d="M13 28 Q22 32 31 28"
      stroke="#FDF6EC" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
  </svg>
);

const Leaf = ({ size, style }) => (
  <svg width={size * 0.85} height={size} viewBox="0 0 34 44" fill="none" style={style}>
    <path d="M17 42 Q2 33 2 19 Q2 4 17 4 Q32 4 32 19 Q32 33 17 42 Z" fill="currentColor" />
    <line x1="17" y1="42" x2="17" y2="4" stroke="#FDF6EC" strokeWidth="1.6" opacity="0.45" />
    <path d="M17 26 Q24 22 29 15" stroke="#FDF6EC" strokeWidth="1.2" fill="none" opacity="0.4" />
    <path d="M17 32 Q10 28 5 21"  stroke="#FDF6EC" strokeWidth="1.2" fill="none" opacity="0.4" />
    <path d="M17 19 Q23 15 27 9"  stroke="#FDF6EC" strokeWidth="1"   fill="none" opacity="0.35" />
  </svg>
);

const Droplet = ({ size, style }) => (
  <svg width={size} height={size * 1.25} viewBox="0 0 24 30" fill="none" style={style}>
    <path d="M12 1 Q21 13 21 19 Q21 27 12 27 Q3 27 3 19 Q3 13 12 1 Z" fill="currentColor" />
    <path d="M9 20 Q12 22 15 20" stroke="#FDF6EC" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
  </svg>
);

const ITEMS = [
  // ── Left edge ──────────────────────────────────────
  { Shape: Bean,    top: '7%',  left: '2.5%',  size: 40, delay: 0,   dur: 7,   rot: 20,  opacity: 0.10 },
  { Shape: Steam,   top: '27%', left: '1%',    size: 56, delay: 1.3, dur: 9,   rot: 5,   opacity: 0.08 },
  { Shape: Leaf,    top: '53%', left: '2%',    size: 46, delay: 2.6, dur: 8,   rot: -28, opacity: 0.09 },
  { Shape: Bean,    top: '78%', left: '4.5%',  size: 30, delay: 0.7, dur: 10,  rot: -50, opacity: 0.09 },
  { Shape: Droplet, top: '89%', left: '13%',   size: 18, delay: 3.2, dur: 6.5, rot: 12,  opacity: 0.08 },
  { Shape: Bean,    top: '44%', left: '0.5%',  size: 20, delay: 4.1, dur: 8.5, rot: 75,  opacity: 0.07 },
  // ── Right edge ─────────────────────────────────────
  { Shape: Cup,     top: '9%',  right: '2.5%', size: 46, delay: 1.6, dur: 8,   rot: -12, opacity: 0.09 },
  { Shape: Leaf,    top: '38%', right: '1.5%', size: 42, delay: 0.4, dur: 7.5, rot: 32,  opacity: 0.09 },
  { Shape: Bean,    top: '67%', right: '3.5%', size: 34, delay: 2.1, dur: 9.5, rot: 55,  opacity: 0.10 },
  { Shape: Steam,   top: '84%', right: '1%',   size: 50, delay: 0.9, dur: 11,  rot: -8,  opacity: 0.08 },
  { Shape: Droplet, top: '3%',  right: '15%',  size: 14, delay: 3.8, dur: 7,   rot: -18, opacity: 0.08 },
  { Shape: Leaf,    top: '18%', right: '6.5%', size: 26, delay: 2.9, dur: 9,   rot: -42, opacity: 0.07 },
];

export default function BackgroundDecor() {
  return (
    <>
      {ITEMS.map(({ Shape, top, left, right, size, delay, dur, rot, opacity }, i) => (
        <div
          key={i}
          style={{
            position: 'fixed',
            top,
            left,
            right,
            zIndex: 0,
            pointerEvents: 'none',
            opacity,
            color: 'var(--primary-brown)',
            animation: `float-bob ${dur}s ease-in-out ${delay}s infinite`,
            filter: 'blur(0.4px)',
          }}
        >
          <div style={{ transform: `rotate(${rot}deg)`, display: 'inline-block' }}>
            <Shape size={size} />
          </div>
        </div>
      ))}
    </>
  );
}
