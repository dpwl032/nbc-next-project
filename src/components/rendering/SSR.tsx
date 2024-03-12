import React from "react";
import type { RandomCat } from "@/types";

//매번 갱신
const SSR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });
  const results = await response.json();
  const cat: RandomCat = results;
  return (
    <div>
      <p>ssr</p>
      <p>{cat.fact}</p>
      <p>{cat.length}</p>
    </div>
  );
};

export default SSR;
