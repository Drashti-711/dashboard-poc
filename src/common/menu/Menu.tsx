import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { UserCircle } from "lucide-react";

export const Menu: React.FC = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 text-sm focus:outline-none">
                    <UserCircle className="text-2xl text-foreground" />
                    <span className="font-semibold text-foreground">John Doe</span>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-36">
                <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                        console.log("Profile clicked");
                    }}
                >
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                        console.log("Logout clicked");
                    }}
                >
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
