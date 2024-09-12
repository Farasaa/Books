import { useState } from "react"

interface BookEditProps{
 book: {   
    id: number,
    title: string
 } 
 onEdit: (id:number, newTitle: string) => void
}


export default function BookEdit({book, onEdit}: BookEditProps){

    const [titleEdit, setTitleEdit] = useState(book.title)

    function handleInputChange(event:React.ChangeEvent<HTMLInputElement>){

        
        setTitleEdit(event.target.value)

    }

    function handleSaveButton(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        onEdit(book.id, titleEdit)
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