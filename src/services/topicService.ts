import Http from "./http";

export class TopicService extends Http {
  static async getTopics() {
    try {
      const res = await this.get("/topic");
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  static async createTopic(data: any) {
    try {
      const res = await this.post("/topic", data);
      return res;
    } catch (error) {
      throw error;
    }
  }

  static async updateTopic(id: string | number, data: any) {
    try {
      const res = await this.patch(`/topic/${id}`, data);
      return res;
    } catch (error) {
      throw error;
    }
  }
}
