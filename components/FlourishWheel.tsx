const domains = ["Learners", "Educators", "Leadership", "Schools", "Communities", "Societies"];
const colors = ["#0F4C81", "#1E9E6A", "#F5A623", "#0F4C81", "#1E9E6A", "#F5A623"];
const cx = 200, cy = 200, R = 142;

export default function FlourishWheel() {
  const petals = domains.map((d, i) => {
    const a = (Math.PI * 2 / 6) * i - Math.PI / 2;
    const x = cx + R * Math.cos(a);
    const y = cy + R * Math.sin(a);
    return (
      <g key={d}>
        <line x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(255,255,255,.18)" strokeWidth={1.5} />
        <circle cx={x} cy={y} r={33} fill={colors[i]} opacity={0.92} />
        <text x={x} y={y + 4} textAnchor="middle" className="wheel-label" fill="#fff">{d}</text>
      </g>
    );
  });

  return (
    <div className="wheel-wrap">
      <svg viewBox="0 0 400 400">
        <circle cx={cx} cy={cy} r={R + 33} fill="none" stroke="rgba(255,255,255,.10)" strokeDasharray="3 6" />
        {petals}
        <circle cx={cx} cy={cy} r={56} fill="#fff" />
        <text x={cx} y={cy - 6} textAnchor="middle" fontFamily="Montserrat" fontWeight={800} fontSize={12.5} fill="#0F4C81">
          FlourishScore™
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" fontFamily="Inter" fontSize={9.5} fill="#5C6773">
          baseline · insights · tracking
        </text>
      </svg>
    </div>
  );
}
