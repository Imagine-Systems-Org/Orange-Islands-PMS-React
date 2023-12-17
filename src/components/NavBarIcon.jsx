import { Link } from 'react-router-dom';

const NavBarIcon = ({ icon, text, link }) => (
    <Link to={link}>
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
    </Link>
);

export default NavBarIcon;