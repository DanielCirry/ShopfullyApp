import * as actions from "../actions/flyers";

const initialState = {
  flyersData: [],
  flyersDataLoading: false,
  flyersDataError: null,
  success: false,
};

export default function flyersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_FLYERS_DATA_BEGIN:
      return {
        ...state,
        flyersDataLoading: true,
        success: false,
        flyersDataError: null,
      };
    case actions.GET_FLYERS_DATA_SUCCESS:
      return {
        ...state,
        flyersDataLoading: false,
        success: true,
        flyersData: action.payload.flyersData,
      };
    case actions.GET_FLYERS_DATA_FAILURE:
      return {
        ...state,
        flyersDataLoading: false,
        flyersDataError: action.payload.flyersDataError,
      };
    default:
      return state;
  }
}
