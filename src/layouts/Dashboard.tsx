import { Header } from "@/common/header/Header"
import { Sidebar } from "@/common/sidebar/Sidebar"
import HomePage from "@/pages/home/Dashboard";
import { HomeIcon, Settings } from "lucide-react";
import { useState } from "react";

const menuItems = [
    { label: "Home", icon: <HomeIcon />, link: "/" },
    { label: "Settings", icon: <Settings />, link: "/settings" },
    {
        label: "More Options",
         icon: <Settings />,
        subItems: [
            { label: "Sub Option 1", link: "/sub1" },
            { label: "Sub Option 2", link: "/sub2" },
        ],
    },
];

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = (e: React.MouseEvent) => {
        e.preventDefault();
        setSidebarOpen((prev) => !prev);
    };

    return (
        <div className="flex h-screen bg-gray-100 ">
            <Sidebar isOpen={sidebarOpen} menuItems={menuItems} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header toggleSidebar={toggleSidebar} />

                <main className="flex-1 overflow-y-auto p-6">
                    <HomePage />
                </main>
            </div>
        </div>
    )
}

export default Dashboard