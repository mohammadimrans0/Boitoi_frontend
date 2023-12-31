/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";

const Cart = ({ book }: any) => {
  const {   _id ,title, author, genre, publicationYear } = book;
  return (
    <div className="flex gap-x-2 md:w-[440px] lg:w-[480px] h-[280px] mx-auto border">
      <div>
        <Link to={`/book/${_id}`}>
          <img
            alt="book image"
            className="md:w-[200px] lg:w-[250px] h-[280px]"
            src="https://i.ibb.co/qWkRCXc/book.png"
          />
        </Link>
      </div>
      <div className=" flex flex-col">
        <div>
          <h3 className="text-gray-900 text-xl tracking-widest title-font my-4">
            {title}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium mt-1">
            Written by - {author}
          </h2>
          <p className="mt-2">Genre - {genre}</p>
          <p className="mt-2">Published On: {publicationYear}</p>
          <Link to={`/book/${_id}`} className="flex justify-center">
            <button className="mt-8 border rounded-2xl px-3 py-1">View full Book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
