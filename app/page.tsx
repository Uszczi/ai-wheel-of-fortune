"use client";

import {
  START_PHRASES,
  SPIN_PHRASES,
  DEFAULT_SEGMENTS,
  WIN_PHRASES,
} from "@/lib/constants";
import { useState } from "react";

import Wheel from "./Wheel";

import WheelButton from "./WheelButton";
import WheelPointer from "./WheelPointer";
import WheelTitle from "./WheelTittle";
import WheelWinner from "./WheelWinner";
import WheelTextArea from "./WheelTextArea";

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [btnSpinningPhrase, setBtnSpinningPhrase] = useState("");
  const [btnWaitingPhrase, setBtnWaitingPhrase] = useState(START_PHRASES[0]);
  const [winnerPhrase, setWinnerPhrase] = useState("");

  const segments = DEFAULT_SEGMENTS;

  const spinWheel = () => {
    if (isSpinning) return;

    setRotation(rotation % 360);
    setIsSpinning(true);
    setWinnerPhrase("");

    setBtnSpinningPhrase(
      SPIN_PHRASES[Math.floor(Math.random() * SPIN_PHRASES.length)],
    );

    // TODO call API to ask AI for winner.
    const winningIndex = Math.floor(Math.random() * segments.length);

    const sliceAngle = 360 / segments.length;

    const fullSpins = 5;
    const spinPadding = fullSpins * 360;

    // TODO fix this
    // It's not working :D
    const targetRotation =
      rotation + spinPadding + (360 - winningIndex * sliceAngle);

    setRotation(targetRotation);

    // TODO make time vary
    setTimeout(() => {
      setBtnWaitingPhrase(
        START_PHRASES[Math.floor(Math.random() * START_PHRASES.length)],
      );
      setIsSpinning(false);

      setWinnerPhrase(`${segments[winningIndex].label}.`);
    }, 3000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4 py-6 text-white sm:px-6 md:px-8 md:py-8">
      <WheelTitle />
      <WheelPointer />
      <div className="relative w-full max-w-[90vw] overflow-hidden sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px]">
        <Wheel
          segments={segments}
          rotation={rotation}
          isSpinning={isSpinning}
        />
        <WheelWinner text={winnerPhrase} />
      </div>
      <WheelButton onClick={spinWheel} disabled={isSpinning}>
        {isSpinning ? btnSpinningPhrase : btnWaitingPhrase}
      </WheelButton>

      <div className="mt-4 w-full max-w-[90vw] overflow-hidden sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px]">
        <WheelTextArea />
      </div>
    </div>
  );
}
