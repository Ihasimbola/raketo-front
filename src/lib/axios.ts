import axios, { AxiosResponse } from "axios";
import env from "react-dotenv";

const axiosInstance = axios.create({
  baseURL: env.API_URL,
});

axiosInstance.interceptors.request.use(
  function (config: any) {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
    }

    return config;
  },
  function (err) {
    return new Promise((res, rej) => rej(err));
  }
);

axiosInstance.interceptors.response.use(
  (response: any) => {
    // console.log("response from interceptor ", response);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);

    return response;
  },
  async (err: any) => {
    // console.log("4xx range => ", err);
    // if (err.response.status === 403) {
    //   const res: any = await refreshToken(localStorage.getItem("refreshToken"));
    //   console.log(res.response.status);
    //   if (res.response.status === 401) {
    //     return new Promise((res, rej) => rej(err));
    //   }
    //   localStorage.setItem("token", res.data.token);
    // }
    // return new Promise((res, rej) => res(err));
    // console.log(err.response.status);
    return Promise.reject(err);
  }
);

const refreshToken = async (refresh: string | null) => {
  const res = await axiosInstance.post("/users/auth", refresh);
  return res;
};

export default axiosInstance;
