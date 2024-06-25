
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { useFetchGoldPricesQuery } from "../app/features/Gold/GoldSlice";
import Error from "../errors/Error";

const Gold = () => {
  const { data, isLoading, error } = useFetchGoldPricesQuery();
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div><Error/></div>;

  const chartData = [
    data.price_gram_24k,
    data.price_gram_22k,
    data.price_gram_21k,
    data.price_gram_18k,
    data.price_gram_16k,
    data.price_gram_14k,
    data.price_gram_10k,
  ];

  const chartConfig = {
    type: "bar",
    height: 400,
    series: [{ name: "Price per Gram (EGP)", data: chartData }],
    options: {
      chart: { toolbar: { show: false } },
      dataLabels: { enabled: false },
      colors: ["#002067"],
      plotOptions: { bar: { columnWidth: "40%", borderRadius: 2 } },
      xaxis: {
        axisTicks: { show: false },
        axisBorder: { show: false },
        labels: { style: { colors: "#616161", fontWeight: 400 } },
        categories: ["24K", "22K", "21K", "18K", "16K", "14K", "10K"],
      },
      yaxis: { labels: { style: { colors: "#616161", fontWeight: 400 } } },
      grid: { show: true, borderColor: "#dddddd", strokeDashArray: 5 },
      fill: { opacity: 0.8 },
      tooltip: { theme: "dark" },
    },
  };

  return (
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
            Gold Prices
          </Typography>
          <Typography variant="h3" color="black">
            EGP per Gram
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 py-5">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
};

export default Gold
