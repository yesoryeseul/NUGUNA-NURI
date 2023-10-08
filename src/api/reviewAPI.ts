// import { ReviewType } from '@/types/review/types';

const ReviewApi = async () => {
  const url = 'http://localhost:3001/reviews';
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    return res;
  } catch (error) {
    console.error(error);
  }
  // return "";
};

export default ReviewApi;
