import { Link, useLoaderData, useParams } from "react-router-dom";

const SingleBookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
    
    const bookIdInt = parseInt(bookId);
    const book = books.find(book => book.bookId == bookIdInt);
    console.log(books, bookId)
    console.log(book)
    return (
        <div className="mt-16 sm:mb-20">
            <div className="container mx-auto grid sm:grid-cols-2">
               <div>
                    <img className="border rounded-2xl " src={book.image} alt="" />
               </div>

               <div className="ml-16">
                  <h1 className="text-5xl font-bold">{book.bookName}</h1>
                  <h4 className="font-semibold text-2xl py-6">By: {book.author}</h4>
                  <hr className="border"/>
                  <p className="text-2xl font-semibold py-4">{book.category}</p>
                  <hr className="border" />
                  <p className="text-lg py-6"><b>Review: </b>{book.review}</p>
                  <p className="flex flex-row pb-6 font-bold">Tag: 
                    {
                        book.tags.map((tag, idx)=> <li key={idx} className='border-2 text-[#23BA0A] bg-transparent px-4 py-2 rounded-xl list-none ml-4 '><span>#</span>{tag}</li> )

                    }
                  </p>
                  <hr />

                  <div className="flex flex-row py-6 text-lg leading-loose">
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
                    <Link className="text-xl text-black font-semibold hover:text-white hover:bg-[#50B1C9] bg-transparent border rounded-lg px-6 py-3">Read</Link>
                    <Link className="text-xl text-black font-semibold hover:text-white hover:bg-[#50B1C9] bg-transparent border rounded-lg px-6 py-3">Wishlist</Link>
                  </div>
               </div>
            </div>

        </div>
    );
};

export default SingleBookDetails; 