 import {createContext,  useState} from "react";
 
 export const BookContext = createContext();

 
 export const BookContextProvider =({ children })=>{
    const [books, setBooks] = useState([])
 
    const fetchBooks = async () => {
        const response = await fetch("http://localhost:9000/api/books");
        const data = await response.json();
  
        if (response.ok) {
           
          setBooks(data)
        }
      };

    return(
        // this value shpuld be dynamic state value

        <BookContext.Provider value={{books, setBooks, fetchBooks}}>     
            { children }
        </BookContext.Provider>
    )
 }