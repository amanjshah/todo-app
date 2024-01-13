import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./security/AuthContext";

export default function LoginComponent() {
  const [username, setUsername] = useState('user')
  const [password, setPassword] = useState('password')
  const navigate = useNavigate()
  const authContext = useAuth()

  function handleSubmit() {
    if (authContext.login(username, password)) {
      navigate(`/welcome/${username}`)
    }
  }

  return (
    <div className='Login'>
      <h1>Login</h1>
      {authContext.authenticationAttempted && !authContext.isAuthenticated && <div className='unsuccessfulAuthentication'>Unsuccessful authentication</div>}
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