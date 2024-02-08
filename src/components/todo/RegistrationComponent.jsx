import {useState} from "react";
import {executeUserRegistrationService} from "./api/AuthenticationApiService";
import {useNavigate} from "react-router-dom";

export default function RegistrationComponent() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit() {
    await executeUserRegistrationService(username, password)
      .then(() => navigate('/login'))
      .catch(error => console.log(error))
  }

  return (
    <div className='Registation'>
      <h1>Register</h1>
      <div className='RegistrationForm'>
        <div>
          <label>Username: </label>
          <input type='text' name='username' value={username}
                 onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div>
          <label>Password: </label>
          <input type='password' name='password' value={password}
                 onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div>
          <button type='button' name='register' onClick={handleSubmit}>Register</button>
        </div>
      </div>
    </div>
  )
}