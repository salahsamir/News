import { useState } from "react";

import { useFetchLatestRatesQuery } from "../../app/features/Currency/CurrencySlice";
import { Loading } from "../../ui/Loading";
import CurrencyChart from "./Chart";


export default function Currency() {
  const { data, isLoading, error } = useFetchLatestRatesQuery();
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  if (isLoading) return <Loading />;

  const convertedAmount = data ? (amount / data.data.EGP.value).toFixed(2) : 0;

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="w-full h-full  flex  flex-col  justify-center items-center gap-5 p-5">
         
          <div className=" w-full bg-slate-200 rounded-md shadow-lg p-5  text-center">
             {data && (
           <div className="flex justify-around px-5 w-full">
           <div className="flex justify-between items-center space-x-6 px-5">
                <p className="text-4xl font-bold">EGP :</p>
                <p className="text-4xl font-semibold">
                  <span className="text-blue-700">{data.data.EGP.value.toFixed(2)}</span>
                </p>
              </div>
           <div className="flex justify-between items-center space-x-6 px-5">
                <p className="text-4xl font-bold">USD :</p>
                <p className="text-4xl font-semibold">
                  <span className="text-blue-700">1</span>
                </p>
              </div>
              
            
           </div>
              
          )}
          <h1 className="text-2xl font-bold py-3">to Calculate the amount in USD, enter the amount in EGP</h1>
            <div className="flex justify-around  p-5 w-full">
               
            <div className="">
          
          <label className="block text-2xl font-medium my-2 space-x-3 text-gray-700">
           
            Amount in EGP
          </label>
          <input
  value={amount}
  onChange={handleAmountChange}
  className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  placeholder="Enter amount in EGP"
/>

        </div>
        <div>
          <label className="block text-2xl font-medium my-2 space-x-3 text-gray-700">
          Amount  in  USD
          </label>
          <input
            type="text"
            value={convertedAmount}
            readOnly
                className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  "
                 
          />
        </div>
            </div>
          </div>
        </div>
        <CurrencyChart />
      </div>
    </>
  );
}
