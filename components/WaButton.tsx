"use client";

export const WHATSAPP_NUMBER = "233201649041";

export function openWhatsApp(message: string) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

export default function WaButton({
  children,
  message,
  variant = "primary",
  style,
  className = "",
}: {
  children: React.ReactNode;
  message: string;
  variant?: "primary" | "secondary" | "accent" | "ghost-light";
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`btn btn-${variant} ${className}`}
      style={style}
      onClick={() => openWhatsApp(message)}
    >
      {children}
    </button>
  );
}
