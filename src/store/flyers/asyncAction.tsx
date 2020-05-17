import axios from "axios";
import { Dispatch } from "redux";
import * as actions from "./actions";
import { getGetRequestConfig } from "../../globals/requestConfig";
import { FlyersActions, IBasicFlyers, IParamsFlyers } from "./types";

export const getFlyersData = async (
  dispatch: Dispatch<FlyersActions>,
  params?: IParamsFlyers
) => {
  dispatch(actions.getFlyersDataBegin());
  const config = getGetRequestConfig(params);

  try {
    let result = await axios.request<Array<IBasicFlyers>>(config);
    dispatch(actions.getFlyersDataSucess(result.data));
  } catch (error) {
    console.log(JSON.stringify(error));
    dispatch(
      actions.getFlyersDataFailure({
        message: "error GET FlyersData request",
        statusCode: 400,
      })
    );
  }
};
