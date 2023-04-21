import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";

export const Chart12 = () => {
  const divRef = useRef(null);
  const colors = [
    "#F46064",
    "#F38E1C",
    "#1CDB7C",
    "#eb0fc2",
    "#0bd4f3",
    "#0cb00c",
  ];
  const data = [
    { value: 0.08, name: "黄龙路" },
    { value: 0.06, name: "文一路" },
    { value: 0.11, name: "第一大街" },
    { value: 0.09, name: "浦玉路" },
    { value: 0.12, name: "虎跑路" },
    { value: 0.06, name: "龙泉路" },
    { value: 0.08, name: "竞舟路" },
    { value: 0.08, name: "月雅路" },
    { value: 0.08, name: "白沙泉路" },
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        color: colors,
        xAxis: { show: false },
        yAxis: { show: false },
        grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
        legend: {
          orient: "vertical",
          left: "left",
          top: "center",
          textStyle: { color: "white" },
          itemWidth: px(10),
          itemHeight: px(10),
          formatter(name) {
            const value = data.find((i) => i.name === name)?.value * 100 + "%";
            return name + " " + value;
          },
        },
        series: [
          {
            center: ["60%", "50%"],
            type: "pie",
            radius: "80%",
            label: { show: false },
            labelLine: { show: false },
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      })
    );
  }, []);

  return (
    <div className="年龄段-图1">
      <div className="chart">
        <div className="main" ref={divRef} />
      </div>
    </div>
  );
};
