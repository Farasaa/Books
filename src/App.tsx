
import { useState } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList";


interface Book {
    id: number;
    title: string;
}


export default function App(){

    const [books, setBooks] = useState<Book[]>([])

    function editTitle(id:number, newTitle:string){
        const updateTitle = books.map((book) =>{
            if(book.id === id){

                return {...book, title: newTitle}
            }

            return book

        })

        setBooks(updateTitle)

    }

    function deleteBook(id: number){
        const deleteBook = books.filter((book) =>{
            return book.id !== id
        })

        setBooks(deleteBook)
    }

    function onCreate(title:string){
        const addBook = [...books, {id:Math.round(Math.random() * 9999) , title}]
        setBooks(addBook)
    }

    return(
        <div className="app">
            <BookList books ={books} onEdit = {editTitle} deleteBook = {deleteBook}/>
            <BookCreate createBook={onCreate} />
        </div>
    )
}