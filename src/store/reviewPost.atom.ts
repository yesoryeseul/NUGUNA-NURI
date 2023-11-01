import { atom } from 'jotai';

import { IReview } from '@/types';

export const reviewPostAtom = atom<IReview[]>([]);
