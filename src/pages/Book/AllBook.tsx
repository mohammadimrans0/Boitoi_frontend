/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetBooksQuery } from "../../redux/api/bookApi";
import Cart from "../Shared/Cart";


const AllBook = () => {
    const {data, isLoading, error} = useGetBooksQuery(undefined)
  console.log(data, isLoading, error);
  const booksData = data?.data;
  return (
    <div className="mt-16">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mt-2 mb-4">
          Read All Your <span className="text-orange-500">Favourite</span> Books
        </h1>
      </div>
      <div className="text-gray-600 body-font">
        <div className="lg:container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {booksData?.map((book: any) => (
              <Cart key={book._id} book={book}></Cart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBook;