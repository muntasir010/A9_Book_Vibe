import { toast } from "react-toastify";


// setLocalStorage
export const getBooks = () =>{
    let books = [];
    const storedBooks = localStorage.getItem('books')
    if(storedBooks){
        books = JSON.parse(storedBooks);
    }
    return books
}

// Save
export const saveBooks = book =>{
    let books = getBooks();
    const isExist = books.find(b => b.id === book.id)
    if(isExist){
        return toast.error('Add This Book!')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books));
    toast.success('Book Added Successfully')
}