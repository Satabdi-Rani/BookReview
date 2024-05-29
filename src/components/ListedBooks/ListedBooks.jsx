import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../../utility/localstorage";

const ListedBooks = () => {
    const books = useLoaderData();
    const [readedBook, setReadedBook] = useState([]);

    useEffect(()=> {
        const storedBookIds = getStoredBook();
        if(books.length> 0){
            const readBooks = [];
            for(const id of storedBookIds){
                const book = books.find(book => book.id === id);
                if(book){
                    readBooks.push(book)
                }
            }
        //    const readBooks = books.filter(book => storedBookIds.includes(book.id) ) 
        //    console.log(readBooks);
        setReadedBook(readBooks);
        }
    }, [])

    return (
        <div>
            <h2>listed books: {readedBook.bookID}</h2>
        </div>
    );
};

export default ListedBooks;