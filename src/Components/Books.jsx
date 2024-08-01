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
        <div>
            <h3 className="text-4xl font-semibold text-center">Books</h3>
            <div>
                {
                    books.map(book => <Book key={book.id} book={book}/>)
                }
            </div>
        </div>
    );
};

export default Books;