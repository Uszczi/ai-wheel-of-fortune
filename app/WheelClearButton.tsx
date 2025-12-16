export default function WheelClearButton({
  onClick,
  disabled,
}: {
  onClick: React.MouseEventHandler;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="mt-2 w-full rounded-lg bg-gray-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={disabled}
    >
      Clear
    </button>
  );
}
