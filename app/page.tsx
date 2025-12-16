"use client";

import {
  START_PHRASES,
  SPIN_PHRASES,
  DEFAULT_SEGMENTS,
  WIN_PHRASES,
  DEFAULT_SEGMENTS_STRING,
} from "@/lib/constants";
import { useState } from "react";

import Wheel from "./Wheel";

import WheelButton from "./WheelButton";
import WheelPointer from "./WheelPointer";
import WheelTitle from "./WheelTittle";
import WheelWinner from "./WheelWinner";
import WheelTextArea from "./WheelTextArea";
import WheelClearButton from "./WheelClearButton";
import WheelAIButton from "./WheelAIButton";

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [btnSpinningPhrase, setBtnSpinningPhrase] = useState("");
  const [btnWaitingPhrase, setBtnWaitingPhrase] = useState(START_PHRASES[0]);
  const [winnerPhrase, setWinnerPhrase] = useState("");
  const [segments, setSegments] = useState(DEFAULT_SEGMENTS);
  const [segmentsText, setSegmentsText] = useState(DEFAULT_SEGMENTS_STRING);

  const handleSegmentsChange = (text: string) => {
    setSegmentsText(text);
    setWinnerPhrase("");

    const lines = text.split("\n").filter((line) => line.trim() !== "");
    const newSegments = lines.map((line) => ({ label: line.trim() }));

    setSegments(newSegments);
  };

  const handleClearSegments = () => {
    setSegmentsText("");
    setSegments([]);
    setWinnerPhrase("");
  };

  const handleAskAI = () => {
    // TODO: Implement AI API call to generate segments
    console.log("Ask AI for segments - to be implemented");
  };

  const spinWheel = () => {
    if (isSpinning) return;

    setRotation(rotation % 360);
    setIsSpinning(true);
    setWinnerPhrase("");

    const cleanedText = segmentsText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "")
      .join("\n");
    setSegmentsText(cleanedText);

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
      <div className="relative w-full max-w-[90vw] overflow-hidden sm:max-w-125 md:max-w-150 lg:max-w-200">
        <Wheel
          segments={segments}
          rotation={rotation}
          isSpinning={isSpinning}
        />
        <WheelWinner text={winnerPhrase} />
      </div>
      <WheelButton
        onClick={spinWheel}
        disabled={isSpinning || segments.length === 0}
      >
        {isSpinning ? btnSpinningPhrase : btnWaitingPhrase}
      </WheelButton>

      <div className="mt-4 w-full max-w-[90vw] overflow-hidden sm:max-w-125 md:max-w-150 lg:max-w-200">
        <WheelTextArea value={segmentsText} onChange={handleSegmentsChange} />
        <div className="flex gap-2">
          <WheelAIButton onClick={handleAskAI} disabled={isSpinning} />
          <WheelClearButton
            onClick={handleClearSegments}
            disabled={segmentsText.length === 0}
          />
        </div>
      </div>
    </div>
  );
}
