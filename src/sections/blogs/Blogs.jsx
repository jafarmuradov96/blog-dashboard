import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './Blogs.module.css';
import BlogCard from '../../components/blog-card/BlogCard';
import Loader from '../../components/common/loader/Loader';

const ITEMS_PER_PAGE = 12;

export default function Blogs({ blogs }) {
  const [visibleBlogs, setVisibleBlogs] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    if (blogs.length > 0) {
      const initial = blogs.slice(0, ITEMS_PER_PAGE);
      setVisibleBlogs(initial);
    }
  }, [blogs]);

const fetchMoreData = () => {
  if (isLoading || !hasMore) return;

  setIsLoading(true); 

  setTimeout(() => {
    const nextPage = page + 1;
    const start = (nextPage - 1) * ITEMS_PER_PAGE;
    const end = nextPage * ITEMS_PER_PAGE;
    const newBlogs = blogs.slice(start, end);

    setVisibleBlogs(prev => [...prev, ...newBlogs]);
    setPage(nextPage);
    setIsLoading(false); 

    if (end >= blogs.length) {
      setHasMore(false);
    }
  }, 1000);
};



  return (
    <InfiniteScroll
      dataLength={visibleBlogs.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loader />}
    >
      <div className={styles.blogsContainer}>
        {visibleBlogs.map((blog, idx) => (
          <BlogCard key={idx} blog={blog} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
