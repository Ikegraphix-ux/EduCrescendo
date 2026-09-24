import Image from "next/image";
import HeroCarousel from "./HeroCarousel";

export default function Hero({
  children,
  style,
  backgroundImage = true,
  variant,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  backgroundImage?: boolean;
  variant?: "home";
}) {
  return (
    <section className={`hero${variant ? ` hero-${variant}` : ""}`} style={style}>
      {backgroundImage && (
        <Image
          className="hero-image"
          src="/images/edu/leadership.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={75}
          priority
          aria-hidden="true"
        />
      )}
      <div className="hero-glow" aria-hidden="true" />
      <HeroCarousel>{children}</HeroCarousel>
    </section>
  );
}

