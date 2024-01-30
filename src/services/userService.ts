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
      throw error;
    }
  }

  static async userIsAuthentic() {
    try {
      const res = await this.post("/users/auth", { message: "token" });
      return res;
    } catch (error: any) {
      console.error(
        "Error catched at UserService.userIsAuthentic post => ",
        error.message
      );
      throw error;
    }
  }
}

export default UserService;
