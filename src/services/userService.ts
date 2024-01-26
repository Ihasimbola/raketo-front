import { AxiosError } from "axios";
import Http from "./http";

class UserService extends Http {
  static async login(
    url: string,
    data: { username: string; password: string }
  ) {
    try {
      const res = await this.post(url, data);
      return res;
    } catch (error: any) {
      // const e = new AxiosError(error.message);
      // console.log(error);
      throw error;
    }
  }
}

export default UserService;
