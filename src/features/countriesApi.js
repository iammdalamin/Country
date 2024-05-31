// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1/",
  }),
  endpoints: (builder) => ({
    getExactCountry: builder.query({
      query: (name) => `name/${name}?fullText=true`,
    }),
    getLocation: builder.query({
      query: (name) => `${name}?fields=name,flags,capital`,
    }),
  }),
});
export const { useGetLocationQuery, useGetExactCountryQuery } = locationApi;
