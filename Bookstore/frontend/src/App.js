import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import AddBook from './pages/AddBook';
import Blogs from './pages/Blogs';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    <div className ="App">
    
     <Router>
     <Navbar />
      <Routes classname="pages">
        <Route path="/" element ={ <Home/>}/>
        <Route path="/addBook" element ={ <AddBook/>}/>
        <Route path="/blogs" element ={ <Blogs/>}/>
        <Route path="/signup" element ={ <Signup/>}/>
        <Route path="/login" element={ <Login/>} />

      </Routes>
     </Router>


    </div>
  );
}

export default App;
