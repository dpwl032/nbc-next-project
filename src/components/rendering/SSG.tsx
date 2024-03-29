import React from "react";
import type { RandomCat } from "@/types";

//최초 build 한 값 계속 보여주기
const SSG = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "force-cache",
  });
  const results = await response.json();
  const cat: RandomCat = results;
  return (
    <div>
      <p>ssg</p>
      <p>{cat.fact}</p>
      <p>{cat.length}</p>
    </div>
  );
};

export default SSG;
