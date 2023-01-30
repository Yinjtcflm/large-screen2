import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart13 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        xAxis: {
          data: [
            "东岗",
            "段家滩",
            "雁北",
            "五泉山",
            "中山",
            "庆阳",
            "武都",
            "酒泉",
            "天水路",
          ],
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: "#083B70" },
          },
          axisLabel: {
            formatter(val) {
              if (val.length > 2) {
                const array = val.split("");
                array.splice(2, 0, "\n");
                return array.join("");
              } else {
                return val;
              }
            },
          },
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: "#083B70" },
          },
        },
        series: [
          {
            type: "bar",
            data: [40, 30, 23, 20, 35, 10, 25, 30, 39],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#0a97fb",
              },
              {
                offset: 1,
                color: "#1e34fa",
              },
            ]),
          },
        ],
      })
    );
  }, []);
  return <div ref={divRef} className="chart"></div>;
};
