import axios from "axios";
import axiosInstance from "../lib/axios";

class Http {
  static async get(url: string) {
    try {
      const res = await axiosInstance.get(url);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  static async post(url: string, data: any) {
    try {
      const res = await axiosInstance.post(url, data);
      return res;
    } catch (error: any) {
      console.error("Error catched at Http post => ", error);
      throw error;
    }
  }

  static async patch(url: string, data: any) {
    try {
      const res = await axiosInstance.patch(url, data);
      return res;
    } catch (error) {
      throw error;
    }
  }

  static async delete(url: string) {
    try {
      const res = await axiosInstance(url);
      return res;
    } catch (error) {
      throw error;
    }
  }
}

export default Http;
