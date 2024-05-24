import './Banner.css';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="background w-full h-[400px] sm:h-[400px] bg-no-repeat bg-contain sm:bg-cover  border rounded-3xl text-white flex flex-col sm:justify-center items-end pr-10">
                <h1 className='text-2xl sm:text-6xl font-bold w-6/12 md:w-5/12 text-right text-black leading-normal pt-24 sm:pt-0'>Books to freshen up your bookshelf</h1>
                <button className='text-md sm:text-lg font-semibold px-4 sm:px-6 py-3 bg-[#23BE0A] sm:py-2 border rounded-xl mt-6 hover:bg-[#78e25dd4] hover:text-black'>View The List</button>

            </div>
        </div>
    );
};

export default Banner;