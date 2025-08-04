"use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

export default function SparklineChart({ data, color = "green" }) {
  if (!data || data.length === 0) return <div className="h-5" />;
  return (
    <Line
      data={{
        labels: data.map((_, i) => i),
        datasets: [
          {
            data,
            borderColor: color === "green" ? "#24f57a" : "#ff3366",
            backgroundColor: "transparent",
            pointRadius: 0,
            borderWidth: 2,
            tension: 0.4,
          },
        ],
      }}
      options={{
        elements: { point: { radius: 0 } },
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: { x: { display: false }, y: { display: false } },
      }}
      height={28}
      width={80}
    />
  );
}

