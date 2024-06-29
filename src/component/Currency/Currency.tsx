

import { useFetchLatestRatesQuery } from "../../app/features/Currency/CurrencySlice";
import Error from "../../ui/Error";
import { Loading } from "../../ui/Loading";
import CurrencyChart from "./Chart";
import ConvertedAmount from "./ConvertedAmount";

export default function Currency() {
  const { data, isLoading,error } = useFetchLatestRatesQuery();

  
  if (isLoading) return <Loading />;
  if (error) return <Error/>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="p-5 flex  justify-center items-center">
        <div className="bg-slate-200 rounded-md shadow-lg p-3 text-center">
          {data && (
            <div className="flex justify-around px-5 w-full">
              <div className="flex justify-between items-center space-x-6 px-5">
                <p className="text-2xl font-bold">EGP</p>
                <p className="text-2xl font-semibold">
                  <span className="text-blue-700">{data.data.EGP.value.toFixed(2)}</span>
                </p>
              </div>
              <div className="flex justify-between items-center space-x-6 px-5">
                <p className="text-2xl font-bold">USD</p>
                <p className="text-2xl font-semibold">
                  <span className="text-blue-700">1</span>
                </p>
              </div>
            </div>
          )}
          <h1 className="text-1xl font-bold py-3">To calculate the amount in USD, enter the amount in EGP</h1>
          <ConvertedAmount data={data} />
        </div>
      </div>
      <CurrencyChart />
    </div>
  );
}
