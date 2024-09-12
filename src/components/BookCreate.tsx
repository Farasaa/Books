import { useState } from "react"

interface BookCreation{
    createBook: (title:string) => void
}



export default function BookCreate({createBook}: BookCreation){

    const [bookState, setBookState] = useState('')

    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        setBookState(event.target.value)
    }

    function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        createBook(bookState)
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