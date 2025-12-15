"use client";

import { START_PHRASES, SPIN_PHRASES, DEFAULT_SEGMENTS } from "@/lib/constants";
import { useState } from "react";

import Wheel from "./Wheel";

import WheelButton from "./WheelButton";
import WheelPointer from "./WheelPointer";
import WheelTitle from "./WheelTittle";

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [btnSpinningPhrase, setBtnSpinningPhrase] = useState("");
  const [btnWaitingPhrase, setBtnWaitingPhrase] = useState(START_PHRASES[0]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  const segments = DEFAULT_SEGMENTS;

  const spinWheel = () => {
    if (isSpinning) return;

    setRotation(rotation % 360);
    setIsSpinning(true);
    setWinner(null);

    setBtnSpinningPhrase(
      SPIN_PHRASES[Math.floor(Math.random() * SPIN_PHRASES.length)],
    );

    // TODO call API to ask AI for winner.
    const winningIndex = Math.floor(Math.random() * segments.length);

    const sliceAngle = 360 / segments.length;

    const fullSpins = 5;
    const spinPadding = fullSpins * 360;

    // TODO fix this
    const targetRotation =
      rotation + spinPadding + (360 - winningIndex * sliceAngle) + 10;

    setRotation(targetRotation);

    // TODO make time vary
    setTimeout(() => {
      setBtnWaitingPhrase(
        START_PHRASES[Math.floor(Math.random() * START_PHRASES.length)],
      );
      setIsSpinning(false);
      setWinner(segments[winningIndex].label);
    }, 3000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <WheelTitle />
      <WheelPointer />
      <Wheel segments={segments} rotation={rotation} isSpinning={isSpinning} />
      <WheelButton onClick={spinWheel} disabled={isSpinning}>
        {isSpinning ? btnSpinningPhrase : btnWaitingPhrase}
      </WheelButton>
    </div>
  );
}
