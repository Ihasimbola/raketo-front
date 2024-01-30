import Http from "./http";

class CategoryService extends Http {
  static async getCategories() {
    try {
      const data = await this.get("/category/all");
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default CategoryService;
