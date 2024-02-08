import Http from "./http";

class TecnoService extends Http {
  static async getTecnos() {
    try {
      const res = await this.get("/tecno/all");
      return res;
    } catch (error) {
      throw error;
    }
  }

  static async createTecno(url: string, data: any) {
    try {
      const res = await this.post(url, data);
      return res;
    } catch (error) {
      throw error;
    }
  }
}

export default TecnoService;
