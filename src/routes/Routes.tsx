import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import AllBook from "../pages/Book/AllBook";
import SingleBook from "../pages/Book/SingleBook";
import AddBook from "../pages/Book/AddBook";
import UpdateBook from "../pages/Book/UpdateBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/all-book",
        element: <AllBook />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
      },
      {
        path: "/update-book/:id",
        element: <UpdateBook />,
      },
    ],
  },
]);

export default router;
