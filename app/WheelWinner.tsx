// import { useMemo } from "react";
// import ScrollBanner from "./WinnerPopupScrollBanner";
// import VictoryShield from "./WinnerPopupVictoryShield";
// import CrystalTablet from "./WinnerPopupCrystalTablet";

export default function WheelWinner({ text }: { text: string }) {
  return <p>{text}</p>;
  // if (!text) return null;
  //
  // const PopupComponent = useMemo(() => {
  //   const popups = [ScrollBanner, VictoryShield, CrystalTablet];
  //   return popups[Math.floor(Math.random() * popups.length)];
  // }, [text]);
  //
  // return (
  //   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  //     <PopupComponent text={text} />;
  //   </div>
  // );
}
