import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const token = localStorage.getItem("authToken");

export const appApiSlice = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    // prepareHeaders: (headers) => {
    //   console.log("headers token", token);
    //   // If we have a token set in state, let's assume that we should be passing it.
    //   if (token) {
    //     headers.set("authorization", token);
    //   }

    //   return headers;
    // },
  }),
  endpoints(builder) {
    return {
      // getCategories: builder.query({
      //   query: () => `/categories`,
      // }),
      getProducts: builder.query({
        query: () => `/products`,
      }),
      getProductById: builder.query({
        query: (id) => `/products/${id}`,
      }),

      getStoreDetail: builder.query({
        query: (storeUsername) => `/store/${storeUsername}`,
      }),
      login: builder.mutation({
        query: ({ username, password }) => ({
          url: "login",
          method: "POST",
          body: { username, password },
        }),
      }),
      register: builder.mutation({
        query: ({ username, email, password }) => ({
          url: `register`,
          method: "POST",
          body: { username, email, password },
        }),
      }),
    };
  },
});

export const {
  // useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetStoreDetailQuery,
  useLoginMutation,
  useRegisterMutation,
} = appApiSlice;
