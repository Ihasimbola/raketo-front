import React, { forwardRef } from 'react'
import Text from '../Text/Text';
import "./style.scss";
import { useMatch, useMatches } from 'react-router-dom';

// const urls = [
//   "Home",
//   "User",
//   "Details"
// ];

type ItemProps = {
  item: string,
  index: number,
  itemsGap?: number,
}

export type Ref = HTMLDivElement;

// export const BreadcrumbsVariant = cva(
//   "cursor-pointer w-fit crumbs-item transform",
//   {
//     variants: {
//       bg: { 
//         "blue-500": "bg-blue-500",
//         "blue-600": "bg-blue-600",
//         "blue-700": "bg-blue-700",
//         "blue-800": "bg-blue-800",
//       },
//       textColor: {
//         white: "text-white",
//         "light-500": "text-gray-500",
//         "light-600": "text-gray-600",
//         "light-700": "text-gray-700",
//         "light-800": "text-gray-800",
//         black: "text-black"
//       },
//       hover: {
//         "hover-600": "text-gray-600",
//         "hover-700": "text-gray-700",
//         "hover-800": "text-gray-800",
//         "hover-black": "black",
//       }
//     },
//     defaultVariants: {
//       bg: "blue-700",
//       textColor: 'white',
//     }
//   }
// )

const BreadcrumbsItem = forwardRef<Ref, ItemProps>(({ item, index, itemsGap = -7 }, ref) => {
  const content = (
    <li
      style={{
        transform: `translateX(${index * itemsGap}px)`
      }}
      className="cursor-pointer bg-blue-700 w-fit crumbs-item transform"
    >
      <Text
        color="white"
        size="xs"
        hover="text-hover"
        weight="bold"
        className='capitalize'
      >
        {item}
      </Text>
    </li>
  );

  return content;
})

function Breadcrumbs() {
  const matches = useMatches();
  // console.log(matches)
  let urls = matches.map((item: any) => {
    if (item.pathname === "/") return "Home";
    return item.pathname.substr(1);
  });
  if (urls.every((url: string) => url === "Home")) {
    urls = ["Home"];
  } else {
    urls.shift();
  }

  return (
    <ul className="flex flex-row items-center list-style-none list-container">
      {
        urls.map((url: string, idx: number) => (
          <BreadcrumbsItem item={url} index={idx} key={idx} />
        ))
      }
    </ul>
  )
}

export default Breadcrumbs