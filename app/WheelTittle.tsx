import { DEFAULT_TITLE } from "@/lib/constants";

export default function WheelTitle() {
  return (
    <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
      {DEFAULT_TITLE}
    </h1>
  );
}
