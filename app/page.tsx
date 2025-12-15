import Wheel from "./Wheel";
import WheelButton from "./WheelButton";
import WheelTitle from "./WheelTittle";

export default function Home() {
  return (
    <div className="bg-app-bg flex min-h-screen flex-col items-center justify-between">
      <header>
        <h1>AI powered Wheel of Fortune</h1>
      </header>

      <div className="flex flex-col items-center gap-4">
        <WheelTitle />
        <Wheel />
        <WheelButton />
      </div>

      <footer></footer>
    </div>
  );
}
