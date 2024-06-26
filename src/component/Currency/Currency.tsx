import { useFetchLatestRatesQuery } from "../../app/features/Currency/CurrencySlice";

import CurrencyChart from "./Chart";



export default function Currency() {
    const { data, isLoading, error } = useFetchLatestRatesQuery();


    if (isLoading) return <div>Loading...</div>;
   console.log(data);
   
  return (
    <>
    <div className="w-full h-full flex justify-center items-center">
    {data && (
      <div className="bg-gray-100 w-fit p-4 text-center rounded-lg shadow-md">
        <p className="text-lg font-semibold">USD/EGP:{data.data.EGP.value}</p>
      </div>
    )}
    </div>
    <CurrencyChart/>
    </>
  )
}
