import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import React from "react";
import { Menu } from "@/common/menu/Menu";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

export const Header: React.FC<{ toggleSidebar: (e: React.MouseEvent) => void }> = ({ toggleSidebar }) => {
    console.log('fff',)
    const { theme, setTheme } = useTheme();

    // Toggle between dark and light themes
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header className="flex justify-between items-center bg-background text-foreground p-4 border-b">
            <button onClick={(e) => { console.log('ff'); toggleSidebar(e); }} className="text-xl">
                <HamburgerMenuIcon />
            </button>
            <div className="flex items-center space-x-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                >
                    {theme === "light" ? (
                        <MoonIcon className="w-5 h-5" />
                    ) : (
                        <SunIcon className="w-5 h-5" />
                    )}
                </button>
                <Menu />
            </div>
        </header>
    );
}
