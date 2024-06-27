
import { useFetchHistoricalRatesQuery } from '../../app/features/Currency/CurrencySlice';
import ChartsUi from '../../ui/ChartsUi';

const CurrencyChart = () => {
  const { data, isLoading, error } = useFetchHistoricalRatesQuery({
     date: '2024-06-26'
  })
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
 

  const chartData = [
    data.data.EGP.value,
    data.data.USD.value,
  ]
  const categories= ["EGP", "USD"]

 
  return (
    <ChartsUi chartData={chartData} categories={categories} name="Exchange Rate (USD to Other Currencies)" title=" USD to Other Currencies"/>
  );
};

export default CurrencyChart;
