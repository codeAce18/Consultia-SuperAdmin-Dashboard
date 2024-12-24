import { useState } from "react";
import Image from "next/image";
import { Input } from '@/components/ui/input';
import { Separator } from "@/components/ui/separator";
import { SearchIcon } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import NotificationIcon from "../../public/assets/NotificationIcon.svg";
import ChatIcon from "../../public/assets/ChatIcon.svg";
import profile from "../../public/assets/profile.svg";
import ArrowDown from "../../public/assets/ArrowDown.svg";

const DashboardHeader = ({ 
  title = "Super Admin", 
  mobileTitle = "Admin",  
  showSearch = true,     
  showNotifications = true, 
  showChat = true,       
}) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <div className="sticky top-0 z-[30] bg-white">
      <div className="flex flex-col w-full px-4 lg:px-0">
        {/* Main Header Content */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left Section - Title and Search */}
          <div className="flex items-center gap-4 lg:gap-10">
            {/* Title with responsive size */}
            <h1 className="text-base lg:text-xl font-bold text-[#101828] whitespace-nowrap">
              <span className="lg:hidden">{mobileTitle}</span>
              <span className="hidden lg:inline">{title}</span>
            </h1>
            
            {/* Search Bar - Desktop */}
            {showSearch && (
              <div className="hidden lg:block">
                <div className="relative flex items-center w-[479px] h-10">
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="pr-10 pl-10 py-2 border-none bg-[#F0F0F9] rounded-full max-w-[379px] w-full text-gray-800 focus:outline-none focus:ring focus:ring-[#5B52B6]/20"
                  />
                  <div className="absolute left-3">
                    <SearchIcon className="w-5 h-5 text-gray-500" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Section - Actions and Profile */}
          <div className="flex items-center gap-2 lg:gap-[10px] lg:border-l lg:border-[#D0D0D3] lg:pl-[20px]">
            {/* Search Toggle - Mobile Only */}
            {showSearch && (
              <button 
                onClick={() => setIsSearchVisible(!isSearchVisible)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Toggle search"
              >
                <SearchIcon className="w-5 h-5 text-gray-600" />
              </button>
            )}

            {/* Action Icons */}
            {showNotifications && (
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <Image 
                  width={20} 
                  height={20} 
                  src={NotificationIcon} 
                  alt="Notifications"
                  className="w-5 h-5" 
                />
                {/* Notification Badge */}
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
            )}

            {showChat && (
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Image 
                  width={20} 
                  height={20} 
                  src={ChatIcon} 
                  alt="Messages"
                  className="w-5 h-5" 
                />
              </button>
            )}

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-2">
                  <Image 
                    width={32} 
                    height={32} 
                    src={profile} 
                    alt="Profile" 
                    className="rounded-full"
                  />
                  <div className="hidden lg:block text-left">
                    <h2 className="text-[12px] whitespace-nowrap font-semibold text-[#101828]">
                      Consultia LTD
                    </h2>
                    <p className="text-xs text-[#41404B]">
                      Super Admin
                    </p>
                  </div>
                  <Image 
                    width={16} 
                    height={16} 
                    src={ArrowDown} 
                    alt="Menu" 
                    className="w-4 h-4"
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="flex items-center gap-2">
                  <Image 
                    width={20} 
                    height={20} 
                    src={profile} 
                    alt="Profile" 
                  />
                  <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                  <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Search - Expandable */}
        {showSearch && isSearchVisible && (
          <div className="lg:hidden py-3 px-2 animate-in slide-in-from-top">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search..."
                className="pr-10 pl-10 py-2 border-none bg-[#F0F0F9] rounded-full w-full text-gray-800 focus:outline-none focus:ring focus:ring-[#5B52B6]/20"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <SearchIcon className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>
        )}

        <Separator />
      </div>
    </div>
  );
};

export default DashboardHeader;