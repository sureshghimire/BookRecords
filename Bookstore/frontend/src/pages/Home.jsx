
import { useContext } from "react";
import {  useEffect, React } from "react";
import {BookContext} from '../context/BookContext'


import AddBook from "./AddBook";
function Home() {
 //const [books, setBooks] = useState([])

 const {books, setBooks, fetchBooks} = useContext(BookContext)

  useEffect(() => {

    fetchBooks();
  },[]);

  const handleDelete =async (_id)=>{

    const response = await fetch('"http://localhost:9000/api/books/'+books._id,{
      method:'DELETE'
    })

    const result = await response.json();

    if(response.ok){
      setBooks(result.filter((book)=>book._id  !==_id))
    }
    fetchBooks()

  }
  
  return (
    <div className="container">
      <div className="bookList">
        <h3>Book List</h3>
        <div>
          <ol>
            {books.map((book) => (
              <li key={book._id} className="book-item">
                <h4>{book.title}</h4>
                <span>{book.description}</span><br />
                <span>{book.year}</span>
                <button className="btn btn-outline-danger" onClick={handleDelete}>Del</button>
                
              </li>
              
            ))}
            
          </ol>
          
        </div>

        
      </div>

      <AddBook />
    </div>
  );
}

export default Home;
