import { IBasicFlyers } from "../store/flyers/types";

export const paginate = (
  flyers: Array<IBasicFlyers>,
  limit: number,
  page: number
) => {
  --page; // because pages logically start with 1, but technically with 0
  return flyers.slice(page * limit, (page + 1) * page);
};
