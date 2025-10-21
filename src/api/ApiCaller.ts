import { api } from "./axios";

import type { EndpointType } from "./constants/endpoints";
import type AsyncHandler from "./AsyncHandler";
import type { AxiosRequestConfig } from "axios";

abstract class ApiCaller<T> {
  endpoint: EndpointType;
  config: AxiosRequestConfig | undefined;
  asyncHandler: AsyncHandler<T>;

  constructor(
    endpooint: EndpointType,
    asyncHandler: AsyncHandler<T>,
    config?: AxiosRequestConfig
  ) {
    this.endpoint = endpooint;
    this.config = config;
    this.asyncHandler = asyncHandler;
  }

  abstract fetch(): Promise<AsyncHandler<T>["callApi"]>;
}

export class GetApiCaller<T> extends ApiCaller<T> {
  async fetch(): Promise<AsyncHandler<T>["callApi"]> {
    return api.get(this.endpoint, this.config);
  }
}
