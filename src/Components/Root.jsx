import { Outlet } from "react-router-dom";
import Nav from "./Navbar";

const Root = () => {
    return (
        <div className="max-w-7xl mx-5 md:mx-10 sm:mx-10 lg:mx-auto">
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default Root;