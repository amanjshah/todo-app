import {useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthenticationComponent from "./AuthenticationComponent";
import {useAuth} from "./security/AuthContext";

export default function LoginComponent() {
  const [username, setUsername] = useState('user')
  const [password, setPassword] = useState('password')
  const [authenticationAttempted, setAuthenticationAttempted] = useState(false)
  const navigate = useNavigate()
  const authContext = useAuth()

  function handleSubmit() {
    if (username === 'aman' && password === 'dummy') {
      authContext.setAuthentication(true)
      // Use ticks (``) and ${variable} to put variable inside a string in JS
      navigate(`/welcome/${username}`)
    }
    setAuthenticationAttempted(true)
  }

  return (
    <div className='Login'>
      <h1>Login</h1>
      <AuthenticationComponent authenticated={authContext.isAuthenticated} authenticationAttempted={authenticationAttempted}/>
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