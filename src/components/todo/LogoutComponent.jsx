import {useAuth} from "./security/AuthContext";

export default function LogoutComponent() {
    const authContext = useAuth()
    authContext.setAuthentication(false)
    authContext.setAuthenticationAttempted(false)

    return (
      <div className='Logout'>
        <h1>Logged out</h1>
      </div>
    )
}
