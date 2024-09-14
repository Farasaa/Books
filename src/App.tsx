
import {  useEffect, useContext } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList";
import BooksContext from "./components/context/books";





export default function App(){

    const booksContext = useContext(BooksContext);
    
    if (!booksContext) {
        throw new Error("useContext must be used within a Provider");
    }


    const { fetchBookCallback } = booksContext

    useEffect(() =>{
        fetchBookCallback()
    }, [fetchBookCallback])



    return(
        <div className="app">
            <h1>Reading List</h1>
            <BookList/>
            <BookCreate/>
        </div>
    )
}