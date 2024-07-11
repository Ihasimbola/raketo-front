import React, { Children, PropsWithChildren, Suspense } from "react";
import Text from "../Text/Text";
import { cn } from "../../lib/utils";
import "./style.scss";
// import Badge from '../Badge/Badge'
import { lazy } from "react";
import type { TotalSpentTimeType } from "../../types/pages/type";
import CategoryService from "../../services/categoryService";
import Test from "./Test";
import { InfinitySpin } from "react-loader-spinner";
const Badge = lazy(() => import("../Badge/Badge"));

interface DataType {
  data: {
    itemsNumber: number;
    accumulatedHour: number;
  };
  totalSpentTime?: Promise<Array<TotalSpentTimeType>>;
  url?: string;
}

function Card({
  data,
  totalSpentTime,
  url,
  children,
}: PropsWithChildren<DataType>) {
  const etiquette: any = Children.map(
    children,
    (child: any, idx: number) => child
  )?.filter((item: any, idx: number) => idx > 0)[0];

  const childrenArr = Children.toArray(children);

  // const getSpentTime = async () => {
  //   try {
  //     const res = await CategoryService.getTotalSpentTime();
  //     console.log(res);
  //   } catch (error: any) {
  //     console.log("Error in card component ", error.message);
  //   }
  // }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className={cn("rounded-md w-fit card-container cursor-pointer")}>
        <div
          className={cn(
            `${etiquette ? "justify-between flex flex-row w-full" : "self-end"}`
          )}
        >
          <div className="">{etiquette}</div>
          <div>
            <Suspense
              fallback={
                <div className={cn("self-end")}>
                  <InfinitySpin width="100" color="#e2e8eb" />
                </div>
              }
            >
              <Badge propsData={data} url={`${url}/total-spent-time`} />
            </Suspense>
          </div>
        </div>
        <div>{childrenArr[0]}</div>
        <div className="self-end">
          <Suspense
            fallback={
              <div className={cn("self-end")}>
                <InfinitySpin width="100" color="#e2e8eb" />
              </div>
            }
          >
            <Badge propsData={data} url={`${url}/total-items`}></Badge>
          </Suspense>
        </div>
      </div>
    </Suspense>
  );
}

export default Card;
