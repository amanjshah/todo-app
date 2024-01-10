import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className='TodoApp'>
            <LoginComponent />
        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState('user')
    const [password, setPassword] = useState('dummy')

    return (
        <div className='Login'>
            <div className='LoginForm'>
                <div>
                    <label>Username: </label>
                    <input type='text' name='username' value={username} onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div>
                    <button type='button' name='login'>Login</button>
                </div>
            </div>
        </div>
    )
}
