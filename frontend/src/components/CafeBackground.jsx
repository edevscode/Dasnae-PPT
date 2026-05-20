function CoffeeBean({ top, left, right, bottom, rotate, size = 18 }) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 20 30"
      style={{
        position: 'fixed',
        top, left, right, bottom,
        transform: `rotate(${rotate}deg)`,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      <ellipse cx="10" cy="15" rx="9.5" ry="13.5" fill="rgba(122,88,62,0.11)" />
      <path
        d="M10 2 C6.5 9 6.5 17 10 28"
        stroke="rgba(250,244,235,0.72)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SteamWisps({ top, left }) {
  return (
    <svg
      width="52"
      height="72"
      viewBox="0 0 52 72"
      style={{
        position: 'fixed',
        top,
        left,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      <path className="steam-w steam-w1" d="M10 68 Q4 56 10 44 Q16 32 10 20 Q4 8 10 0" />
      <path className="steam-w steam-w2" d="M26 68 Q32 56 26 44 Q20 32 26 20 Q32 8 26 0" />
      <path className="steam-w steam-w3" d="M42 68 Q36 56 42 44 Q48 32 42 20 Q36 8 42 0" />
    </svg>
  );
}

function Ring({ top, left, right, bottom, size, opacity = 0.10 }) {
  return (
    <div
      style={{
        position: 'fixed',
        top, left, right, bottom,
        width: size,
        height: size,
        borderRadius: '50%',
        border: `2.5px solid rgba(122,88,62,${opacity})`,
        pointerEvents: 'none',
      }}
    />
  );
}

export default function CafeBackground() {
  return (
    <>
      {/* Top-left ring cluster — suggests a coffee cup was rested here */}
      <Ring top="4vh"  left="1.5vw" size={180} opacity={0.10} />
      <Ring top="7.5vh" left="4.5vw" size={135} opacity={0.07} />

      {/* Bottom-right ring cluster */}
      <Ring bottom="4vh"  right="2vw" size={215} opacity={0.09} />
      <Ring bottom="8.5vh" right="6.5vw" size={162} opacity={0.06} />

      {/* Solo accent rings */}
      <Ring top="42vh"  right="1vw"  size={108} opacity={0.07} />
      <Ring top="58vh"  left="0.5vw" size={76}  opacity={0.06} />
      <Ring top="25vh"  right="3vw"  size={58}  opacity={0.05} />

      {/* Scattered coffee beans */}
      <CoffeeBean top="23vh"  left="1vw"    rotate={28}  size={18} />
      <CoffeeBean top="67vh"  left="2vw"    rotate={-40} size={15} />
      <CoffeeBean top="9vh"   right="1.5vw" rotate={52}  size={20} />
      <CoffeeBean bottom="22vh" right="2.5vw" rotate={-25} size={14} />
      <CoffeeBean bottom="16vh" left="3.5vw" rotate={68}  size={16} />
      <CoffeeBean top="50vh"  right="1vw"   rotate={10}  size={13} />
      <CoffeeBean top="35vh"  left="0.4vw"  rotate={-58} size={12} />
      <CoffeeBean bottom="30vh" right="5vw" rotate={38}  size={11} />

      {/* Steam wisps rising from the top-left ring cluster */}
      <SteamWisps top="calc(4vh + 12px)" left="calc(1.5vw + 52px)" />
    </>
  );
}