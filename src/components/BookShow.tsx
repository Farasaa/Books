import { useState } from "react";
import BookEdit from "./BookEdit";

interface BookShowProps {
    book: {
        id: number;
        title: string;
    };
    deleteBook: (id: number) => void;
    onEdit: (id:number, newTitle: string) => void
}



export default function BookShow({book, deleteBook , onEdit}: BookShowProps){

    const [showEdit, setShowEdit] = useState(false)

    function handleEditButton(){
        setShowEdit(!showEdit)
    }

    function handleClick(){
        deleteBook(book.id)
    }



    return(
     
        <div className="book-show">
             {showEdit ? book.title : <BookEdit onEdit={onEdit} book= {book} /> }
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