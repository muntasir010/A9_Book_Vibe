import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books,setBooks] = useState([]);

    useEffect(() =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="mb-10">
            <h3 className="text-4xl font-semibold text-center my-10">Books</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.id} book={book}/>)
                }
            </div>
        </div>
    );
};

export default Books;