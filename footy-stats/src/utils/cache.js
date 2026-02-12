const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 timmar

export const getCachedData = (key) => {
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  const { data, timestamp } = JSON.parse(cached);
  const isExpired = Date.now() - timestamp > CACHE_DURATION;

  if (isExpired) {
    localStorage.removeItem(key);
    return null;
  }

  return data;
};

export const setCachedData = (key, data) => {
  localStorage.setItem(key, JSON.stringify({
    data,
    timestamp: Date.now()
  }));
};
