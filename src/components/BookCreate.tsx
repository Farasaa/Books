import { useState, useContext } from "react"
import BooksContext from "./context/books"





export default function BookCreate(){

    const [bookState, setBookState] = useState('')

    const booksCreateContext = useContext(BooksContext);
    
    if (!booksCreateContext) {
        throw new Error("useContext must be used within a Provider");
    }

    const { onCreate } = booksCreateContext

    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        setBookState(event.target.value)
    }

    function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        onCreate(bookState)
        setBookState('')
    }


    return(
        <div className="book-create">
            <h3>Add a Book</h3>
            <form
            onSubmit={handleSubmit}
            >
                <label>Title</label>
                <input 
                className="input"
                onChange={handleChange}
                value={bookState}
                />
                <button className="button">Create</button>
            </form>


        </div>
    )
}