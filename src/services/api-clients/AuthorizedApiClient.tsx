import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { DeviceEventEmitter, Platform } from "react-native";
import { authorizationService } from "../AuthorizationService";
import DeviceInfo from "expo-device";
import { getSecureData, removeToken } from "@/utils/keychainStorage";

let failedQueue: any = [];

const forceLogout = async () => {
  DeviceEventEmitter.emit("authcomponent.session.expired");
};

export const createAuthorizedApiClient = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
  });

  const processQueue = (error: any, accessToken?: string) => {
    failedQueue.forEach((prom: any) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve({ accessToken });
      }
    });
    failedQueue = [];
  };

  const onRequest = async (request: AxiosRequestConfig) => {
    let accessToken = await getSecureData("token");
    const httpClient = "Axios";
    const platform = `${Platform.OS}/${DeviceInfo.getSystemVersion()}`;
    const security = "U";
    const os = `${
      Platform.OS === "ios" ? "ios" : DeviceInfo.getBaseOsSync()
    }/${DeviceInfo.getSystemVersion()}`;
    const localization = authorizationService.getLocale();
    const mobileAppNameAndVersion = `${DeviceInfo.getApplicationName()}/${DeviceInfo.getVersion()}`;

    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
      request.headers["user-agent"] = `å`;
    }
    return request;
  };

  const onResponseSuccess = (response: AxiosResponse) => {
    if (response.message === "Network Error") {
      DeviceEventEmitter.emit("network_error");
    } else if (response.message === "Request failed with status code 401") {
      DeviceEventEmitter.emit("authcomponent.session.expired");
      removeToken("token");
    }

    return response;
  };

  const onResponseFailed = (error: AxiosError) => {
    if (error.message === "Network Error") {
      DeviceEventEmitter.emit("network_error");
    } else if (error.message === "Request failed with status code 401") {
      DeviceEventEmitter.emit("authcomponent.session.expired");
      removeToken("token");
    }
    throw error;
  };

  instance.interceptors.request.use(onRequest);
  instance.interceptors.response.use(onResponseSuccess, onResponseFailed);

  return instance;
};
