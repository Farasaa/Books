import { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";

interface BooksContextType{
    books: Book[],
    fetchBooks: () => void,
    editTitle: (id: number, newTitle: string) => void,
    deleteBook: (id: number) => void,
    onCreate: (title:string) => void

}

interface Book {
    id: number;
    title: string;
}



const BooksContext = createContext<BooksContextType | undefined>(undefined)
interface ProviderProps {
    children: ReactNode;
}

function Provider({children}: ProviderProps){
    const [books, setBooks] = useState<Book[]>([])


    async function fetchBooks(){
        const response = await axios.get('http://localhost:3001/books')

        setBooks(response.data)
    }

 
  

    async function editTitle(id:number, newTitle:string){

        const response = await axios.put(`http://localhost:3001/books/${id}`,{

            title: newTitle
        })

        const updateTitle = books.map((book) =>{
            if(book.id === id){

                return {...book, ...response.data}
            }

            return book

        })

        setBooks(updateTitle)

    }
    
    async function deleteBook(id: number){

        const response = await axios.delete(`http://localhost:3001/books/${id}`)

        const deleteBook = books.filter((book) =>{
            return book.id !== id
        })

        setBooks(deleteBook)
    }


    async function onCreate (title:string){
        const response = await axios.post('http://localhost:3001/books', {
              title
          })
  
          
          const addBook = [...books, response.data]
          setBooks(addBook)
      }

    
    const valueToShare = {
        books,
        fetchBooks,
        onCreate,
        editTitle,
        deleteBook
        
    }

    return <BooksContext.Provider value={valueToShare}>

                {children}

            </BooksContext.Provider>

}

export {Provider}
export default BooksContext