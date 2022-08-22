import {useState, React} from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(email,password)
  }

  return (
   <div>

    <form className='form-group' onSubmit={handleSubmit}>
      
    <label>Email:</label>

    <br />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
  <br />
        <label>Password:</label>

        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

<br />
        <button>Login</button>

    </form>

    </div>
  )
}

export default Login