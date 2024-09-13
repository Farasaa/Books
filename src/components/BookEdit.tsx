import { useState, useContext } from "react"
import BooksContext from "./context/books"

interface BookEditProps{
 book: {   
    id: number,
    title: string
 } 
 onSubmit: () => void
}


export default function BookEdit({book, onSubmit}: BookEditProps){

    const [titleEdit, setTitleEdit] = useState(book.title)
    const booksEditContext = useContext(BooksContext)

    if(!booksEditContext){
        throw new Error("useContext must be used within a Provider")
    }

    const { editTitle } = booksEditContext

    function handleInputChange(event:React.ChangeEvent<HTMLInputElement>){

        
        setTitleEdit(event.target.value)

    }

    function handleSaveButton(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        onSubmit()
        editTitle(book.id, titleEdit)
    }

    return(
        <form onSubmit={handleSaveButton} className="book-edit">
            <label>Title</label>
            <input 
            className="input" 
            onChange={handleInputChange}
            value={titleEdit}
            />
            <button className="button is-primary">Save</button>
        </form>
    
    )
}