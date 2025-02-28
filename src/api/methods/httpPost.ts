import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import { httpCommon } from '@/api/apiClient';

export function httpPost<ResponseType, RequestBodyType>(
  pathname: string,
  data?: RequestBodyType,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<ResponseType>> {
  return httpCommon.post<ResponseType>(pathname, data, config);
}
