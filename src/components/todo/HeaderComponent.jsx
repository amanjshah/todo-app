import {Link} from "react-router-dom";
import {useAuth} from "./security/AuthContext";

export default function HeaderComponent() {

  const isAuthenticated = useAuth().isAuthenticated

  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container navbar navbar-expand-lg">
        <a className="navbar-brand ms-1 fs-2 fw-bold text-black" href="https://github.com/amanjshah">To-do</a>
        <ul className="navbar-collapse navbar-nav">
          <li className="nav-item fs-5">
            {isAuthenticated && <Link className="nav-link" to="/welcome/aman">Home</Link>}
          </li>
          <li className="nav-item fs-5">
            {isAuthenticated && <Link className="nav-link" to="/todos">Todos</Link>}
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item fs-5">
            {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}
          </li>
          <li className="nav-item fs-5">
            {isAuthenticated && <Link className="nav-link" to="/logout">Logout</Link>}
          </li>
        </ul>
      </div>
    </header>
  )
}