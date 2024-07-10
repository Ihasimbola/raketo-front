import React, { Children, PropsWithChildren, Suspense } from "react";
import Text from "../Text/Text";
import { cn } from "../../lib/utils";
import "./style.scss";
// import Badge from '../Badge/Badge'
import { lazy } from "react";
import type { TotalSpentTimeType } from "../../types/pages/type";
import CategoryService from "../../services/categoryService";
import Test from "./Test";
const Badge = lazy(() => import("../Badge/Badge"));

interface DataType {
  data: {
    itemsNumber: number;
    accumulatedHour: number;
  };
  totalSpentTime?: Promise<Array<TotalSpentTimeType>>;
}

function Card({ data, totalSpentTime, children }: PropsWithChildren<DataType>) {
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
    // <Suspense fallback={<p>Loading...</p>}>
    <div className={cn("rounded-md w-fit card-container cursor-pointer")}>
      <div
        className={cn(
          `${etiquette ? "justify-between flex flex-row w-full" : "self-end"}`
        )}
      >
        <div className="">{etiquette}</div>
        <Suspense fallback={<p>Loading...</p>}>
          <Badge data={data} />
        </Suspense>
      </div>
      <div>{childrenArr[0]}</div>
      <div className="self-end">
        <Badge data={data}>
          <Text color="light-800">Singa 8</Text>
        </Badge>
      </div>
    </div>
    // </Suspense>
  );
}

export default Card;
