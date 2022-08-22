import { useContext } from 'react';
import {useState, React} from 'react'
import { BookContext } from '../context/BookContext';

function AddBook() {
  

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('')
  const [error, setError]= useState('')

  const {fetchBooks} = useContext(BookContext)

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const book = {title, author, description, year}
    

    const response = await fetch('http://localhost:9000/api/books',{
      method:'POST',
      body: JSON.stringify(book),
      headers:{
        'Content-Type': 'application/json'
      }

    })

    const result = await response.json();
    console.log(result)

    if(!response.ok){
      setError(result.error);
      console.log(error)
    }

    if(response.ok){
    

      setError(null)
      setTitle('')
      setAuthor('')
      setDescription('')
      setYear('')
      fetchBooks()
      
    }


  }


  return (
    <div className='form-container'>
      <form className="form" onSubmit={handleSubmit}>
        <h3>New Book</h3>

      <label htmlFor="">Title</label>
      <input
      className='form-control'
        type='text'
        onChange={(e)=> setTitle(e.target.value) }
        value = {title}
      />

      <label htmlFor="">Author</label>
      <input
      className='form-control'
      type='text'
      onChange={(e)=>setAuthor(e.target.value)}
      value={author}
      />
      

      <label htmlFor="">Description</label>
      <input 
      className='form-control'
      type='text'
      onChange={(e)=>setDescription(e.target.value)}
      value={description}
      />

      <label htmlFor="">Year</label>
      <input 
      className='form-control'
      type='number'
      onChange={(e)=>setYear(e.target.value)}
      value={year}
      />

     <br />
      <button type='submit' className='btn btn-outline-primary'>Add</button>
    

      </form>

    </div>
  )
}

export default AddBook