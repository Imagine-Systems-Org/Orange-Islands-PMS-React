import { IoHome } from "react-icons/io5";
import { GiHealing } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaDoorOpen } from "react-icons/fa";
import NavBarIcon from "./NavBarIcon";
import useAuth from "../api/useAuth";
import { TbSunset2 } from "react-icons/tb";


const NavBar = () => {
    const { auth } = useAuth();
    return ( 
            <nav className="fixed items-center justify-center top-0 h-32 w-screen flex flex-row bg-Selective text-white shadow-lg z-10">
                <h1>Hi {auth.employeeID}</h1>
                <NavBarIcon icon={<IoHome size="52" />} text="Dashboard" link="/dashboard"></NavBarIcon>
                    <NavBarIcon icon={<GiHealing size="52" />} text="Patient Search" link="/search"></NavBarIcon>
                    <NavBarIcon icon={<FaDoorOpen size="52" />} text="Logout" link="/logout"></NavBarIcon>
                <TbSunset2 className="text-Iris absolute right-20" size="110" />
            </nav>
     );
};
 
export default NavBar;