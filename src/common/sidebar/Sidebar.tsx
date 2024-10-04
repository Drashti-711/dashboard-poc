// import { HomeIcon } from "@radix-ui/react-icons";
// import React from "react";
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     // navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

// export const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
//     console.log({ isOpen });

//     return (
//         <div
//             className={`bg-background text-foreground text- h-full border-r transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : ''}`}
//         >
//             <div className="p-4">
//                 <h2 className={`text-lg font-bold transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
//                     Dashboard
//                 </h2>
//                 <ul className="mt-6 space-y-4">
//                     {/* Normal Menu Item with NavigationMenu */}
//                     <li>
//                         <NavigationMenu>
//                             <NavigationMenuList>
//                                 <NavigationMenuItem>
//                                     <a href="#" className="flex items-center space-x-2">
//                                         <HomeIcon className="text-xl" />
//                                         {isOpen && <span>Home</span>}
//                                     </a>
//                                 </NavigationMenuItem>
//                             </NavigationMenuList>
//                         </NavigationMenu>
//                     </li>

//                     <li>
//                         <NavigationMenu>
//                             <NavigationMenuList>
//                                 <NavigationMenuItem>
//                                     <a href="#" className="flex items-center space-x-2">
//                                         {/* <IoSettingsOutline className="text-xl" /> */}
//                                         {isOpen && <span>Settings</span>}
//                                     </a>
//                                 </NavigationMenuItem>
//                             </NavigationMenuList>
//                         </NavigationMenu>
//                     </li>
//                     <li>
//                         <NavigationMenu>
//                             <NavigationMenuList>
//                                 <NavigationMenuItem>
//                                     <NavigationMenuTrigger className="flex items-center space-x-2">
//                                         {isOpen && <span>More Options</span>}
//                                     </NavigationMenuTrigger>
//                                     <NavigationMenuContent>
//                                         <ul className="flex flex-col p-2 space-y-2">
//                                             <li>
//                                                 <NavigationMenuLink href="#" className="flex items-center space-x-2">
//                                                     {isOpen && <span className="w-full">Sub Option 1</span>}
//                                                 </NavigationMenuLink>
//                                             </li>
//                                             <li>
//                                                 <NavigationMenuLink href="#" className="flex items-center space-x-2">
//                                                     {isOpen && <span>Sub Option 2</span>}
//                                                 </NavigationMenuLink>
//                                             </li>
//                                         </ul>
//                                     </NavigationMenuContent>
//                                 </NavigationMenuItem>
//                             </NavigationMenuList>
//                         </NavigationMenu>
//                     </li>
//                 </ul>
//                 <ul className="mt-6 space-y-4">
//                     <li>
//                         <a href="#" className="flex items-center space-x-2">
//                             <HomeIcon className="text-xl" />
//                             {isOpen && <span>Home</span>}
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="flex items-center space-x-2">
//                             {/* <IoSettingsOutline className="text-xl" /> */}
//                             {isOpen && <span>Settings</span>}
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };


import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LayoutTemplate } from "lucide-react";
// import { Link } from "@radix-ui/react-navigation-menu";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type MenuItem = {
    label: string;
    icon?: React.ReactNode;
    link?: string;
    subItems?: MenuItem[];
};

type SidebarProps = {
    isOpen: boolean;
    menuItems: MenuItem[];
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, menuItems }) => {
    return (
        <div
            className={`bg-background text-foreground h-full border-r transition-all duration-300 ease-in-out ${isOpen ? "w-64" : ""
                }`}
        >
            <div className="p-4">
                <div className="flex items-center gap-2 ">
                    <LayoutTemplate />
                    <h2
                        className={`text-lg font-bold transition-opacity ${isOpen ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {isOpen && <>Dashboard</>}
                    </h2>
                </div>
                <ul className="mt-6 space-y-4">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {/* <DropdownMenu defaultOpen>
                                <DropdownMenuTrigger asChild>
                                    <button className="flex items-center space-x-2">
                                        {item.icon && <span className="text-xl">{item.icon}</span>}
                                        {isOpen && <span>{item.label}</span>}
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-40 shadow-none border-none pl-8">
                                    {item?.subItems?.map((subItem, subIndex) => (
                                        <DropdownMenuItem key={subIndex} asChild>
                                            <a href={subItem.link || "#"} className="flex items-center">
                                                {subItem.label}
                                            </a>
                                        </DropdownMenuItem>
                                    ))}ddd
                                </DropdownMenuContent>
                            </DropdownMenu> */}
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        {item.subItems ? (
                                            <>
                                                <NavigationMenuTrigger className="flex items-center space-x-2">
                                                    {item.icon && <span className="text-xl">{item.icon}</span>}
                                                    {isOpen && <span>{item.label}</span>}
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent className="w-40">
                                                    <ul className="flex flex-col p-2 space-y-2 w-full">
                                                        {item.subItems.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <NavigationMenuLink
                                                                    href={subItem.link || "#"}
                                                                    className="flex items-center space-x-2 w-full"
                                                                >
                                                                    {isOpen && <span>{subItem.label}</span>}
                                                                </NavigationMenuLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </>
                                        ) : (
                                            <>
                                                <NavigationMenuLink href={item.link || "#"}
                                                    className="flex items-center space-x-2">
                                                    {item.icon && <span className="text-xl">{item.icon}</span>}
                                                    {isOpen && <span>{item?.label}</span>}
                                                </NavigationMenuLink>
                                            </>
                                        )}
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
