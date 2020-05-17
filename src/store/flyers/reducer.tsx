import { Constants } from "./constants";
import { IFlyersState, IBasicFlyers, FlyersActions } from "./types";

const init: IFlyersState = {
  flyersData: [],
  flyersDataLoading: false,
  flyersDataError: null,
};

export function flyersReducer(
  state: IFlyersState = init,
  action: FlyersActions
): IFlyersState {
  switch (action.type) {
    case Constants.GET_FLYERS_DATA_BEGIN:
      return {
        ...state,
        flyersDataLoading: true,
        flyersDataError: null,
      };
    case Constants.GET_FLYERS_DATA_SUCCESS:
      return {
        ...state,
        flyersDataLoading: false,
        flyersData: action.payload.flyersData as IBasicFlyers[],
      };
    case Constants.GET_FLYERS_DATA_FAILURE:
      return {
        ...state,
        flyersDataLoading: false,
        flyersDataError: action.payload.error,
      };
    default:
      return state;
  }
}
