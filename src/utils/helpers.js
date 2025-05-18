export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' }); 
  const year = date.getFullYear().toString().slice(-2); 
  const hours = date.getHours().toString().padStart(2, '0'); 
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day} ${month}. ${year}  |  ${hours}:${minutes}`;
}


export function truncateText(text, maxLength = 100) {
  if (!text) return '';
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + '...'
    : text;
}

export function getMonthAbbreviation(dateString) {
  const date = new Date(`${dateString}-01`); 
  return date.toLocaleString('en-US', { month: 'short' });
}


