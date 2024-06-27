import { useState } from "react";
import { Textarea } from "@material-tailwind/react";
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

  const convertedAmount = data ? (amount * data.data.EGP.value).toFixed(2) : 0;

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="w-full h-full flex  flex-col  justify-center items-center gap-5">
          {data && (
            <div className="bg-gray-100 flex  w-fit p-5 justify-around text-center rounded-lg shadow-md">
              <div className="flex justify-between items-center space-x-2 px-5">
                <p className="text-4xl font-bold">USD</p>
                <p className="text-4xl font-semibold">
                  <span className="text-blue-700">1</span>
                </p>
              </div>
              <div className="flex justify-between items-center space-x-2 px-5 mt-4">
                <p className="text-4xl font-bold">EGP</p>
                <p className="text-4xl font-semibold">
                  <span className="text-blue-700">{data.data.EGP.value.toFixed(2)}</span>
                </p>
              </div>
            </div>
          )}
          <div className=" flex space-x-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Amount in USD:
              </label>
              <input
                
                value={amount}
                onChange={handleAmountChange}
                className="border p-2 rounded"
                placeholder="Enter amount in USD"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Amount in EGP:
              </label>
              <input
                type="text"
                value={convertedAmount}
                readOnly
                className="border p-2 rounded"
              />
            </div>
          </div>
        </div>
        <CurrencyChart />
      </div>
    </>
  );
}
