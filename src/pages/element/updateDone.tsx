import { TopicService } from "../../services/topicService";

export const action = async ({ params, request }: any) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log(params.id)
    return null
    // const res = await TopicService.updateTopic(params.topicId, chronoData);
  } catch (error: any) {
    console.log("error updating chrono ", error.message)
    throw error;
  }
}