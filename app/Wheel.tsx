export interface Segment {
  label: string;
  color: string;
}

export interface WheelProps {
  segments?: Segment[];
}

const DEFAULT_SEGMENTS: Segment[] = [
  { color: "#FF6B6B", label: "Prize 1" },
  { color: "#4ECDC4", label: "Prize 2" },
  { color: "#45B7D1", label: "Prize 3" },
  { color: "#96CEB4", label: "Prize 4" },
  { color: "#FFEAA7", label: "Prize 5" },
  { color: "#45B7D1", label: "Prize 3" },
  { color: "#DDA0DD", label: "Prize 6" },
  { color: "#98D8C8", label: "Prize 7" },
  { color: "#45B7D1", label: "Prize 3" },
  { color: "#45B7D1", label: "Prize 3" },
  { color: "#F7DC6F", label: "Prize 8" },
  { color: "#45B7D1", label: "Prize 3" },
];

const Wheel = ({ segments = DEFAULT_SEGMENTS }: WheelProps) => {
  const radius = 200;
  const size = radius * 2;
  const center = radius;

  const getCoordinates = (angleInDegrees: number) => {
    // Subtract 90 to start at 12 o'clock instead of 3 o'clock
    const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0);

    return {
      x: center + radius * Math.cos(angleInRadians),
      y: center + radius * Math.sin(angleInRadians),
    };
  };

  const getSlicePath = (startAngle: number, endAngle: number) => {
    const start = getCoordinates(startAngle);
    const end = getCoordinates(endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      `M ${center} ${center}`,
      `L ${start.x} ${start.y}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
      "Z",
    ].join(" ");
  };

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {segments.map((segment, index) => {
        const sliceAngle = 360 / segments.length;

        const startAngle = index * sliceAngle;
        const endAngle = startAngle + sliceAngle;

        return (
          <path
            key={index}
            d={getSlicePath(startAngle, endAngle)}
            fill={segment.color}
            stroke="white"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );
};

export default Wheel;
