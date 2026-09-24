export default function FieldTags({ tags, center }: { tags: string[]; center?: boolean }) {
  return (
    <div className={`form-fields${center ? " center" : ""}`}>
      {tags.map((t) => (
        <span key={t} className="field-tag">{t}</span>
      ))}
    </div>
  );
}
