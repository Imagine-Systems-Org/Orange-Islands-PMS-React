import { IoHome } from "react-icons/io5";
import { GiHealing } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaDoorOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <div className="flex">
            <nav className="fixed items-center justify-center top-0 h-32 w-screen flex flex-row bg-Selective text-white shadow-lg">
                <Link to='/dashboard'><NavBarIcon icon={<IoHome size="52" />} /></Link>
                    <Link to='/search'><NavBarIcon icon={<GiHealing size="52" />} /></Link>
                    <Link to='/logout'><NavBarIcon icon={<FaDoorOpen size="52" />} /></Link>
                <NavBarIcon icon={<CgProfile size="52" />} />
            </nav>
        </div>
     );
};

const NavBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);
 
export default NavBar;