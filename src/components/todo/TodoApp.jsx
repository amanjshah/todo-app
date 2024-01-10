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
    const [password, setPassword] = useState('password')
    const [authenticated, setAuthenticated] = useState(false)
    const [authenticationAttempted, setAuthenticationAttempted] = useState(false)

    function handleSubmit() {
        setAuthenticationAttempted(true)
        setAuthenticated(username === 'aman' && password === 'dummy')
    }

    function AuthenticationComponent() {
        return authenticationAttempted && ((authenticated) ?
            <div className='successfulAuthentication'>Successfully authenticated</div> :
            <div className='unsuccessfulAuthentication'>Unsuccessful authentication</div>)
    }

    return (
        <div className='Login'>
            <AuthenticationComponent/>
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
                    <button type='button' name='login' onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}
