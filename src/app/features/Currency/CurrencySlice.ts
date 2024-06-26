import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import currencyapi from '@everapi/currencyapi-js';

// Define the API key and base URL for the Currency API
const API_KEY = 'cur_live_xxeqgMUPZZBSgwNsoomzCz11ezi2gBCOAMWWpubP';
const BASE_URL = 'https://api.currencyapi.com/v3';

// Initialize the client with your API key
const client = new currencyapi(API_KEY);

// Create the Currency API slice using RTK Query
export const CurrencyApiSlice = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('apikey', API_KEY);
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
