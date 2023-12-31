/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../../redux/api/bookApi";
import Cart from "../Shared/Cart";

const HomeProduct = () => {
    const {data} = useGetBooksQuery(undefined)
  const booksData = data?.data;
  return (
    <div className="mt-16">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mt-2 mb-4">
          Read Your <span className="text-orange-500">Favourite</span> Books
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          aperiam, <br /> id rerum expedita facere repellendus excepturi
          similique quae delectus doloribus accusantiumv <br /> cum eaque iste
          ratione doloremque eos. Illo, culpa eligendi?
        </p>
        
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
      <div className="text-center">
        <Link to="/all-book" className="text-white">
          <button className="bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
            View all Books
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProduct;
