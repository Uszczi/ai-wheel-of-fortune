const CrystalTablet = ({
  text = "A Rare Artifact Found",
}: {
  text?: string;
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 360 120"
        className="h-auto w-[270px] sm:w-[310px] md:w-[340px] lg:w-[360px]"
      >
        <defs>
          <linearGradient id="crystalGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.8)" /> {/* Cyan */}
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0.8)" />{" "}
            {/* Purple */}
          </linearGradient>
          <filter id="glowEffect">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* The Crystal Hexagon Shape */}
        {/* Points: TopLeft, TopRight, RightTip, BottomRight, BottomLeft, LeftTip */}
        <polygon
          points="40,20 320,20 350,60 320,100 40,100 10,60"
          fill="url(#crystalGradient)"
          stroke="#A5F3FC"
          strokeWidth="3"
          filter="url(#glowEffect)"
          opacity="0.9"
        />

        {/* Text */}
        <text
          x="180"
          y="62"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Courier New, monospace"
          fontWeight="bold"
          fontSize="16"
          fill="white"
          letterSpacing="2"
          className="text-sm sm:text-base md:text-lg lg:text-xl"
        >
          {text.toUpperCase()}
        </text>
      </svg>
    </div>
  );
};

export default CrystalTablet;
