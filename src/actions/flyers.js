import axios from "axios";
import { getGetRequestConfig, ShopfullyBaseUrl } from "../config";

export const GET_FLYERS_DATA_BEGIN = "GET_FLYERS_DATA_BEGIN";
export const GET_FLYERS_DATA_SUCCESS = "GET_FLYERS_DATA_SUCCESS";
export const GET_FLYERS_DATA_FAILURE = "GET_FLYERS_DATA_FAILURE";

export const getFlyersData = () => {
  const getFlyersDataBegin = () => ({
    type: GET_FLYERS_DATA_BEGIN,
  });

  const getFlyersDataSucess = (flyersData) => ({
    type: GET_FLYERS_DATA_SUCCESS,
    payload: { flyersData },
  });

  const getFlyersDataFailure = (flyersError) => ({
    type: GET_FLYERS_DATA_FAILURE,
    payload: { flyersError },
  });

  const requestConfig = getGetRequestConfig(ShopfullyBaseUrl, {});

  return async (dispatch) => {
    dispatch(getFlyersDataBegin());

    try {
      const response = await axios(requestConfig);
      const flyersData = response.data.map((item) => ({
        id: item.id,
        title: item.title,
        start_date: item.start_date,
        end_date: item.end_date,
        is_published: item.is_published,
        retailer: item.retailer,
        category: item.category,
      }));

      dispatch(getFlyersDataSucess(flyersData));
    } catch (error) {
      dispatch(getFlyersDataFailure(error.response));
    }
  };
};
