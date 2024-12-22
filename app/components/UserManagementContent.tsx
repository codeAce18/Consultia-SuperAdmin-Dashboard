import React from 'react'

import { Input } from '@/components/ui/input';
import { Separator } from "@/components/ui/separator"
import { SearchIcon } from 'lucide-react';


import NotificationIcon from "../../public/assets/NotificationIcon.svg"
import ChatIcon from "../../public/assets/ChatIcon.svg"
import profile from "../../public/assets/profile.svg"
import ArrowDown from "../../public/assets/ArrowDown.svg"



import Image from 'next/image';



import UserManagementTable from './Tables/UserManagementTable';





const UserManagementContent = () => {
  return (
    <div>
      {/* Header for the User Management Screen */}
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-8">
            <h1 className="text-[20px] leading-[30px] text-[#101828] font-bold whitespace-nowrap">User Management</h1>
            <div>
              <div className="relative flex items-center w-full   mx-auto">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pr-10 pl-10 py-2 border-none bg-[#F0F0F9] rounded-[100px] w-[379px]  text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
                />

                <div className="absolute left-3">
                  <SearchIcon className="w-[24px] h-[24px] text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

                

        <div className="flex items-center gap-[10px] border-l-[1px] border-[#D0D0D3] pl-[20px]">
          <div>
            <Image width={24} height={24} src={NotificationIcon} alt="NotificationIcon"/>
          </div>

          <div>
            <Image  width={24} height={24}  src={ChatIcon} alt="ChatIcon"/>
          </div>

          <div>
            <div className="flex items-center gap-[10px] cursor-pointer">
              <div>
                <Image width={24} height={24} src={profile} alt="MyProfile" />
              </div>

              <div>
                <h1 className="text-[13px] leading-[19.5px] text-[#101828] font-semibold">Consultia LTD</h1>
                <p className="text-[#41404B] text-[13px] leading-[19.5px] font-normal">Super Admin</p>
              </div>
                
              <div>
              <Image width={16} height={16} src={ArrowDown} alt="Arrowdown" />
              </div>
            </div>

            {/* {isOverlayVisible && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={toggleOverlay}>
                <div className="bg-white flex flex-col items-start gap-y-[12px] p-[8px] w-[134px] rounded-lg shadow-lg absolute top-20 right-6">
                  <div className='flex items-center gap-[12px]'>
                    <Image width={24} height={24} src={profile} alt="profile" />

                    <h2 className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>Profile</h2>
                  </div>

                  <div className='flex items-center gap-[12px]'>
                    <Image width={24} height={24} src={LogOutIcon} alt="LogOutIcon" />

                    <h2 className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>Log Out</h2>
                </div>
              </div>
            </div>
          )} */}


          </div>
        </div>
      </div>


      <div className="pt-[24px]">
        <Separator />
      </div>



      <UserManagementTable />
    </div>
  )
}

export default UserManagementContent