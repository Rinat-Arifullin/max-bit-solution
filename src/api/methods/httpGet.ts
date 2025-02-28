import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import { httpCommon } from '@/api/apiClient';

export function httpGet<ResponseType>(
  pathname: string,
  params?: AxiosRequestConfig,
): Promise<AxiosResponse<ResponseType>> {
  return httpCommon.get<ResponseType>(pathname, params);
}
