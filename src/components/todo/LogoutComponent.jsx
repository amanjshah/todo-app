import {useAuth} from "./security/AuthContext";

export default function LogoutComponent() {
    useAuth().setAuthentication(false)
    return (
      <div className='Logout'>
        <h1>Logged out</h1>
      </div>
    )
}
