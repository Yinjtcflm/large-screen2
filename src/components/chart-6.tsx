import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";
import china from "../geo/china.json";

export const Chart6 = () => {
  const divRef = useRef(null);
  const colors = {
    安徽省: "#BB31F7",
    浙江省: "#15b8fd",
    福建省: "#30ee06",
    四川省: "#f25f00",
  };
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap("CN", china);
    myChart.setOption(
      createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
          {
            type: "map",
            mapType: "CN",
            data: [
              {
                name: "浙江省",
                value: 1,
              },
            ],
            label: { show: false, color: "white" },
            itemStyle: {
              areaColor: "#010d3d",
              color: colors["浙江省"],
              borderColor: "#01a7f7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470c6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN",
            data: [
              {
                name: "福建省",
                value: 100,
              },
            ],
            itemStyle: {
              areaColor: "#010d3d",
              color: colors["福建省"],
              borderColor: "yellow",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470c6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN",
            data: [
              {
                name: "安徽省",
                value: 100,
              },
            ],
            itemStyle: {
              areaColor: "#010d3d",
              color: colors["安徽省"],
              borderColor: "#01a7f7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470c6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN",
            data: [
              {
                name: "四川省",
                value: 1,
              },
            ],
            label: { show: false, color: "white" },
            itemStyle: {
              areaColor: "#010d3d",
              color: colors["四川省"],
              borderColor: "#01a7f7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470c6",
              },
            },
          },
        ],
      })
    );
  }, []);
  return (
    <div className="bordered 籍贯分布">
      <h2>全市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart" />
        <div className="legend bordered">
          <span className="icon" style={{ background: colors["浙江省"] }} />
          杭州籍
          <span className="icon" style={{ background: colors["福建省"] }} />
          厦门籍
          <span className="icon" style={{ background: colors["青海省"] }} />
          西宁籍
          <span className="icon" style={{ background: colors["四川省"] }} />
          成都籍
        </div>
        <div className="notes">此地图只显示了部分中国区域</div>
      </div>
    </div>
  );
};
