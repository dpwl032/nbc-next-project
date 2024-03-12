import React from "react";
import type { RandomCat } from "@/types";

//매번 갱신
const SSR = async () => {
  const response = await fetch(`https://randomuser.me/api`, {
    cache: "no-cache",
  });
  const { results } = await response.json();
  const cat: RandomCat = results[0];
  return (
    <div>
      <p>ssr</p>
      <p>{cat.fact}</p>
      <p>{cat.length}</p>
    </div>
  );
};

export default SSR;
