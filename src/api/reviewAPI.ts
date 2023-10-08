const ReviewApi = async () => {
  const url = 'http://localhost:3001/reviews';
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default ReviewApi;
