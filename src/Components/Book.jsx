import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { id, image, bookName, author, rating, category, tags } = book;
    return (
        <Link to={`/book/${id}`} className="card border-2 p-4">
            <figure className='bg-base-200 rounded-xl'>
                <img className='h-56 p-6'
                    src={image}
                    alt="Books" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <a  className=' border-2 px-5 py-2 text-green-400 rounded-full'>{tags[0]}</a>
                    <a className='border-2 px-5 py-2 text-green-400 rounded-full'>{tags[1]}</a>
                </div>
                <h2 className="text-2xl font-semibold">{bookName}</h2>
                <p className='font-medium text-gray-500'>By: {author}</p>
                <p className=' decoration-dashed w-full'></p>
                <hr className='border-t-2 border-dashed my-3'/>
                <div className="card-actions justify-between">
                    <h4 className='font-medium text-gray-500'>{category}</h4>
                    <h4 className='font-medium text-gray-500 flex gap-3 items-center'>{rating} <span><FaStar/></span></h4>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object,
};

export default Book;