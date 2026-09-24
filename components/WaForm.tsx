"use client";
import { openWhatsApp } from "./WaButton";

export default function WaForm({
  children,
  baseMessage,
  style,
}: {
  children: React.ReactNode;
  baseMessage: string;
  style?: React.CSSProperties;
}) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const lines: string[] = [];
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[name]").forEach((field) => {
      const label =
        field.closest(".form-field")?.querySelector("label")?.textContent?.trim() || field.name;
      const val = (field.value || "").trim();
      if (val) lines.push(`${label}: ${val}`);
    });
    const msg = lines.length ? `${baseMessage}\n\n${lines.join("\n")}` : baseMessage;
    openWhatsApp(msg);
  }

  return (
    <form className="wa-form" style={style} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
