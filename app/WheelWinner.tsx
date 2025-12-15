import { useState, useEffect } from "react";
import ScrollBanner from "./WinnerPopupScrollBanner";
import VictoryShield from "./WinnerPopupVictoryShield";
import CrystalTablet from "./WinnerPopupCrystalTablet";

export default function WheelWinner({ text }: { text: string }) {
  const [Popup, setPopup] = useState<React.ComponentType<{
    text: string;
  }> | null>(null);

  useEffect(() => {
    (() => {
      const popups = [ScrollBanner, VictoryShield, CrystalTablet];
      const randomPopup = popups[Math.floor(Math.random() * popups.length)];
      setPopup(() => randomPopup);
    })();
  }, []);

  if (!text || !Popup) return null;

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Popup text={text} />
    </div>
  );
}
