import { ChangeEventHandler } from 'react';

export type IRatingStar = {
  rating: number;
  starsCount: number;
  handleStarsCountChange: ChangeEventHandler<HTMLInputElement>;
}
