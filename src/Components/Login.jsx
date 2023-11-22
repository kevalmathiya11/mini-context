import  React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'


function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault() 
        setUser({username,password})
    }
  return (
    <div>
      <input type='text'
       placeholder='Enter Username'
       value={username}
       onChange={(e) => setUsername(e.target.value)}
        />
        {' '}
      <input type='password' 
      placeholder='Enter Password'
      value={password}
       onChange={(e) => setPassword(e.target.value)}
       />
      <button onClick={handleSubmit} type='submit'>Login</button>

    </div>
  )
}

export default Login
