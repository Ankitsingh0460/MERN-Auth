import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:8001" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Users"],
  endpoints: (builder) => ({}),
});
