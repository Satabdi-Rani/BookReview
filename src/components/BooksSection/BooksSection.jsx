import BookCard from "../BookCard/BookCard";
import { useEffect, useState } from "react";

const BooksSection = () => {
    const [allBooksCard, setallBooksCard] = useState([]);

    useEffect(()=> {
        fetch('booksdata.json')
        .then(res => res.json())
        .then(data => setallBooksCard(data))
    },[])

    return (
        <div className="container mx-auto mt-32 mb-20 sm:mb-28">
            <h1 className="text-center text-4xl font-bold underline">Books</h1>
           <div className="grid mx-10 sm:mx-0  sm:grid-cols-3 gap-8 mt-16">
           {
                allBooksCard.map((allBookCard,idx) => <BookCard key={idx} allBookCard={allBookCard}></BookCard> )
            }
           </div>
        </div>
    );
};

export default BooksSection;