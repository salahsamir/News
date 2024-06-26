
import { useFetchLatestRatesQuery } from "../../app/features/Currency/CurrencySlice";

import CurrencyChart from "./Chart";



export default function Currency() {
 
    const { data, isLoading, error } = useFetchLatestRatesQuery();


    if (isLoading) return <div>Loading...</div>;
 
   
  return (
    <>
    <div className="grid sm:grid-cols-1 md:grid-cols-2">
    <div className="w-full h-full flex justify-center items-center">
    {data && (
      <div className="bg-gray-100  w-fit p-5 text-center rounded-lg shadow-md">
        <div className="flex justify-between items-center space-y-4 space-x-6 px-5">
          <p className="text-4xl font-bold ">USD</p>
          <p className="text-4xl  font-semibold"><span className="text-blue-700">1</span>$</p>
        </div>
        
        <div className="flex justify-between items-center space-y-4 space-x-6 px-5">
          <p className="text-4xl font-bold ">EGP</p>
          <p className="text-4xl  font-semibold"><span className="text-blue-700">{data.data.EGP.value.toFixed(2)}</span>$</p>
        </div>
            
      </div>
    )}
    </div>
    <CurrencyChart/>

    </div>
   
    </>
  )
}
