import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import TodoListComponent from "./TodoListComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider, {useAuth} from "./security/AuthContext";

function ProtectedRoute ({children}) {
    return useAuth().isAuthenticated ? children : <Navigate to='/' />
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
                            <Route path='/logout' element={
                                <ProtectedRoute><LogoutComponent /></ProtectedRoute>
                            } />
                            <Route path='*' element={<ErrorComponent />} />
                        </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

