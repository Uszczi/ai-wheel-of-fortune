import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export default function WheelButton({
  onClick,
  disabled,
  children,
}: {
  onClick: React.MouseEventHandler;
  children: ReactNode;
  disabled: boolean;
}) {
  return (
    <Button
      className="hover:bg-app-action-hover bg-app-action z-10 mt-4 rounded-full px-8 py-6 text-base font-bold disabled:opacity-50 sm:px-10 sm:py-7 sm:text-lg md:px-14 md:py-8 md:text-2xl"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
