import { useState,ChangeEvent } from "react";

interface IProps {
    data:number
}


export default function ConvertedAmount({data}:IProps) {
    const [egpAmount, setEgpAmount] = useState(1);

    const handleEgpAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newEgpAmount = parseFloat(event.target.value);
      setEgpAmount(isNaN(newEgpAmount) ? 0 : newEgpAmount);
    };
  
    const convertedAmount = data ? (egpAmount / data.data.EGP.value).toFixed(2) : 0;
  return (
    <div className="flex justify-around">
            <div>
              <label className="block text-2xl font-medium space-x-3 text-gray-700">
                Amount in EGP
              </label>
              <input
                type="text"
                value={egpAmount}
                onChange={handleEgpAmountChange}
                className="block w-full rounded-md border-0 py-1 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter amount in EGP"
              />
            </div>
            <div>
              <label className="block text-2xl font-medium space-x-3 text-gray-700">
                Amount in USD
              </label>
              <input
                type="text"
                value={convertedAmount}
                readOnly
                className="block w-full rounded-md border-0 py-1 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  )
}
