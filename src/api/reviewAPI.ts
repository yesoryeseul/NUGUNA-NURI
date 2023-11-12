import type { IReview, IReviewComment } from '@/types';

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const ReviewApi = async (): Promise<IReview[] | undefined> => {
  if (!serverURL) {
    console.log('서버 세팅 에러!');
    return;
  }
  try {
    const res = await fetch(`${serverURL}/reviews`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });
    const data: IReview[] = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const ReviewPost = async (newData: IReview): Promise<IReview[] | undefined> => {
  if (!serverURL) {
    console.log('서버 세팅 에러!');
    return;
  }
  try {
    const res = await fetch(`${serverURL}/reviews`, {
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

export const ReviewCommentPost = async (
  newData: IReviewComment,
): Promise<IReviewComment[] | undefined> => {
  if (!serverURL) {
    console.log('서버 세팅 에러!');
    return;
  }
  try {
    const res = await fetch(`${serverURL}/reviews`, {
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

export const ReviewDelete = async (id: number): Promise<IReviewComment[] | undefined> => {
  if (!serverURL) {
    console.log('서버 세팅 에러!');
    return;
  }
  try {
    const res = await fetch(`${serverURL}/reviews/${id}`, {
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

export const ReviewPatch = async (id: number, editData: string): Promise<IReview | undefined> => {
  if (!serverURL) {
    console.log('서버 세팅 에러!');
    return;
  }
  try {
    const res = await fetch(`${serverURL}/reviews/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: editData }),
      cache: 'no-store',
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
