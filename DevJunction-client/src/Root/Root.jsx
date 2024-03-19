import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar & Footer/Navbar";
import Footer from "../Component/Navbar & Footer/Footer";

const Root = () => {
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

export default Root;