import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import currencyapi from '@everapi/currencyapi-js';

// Initialize the client with your API key
const API_KEY = 'cur_live_xxeqgMUPZZBSgwNsoomzCz11ezi2gBCOAMWWpubP';

// Define the base URL (not required for custom client)
const BASE_URL = '/';

// Create the Currency API slice using RTK Query
export const CurrencyApiSlice = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchLatestRates: builder.query({
      query: () => 'latest?base=USD&symbols=EGP',
    }),
    fetchHistoricalRates: builder.query({
      queryFn: async ({ date }) => {
        const client = new currencyapi(API_KEY);
        try {
          const response = await client.historical({ date });
          return { data: response };
        } catch (error) {
          return { error: { status: 'CUSTOM_ERROR', message: error.message } };
        }
      },
    }),
  }),
});

export const { useFetchLatestRatesQuery, useFetchHistoricalRatesQuery } = CurrencyApiSlice;
