import { action } from "typesafe-actions";
import { Constants } from "./constants";
import { IBasicFlyers } from "./types";
import { IError } from "../../types/general";

export const getFlyersDataBegin = () => action(Constants.GET_FLYERS_DATA_BEGIN);

export const getFlyersDataSucess = (flyersData: Array<IBasicFlyers>) =>
  action(Constants.GET_FLYERS_DATA_SUCCESS, { flyersData });

export const getFlyersDataFailure = (error: IError) =>
  action(Constants.GET_FLYERS_DATA_FAILURE, { error });
