import React, { PropsWithChildren, useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import "./style.scss";
import fetchData from "../../lib/fetchData";
import useSWR from "swr";
import CategoryService from "../../services/categoryService";
import Text from "../Text/Text";

type PropsData = {
  children?: React.ReactNode;
  data: any;
};

const fetcher = (url: string) => CategoryService.getTotalSpentTime(url);

function Badge({ data, children }: PropsData) {
  // function Badge({ data, children }: PropsWithChildren<PropsData>) {
  const [ressources, setRessources] = useState() as any;
  const {
    isLoading,
    error,
    data: spentTime,
  } = useSWR(
    children ? null : "/category/total-spent-time/" + data._id,
    fetcher,
    {
      suspense: true,
    }
  );

  const formatDisplay = (value: number) => {
    if (value < 10) return `0${value}`;
    return value;
  };

  let day, hour, minute, second, content;

  if (!children) {
    console.log(children);
    const { data } = spentTime.data;
    day = data.day;
    hour = data.hour;
    minute = data.minute;
    second = data.second;

    content = `${day === 0 ? "" : formatDisplay(day) + ":"}${formatDisplay(
      hour
    )}:${formatDisplay(minute)}:${formatDisplay(second)}`;
  }

  return (
    <div className={cn(`py-1 px-2 rounded-md linear-bg`)}>
      {children ? children : <Text>{content}</Text>}
    </div>
  );
}

export default Badge;
