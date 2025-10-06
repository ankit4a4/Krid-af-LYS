import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../package.json";

const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl.baseUrl,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: ["Project"],

  endpoints: (builder) => ({
    ////////////////////// Get Projects Query //////////////////////
    getProjects: builder.query({
      query: () => "/portfolio",
      providesTags: ["Project"],
    }),

    ////////////////////// Add Project Mutation //////////////////////
    addProject: builder.mutation({
      query: (formData) => ({
        url: "/portfolio",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Project"],
    }),

    /////////////////////////// get Single Project Query ///////////////////////////
    getSingleProject: builder.query({
      query: (id) => `/portfolio/${id}`,
      providesTags: ["Project"],
    }),

    ////////////////////////// update Project Mutation //////////////////////////

    updateProject: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/portfolio/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Project"],
    }),

    ////////////////////////// delete Project Mutation //////////////////////////

    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/portfolio/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useAddProjectMutation,
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
export default projectApi;
