import { EV_AXIOS_INSTANCE } from "./axiosInstance";

EV_AXIOS_INSTANCE.interceptors.request.use(function (config) {
    // Setting any headers if needed
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

EV_AXIOS_INSTANCE.interceptors.response.use(function (response) {
    // Modifying any response if needed
    return response;
  }, function (error) {
    return Promise.reject(error);
  });