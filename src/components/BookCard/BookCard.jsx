import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";


const BookCard = ({ allBookCard }) => {
   const {bookName, image, author, category, rating} = allBookCard;
    return (
        <div className="border rounded-xl p-6">
            <img className="border rounded-xl" src={image} alt="" />
            <div className="flex flex-row justify-around">
                <button>Young Adult</button>
                <button>Identity</button>
            </div>
            <h3 className='pt-2 pb-2 text-xl font-bold'>{bookName}</h3>
            <p className='text-lg font-semibold pb-4'>By: {author}</p>
            <hr className='border dashed'/>
            <div className="flex flex-row justify-between gap-6 mt-6">
                <p>{category}</p>
                <div className='flex gap-4'>
                    <p>{rating}</p>
                    <p><CiStar className='text-2xl'></CiStar> </p>
                </div>
            </div>

            {/* <button onClick={()=> handleCookingInfos(recipe)} className='mt-6 text-md sm:text-md font-semibold px-4 sm:px-6 py-3 sm:py-3 border rounded-full bg-[#0BE58A] hover:text-black'>Want to Cook</button> */}
        </div>
    );
};

BookCard.propTypes = {
    allBookCard: PropTypes.object,
}

export default BookCard;