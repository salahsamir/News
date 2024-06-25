import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API key and base URL
const API_KEY = 'goldapi-g3pvrfslxt2e4xk-io';
const BASE_URL = 'https://www.goldapi.io/api';

// Create the Gold API slice
export const GoldApiSlice = createApi({
  reducerPath: 'goldApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('x-access-token', API_KEY);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchGoldPrices: builder.query({
      query: () => '/XAU/EGP',
    }),
  }),
});

export const { useFetchGoldPricesQuery } = GoldApiSlice;
