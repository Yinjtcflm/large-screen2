import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { baseEchartOptions } from "../shared/base-echart-options";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: "上城区公安局", 2011: 4, 2012: 3 },
    { name: "下城区公安局", 2011: 4, 2012: 3 },
    { name: "拱墅区公安局", 2011: 4, 2012: 3 },
    { name: "西湖区公安局", 2011: 5, 2012: 6 },
    { name: "滨江区公安局", 2011: 4, 2012: 3 },
    { name: "萧山区公安局", 2011: 4, 2012: 7 },
    { name: "钱塘区公安局", 2011: 8, 2012: 3 },
    { name: "临平区公安局", 2011: 4, 2012: 9 },
    { name: "余杭区公安局", 2011: 4, 2012: 3 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "上城区公安局", 2011: 4, 2012: 2 },
        { name: "下城区公安局", 2011: 2, 2012: 5 },
        { name: "拱墅区公安局", 2011: 4, 2012: Math.random() * 10 },
        { name: "西湖区公安局", 2011: 3, 2012: 6 },
        { name: "滨江区公安局", 2011: 6, 2012: 1 },
        { name: "萧山区公安局", 2011: 8, 2012: Math.random() * 10 },
        { name: "钱塘区公安局", 2011: 8, 2012: 8 },
        { name: "临平区公安局", 2011: 3, 2012: 5 },
        { name: "余杭区公安局", 2011: 2, 2012: 5 },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLabel: { show: false },
        },
        yAxis: {
          axisTick: { show: false },
          type: "category",
          data: data.map((i) => i.name),
          axisLabel: {
            formatter(val) {
              return val.replace("公安局", "\n公安局");
            },
          },
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: data.map((i) => i[2011]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "#2034f9" },
                  { offset: 1, color: "#04a1ff" },
                ]),
              },
            },
          },
          {
            name: "2012年",
            type: "bar",
            data: data.map((i) => i[2012]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "#b92ae8" },
                  { offset: 1, color: "#6773e7" },
                ]),
              },
            },
          },
        ],
      })
    );
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);
  return (
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart" />
      <div className="legend">
        <span className="first" />
        破案排名1
        <span className="second" />
        破案排名2
      </div>
    </div>
  );
};
