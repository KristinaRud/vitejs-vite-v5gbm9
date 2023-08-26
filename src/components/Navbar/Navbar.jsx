import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = ()=>{
    return(
        <nav className="menu-list">
            <NavLink to='/voting' className={({isActive})=>(isActive ? 'menu-item active':'menu-item')}>
                    <div className="item voting"></div>
                    <button className="menu-btn">VOTING</button>
            </NavLink>
            <NavLink to='/breeds' className={({isActive})=>(isActive ? 'menu-item active':'menu-item')}>
                    <div className="item breeds"></div>
                    <button className="menu-btn">BREEDS</button>
            </NavLink>
            <NavLink to='/gallery' className={({isActive})=>(isActive ? 'menu-item active':'menu-item')}>
                    <div className="item gallery"></div>
                    <button className="menu-btn">GALLERY</button>
            </NavLink>
        </nav>
    );
};
export default Navbar;