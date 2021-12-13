import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("authToken");

export const appApiSlice = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://serene-eyrie-59879.herokuapp.com/",
    prepareHeaders: (headers) => {
      console.log("headers token", token);
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", token);
      }

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      getCategories: builder.query({
        query: () => `/categories`,
      }),
      getProducts: builder.query({
        query: () => `/products`,
      }),
      getProductById: builder.query({
        query: (id) => `/products/${id}`,
      }),
      postRegister: builder.mutation({
        query: (data) => ({
          url: "/register",
          method: "POST",
          body: data,
        }),
      }),
      login: builder.mutation({
        query: (data) => ({
          url: "/login",
          method: "POST",
          body: data,
        }),
      }),
    };
  },
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  usePostRegisterMutation,
  useLoginMutation,
} = appApiSlice;