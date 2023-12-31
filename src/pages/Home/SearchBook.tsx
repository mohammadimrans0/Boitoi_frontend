/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Dropdown, SearchBar } from "keep-react";
import { ArrowRight, MagnifyingGlass } from "phosphor-react";
import { useGetBooksQuery } from "../../redux/api/bookApi";
import { Link } from "react-router-dom";

const SearchBook = () => {
  const [value, setValue] = useState<any[]>([]); // Adjust the type based on your data structure

  const { data, isLoading, error } = useGetBooksQuery(undefined);
  console.log(data, isLoading, error);
  const booksData = data?.data;
  console.log(booksData);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    const results =
      booksData?.filter((book: { title: string }) =>
        book.title.toLowerCase().includes(searchTerm)
      ) ?? [];

    setValue(results);
  };

  return (
    <div className="w-1/2 mx-auto">
      <SearchBar
        placeholder="Search Your Desired Book"
        addon={<MagnifyingGlass size={20} color="black" />}
        addonPosition="left"
        handleOnChange={handleOnChange}
      >
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {booksData.message}</p>}
        {value.length > 0 && (
          <ul>
            {value.map((book: { _id: string; title: string }) => (
              <Dropdown.Item key={book._id}>
                {book.title}
                <span className="ml-auto">
                  <Link to={`/book/${book._id}`}>
                    <ArrowRight size={20} color="#5E718D" />
                  </Link>
                </span>
              </Dropdown.Item>
            ))}
          </ul>
        )}
      </SearchBar>
    </div>
  );
};

export default SearchBook;
