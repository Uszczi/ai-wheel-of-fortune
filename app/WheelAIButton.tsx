export default function WheelAIButton({
  onClick,
  disabled,
}: {
  onClick: React.MouseEventHandler;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="mt-2 w-full rounded-lg bg-purple-600 px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50 md:px-6 md:py-3 md:text-lg"
      disabled={disabled}
    >
      AI Suggestions
    </button>
  );
}
