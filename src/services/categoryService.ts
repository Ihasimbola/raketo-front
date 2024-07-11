import Http from "./http";
import UserService from "./userService";

class CategoryService extends Http {
  static async getCategories() {
    try {
      const data = await this.get("/category");
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async createCategory(url: string, data: { name: string }) {
    try {
      const res: any = await this.post(url, data);
      return res;
    } catch (error) {
      throw error;
    }
  }

  static async getTotalSpentTime(url: string) {
    try {
      const res: any = await this.get(`${url}`);

      return res;
    } catch (error) {
      throw error;
    }
  }
}

export default CategoryService;
