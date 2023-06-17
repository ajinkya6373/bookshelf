
import { createContext,useContext,useReducer,useState} from "react";
import {Books} from "../dummyData"
import { filterBooks } from "../utils";
import { bookReducer } from "../reducer";
const BookContext = createContext();
export const BookProvider =({children}) =>{
    const [ books, setBooks ] = useState(Books ||[]);
    const [ read, setReadBook ] = useState(filterBooks(Books,"read"));
    const [ currentlyReading, setCurrentlyReadingBooks] = useState(filterBooks(Books,"currentlyReading"));
    const [ wantsToRead, setWantsToRead] = useState(filterBooks(Books,"wantsToRead"));
    const [booksData,booksDispatch] = useReducer(bookReducer,
        {   books,
            read,
            currentlyReading,
            wantsToRead,
            setBooks,
            setReadBook,
            setCurrentlyReadingBooks,
            setWantsToRead
        })
    return (
        <BookContext.Provider value={{
            booksData,
            booksDispatch
        }}>
            {children}
        </BookContext.Provider>
    );
};

export const useBooks =()=>useContext(BookContext)
