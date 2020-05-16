import axios from "axios";

export const registerAxiosResponseInterceptor = (store) =>
  axios.interceptors.request.use((config) => {});
