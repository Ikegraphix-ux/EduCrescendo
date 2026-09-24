import Image from "next/image";

export default function Hero({
  children,
  style,
  slideshow = true,
  variant,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  slideshow?: boolean;
  variant?: "home";
}) {
  return (
    <section className={`hero${variant ? ` hero-${variant}` : ""}`} style={style}>
      {slideshow && (
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
      {children}
    </section>
  );
}

