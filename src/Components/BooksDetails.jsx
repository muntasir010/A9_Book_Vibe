import { useLoaderData } from "react-router-dom";
import { saveBooks } from "../utilitis/utilitis";

const BooksDetails = () => {
    const book = useLoaderData();
    const { image, bookName, author, review, rating, category, yearOfPublishing, publisher, totalPages } = book;

    const handleRead = book => {
       saveBooks(book);
    }
    return (
        <div  className="mt-40 mb-10">
            <section className="dark:bg-gray-100 dark:text-gray-800 rounded-xl">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={image} alt="" className="object-cover w-full rounded-xl h-64  sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{bookName}</h3>
                            <p>By: {author}</p>
                            <hr />
                            <p>{category}</p>
                            <hr />
                            <h3>Review: {review}</h3>
                            <hr />
                            <p>Number of pages: {totalPages}</p>
                            <p>Publisher: {publisher}</p>
                            <p>Year of publishing: {yearOfPublishing}</p>
                            <p>Rating: {rating}</p>
                            <div className="flex gap-6">
                                <button onClick={() => handleRead(book)}
                                    className="btn btn-outline">Read</button>
                                <button onClick={() => handleRead(book)} className="btn btn-outline bg-[#50B1C9]">Wishlist</button>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default BooksDetails;