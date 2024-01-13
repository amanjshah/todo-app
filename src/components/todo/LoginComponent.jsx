import {useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthenticationComponent from "./AuthenticationComponent";

export default function LoginComponent() {
  const [username, setUsername] = useState('user')
  const [password, setPassword] = useState('password')
  const [authenticated, setAuthenticated] = useState(false)
  const [authenticationAttempted, setAuthenticationAttempted] = useState(false)
  const navigate = useNavigate()

  function handleSubmit() {
    if (username === 'aman' && password === 'dummy') {
      setAuthenticated(username === 'aman' && password === 'dummy')
      // Use ticks (``) and ${variable} to put variable inside a string in JS
      navigate(`/welcome/${username}`)
    }
    setAuthenticationAttempted(true)
  }

  return (
    <div className='Login'>
      <h1>Login</h1>
      <AuthenticationComponent authenticated={authenticated} authenticationAttempted={authenticationAttempted}/>
      <div className='LoginForm'>
        <div>
          <label>Username: </label>
          <input type='text' name='username' value={username} onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div>
          <label>Password: </label>
          <input type='password' name='password' value={password}
                 onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div>
          <button type='button' name='login' onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  )
}