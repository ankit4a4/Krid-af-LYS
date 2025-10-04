import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../package.json";

const BASE_URL = `${baseUrl.baseUrl}`;

export const heroImageApi = createApi({
  reducerPath: "heroImageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: ["Hero"],

  endpoints: (builder) => ({
    getHeroImage: builder.query({
      query: () => ({
        url: "/hero",
        method: "GET",
      }),
      providesTags: ["Hero"],
    }),

    updateHeroImage: builder.mutation({
      query: (formData) => ({
        url: "/hero/",
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Hero"],
    }),
  }),
});

export const { useGetHeroImageQuery, useUpdateHeroImageMutation } =
  heroImageApi;
