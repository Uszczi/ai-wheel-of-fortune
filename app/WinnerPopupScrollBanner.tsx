const ScrollBanner = ({
  text = "The Ancient Scroll Reveals...",
}: {
  text?: string;
}) => {
  return (
    <div className="relative flex items-center justify-center self-center">
      <svg
        viewBox="0 0 400 120"
        className="h-auto w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]"
      >
        <defs>
          <filter
            id="scrollShadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.5" />
          </filter>
          <linearGradient id="parchment" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fdf6e3" /> {/* Light Tan */}
            <stop offset="100%" stopColor="#f4e4bc" /> {/* Darker Tan */}
          </linearGradient>
        </defs>

        {/* Shadow Group */}
        <g filter="url(#scrollShadow)">
          {/* Main Paper Body */}
          <path
            d="M 40,20 H 360 C 370,20 380,30 380,40 V 80 C 380,90 370,100 360,100 H 40 C 30,100 20,90 20,80 V 40 C 20,30 30,20 40,20 Z"
            fill="url(#parchment)"
            stroke="#d4b483"
            strokeWidth="2"
          />

          {/* Left Roller (Wood) */}
          <rect
            x="10"
            y="10"
            width="20"
            height="100"
            rx="5"
            fill="#8B4513"
            stroke="#5D4037"
          />
          {/* Right Roller (Wood) */}
          <rect
            x="370"
            y="10"
            width="20"
            height="100"
            rx="5"
            fill="#8B4513"
            stroke="#5D4037"
          />
        </g>

        {/* Text */}
        <text
          x="200"
          y="65"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Times New Roman', serif"
          fontWeight="bold"
          fontSize="16"
          fill="#3e2723"
          className="text-sm sm:text-base md:text-lg lg:text-xl"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default ScrollBanner;
