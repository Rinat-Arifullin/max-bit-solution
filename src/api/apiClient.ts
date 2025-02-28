import type { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php/`;

const httpCommon: AxiosInstance = axios.create({
  baseURL,
});

type PendingRequestsMap = Map<string, AbortController>;
const pendingRequests: PendingRequestsMap = new Map();
const getRequestKey = (config: AxiosRequestConfig): string => {
  const { method, url } = config;

  return [method, url].join("&");
};

httpCommon.interceptors.request.use((config) => {
  const requestKey = getRequestKey(config);

  if (pendingRequests.has(requestKey)) {
    const controller = pendingRequests.get(requestKey);
    controller?.abort();
  }

  const controller = new AbortController();
  config.signal = controller.signal;
  pendingRequests.set(requestKey, controller);

  return config;
});

httpCommon.interceptors.response.use(
  (response) => {
    const requestKey = getRequestKey(response.config);
    pendingRequests.delete(requestKey);

    return response;
  },
  (error: AxiosError) => {
    if (error.config) {
      const requestKey = getRequestKey(error.config);
      pendingRequests.delete(requestKey);
    }

    if (error.code === "ERR_CANCELED") return;

    return Promise.reject(error);
  },
);

export { httpCommon };
