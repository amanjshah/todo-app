import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className='TodoApp'>
            <HeaderComponent />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<TodoListComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />
                    <Route path='*' element={<ErrorComponent />} />
                </Routes>
            </BrowserRouter>
          <FooterComponent />
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
                    <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div>
                    <button type='button' name='login' onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function LogoutComponent() {
    return (
      <div className='Logout'>
        <h1>Logged out</h1>
      </div>
    )
}

function WelcomeComponent() {
    return (
      <div className='Welcome'>
        <h1>Welcome {useParams().username}</h1>
        <Link to='/todos'>Manage your to-do list</Link>
      </div>
    )
}

function ErrorComponent() {
    return (
        <div className='Error'>
            <h1>Page not found!</h1>
        </div>
    )
}

function HeaderComponent() {
  return (
    <div className='Header'>
      Header <hr/>
    </div>
  )
}

function FooterComponent() {
  return (
    <div className='Footer'>
      <hr/> Footer
    </div>
  )
}

function AuthenticationComponent({authenticationAttempted, authenticated}) {
    return authenticationAttempted && ((authenticated) ?
      <div className='successfulAuthentication'>Successfully authenticated</div> :
      <div className='unsuccessfulAuthentication'>Unsuccessful authentication</div>)
}

function TodoListComponent() {
    const todos = [
                                                {id: 1, description: 'Read UDS', done: false},
                                                {id: 2, description: 'Learn AWS', done: false},
                                                {id: 3, description: 'Learn DevOps', done: false},
                                            ]
    return (
      <div className="container">
          <h1>To-do list</h1>
          <div>
              <table className="table">
                  <thead>
                      <tr>
                          <td>ID</td>
                          <td>Description</td>
                          <td>Done</td>
                      </tr>
                  </thead>
                  <tbody>
                    {todos.map(
                      item =>
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.description}</td>
                          <td>{item.done.toString()}</td>
                        </tr>
                    )}
                  </tbody>
              </table>
          </div>
      </div>
    )
}

