import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import SingleBookDetails from './components/SingleBookDetails/SingleBookDetails';
import AboutUS from './components/AboutUS/AboutUS';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
      path: "/",
      element: <Home></Home>,
    },
    {
      path:"/listedbooks",
      element: <ListedBooks></ListedBooks>,
      loader: () => fetch('../booksdata.json'),
    },
    {
      path:"/pagestoread",
      element: <PagesToRead></PagesToRead>,
    },
    {
      path: '/aboutus',
      element: <AboutUS></AboutUS>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
    {
      path: '/book/:bookId',
      element: <SingleBookDetails></SingleBookDetails>,
      loader: () => fetch('../booksdata.json'),
    }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
