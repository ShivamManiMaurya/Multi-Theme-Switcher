const ColorfulLogo = () => (
  <svg
    width="160"
    height="40"
    viewBox="0 0 160 40"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fff700" /> {/* vivid yellow */}
        <stop offset="100%" stopColor="#9333ea" /> {/* rich violet */}
      </linearGradient>
    </defs>

    <text
      x="10"
      y="28"
      fill="url(#grad1)"
      stroke="#000"
      strokeWidth="0.5"
      fontSize="22"
      fontWeight={"bold"}
      fontFamily="'Pacifico', cursive"
      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
      🌈 ThemeApp
    </text>
  </svg>
);
export default ColorfulLogo;
