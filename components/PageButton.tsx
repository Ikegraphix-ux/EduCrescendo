import Link from "next/link";

export default function PageButton({
  href,
  children,
  variant = "primary",
  style,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost-light";
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <Link href={href} className={`btn btn-${variant} ${className}`} style={style}>
      {children}
    </Link>
  );
}
