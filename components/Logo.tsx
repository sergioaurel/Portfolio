import { profile } from "@/data/content";

type LogoProps = {
  size?: "sm" | "md";
};

const sizes = {
  sm: "h-9 w-9 text-sm",
  md: "h-10 w-10 text-base",
};

export default function Logo({ size = "md" }: LogoProps) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/60 font-serif italic tracking-tight text-white ${sizes[size]}`}
    >
      {profile.initials}
    </span>
  );
}