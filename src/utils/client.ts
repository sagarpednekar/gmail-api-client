import { Axios } from "./axios";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export class Client extends Axios {
  public constructor() {
    super();
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.delete = this.delete.bind(this);
    // this.success = this.success.bind(this);
  }

  /**
   *
   * @param url
   * @param config
   * @returns
   */
  public get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.get(url, config);
  }

  /**
   *
   * @param url
   * @param data
   * @param config
   * @returns
   */
  public post<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.post(url, data, config);
  }

  /**
   *
   * @param url
   * @param config
   * @returns
   */
  public delete<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.delete(url, config);
  }

  /**
   *
   * @param response
   * @returns
   */
//   public success<T>(response: AxiosResponse<T>): T {
//     return response.data;
//   }

  /**
   *
   * @param error
   */
  public error<T>(error: AxiosError<T>): void {
    throw error;
  }
}

export const client = new Client();
