import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import { httpCommon } from '@/api/apiClient';

export function httpDelete<ResponseType>(
  pathname: string,
  params?: AxiosRequestConfig,
): Promise<AxiosResponse<ResponseType>> {
  return httpCommon.delete<ResponseType>(pathname, params);
}
