import Image from "next/image";
import HeroCarousel from "./HeroCarousel";

export default function Hero({
  children,
  style,
  backgroundImage = "/images/edu/leadership.jpg",
  variant,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  backgroundImage?: string | false;
  variant?: "home";
}) {
  return (
    <section className={`hero${variant ? ` hero-${variant}` : ""}`} style={style}>
      {backgroundImage && (
        <Image
          className="hero-image"
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          quality={75}
          priority
          aria-hidden="true"
        />
      )}
      <div className="hero-motion" aria-hidden="true">
        <span className="hero-motion__orbit hero-motion__orbit--wide" />
        <span className="hero-motion__orbit hero-motion__orbit--tilted" />
        <span className="hero-motion__orb" />
      </div>
      <div className="hero-glow" aria-hidden="true" />
      <HeroCarousel>{children}</HeroCarousel>
    </section>
  );
}
