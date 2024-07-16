import Http from "./http";

export default class ImageService extends Http {
  static async getImage(url: string) {
    try {
      const data = await this.get(url);
      return data;
    } catch (error: any) {
      throw Error(error.message);
    }
  }
}
