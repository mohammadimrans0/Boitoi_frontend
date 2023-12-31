/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from "../../redux/api/bookApi";

const UpdateBook = () => {
  const { id }: any = useParams();

  const { data, isLoading } = useSingleBookQuery(id);

  const [updateBook] = useUpdateBookMutation();

  const [formData, setFormData] = useState({
    img: "https://i.ibb.co/qWkRCXc/book.png",
    title: "",
    author: "",
    genre: "",
    publicationYear: "",
    review: "",
  });

  useEffect(() => {
    if (data?.data) {
      setFormData({
        img: "https://i.ibb.co/qWkRCXc/book.png",
        title: data.data.title,
        author: data.data.author,
        genre: data.data.genre,
        publicationYear: data.data.publicationYear,
        review: data.data.review,
      });
    }
  }, [data]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await updateBook({ id, body: formData });
    } catch (error) {
      console.log(error);
    }

    console.log("Form Data Submitted:", formData);

    // Reset the form after submission (optional)
    setFormData({
      img: "https://ibb.co/P9w5M3P",
      title: "",
      author: "",
      genre: "",
      publicationYear: "",
      review: "",
    });
  };

  return (
    <div>
      <h1 className="text-center text-3xl mt-16">Update The Book</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">
            Author:
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">
            Genre:
          </label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">
            Publication Year:
          </label>
          <input
            type="text"
            name="publicationYear"
            value={formData.publicationYear}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">
            Review:
          </label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
