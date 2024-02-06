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
