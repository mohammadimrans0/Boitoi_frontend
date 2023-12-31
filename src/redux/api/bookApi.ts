import { api } from "./baseApi";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book",

    }),

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