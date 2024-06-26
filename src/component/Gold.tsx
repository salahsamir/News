
           
import { useFetchGoldPricesQuery } from "../app/features/Gold/GoldSlice";
import ChartsUi from "../ui/ChartsUi";


const Gold = () => {
  const { data, isLoading, error } = useFetchGoldPricesQuery();
  

  if (isLoading) return <div>Loading...</div>;

  const chartData = [
    data.price_gram_24k,
    data.price_gram_22k,
    data.price_gram_21k,
    data.price_gram_18k,
    data.price_gram_16k,
    data.price_gram_14k,
    data.price_gram_10k,
  ];

  let categories= ["24K", "22K", "21K", "18K", "16K", "14K", "10K"]

  return (

   <ChartsUi chartData={chartData} categories={categories} name=' Gold Prices' title=" EGP per Gram" />
  );
};

export default Gold
