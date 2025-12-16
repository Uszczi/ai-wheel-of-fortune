import { Textarea } from "@/components/ui/textarea";

export default function WheelTextArea({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={15}
    />
  );
}
