import { COLOR_SEGMENTS } from "@/lib/constants";

export interface Segment {
  label: string;
}

export interface WheelProps {
  rotation: number;
  isSpinning: boolean;
  segments: Segment[];
}

const Wheel = ({ segments, rotation, isSpinning }: WheelProps) => {
  const radius = 150;
  const size = radius * 2;
  const center = radius;

  const getCoordinates = (angleInDegrees: number, distance: number) => {
    // Subtract 90 to start at 12 o'clock instead of 3 o'clock
    const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0);

    return {
      x: center + distance * Math.cos(angleInRadians),
      y: center + distance * Math.sin(angleInRadians),
    };
  };

  const getSlicePath = (startAngle: number, endAngle: number) => {
    const start = getCoordinates(startAngle, center);
    const end = getCoordinates(endAngle, center);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      `M ${center} ${center}`,
      `L ${start.x} ${start.y}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
      "Z",
    ].join(" ");
  };

  return (
    <div
      className="mt-2 w-full"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: isSpinning
          ? "transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)"
          : "none",
      }}
    >
      <svg
        className="h-auto w-full"
        viewBox={`-1 -1 ${size + 2} ${size + 2}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {segments.length === 0 ? (
          <>
            {Array.from({ length: 8 }).map((_, index) => {
              const dummyCount = 8;
              const sliceAngle = 360 / dummyCount;
              const startAngle = index * sliceAngle;
              const endAngle = startAngle + sliceAngle;

              return (
                <path
                  key={index}
                  d={getSlicePath(startAngle, endAngle)}
                  fill={COLOR_SEGMENTS[index % COLOR_SEGMENTS.length]}
                  fillOpacity="0.5"
                  stroke="white"
                  strokeWidth="2"
                />
              );
            })}

            <circle
              cx={center}
              cy={center}
              r={radius * 0.3}
              fill="white"
              filter="drop-shadow(0px 4px 4px rgba(0,0,0,0.2))"
            />
            <text
              x={center}
              y={center}
              fill="#374151"
              fontWeight="bold"
              fontSize="12"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              ADD ITEMS
            </text>
          </>
        ) : segments.length === 1 ? (
          <g>
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill={COLOR_SEGMENTS[0]}
              stroke="white"
              strokeWidth="2"
            />
            <text
              x={center}
              y={center}
              fill="white"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xl sm:text-2xl"
            >
              {segments[0].label}
            </text>
          </g>
        ) : (
          segments.map((segment, index) => {
            const sliceAngle = 360 / segments.length;

            const startAngle = index * sliceAngle;
            const endAngle = startAngle + sliceAngle;

            const midAngle = startAngle + sliceAngle / 2;
            const textPos = getCoordinates(midAngle, radius * 0.65);
            const textRotation = midAngle + 90;

            return (
              <g key={index}>
                <path
                  d={getSlicePath(startAngle, endAngle)}
                  fill={COLOR_SEGMENTS[index % COLOR_SEGMENTS.length]}
                  stroke="white"
                  strokeWidth="2"
                />
                <text
                  x={textPos.x}
                  y={textPos.y}
                  fill="white"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${textRotation}, ${textPos.x}, ${textPos.y})`}
                  className="text-[10px] sm:text-xs md:text-sm"
                >
                  {segment.label}
                </text>
              </g>
            );
          })
        )}
      </svg>
    </div>
  );
};

export default Wheel;
