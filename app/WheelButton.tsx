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
      className="hover:bg-app-action-hover bg-app-action z-10 mt-4 rounded-full px-14 py-8 text-2xl font-bold disabled:opacity-50"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
