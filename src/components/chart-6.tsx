import React, { useEffect, useRef } from "react";

export const Chart6 = () => {
  const divRef = useRef(null);
  useEffect(() => {}, []);
  return (
    <div className="bordered 籍贯分布">
      <h2>全兰州市犯罪人员籍贯分布地</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
