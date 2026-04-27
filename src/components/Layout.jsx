import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="bg-green-500">
            Navbar
            <div className="bg-purple-500">
                <Outlet />
            </div>
        </div>
    );
}