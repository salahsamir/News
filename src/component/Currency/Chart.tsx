
import { useFetchHistoricalRatesQuery } from '../../app/features/Currency/CurrencySlice';
import ChartsUi from '../../ui/ChartsUi';
import Error from '../../ui/Error';

const CurrencyChart = () => {
  const { data, isLoading, error } = useFetchHistoricalRatesQuery({
     date: '2024-06-26'
  })
  if (isLoading) return <div>Loading...</div>;
  if (error) return <Error/>;
 

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
