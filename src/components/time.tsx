import React from "react";
import { useState } from "react";

function Time() {
  const [date, setDate] = useState("");

  const getNewDate = () => {
    const time = new Date();
    const year = time.getFullYear(); //年
    const month = time.getMonth() + 1; //月
    const day = time.getDate(); //日
    const hour = time.getHours(); //时
    const m = time.getMinutes(); //分
    const minutes = m <= 9 ? "0" + m : m;
    const s = time.getSeconds(); //秒
    const seconds = s <= 9 ? "0" + s : s;
    const t =
      year +
      "年" +
      month +
      "月" +
      day +
      "日" +
      " " +
      hour +
      ":" +
      minutes +
      ":" +
      seconds;
    setDate(t);
  };
  setInterval(getNewDate, 1000);

  return <div>{date}</div>;
}
export default Time;
