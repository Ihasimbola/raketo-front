import React from "react";
import useSWR from "swr";

type Props = {};

function Test({}: Props) {
  const { error, data, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    (url) => fetch(url).then((res) => res.json()),
    { suspense: true }
  );

  return (
    <div>
      {data.map((post: any) => (
        <p key="post.id">{post.title}</p>
      ))}
    </div>
  );
}

export default Test;
