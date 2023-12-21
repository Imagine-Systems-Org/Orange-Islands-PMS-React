import useAuth from "../api/useAuth";

function Logout() {
    const { setAuth } = useAuth()
        setAuth({})
}

export default Logout