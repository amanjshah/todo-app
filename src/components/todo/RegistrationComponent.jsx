import {useState} from "react";

export default function RegistrationComponent() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
          <button type='button' name='register'>Register</button>
        </div>
      </div>
    </div>
  )
}