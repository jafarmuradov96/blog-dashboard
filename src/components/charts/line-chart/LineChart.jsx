import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './LineChart.module.css';
import { getMonthAbbreviation } from '../../../utils/helpers';
import { useRef, useState, useEffect } from 'react';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend );
ChartJS.defaults.devicePixelRatio = 2;

export default function LineChart({ data }) {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);
  const labels = data?.map(item => getMonthAbbreviation(item?.month));
  const values = data?.map(item => item?.count);

  const createGradient = () => {
    if (!chartRef.current) return;
    const chart = chartRef.current;
    const { ctx, chartArea } = chart;

    if (!chartArea) return;
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, '#FFFFFF');   
    gradient.addColorStop(0.586538, '#CAD3FF');  
    gradient.addColorStop(1, '#8B6FDE');   
    setGradient(gradient);
  };

  useEffect(() => {
    if (!gradient) {
      createGradient();
    }
  }, [data, gradient]);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Created Blogs',
        data: values,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          
          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, '#FFFFFF');    
          gradient.addColorStop(0.586538, '#CAD3FF');  
          gradient.addColorStop(1, '#8B6FDE');   
          
          return gradient;
        },
        borderColor: '#8B6FDE',
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#FFFFFF',
        titleColor: '#8B6FDE',
        bodyColor: '#333333',
        borderColor: '#E4E4E4',
        borderWidth: 1,
        titleFont: {
          size: 13,
          weight: 'bold'
        },
        bodyFont: {
          size: 12
        },
        padding: 10,
        boxPadding: 6,
        displayColors: true
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        border: {
          display: false,
        },
        ticks: {
          color: 'rgba(58, 53, 65, 0.68)',
          font: {
            size: 12
          }
        }
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 80,
        border: {
          display: false
        },
        grid: {
          color: 'rgba(228, 228, 228, 0.3)',
          drawBorder: false
        },
        ticks: {
          stepSize: 10,
          color: 'rgba(58, 53, 65, 0.38)',
          font: {
            size: 12
          },
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <h4 className="chart-title">Blogs by Created date</h4>
      <div className={styles.chartWrapper}>
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
    </div>
  );
}
