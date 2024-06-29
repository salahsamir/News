
           
import { useFetchGoldPricesQuery } from "../app/features/Gold/GoldSlice";
import ChartsUi from "../ui/ChartsUi";
import Error from "../ui/Error";
import { Loading } from "../ui/Loading";


const Gold = () => {
  const { data, isLoading,error } = useFetchGoldPricesQuery();
 

  if (isLoading) return <Loading />;

  if (error) return <Error/>;

  const goldPrices = {
    '24K': data.price_gram_24k,
    '22K': data.price_gram_22k,
    '21K': data.price_gram_21k,
    '18K': data.price_gram_18k,
    '16K': data.price_gram_16k,
    '14K': data.price_gram_14k,
    '10K': data.price_gram_10k,
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
      <ChartsUi
        chartData={Object.values(goldPrices)}
        categories={Object.keys(goldPrices)}
        name="Gold Prices"
        title="EGP per Gram"
      />
      <div className="m-4 shadow-lg p-5">
        {Object.entries(goldPrices).map(([category, price]) => (
          <div className="flex gap-5 justify-around" key={category}>
            <h4 className="text-3xl font-semibold py-3">
              {category}:
            </h4>
            <h4 className="text-3xl font-semibold py-3 text-blue-700">
              {price.toFixed(2)} <span className="text-black">EGP</span>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gold
