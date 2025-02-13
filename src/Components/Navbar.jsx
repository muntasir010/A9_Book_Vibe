import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const links = <>
        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-green-400' : 'font-bold'} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-green-400' : 'font-bold'} to='/listedBooks'>Listed Books</NavLink> </li>
        <li> <NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-green-400' : 'font-bold'} to='/pagesToRead'>Pages to Read</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 fixed z-10 overflow-hidden max-w-7xl top-0">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink
                    to='/'
                    className="btn btn-ghost text-xl md:text-3xl font-bold flex items-center"><span><img className="w-14 h-12 rounded-full" src="/src/assets/images.jpeg" alt="" /></span>Book Vibe</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end  gap-6">
                <Link className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Sign In</Link>
                <Link className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Sign Up</Link>
            </div>
        </div>
    );
};

export default Nav;
