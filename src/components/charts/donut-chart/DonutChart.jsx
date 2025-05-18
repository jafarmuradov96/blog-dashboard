import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "./DonutChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.devicePixelRatio = 2;

export default function DonutChart({ data }) {
  const labels = data?.map((item) => item?.category);
  const values = data?.map((item) => item?.count);
  const colors = ["#9A59F5", "#F29C5B", "#6EBE34", "#FED739", "#7F5DC9", "#F355C9"];
  const total = values.reduce((acc, val) => acc + val, 0);
  const mid = Math.ceil(data.length / 2);
  const left = data.slice(0, mid);
  const right = data.slice(mid);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
        hoverBorderColor: colors,
        borderWidth: 0,
        borderRadius: 5,
        spacing: 10,
        cutout: "86%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw;
            return `${label}: ${value}`;
          },
        },
      },
    },
    rotation: -90,
    circumference: 180,
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="chart-container">
      <h4 className="chart-title">Blogs by Category</h4>
      <div className={styles.chartWrapper}>
        <div className={styles.chartContainer}>
          <div className={styles.chartOuter}></div>
          <div className={styles.chartInner}></div>
          <div style={{ position: "relative", zIndex: 3 }}>
            <Doughnut data={chartData} options={options} />
          </div>
        </div>

        <div className={styles.centerText}>
          <div className={styles.total}>{total}</div>
          <div className={styles.divider}></div>
          <div className={styles.label}>Total</div>
        </div>
      </div>

      <ul className={styles.legendGrid}>
        <div className={styles.legendCol}>
          {left.map((item, i) => (
            <li key={item.category}>
              <span
                className={styles.dot}
                style={{ backgroundColor: colors[i] }}
              ></span>
              {item.category}
              <span className={styles.count}>{item.count}</span>
            </li>
          ))}
        </div>

        <div className={styles.legendCol}>
          {right.map((item, i) => (
            <li key={item.category}>
              <span
                className={styles.dot}
                style={{ backgroundColor: colors[i + left.length] }}
              ></span>
              {item.category}
              <span className={styles.count}>{item.count}</span>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
