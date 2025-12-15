"use client";

import { START_PHRASES, SPIN_PHRASES, DEFAULT_SEGMENTS } from "@/lib/constants";
import { useState } from "react";

import Wheel from "./Wheel";

import WheelButton from "./WheelButton";
import WheelTitle from "./WheelTittle";

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [btnSpinningPhrase, setBtnSpinningPhrase] = useState("");
  const [btnWaitingPhrase, setBtnWaitingPhrase] = useState(START_PHRASES[0]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);

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
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-white">
        <path d="M 20 40 L 0 0 L 40 0 Z" />
      </svg>

      <div
        className="mt-2"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning
            ? "transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)"
            : "none",
        }}
      >
        <Wheel segments={segments} />
      </div>

      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className="z-10 mt-4 rounded-full bg-red-600 px-8 py-3 text-xl font-bold hover:bg-red-700 disabled:opacity-50"
      >
        {isSpinning ? btnSpinningPhrase : btnWaitingPhrase}
      </button>
    </div>
  );
}
