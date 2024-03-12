"use client";

import React, { useEffect, useState } from "react";
import { RandomCat } from "@/types";

const CSR = () => {
  const [cat, setCat] = useState<RandomCat | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const results = await response.json();
      setCat(results);
    };

    fetchUser();
  }, []);

  if (!cat) {
    return <div>로딩중...</div>;
  }
  return (
    <div>
      <p>csr</p>
      <p>{cat.fact}</p>
      <p>{cat.length}</p>
    </div>
  );
};

export default CSR;
