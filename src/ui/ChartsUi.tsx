import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
interface IProps{
  chartData:number[]
  categories:string[]
  name:string
  title:string
}
const ChartsUi=({chartData,categories,name,title}:IProps)=> {
  
  const chartConfig = {
    type: "bar",
    height: 400,
    series: [{ name: name, data: chartData }],
    options: {
      chart: { toolbar: { show: false } },
      dataLabels: { enabled: false },
      colors: ["#002067"],
      plotOptions: { bar: { columnWidth: "40%", borderRadius: 2 } },
      xaxis: {
        axisTicks: { show: false },
        axisBorder: { show: false },
        labels: { style: { colors: "#616161", fontWeight: 400 } },
        categories: categories,
      },
      yaxis: { labels: { style: { colors: "#616161", fontWeight: 400 } } },
      grid: { show: true, borderColor: "#dddddd", strokeDashArray: 5 },
      fill: { opacity: 0.8 },
      tooltip: { theme: "dark" },
    },
  };
  return (
    <div>
       <Card className="my-5">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-blue-700 p-5 my-5 text-white">
          <Square3Stack3DIcon className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h6" color="gray">
            {name}
          </Typography>
          <Typography variant="h3" color="black">
           {title}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 py-5">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
    </div>
  )
}

export default ChartsUi