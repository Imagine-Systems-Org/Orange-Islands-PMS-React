import { IoHome } from "react-icons/io5";
import { GiHealing } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaDoorOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <div className="flex">
            <nav className="fixed items-center justify-center top-0 h-32 w-screen flex flex-row bg-Selective text-white shadow-lg">
                <NavBarIcon icon={<IoHome size="52" />} text="Dashboard"><Link to='/dashboard' /></NavBarIcon>
                    <NavBarIcon icon={<GiHealing size="52" />} text="Patient Search" ><Link to='/search'/></NavBarIcon>
                    <NavBarIcon icon={<FaDoorOpen size="52" />} text="Logout" ><Link to='/logout' /></NavBarIcon>
                <NavBarIcon icon={<CgProfile size="52"/>} text="Account" />
            </nav>
        </div>
     );
};

const NavBarIcon = ({ icon, text }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);
 
export default NavBar;