export interface ReviewType {
  id: number;
  createDate: string;
  userId: string;
  content: string;
  comments: ReviewCommentType[];
}

export interface ReviewCommentType {
  id: number;
  createDate: string;
  reviewerId: string;
  content: string;
}
