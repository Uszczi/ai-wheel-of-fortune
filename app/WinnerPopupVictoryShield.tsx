const VictoryShield = ({ text = "Victory Is Yours!" }: { text?: string }) => {
  return (
    <div className="relative flex items-center justify-center">
      <svg width="350" height="150" viewBox="0 0 350 150">
        <defs>
          <linearGradient id="goldSheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="blueSteel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#172554" />
          </linearGradient>
        </defs>

        {/* The Shield Shape */}
        <path
          d="M 20,20 H 330 L 330,80 C 330,120 175,145 175,145 C 175,145 20,120 20,80 Z"
          fill="url(#blueSteel)"
          stroke="url(#goldSheen)"
          strokeWidth="6"
        />

        {/* Inner Border Line (Decorative) */}
        <path
          d="M 35,35 H 315 L 315,75 C 315,105 175,128 175,128 C 175,128 35,105 35,75 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.2"
          strokeWidth="2"
        />

        {/* Text */}
        <text
          x="175"
          y="70"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Arial, sans-serif"
          fontWeight="900"
          fontSize="22"
          fill="white"
          style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default VictoryShield;
