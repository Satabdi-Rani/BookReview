import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="container mx-auto mt-4">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
                                <li><NavLink to="/listedbooks" className={({ isActive }) => isActive ? 'active-link' : ''}>Listed Books</NavLink> </li>
                                <li><NavLink to="/pagestoread" className={({ isActive }) => isActive ? 'active-link' : ''}> Pages to Read</NavLink> </li>
                            </ul>
                        </div>
                        <h1 className="text-4xl font-bold">Book Vibe</h1>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 flex gap-4">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
                            <li><NavLink to="/listedbooks" className={({ isActive }) => isActive ? 'active-link' : ''}>Listed Books</NavLink> </li>
                            <li><NavLink to="/pagestoread" className={({ isActive }) => isActive ? 'active-link' : ''}> Pages to Read</NavLink> </li>
                        </ul>
                    </div>
                    <div className="flex flex-row gap-4 navbar-end">
                        <a href="#" className="btn text-lg text-white bg-[#23BA0A]">Sign In</a>
                        <a href="#" className="btn text-lg text-white bg-[#59C6D2]">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;