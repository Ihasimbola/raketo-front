import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(
  function (config: any) {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        // Accept: "application/json",
        // "Content-Type": "application/json",
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
    // localStorage.setItem("token", response.data.token);
    // localStorage.setItem("refreshToken", response.data.refreshToken);

    return response;
  },
  async (err: any) => {
    const originalRequest = err.config;
    // console.log("4xx range => ", err);
    if (err.response.status === 403) {
      originalRequest._retry = true;
      const res: any = await refreshToken(localStorage.getItem("refreshToken"));

      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      return Promise.resolve(axiosInstance(originalRequest));
    } else if (err.response.status === 401) {
      return Promise.reject(err);
    } else {
      return err;
    }
  }
);

const refreshToken = async (refresh: string | null) => {
  try {
    const res = await axiosInstance.post("/users/auth/verifyRefresh", {
      refreshToken: refresh,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export default axiosInstance;
