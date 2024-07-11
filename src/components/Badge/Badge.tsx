import React, { PropsWithChildren, useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import "./style.scss";
import fetchData from "../../lib/fetchData";
import useSWR from "swr";
import CategoryService from "../../services/categoryService";
import Text from "../Text/Text";

type PropsData = {
  children?: React.ReactNode;
  propsData: any;
  url?: string;
};

const fetcher = (url: string) => CategoryService.getTotalSpentTime(url);

function Badge({ propsData, children, url }: PropsData) {
  // function Badge({ data, children }: PropsWithChildren<PropsData>) {
  const [ressources, setRessources] = useState() as any;
  const { isLoading, error, data } = useSWR(
    children ? null : `${url}/${propsData._id}`,
    fetcher,
    {
      suspense: true,
    }
  );

  // let day, hour, minute, second, content;

  // if (!children) {
  //   const { data } = spentTime.data;
  //   day = data.day;
  //   hour = data.hour;
  //   minute = data.minute;
  //   second = data.second;

  //   content = `${day === 0 ? "" : formatDisplay(day) + ":"}${formatDisplay(
  //     hour
  //   )}:${formatDisplay(minute)}:${formatDisplay(second)}`;
  // }

  return (
    <div className={cn(`py-1 px-2 rounded-md linear-bg`)}>
      {children ? children : <Text>{data.data}</Text>}
    </div>
  );
}

export default Badge;
