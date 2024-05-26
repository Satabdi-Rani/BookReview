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
// import About from './components/About/About';

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
    },
    {
      path:"/pagestoread",
      element: <PagesToRead></PagesToRead>,
    },
    {
      path: 'books/:bookId',
      loader: ({params}) => <SingleBookDetails params={params}></SingleBookDetails>
    }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
