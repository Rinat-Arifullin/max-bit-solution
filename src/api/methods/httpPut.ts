import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import { httpCommon } from '@/api/apiClient';

export function httpPut<ResponseType, RequestBodyType>(
  pathname: string,
  data?: RequestBodyType,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<ResponseType>> {
  return httpCommon.put<ResponseType>(pathname, data, config);
}
