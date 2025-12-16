import { Textarea } from "@/components/ui/textarea";

export default function WheelTextArea({ value }: { value: string }) {
  return <Textarea value={value} rows={15} />;
}
