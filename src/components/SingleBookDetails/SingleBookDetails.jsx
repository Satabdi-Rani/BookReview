import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBook } from "../../utility/localstorage";

const SingleBookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();

  const bookIdInt = parseInt(bookId);
  const book = books.find(book => book.bookId == bookIdInt);
  // console.log(books, bookId)
  // console.log(book);

  const handleReadButtoon = () => {
    saveBook(bookIdInt);
    toast("Amazing! This Book is now on your Read List");
  }

  const handleWishListButtoon = () => toast("Great! This Book is now on your wishlist");

  return (
    <div className="container mx-auto mt-16 mb-10 sm:mb-20">
      <div className="px-8 sm:px-12 grid sm:grid-cols-2">
        <div>
          <img className="border rounded-2xl " src={book.image} alt="" />
        </div>

        <div className="sm:ml-16">
          <h1 className="mt-6 sm:mt-0 text-2xl sm:text-5xl font-bold">{book.bookName}</h1>
          <h4 className="font-semibold text-lg sm:text-2xl py-4 sm:py-6">By: {book.author}</h4>
          <hr className="border" />
          <p className="text-lg sm:text-2xl font-semibold py-4">{book.category}</p>
          <hr className="border" />
          <p className="text-md sm:text-lg py-6"><b>Review: </b>{book.review}</p>
          <p className="flex flex-row pb-6 font-bold">Tag:
            {
              book.tags.map((tag, idx) => <li key={idx} className='border-2 text-[#23BA0A] bg-transparent px-4 py-2 rounded-xl list-none ml-4 '><span>#</span>{tag}</li>)

            }
          </p>
          <hr />

          <div className="flex flex-row py-6 text-md sm:text-lg leading-loose">
            <ul>
              <li>Number of Pages:</li>
              <li>Publisher:</li>
              <li>Year of Publishing:</li>
              <li>Rating:</li>
            </ul>
            <ul className="font-bold ml-8">
              <li>{book.totalPages}</li>
              <li>{book.publisher}</li>
              <li>{book.yearOfPublishing}</li>
              <li>{book.rating}</li>
            </ul>
          </div>
          <div className="flex flex-row gap-6">
            <Link onClick={handleReadButtoon} className="text-xl text-black font-semibold hover:text-white hover:bg-[#50B1C9] bg-transparent border rounded-lg px-6 py-3">Read</Link>
            <Link onClick={handleWishListButtoon} className="text-xl text-black font-semibold hover:text-white hover:bg-[#50B1C9] bg-transparent border rounded-lg px-6 py-3">Wishlist</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleBookDetails; 