console.log(window.shopfully);
export const ShopfullyBaseUrl = window.shopfully.configuration.shopfullyBaseUrl;

export const getGetRequestConfig = (url, params = {}) => {
  return {
    method: "GET",
    url: url,
    params: params,
    json: true,
  };
};
