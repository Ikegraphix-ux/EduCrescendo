import Icon from "./Icons";

export default function Stepper({ steps }: { steps: string[] }) {
  return (
    <div className="stepper center" style={{ justifyContent: "center", marginTop: 28, flexWrap: "wrap", rowGap: 12 }}>
      {steps.map((s, i) => (
        <div key={s} style={{ display: "contents" }}>
          <div className="step">{s}</div>
          {i < steps.length - 1 && (
            <div className="arrow">
              <Icon name="chevron" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
