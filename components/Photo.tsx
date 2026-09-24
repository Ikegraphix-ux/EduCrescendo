import Image from "next/image";

export default function Photo({
  src,
  alt,
  minHeight,
  captionLabel,
  caption,
}: {
  src: string;
  alt: string;
  minHeight?: number;
  captionLabel?: string;
  caption?: string;
}) {
  return (
    <div className="photo" style={minHeight ? { minHeight } : undefined}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" quality={75} style={{ objectFit: "cover" }} />
      {(caption || captionLabel) && (
        <div className="cap">
          {captionLabel && <b>{captionLabel}</b>}
          {caption}
        </div>
      )}
    </div>
  );
}

