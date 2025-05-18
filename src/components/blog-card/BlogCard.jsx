import Card from '../common/card/Card';
import styles from './BlogCard.module.css';
import dateIcon from '../../assets/icons/date.svg';
import userIcon from '../../assets/icons/user-view.svg';
import categoryIcon from '../../assets/icons/category.svg';
import copyIcon from '../../assets/icons/copy.svg';
import unionIcon from '../../assets/icons/union.svg';
import { formatDate, truncateText } from '../../utils/helpers';
import { useState } from 'react';

export default function BlogCard({ blog }) {
  const [copied, setCopied] = useState(false);
  const { title, writer, date, views, category, content } = blog;

  const handleCopy = () => {
    navigator.clipboard.writeText(writer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Card>
      <h3 className={styles.blogTitle}>{truncateText(title, 47)}</h3>
      <p className={styles.blogWriter}>
        <div>Writer: <span className={styles.writerSpan}>{writer}</span></div>
        <div className={styles.copyIcon} onClick={handleCopy}>
             <img src={copyIcon} alt="copy" />
             <div className={styles.unionTooltip}>
                <img src={unionIcon} alt="tooltip-bg" className={styles.tooltipBg} />
                <span className={styles.tooltipText}>{copied ? 'Copied!' : 'Copy'}</span>
             </div>
        </div>
      </p>
      <div className={styles.divider}></div>
      <div className={styles.blogMeta}>

        <div className={styles.meta}>
           <img src={dateIcon} alt="date" /> 
           <div className={styles.metaText}>
              <span style={{fontWeight: 500}}>Date:</span> 
              <span>{formatDate(date)}</span>
           </div>
        </div>

        <div className={styles.meta}>
            <img src={userIcon} alt="views" />
            <div className={styles.metaText}>
              <span style={{fontWeight: 500}}>View:</span>
              <span>{views}</span>
            </div>
        </div>
        <div className={styles.meta}>
            <img src={categoryIcon} alt="category" />
            <div className={styles.metaText}>
              <span style={{fontWeight: 500}}>{category}</span>
            </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <p className={styles.blogDesc}>{truncateText(content, 150)}</p>
    </Card>
  );
}
