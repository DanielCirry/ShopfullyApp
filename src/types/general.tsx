export interface RequestConfig {
  method: string;
  url: string;
  headers?: String;
  params?: object;
  json: boolean;
}

export interface IError {
  message: string;
  statusCode?: number;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
