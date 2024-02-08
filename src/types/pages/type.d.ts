export type ActionResType = {
  messageExist: boolean;
  message: string | "";
  categories: Array<any> | undefined;
  status: "success" | "warning" | "error";
};

export type TopicDataType = {
  title: string;
  description: string;
  tecnoId: string;
};

export type TopicsType = {
  description: string;
  isDone: boolean;
  spent_time: string;
  tecno: string;
  title: string;
  userId: string;
  _id: string;
};
