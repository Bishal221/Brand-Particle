import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

import SideBar from "./Components/SideBar";
import { Images } from '../assets/Index';
import { Menu } from './Components/AdminMenuItems';
import { useState } from "react";
import Header from "./Components/Header";

const AdminRoutes = () => {
    
    const [menushow, setMenushow] = useState(false);

    return (
        <section id="admin" className="bg-[#eaedf7] w-screen h-screen overflow-hidden">
            <Header
                menushow={menushow}
                setMenushow = {setMenushow}
            />
            <SideBar
                MainLogo={Images.BrandWhite}
                SmallLogo={Images.SmallLogoWhite}
                Menu={Menu}
                menushow={ menushow }
            />
            <section className={`${ menushow ? 'ml-[15rem]' : 'ml-[5rem]'} min-h-[calc(100vh_-_7.5rem)] transition-all duration-[0.05s] ease-[ease] mt-[4rem] px-[0.8rem]`}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                </Routes>
            </section>
        </section>
    );
};

export default AdminRoutes;
