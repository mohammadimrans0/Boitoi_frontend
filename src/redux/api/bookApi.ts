import { api } from "./baseApi";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book",

    }),

    // singleBook: builder.query({
    //   query: (id) => `/book/${id}`,
    // }),

    singleBook: builder.query({
      query: (id: string ) => ({
        url: `book/${id}`,
        method: "GET",
      }),
      providesTags: ["books"],
    }),

    addBook: builder.mutation({
      query: (newBook) => ({
        url: "/book",
        method: "POST",
        body: newBook,
      }),
    }),

    updateBook: builder.mutation({
      query: ({ id, updatedBook }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: updatedBook,
      }),
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
    }),

  }),
});

export const { useGetBooksQuery, useSingleBookQuery, useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation } = bookApi;

// export const buildingApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     // get all building
//     buildings: build.query({
//       query: (arg: Record<string, any>) => {
//         return {
//           url: BUILDING_URL,
//           method: "GET",
//           params: arg,
//         };
//       },
//       transformResponse: (response: IBuilding[], meta: IMeta) => {
//         return {
//           buildings: response,
//           meta,
//         };
//       },
//       providesTags: [tagTypes.building],
//     }),
//     // get single building
//     building: build.query({
//       query: (id: string | string[] | undefined) => ({
//         url: `${BUILDING_URL}/${id}`,
//         method: "GET",
//       }),
//       providesTags: [tagTypes.building],
//     }),
//     // create a new building
//     addBuilding: build.mutation({
//       query: (data) => ({
//         url: BUILDING_URL,
//         method: "POST",
//         data,
//       }),
//       invalidatesTags: [tagTypes.building],
//     }),
//     // update existing building
//     updateBuilding: build.mutation({
//       query: (data) => ({
//         url: `${BUILDING_URL}/${data.id}`,
//         method: "PATCH",
//         data: data.body,
//       }),
//       invalidatesTags: [tagTypes.building],
//     }),
//     // delete existing building
//     deleteBuilding: build.mutation({
//       query: (id) => ({
//         url: `${BUILDING_URL}/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: [tagTypes.building],
//     }),
//   }),
// });