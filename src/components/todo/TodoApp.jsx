import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import './TodoApp.css'
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import TodoListComponent from "./TodoListComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider, {useAuth} from "./security/AuthContext";
import TodoComponent from "./TodoComponent";

function ProtectedRoute ({children}) {
    const authContext = useAuth()
    return authContext.isAuthenticated ? children : <Navigate to='/' />
}

export default function TodoApp() {
    return (
        <div className='TodoApp'>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                        <Routes>
                            <Route path='/' element={<LoginComponent />} />
                            <Route path='/login' element={<LoginComponent />} />
                            <Route path='/welcome/:username' element={
                                <ProtectedRoute><WelcomeComponent /></ProtectedRoute>
                            } />
                            <Route path='/todos' element={
                                <ProtectedRoute><TodoListComponent /></ProtectedRoute>
                            } />
                            <Route path='/todo/:id' element={
                                <ProtectedRoute><TodoComponent /></ProtectedRoute>
                            } />
                            <Route path='*' element={<ErrorComponent />} />
                        </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

