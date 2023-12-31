/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link, useParams, useNavigate } from "react-router-dom";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../../redux/api/bookApi";

const SingleBook = () => {
  const navigate = useNavigate();
  const { id }: any = useParams();
  const { data, isLoading, error } = useSingleBookQuery(id);

  const { _id, title, author, genre, review, publicationYear } =
    data?.data || {};

  // Use the useDeleteBookMutation hook
  const [deleteBook] = useDeleteBookMutation();

  const deleteHandler = async (id: any) => {
    try {
      // Trigger the delete mutation using dispatch
      const response = await deleteBook(id);
      
        console.log(response, "Book deleted successfully");

        // Handle any other logic after successful deletion, if needed
        navigate("/");
      
    } catch (error: any) {
      console.error(error.message);
      // Handle errors or show a notification to the user
    }
  };

  return (
    <div className="container mx-auto">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap-reverse lg:flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 ">
              <h1 className="text-5xl title-font text-black mb-6">{title}</h1>
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-4">
                Written By - {author}
              </h1>

              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-900">Genre: {genre}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-900">
                  Published On: {publicationYear}
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-900">Review: {review}</span>
              </div>

              <div className="flex items-center justify-between mt-8">
                <Link to={`/update-book/${id}`}>
                  <button className=" text-green-500  py-2 px-6 border  rounded-3xl">
                    Update Book
                  </button>
                </Link>

                <button
                  onClick={() => deleteHandler(_id)}
                  className=" text-red-500 border rounded-3xl   py-2 px-6 "
                >
                  Delete Book
                </button>
              </div>
            </div>
            <img
              alt="book"
              className="lg:w-1/2 w-full lg:h-[600px] h-64 object-cover object-center rounded"
              src="https://i.ibb.co/qWkRCXc/book.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBook;
