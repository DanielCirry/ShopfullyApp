import { AxiosRequestConfig } from "axios";
import { IParamsFlyers } from "../store/flyers/types";
import { baseUrl } from "../store/flyers/constants";

const shopfullyBaseUrl = baseUrl as string;

export const getGetRequestConfig = (
  params?: IParamsFlyers
): AxiosRequestConfig => ({
  method: "GET",
  url: `${shopfullyBaseUrl}`,
});
