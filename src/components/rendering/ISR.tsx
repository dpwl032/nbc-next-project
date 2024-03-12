import React from "react";
import type { RandomCat } from "@/types";

//주기적으로 업데이트
const ISR = async () => {
  const response = await fetch(`https://randomuser.me/api`, {
    next: {
      revalidate: 5,
    },
  });
  const { results } = await response.json();
  const cat: RandomCat = results[0];
  return (
    <div>
      <p>isr</p>
      <p>{cat.fact}</p>
      <p>{cat.length}</p>
    </div>
  );
};

export default ISR;
