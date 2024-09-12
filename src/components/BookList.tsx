import BookShow from "./BookShow"

interface BooksListType{
    id: number,
    title: string,
   
}

interface BookType{
    books: BooksListType[]
    deleteBook: (id:number) => void
    onEdit:(id: number, newTitle: string) => void
}


export default function BookList({books, deleteBook , onEdit}:BookType){

    const renderBooks = books.map((book) =>{

        return <BookShow key={book.id} book={book} onEdit={onEdit} deleteBook={deleteBook}/>
    })

    return(
        <div className="book-list">{renderBooks}</div>
    )
}