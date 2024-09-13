import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "./context/books";


interface BookShowProps {
    book: {
        id: number;
        title: string;
    };

    
}



export default function BookShow({book }: BookShowProps){
    const bookShowContext = useContext(BooksContext)

    if(!bookShowContext){

        throw new Error("useContext must be used within a Provider")
    }

    const {deleteBook} = bookShowContext

    const [showEdit, setShowEdit] = useState(false)

    function handleEditButton(){
        setShowEdit(!showEdit)
    }

    function handleClick(){
        deleteBook(book.id)
    }

    function handleSubmit(){
       
        setShowEdit(false)
         
    }



    return(
     
        <div className="book-show">
            <img 
            alt="books"
            src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
             {showEdit ? (<BookEdit onSubmit={handleSubmit} book= {book} /> ) : (book.title)}
            <div className="actions">
                <button onClick={handleEditButton} className="edit">
                    Edit
                </button>
                <button onClick={handleClick} className="delete">
                    Delete
                </button>
            </div>
            </div>
    )
}