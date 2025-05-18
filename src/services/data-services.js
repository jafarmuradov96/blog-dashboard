
export const getSummaryData = async () => {
  const res = await fetch('/data/summary.json');
  if (!res.ok) throw new Error('Failed to fetch summary data');
  return await res.json();
};

  export const getBlogsData = async () => {
    const res = await fetch('/data/blogs.json');
    if (!res.ok) throw new Error('Failed to fetch blogs');
    return await res.json();
  };
