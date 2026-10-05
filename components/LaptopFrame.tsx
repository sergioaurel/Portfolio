import Image from "next/image";

type LaptopFrameProps = {
  title: string;
  image?: string;
};

export default function LaptopFrame({ title, image }: LaptopFrameProps) {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="overflow-hidden rounded-t-xl border border-b-0 border-white/15 bg-black shadow-2xl shadow-black/60">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>

        <div className="relative aspect-[16/10]">
          {image ? (
            <Image
              src={image}
              alt={`Capture du projet ${title}`}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_top,rgba(255,90,31,0.35)_0%,#141414_70%)] px-6">
              <span className="text-center font-serif text-4xl italic text-ink/80 md:text-6xl">
                {title}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="relative left-1/2 h-3 w-[104%] -translate-x-1/2 rounded-b-xl bg-gradient-to-b from-white/25 to-white/5" />
    </div>
  );
}