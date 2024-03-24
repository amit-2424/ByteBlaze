import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayouts = () => {
    return (
        <div>
            <div className="h-16"><NavBar></NavBar></div>
            <div className="min-h-[calc(100vh-116px)]"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;