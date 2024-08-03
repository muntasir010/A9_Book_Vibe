import { useEffect, useState } from "react";
import { getBooks } from "../utilitis/utilitis";

const ListedBook = () => {
    const [books, setBooks] = useState([]);
    useEffect(() =>{
        const storedBooks = getBooks()
        setBooks(storedBooks)
    },[])
    return (
        <div>
            
        </div>
    );
};

export default ListedBook;