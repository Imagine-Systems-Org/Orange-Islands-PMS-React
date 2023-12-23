import useAuth from "../api/useAuth";
import useAccount from "../api/useAccount";

function Logout() {
    const { setAuth } = useAuth()
    const { setAccount } = useAccount()
        setAuth({})
        setAccount({})
}

export default Logout