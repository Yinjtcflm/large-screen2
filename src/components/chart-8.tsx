import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart8 = () => {
  const divRef = useRef(null);
  const colors = ["#856BED", "#F46064", "#F38E1C", "#1CDB7C", "#33A4FA"];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        color: colors,
        xAxis: { show: false },
        yAxis: { show: false },
        legend: { show: false },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["75%", "90%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "inside",
              textStyle: { color: "white", fontSize: px(20) },
              formatter(options) {
                return options.value * 100 + "%";
              },
            },
            labelLine: { show: false },
            itemStyle: {
              borderColor: "#0f113a",
              borderWidth: px(4),
            },
            data: [
              { value: 0.25, name: "10-20岁" },
              { value: 0.3, name: "20-30岁" },
              { value: 0.2, name: "30-40岁" },
              { value: 0.1, name: "40-50岁" },
              { value: 0.15, name: "50-60岁" },
            ],
          },
        ],
      })
    );
  }, []);
  return (
    <div className="年龄段-图2">
      <div className="chart">
        <div className="main" ref={divRef} />
        <div className="text">年龄段</div>
      </div>
      <div className="legend">
        <span style={{ background: colors[0] }} />
        10-20岁
        <span style={{ background: colors[1] }} />
        20-30岁
        <span style={{ background: colors[2] }} />
        30-40岁
        <span style={{ background: colors[3] }} />
        40-50岁
        <span style={{ background: colors[4] }} />
        50-60岁
      </div>
    </div>
  );
};
