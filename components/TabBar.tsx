"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PAGES } from "@/lib/pages";

export default function TabBar() {
  const pathname = usePathname();
  return (
    <div className="tabbar">
      {PAGES.map((p) => (
        <Link key={p.href} href={p.href} className={pathname === p.href ? "active" : ""}>
          {p.name}
        </Link>
      ))}
    </div>
  );
}
