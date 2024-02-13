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

type Spent_TimeType = {
  day: number;
  hour: number;
  minute: number;
  second: number;
};

export type TopicsType = {
  description: string;
  isDone: boolean;
  spent_time: Spent_TimeType;
  tecno: string;
  title: string;
  userId: string;
  _id: string;
};
