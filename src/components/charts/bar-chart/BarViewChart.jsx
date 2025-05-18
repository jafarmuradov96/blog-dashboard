import styles from './BarViewChart.module.css';

export default function BarViewChart({ data }) {
  if (!data || data.length === 0) return null;

  const totalViews = data.reduce((sum, item) => sum + item.views, 0);
  const getPercentage = (views) => {
    return ((views / totalViews) * 100).toFixed(1);
  };

  return (
    <div className='chart-container'>
      <h4 className='chart-title'>Blogs by View</h4>
      <ul className={styles.list}>
        {data.map((item) => {
          const percentage = getPercentage(item.views);
          return (
            <li key={item.category} className={styles.item}>
              <div className={styles.barContainer}>
                <span className={styles.label}>{item.category}</span>
                <span className={styles.value}>{percentage}%</span>
              </div>
              <div className={styles.barWrapper}>
                <div 
                  className={styles.bar} 
                  style={{ width: `${percentage}%` }}
                  title={`${item.views.toLocaleString()} views`}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
