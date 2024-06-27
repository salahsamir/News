
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = '26681bca804644d586e20d6b63c2b42e';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';
export const NewsApiSlice=createApi({

  tagTypes: ["News"],
  reducerPath: "News",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
   
    fetchSpacialNews: builder.query({
      query: () => ({
        url: `?country=us&apiKey=${API_KEY}`,
      }),
    }),
  
})

})
export const {useFetchSpacialNewsQuery}=NewsApiSlice
