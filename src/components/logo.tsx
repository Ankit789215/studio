import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-primary-foreground", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h12v16H4z" />
      <path d="M8 4v16" />
      <path d="M16 4a8 8 0 0 0-8 8 8 8 0 0 0 8 8" />
    </svg>
  );
}
