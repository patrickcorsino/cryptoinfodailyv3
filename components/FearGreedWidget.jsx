export default function FearGreedWidget({ data }) {
  if (!data) return null;

  const value = Number(data.value);
  let color = "#7788bb";
  if (value > 80) color = "#24f57a";
  else if (value > 60) color = "#57e0ff";
  else if (value > 40) color = "#ffe155";
  else if (value > 20) color = "#ff8a65";
  else color = "#ff3366";

  return (
    <div className="card flex flex-col items-center justify-center">
      <span className="font-semibold text-base mb-1">Fear &amp; Greed</span>
      <div className="flex items-center">
        <div
          className="rounded-full flex items-center justify-center font-bold"
          style={{
            background: "#181c26",
            color,
            fontSize: "2rem",
            width: 60,
            height: 60,
            boxShadow: `0 0 16px 3px ${color}60`,
            marginBottom: 6,
          }}
        >
          {data.value}
        </div>
      </div>
      <span className="text-xs opacity-70">{data.value_classification}</span>
    </div>
  );
}
