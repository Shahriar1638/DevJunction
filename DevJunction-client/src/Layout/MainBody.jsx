import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar & Footer/Navbar";
import Footer from "../Pages/Navbar & Footer/Footer";

const MainBody = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl lg:max-w-[90rem] mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainBody;