
           
import { useFetchGoldPricesQuery } from "../app/features/Gold/GoldSlice";
import ChartsUi from "../ui/ChartsUi";
import { Loading } from "../ui/Loading";


const Gold = () => {
  const { data, isLoading, error } = useFetchGoldPricesQuery();
  

  if (isLoading) return <Loading/>;

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

  <>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">

  <ChartsUi chartData={chartData} categories={categories} name=' Gold Prices' title=" EGP per Gram" />
    <div className="m-5 shadow-lg p-5 ">
      {categories.map((category, index) => (
        <div className="flex gap-4  justify-around">
          <h4 key={index} className="text-5xl font-semibold py-3  ">{category}:</h4>
          <h4 className="text-5xl font-semibold py-3 text-blue-700">{chartData[index].toFixed(2)} <span className="text-black"> EGP</span></h4>
          <b/>
        </div>

        

      ))}
    </div>

    </div>

  </>
  );
};

export default Gold
