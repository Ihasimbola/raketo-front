import { TopicService } from "../../services/topicService";

export const action = async ({ params, request }: any) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const res = await TopicService.updateTopic(params.id, data);
    return res;
  } catch (error: any) {
    console.log("error updating chrono ", error.message)
    throw error;
  }
}