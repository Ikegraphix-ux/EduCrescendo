import Icon, { IconName } from "./Icons";

export default function IconBadge({ name, tone }: { name: IconName; tone?: "green" | "gold" }) {
  return (
    <div className={`icon${tone ? ` ${tone}` : ""}`}>
      <Icon name={name} />
    </div>
  );
}
