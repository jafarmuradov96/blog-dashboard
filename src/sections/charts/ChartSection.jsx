import BarViewChart from '../../components/charts/bar-chart/BarViewChart';
import DonutChart from '../../components/charts/donut-chart/DonutChart';
import LineChart from '../../components/charts/line-chart/LineChart';
import Card from '../../components/common/card/Card';
import styles from './ChartSection.module.css';

export default function ChartSection({ summary }) {
  const { byCategory, byCreatedDate, byView } = summary;

  const styleCard = {
      padding: '9px 18px 16px 18px', 
      maxWidth: '100%'
  };
  
  return (
    <section className={styles.chartSection}>
      <div className={styles.grid}>
        {byCategory && <Card style={styleCard}>
          <DonutChart data={byCategory} />
        </Card>}

        {byCreatedDate && <Card style={styleCard}>
          <LineChart data={byCreatedDate} />
        </Card>}

        {byView && <Card style={styleCard}>
         <BarViewChart data={byView} />
        </Card>}
      </div>
    </section>
  );
}
