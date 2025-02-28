import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import { httpCommon } from '@/api/apiClient';

export function httpPatch<ResponseType, RequestBodyType>(
  pathname: string,
  data?: RequestBodyType,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<ResponseType>> {
  return httpCommon.patch<ResponseType>(pathname, data, config);
}
