export interface IReview {
  id: number;
  createDate: string;
  userId: string;
  content: string;
  comments: IReviewComment[];
}

export interface IReviewComment {
  id: number;
  createDate: string;
  reviewerId: string;
  content: string;
}
