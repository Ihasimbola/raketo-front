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
  const { isLoading, error, data } = useSWR(
    children ? null : `${url}/${propsData._id}`,
    fetcher,
    {
      suspense: true,
      shouldRetryOnError: false,
    }
  );

  return (
    <div className={cn(`py-1 px-2 rounded-md linear-bg`)}>
      {children ? children : <Text>{data.data}</Text>}
    </div>
  );
}

export default Badge;
