import { cn } from "@/lib/utils";

interface Props {
  text: string;
  icon?: React.ReactNode;
  className?: HTMLDivElement["className"];
}

export default function SkillBadge({ text, icon, className }: Props) {
  return (
    <div
      className={cn(
        "flex border rounded-md justify-center items-center px-[0.4rem] py-[0.3rem] text-sm font-semibold hover:bg-blue-50 hover:border-blue-300 transition",
        className
      )}
    >
      <div className="inline-flex items-center gap-x-1">
        <span className="mr-1 size-4">{icon}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}