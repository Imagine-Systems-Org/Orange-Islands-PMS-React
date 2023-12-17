import { IoHome } from "react-icons/io5";
import { GiHealing } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaDoorOpen } from "react-icons/fa";
import NavBarIcon from "./NavBarIcon";


const NavBar = () => {
    return ( 
            <nav className="fixed items-center justify-center top-0 h-32 w-screen flex flex-row bg-Selective text-white shadow-lg">
                <NavBarIcon icon={<IoHome size="52" />} text="Dashboard" link="/dashboard"></NavBarIcon>
                    <NavBarIcon icon={<GiHealing size="52" />} text="Patient Search" link="/search"></NavBarIcon>
                    <NavBarIcon icon={<FaDoorOpen size="52" />} text="Logout" link="/logout"></NavBarIcon>
                <NavBarIcon icon={<CgProfile size="52"/>} text="Account" />
            </nav>
     );
};
 
export default NavBar;