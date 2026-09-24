export type IconName =
  | "learner" | "educator" | "leadership" | "schools" | "communities" | "societies"
  | "diagnose" | "chevron" | "star" | "shield" | "instagram" | "facebook" | "tiktok";

const paths: Record<IconName, JSX.Element> = {
  learner: (<><path d="M12 3 2 8l10 5 10-5-10-5Z" /><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" /></>),
  educator: (<><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>),
  leadership: (<><circle cx="12" cy="12" r="9" /><path d="m14.5 9.5-2 5-5 2 2-5 5-2Z" /></>),
  schools: (<><path d="M4 21V9l8-5 8 5v12" /><path d="M9 21v-6h6v6M4 9h16" /></>),
  communities: (<><circle cx="8" cy="9" r="3" /><circle cx="17" cy="9" r="3" /><path d="M2 20c0-3 2.7-5 6-5s6 2 6 5M11 20c0-3 2.7-5 6-5s5 2 5 5" /></>),
  societies: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z" /></>),
  diagnose: (<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>),
  chevron: (<path d="m9 6 6 6-6 6" />),
  star: (<path d="m12 3 2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.4 20.1l1.4-6.3-4.8-4.3 6.4-.6L12 3Z" />),
  shield: (<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />),
  instagram: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>),
  facebook: (<path d="M15 4h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V4Z" />),
  tiktok: (<><path d="M14 3v11.5a3.5 3.5 0 1 1-3-3.46" /><path d="M14 3c.3 2.7 2.1 4.6 5 5v3c-1.9 0-3.6-.6-5-1.7" /></>),
};

export default function Icon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
