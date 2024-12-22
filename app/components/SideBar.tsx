"use client";


import { useRouter } from 'next/navigation'; 
import { useState } from "react";
import Image from "next/image";

import Link from "next/link";

import DashboardLogoo from "../../public/assets/DashboardLogoo.svg"

import DashboardIconNormal from "../../public/assets/DashboardIconNormal.svg"
import DashboardIconWhite from "../../public/assets/DashboardIconWhite.svg"


import UserManagementIconNormal from "../../public/assets/UserManagementIconNormal.svg"
import UserManagementIconWhite from "../../public/assets/UserManagementIconWhite.svg"


import InvoiceIconNormal from "../../public/assets/InvoiceIconNormal.svg"
import InvoiceIconWhite from "../../public/assets/InvoiceIconWhite.svg"

import ProjectManagementIconNormal from "../../public/assets/ProjectManagementIconNormal.svg"
import ProjectManagementIconWhite from "../../public/assets/ProjectManagementIconWhite.svg"


import ComplianceTrackingIconNormal from "../../public/assets/ComplianceTrackingIconNormal.svg"
import ComplianceTrackingIconWhite from "../../public/assets/ComplianceTrackingIconWhite.svg"


import TransactionMonitoringIconNormal from "../../public/assets/TransactionMonitoringIconNormal.svg"
import TransactionMonitoringIconWhite from "../../public/assets/TransactionMonitoringIconWhite.svg"




import SettingsIconNormal from "../../public/assets/SettingsIconNormal.svg"
import SettingsIconWhite from "../../public/assets/SettingsIconWhite.svg"

import LogoutIconNormal from "../../public/assets/LogoutIconNormal.svg"

import LogoutIconWhite from "../../public/assets/LogoutIconWhite.svg"

import GooglePlayButton from "../../public/assets/GooglePlayButton.svg"

import AppleStoreButton from "../../public/assets/AppleStoreButton.svg"






import DashboardContent from "./DashboardContent";
import UserManagementContent from "./UserManagementContent";
import TransactionMonitoringContent from "./TransactionMonitoringContent";
import InvoiceContent from "./InvoiceContent";
import SettingsContent from "./SettingsContent";
import ProjectManagementContent from './ProjectManagementContent';
import ComplianceTrackingContent from './ComplianceTrackingContent';




const SideBar = () => {
    const router = useRouter(); 

    const handleLogoutClick = () => {
      router.push('/login');
    };

    const [activeComponent, setActiveComponent] = useState("Dashboard");

    const isActive = (componentName: string) => activeComponent === componentName;
    

    return (
        <div className="flex">
            <div className="fixed w-[290px]  h-screen border-r-[2px]">
               <div className="h-full overflow-y-auto scrollbar-hide">
                   <div className="pt-6">
                       <Link href="/">
                           <div className="max-w-[235px] mx-auto">
                                <Image   src={DashboardLogoo} alt="DashboardLogoo" />
                           </div>
                       </Link>
                   </div>
                    <div className="pt-16">
                        <div
                            onClick={() => setActiveComponent("Dashboard")}
                            className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                isActive("Dashboard")
                                ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                            }`}
                        >
                            <div className="relative w-8 h-8">
                                <Image
                                src={DashboardIconNormal}
                                alt="DashboardIconNormal"
                                className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                    isActive("Dashboard") ? "opacity-0" : "opacity-100"
                                }`}
                                />
                                <Image
                                src={DashboardIconWhite}
                                alt="DashboardIconWhite"
                                className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                    isActive("Dashboard") ? "opacity-100" : "opacity-0"
                                }`}
                                />
                            </div>
                            <h1 className="ml-2 font-bold">Dashboard</h1>
                        </div>
                    

                        <div className="max-w-[195px] py-6 mx-auto">
                            <h1 className="text-[14px] leading-[21px] font-semibold text-[#D8D7DE]">OTHER FEATURES</h1>
                        </div>



                        <div className="">
                            <div
                                onClick={() => setActiveComponent("UserManagement")}
                                className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                    isActive("UserManagement")
                                    ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                    : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                                }`}
                            >
                                <div className="relative w-8 h-8">
                                    <Image
                                    src={UserManagementIconNormal}
                                    alt="userManagementicon normal"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("UserManagement") ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                                    }`}
                                    />
                                    <Image
                                    src={UserManagementIconWhite}
                                    alt="userManagementicon white"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("UserManagement") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`}
                                    />
                                </div>
                                <h1 className="ml-2 font-medium">User Management</h1>
                            </div>

                        </div>

                        <div className="pt-6">
                            <div
                                onClick={() => setActiveComponent("ProjectManagement")}
                                className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                    isActive("ProjectManagement")
                                    ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                    : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                                }`}
                            >
                                <div className="relative w-8 h-8">
                                    <Image
                                    src={ProjectManagementIconNormal}
                                    alt="ProjectManageIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("ProjectManagement") ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                                    }`}
                                    />
                                    <Image
                                    src={ProjectManagementIconWhite}
                                    alt="ProjectManageWhiteIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("ProjectManagement") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`}
                                    />
                                </div>
                                <h1 className="ml-2 font-medium">Project Management</h1>
                            </div>

                        </div>

                        <div className="pt-6">
                            <div
                                onClick={() => setActiveComponent("TransactionMonitoring")}
                                className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                    isActive("TransactionMonitoring")
                                    ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                    : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                                }`}
                            >
                                <div className="relative w-8 h-8">
                                    <Image
                                    src={TransactionMonitoringIconNormal}
                                    alt="TransactionMonitoringIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("TransactionMonitoring") ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                                    }`}
                                    />
                                    <Image
                                    src={TransactionMonitoringIconWhite}
                                    alt="TransactionMonitoringIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("TransactionMonitoring") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`}
                                    />
                                </div>
                                <h1 className="ml-2 font-medium whitespace-nowrap">Transaction Monitoring</h1>
                            </div>

                        </div>


                        <div className="pt-6">
                           <div
                                onClick={() => setActiveComponent("ComplianceTracking")}
                                className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                    isActive("ComplianceTracking")
                                    ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                    : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                                }`}
                                >
                                <div className="relative w-8 h-8">
                                    <Image
                                    src={ComplianceTrackingIconNormal}
                                    alt="InvoiceIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("ComplianceTracking") ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                                    }`}
                                    />
                                    <Image
                                    src={ComplianceTrackingIconWhite}
                                    alt="InvoiceWhiteIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("ComplianceTracking") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`}
                                    />
                                </div>
                                <h1 className="ml-2 font-medium">Compliance Tracking</h1>
                            </div>
                        </div>



                        <div className="pt-6">
                           <div
                                onClick={() => setActiveComponent("InvoicePayments")}
                                className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                    isActive("InvoicePayments")
                                    ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                    : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                                }`}
                                >
                                <div className="relative w-8 h-8">
                                    <Image
                                    src={InvoiceIconNormal}
                                    alt="WalletIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("InvoicePayments") ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                                    }`}
                                    />
                                    <Image
                                    src={InvoiceIconWhite}
                                    alt="WalletWhiteIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("InvoicePayments") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`}
                                    />
                                </div>
                                <h1 className="ml-2 font-medium">Invoicing & Payment</h1>
                            </div>
                        </div>



                        <div className="max-w-[235px] border-b-[1px] border-b-[#F0F0F9] mx-auto pt-6">

                        </div>
                       

                        <div className="pt-6">
                            <div
                                onClick={() => setActiveComponent("Settings")}
                                className={`flex p-4 cursor-pointer rounded-[8px] duration-200 max-w-[235px] mx-auto group ${
                                    isActive("Settings")
                                    ? "bg-[#5B52B6] text-white border-l-[6px] border-l-[#CFCDEC]"
                                    : "text-[#7B91B0] hover:bg-[#5B52B6] hover:text-white hover:border-l-[6px] hover:border-l-[#CFCDEC]"
                                }`}
                            >
                                <div className="relative w-8 h-8">
                                    <Image
                                    src={SettingsIconNormal}
                                    alt="SettingsIcon"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("Settings") ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                                    }`}
                                    />
                                    <Image
                                    src={SettingsIconWhite}
                                    alt="SettingsIconWhite"
                                    className={`absolute top-0 left-0 transition-opacity duration-200 ${
                                        isActive("Settings") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    }`}
                                    />
                                </div>
                                <h1 className="ml-2 font-medium">Settings</h1>
                            </div>
                        </div>
                        
                        
                        <div className="pt-6">
                            <div 
                                onClick={handleLogoutClick}
                                className="flex p-4 transition-colors cursor-pointer rounded-[8px] hover:border-l-[6px] hover:border-l-[rgb(207,205,236)] duration-200 max-w-[235px] mx-auto hover:bg-[#5B52B6] group text-[#7B91B0] hover:text-white">
                                <div className="relative w-8 h-8"> {/* Adjust size as needed */}
                                <Image
                                    src={LogoutIconNormal}
                                    alt="LogOutIcon"
                                    className="absolute top-0 left-0 transition-opacity duration-200 group-hover:opacity-100" // Keep color visible by default
                                />
                                <Image
                                    src={LogoutIconWhite}
                                    alt="LogOutIconWhite"
                                    className="absolute top-0 left-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100" // Show on hover
                                />
                                </div>
                                <h1 className="ml-2 font-medium">Log Out</h1>
                            </div>
                        </div>


                        <div className='pt-10 pb-10'>
                            <h1 className='text-[#4E4B66] text-[14px] leading-[24px] tracking-[0.75px] max-w-[192px] text-center flex flex-col items-center justify-center mx-auto'><span className='font-bold'>Consultia Mobile App</span> coming soon on:</h1>

                            <div className='pt-[16px]'>
                                <Image className='mx-auto' src={GooglePlayButton} alt='GooglePlayButton' />

                                <div className='pt-[10px]'>
                                    <Image className='mx-auto' src={AppleStoreButton} alt='AppleStoreButton' />
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>



            <div className="ml-[290px] px-10 py-6 bg-[#F9FAFE] w-full min-h-screen">
                {activeComponent === "Dashboard" && <DashboardContent setActiveComponent={setActiveComponent} />}
                {activeComponent === "UserManagement" && <UserManagementContent />}
                {activeComponent === "ProjectManagement" && <ProjectManagementContent />}
                {activeComponent === "TransactionMonitoring" && <TransactionMonitoringContent />}
                {activeComponent === "ComplianceTracking" && <ComplianceTrackingContent />}
                {activeComponent === "InvoicePayments" && <InvoiceContent />}
                {activeComponent === "Settings" && <SettingsContent />}
            </div>
        </div>
    )
}

export default SideBar;


                   



