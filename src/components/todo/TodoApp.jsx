import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './TodoApp.css'
import { useNavigate } from 'react-router-dom'

export default function TodoApp() {
    return (
        <div className='TodoApp'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome' element={<WelcomeComponent />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState('user')
    const [password, setPassword] = useState('password')
    const [authenticated, setAuthenticated] = useState(false)
    const [authenticationAttempted, setAuthenticationAttempted] = useState(false)
    const navigate = useNavigate()

    function handleSubmit() {
        if (username === 'aman' && password === 'dummy'){
            setAuthenticated(username === 'aman' && password === 'dummy')
            navigate('/welcome')
        }
        setAuthenticationAttempted(true)
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

function WelcomeComponent() {
    return (
        <div className='Welcome'>Welcome</div>
    )
}
