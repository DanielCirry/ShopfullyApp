import { AxiosRequestConfig } from "axios";
import { IParamsFlyers } from "../store/flyers/types";

const shopfullyBaseUrl = window.shopfully.configuration
  .shopfullyBaseUrl as string;

export const getGetRequestConfig = (
  params?: IParamsFlyers
): AxiosRequestConfig => ({
  method: "GET",
  url: `${shopfullyBaseUrl}`,
});
