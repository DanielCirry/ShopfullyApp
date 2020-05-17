import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { IError } from "../../types/general";

export interface IFlyersState {
  flyersData: Array<IBasicFlyers>;
  flyersDataLoading: boolean;
  flyersDataError: IError | null;
}

export interface IBasicFlyers {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  is_published: boolean;
  retailer: string;
  category: string;
}

export interface IParamsFlyers {
  page?: number;
  limit?: number;
}

export interface IGetFlyersResponse {
  results: Array<IBasicFlyers>;
  params: IParamsFlyers;
}

export type FlyersActions = ActionType<typeof actions>;
