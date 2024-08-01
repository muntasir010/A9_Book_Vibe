import PropTypes from 'prop-types';

const Book = ({book}) => {
    return (
        <div>
            <h1>{book.bookName}</h1>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object,
};

export default Book;