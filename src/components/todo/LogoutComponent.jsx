import {useAuth} from "./security/AuthContext";

export default function LogoutComponent() {
    useAuth().logout()
}
