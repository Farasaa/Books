import BookShow from "./BookShow"
import { useContext } from "react"
import BooksContext from "./context/books"



export default function BookList(){

    const bookListContext = useContext(BooksContext)

    if(!bookListContext){

        throw new Error("useContext must be used within a Provider")
    }

    const {  books } = bookListContext
    
    const renderBooks = books.map((book) =>{

        return <BookShow key={book.id} book={book} />
    })

    return(
        <div className="book-list">
            
            
            {renderBooks}
            </div>
    )
}