import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const BooksSection = () => {
    const allBooksCard = useLoaderData();
    return (
        <div className="container mx-auto my-20">
            <h1 className="text-center text-4xl font-bold">Books</h1>
           <div className="grid mx-10 sm:mx-0  sm:grid-cols-3 gap-8 mt-20">
           {
                allBooksCard.map((allBookCard,idx) => <BookCard key={idx} allBookCard={allBookCard}></BookCard> )
            }
           </div>
        </div>
    );
};

export default BooksSection;