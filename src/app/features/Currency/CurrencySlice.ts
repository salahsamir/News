import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Currency_Api_KEY } from '../../../assets/Const';


// Define the API key and base URL for the Currency API

const BASE_URL = 'https://api.currencyapi.com/v3';



// Create the Currency API slice using RTK Query
export const CurrencyApiSlice = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('apikey', Currency_Api_KEY);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchLatestRates: builder.query({
      query: () => 'latest?base=USD&symbols=EGP',
    }),
    fetchHistoricalRates: builder.query({
      query: ({ date }) => `historical?date=${date}`,
    }),
  }),
});

export const { useFetchLatestRatesQuery, useFetchHistoricalRatesQuery } = CurrencyApiSlice;
