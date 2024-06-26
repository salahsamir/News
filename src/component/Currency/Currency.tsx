import { useFetchLatestRatesQuery } from "../../app/features/Currency/CurrencySlice";

export default function Currency() {
    const { data, isLoading, error } = useFetchLatestRatesQuery({});

    // Check for errors
    if (error) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <p>Error fetching data: {error.message}</p>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="bg-gray-100 w-fit p-4 text-center rounded-lg shadow-md">
                    <p className="text-lg font-semibold">USD/EGP: {data.data.EGP.value}</p>
                </div>
            )}
        </div>
    );
}
