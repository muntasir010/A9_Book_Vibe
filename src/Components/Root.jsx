import { Outlet } from "react-router-dom";
import Nav from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-5 md:mx-10 sm:mx-10 lg:mx-auto">
                <Nav />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;