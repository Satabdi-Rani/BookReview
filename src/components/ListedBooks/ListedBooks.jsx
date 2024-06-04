import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../../utility/localstorage";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const ListedBooks = () => {
    const books = useLoaderData();
    const [readedBook, setReadedBook] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredBook();
        if (books.length > 0) {
            const readBooks = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.id === id);
                if (book) {
                    readBooks.push(book)
                }
            }
            //    const readBooks = books.filter(book => storedBookIds.includes(book.id) ) 
            //    console.log(readBooks);
            setReadedBook(readBooks);
        }
    }, [])

    return (
        <div className="container mx-auto">
            <div className="text-center text-5xl font-bold bg-gray-100 mt-8 p-10 rounded-lg">
                <h1>Books</h1>
            </div>

            <div className="flex items-center justify-center mt-10">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn bg-[#23BA0A] hover:bg-[#23BA0A] ">
                    <p className="text-white text-2xl">Sort By</p> 
                    <MdOutlineKeyboardArrowDown className="text-3xl text-white" />

                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-gray-100 mt-3 z-[1] p-2 shadow text-lg rounded-box w-52">
                    <li><a>Rating</a></li>
                    <li><a>Number of Pages</a></li>
                    <li><a>Publisher Year</a></li>
                </ul>
            </div>
            </div>
            {/* <h2>listed books: {readedBook.bookID}</h2> */}
        </div>
    );
};

export default ListedBooks;