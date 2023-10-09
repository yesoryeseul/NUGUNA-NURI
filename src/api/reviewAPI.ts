import { ReviewCommentType, ReviewType } from '@/types/review/types';

export const ReviewApi = async () => {
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

export const ReviewPost = async (newData: ReviewType) => {
  const url = 'http://localhost:3001/reviews';
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
      cache: 'no-store',
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const ReviewCommentPost = async (newData: ReviewCommentType) => {
  const url = 'http://localhost:3001/reviews';
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
      cache: 'no-store',
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const ReviewDelete = async (id: number) => {
  const url = `http://localhost:3001/reviews/${id}`;
  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const ReviewPatch = async (id: number, editData: string) => {
  const url = `http://localhost:3001/reviews/${id}`;
  try {
    const res = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editData),
      cache: 'no-store',
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
