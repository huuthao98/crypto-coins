/* eslint-disable import/no-anonymous-default-export */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosInst = axios.create({
  baseURL: (window as any).baseURL,
});

declare module "axios" {
  export interface AxiosInstance {
    request<T = any>(config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    put<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    patch<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
  }
}

class HttpService {
  private instance: AxiosInstance & { token?: string };
  constructor(ins: AxiosInstance) {
    ins.interceptors.response.use(
      function (response) {
        return response.data;
      },
      function (error) {
        if (error.response.status === 401) {
          localStorage.removeItem("2fa");
          window.location.href = "/auth/login";
          return;
        }
        return Promise.reject(error);
      }
    );
    this.instance = ins;
  }

  setToken(token: string) {
    this.instance.token = token;
    this.instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  get<T = any>(url: string, config?: AxiosRequestConfig<any>): Promise<T> {
    return this.instance.get<T>(url, config);
  }
  post<T = any>(url: string, data?: any, config?: any): Promise<T> {
    return this.instance.post(url, data, config);
  }
  put<T = any>(url: string, data?: any, config?: any): Promise<T> {
    return this.instance.put(url, data, config);
  }
  patch<T = any>(url: string, data?: any, config?: any): Promise<T> {
    return this.instance.patch(url, data, config);
  }
  delete<T = any>(url: string, config?: any): Promise<T> {
    return this.instance.delete(url, config);
  }
}

export default new HttpService(axiosInst);
