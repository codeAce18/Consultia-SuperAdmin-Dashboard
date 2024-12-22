import React from 'react'

import Image from 'next/image'

import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Separator } from "@/components/ui/separator"
import { SearchIcon } from 'lucide-react';


import NotificationIcon from "../../public/assets/NotificationIcon.svg"
import ChatIcon from "../../public/assets/ChatIcon.svg"
import profile from "../../public/assets/profile.svg"
import ArrowDown from "../../public/assets/ArrowDown.svg"


import TotalUsersIcon from "../../public/assets/TotalUsersIcon.svg"

import TotalSubscribersIcon from "../../public/assets/TotalSubscribersIcon.svg"

import TotalSubValueIcon from "../../public/assets/TotalSubValueIcon.svg"

import TotalWithdrawalValueIcon from "../../public/assets/TotalWithdrawalValueIcon.svg"

import IncomeAnalyticsChart from './IncomeAnalyticsChart';

import  { useEffect} from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Avatar, 
  IconButton,
} from '@mui/material';
import EyeIcon from '../../public/assets/EyeIcon.svg';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import EditPen from "../../public/assets/EditPen.svg";
import { format } from "date-fns";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



import { Button } from "@/components/ui/button"; 


import CancelIcon from "../../public/assets/CancelIcon.svg";


import PlusCircleIconNormal from "../../public/assets/PlusCircleIconNormal.svg";


import ReportIcon from "../../public/assets/ReportIcon.svg";


import ProfessionalPlanIcon from "../../public/assets/ProfessionalPlanIcon.svg";

interface User {
    id: string;
    name: string;
    location: string;
    email: string;
    phoneNumber: string;
    dateTime: string;
    type: 'Client' | 'Consultant';
    status: 'Active' | 'Suspended' | 'Deactivated';
    avatarUrl?: string;
  }
  
  // Custom Styling Interface
  interface UserManagementTableProps {
    users?: User[];
    customStyles?: {
      container?: React.CSSProperties;
      table?: React.CSSProperties;
      headerCell?: React.CSSProperties;
      bodyCell?: React.CSSProperties;
    };
    setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
  }

  interface UserProfileProps {
    user: User;
    onBack: () => void;
    onStatusChange?: (newStatus: "Active" | "Suspended" | "Deactivated") => void;
    consultantUser: {
        companyRegistrationNumber?: string;
        yearsInBusiness?: string;
        numberOfStaff?: string;
        businessEmail?: string;
        countryOfOperation?: string;
        state?: string;
        city?: string;
        address?: string;
        companyWebsite?: string;
        yearOfRegistration?: string;
        nin?: string;
        bvn?: string;
        briefAboutCompany?: string;
    };

    clientUser: {
        state?: string;
        city?: string;
        nin?: string;
        firstName?: string;
        lastName?: string;
        phoneNumber?: string;
        gender?: string;
        nationality?: string;
        dateOfBirth?: string;
        occupation?: string;
    };
}

      
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface YearOfRegistrationFieldProps {
    value: string;
    onChange: (date: string) => void;
}

// Sample User Data
const SAMPLE_USERS: User[] = [
  {
      id: '1',
      name: 'Omar Al Maktoum',
      location: 'Abu Dhabi, UAE',
      email: 'john.doe@example.com',
      phoneNumber: '+1 (555) 123-4567',
      dateTime: '2024-01-15 10:30 AM',
      type: 'Client',
      status: 'Active',
      avatarUrl: '/assets/Omar.svg',
  },
  {
      id: '2',
      name: 'Omar Al Maktoum',
      location: 'Abu Dhabi, UAE',
      email: 'john.doe@example.com',
      phoneNumber: '+1 (555) 123-4567',
      dateTime: '2024-01-15 10:30 AM',
      type: 'Client',
      status: 'Active',
      avatarUrl: '/assets/Omar.svg',
  },
  {
      id: '3',
      name: 'Dora Consulting',
      location: 'Lagos, Nigeria',
      email: 'john.doe@example.com',
      phoneNumber: '+1 (555) 123-4567',
      dateTime: '2024-01-15 10:30 AM',
      type: 'Consultant',
      status: 'Suspended',
      avatarUrl: '/assets/DoraConsult.svg',
  },
  {
      id: '4',
      name: 'Dora Consulting',
      location: 'Lagos, Nigeria',
      email: 'john.doe@example.com',
      phoneNumber: '+1 (555) 123-4567',
      dateTime: '2024-01-15 10:30 AM',
      type: 'Consultant',
      status: 'Active',
      avatarUrl: '/assets/DoraConsult.svg',
  },
];


const StatusChip: React.FC<{ status: User['status'] }> = ({ status }) => {
    const statusStyles = {
      Active: {
        backgroundColor: '#D2F6D2',
        color: '#008000'
      },
      Suspended: {
        backgroundColor: '#FAD9C2',
        color: '#F87B24'
      },
      Deactivated: {
        backgroundColor: '#E3E3E3',
        color: '#41404B'
      }
    };
  
    return (
      <div 
        style={{
          ...statusStyles[status],
          fontWeight: 600,
          width: '100px',
          textAlign: 'center',
          padding: '4px 8px',
          borderRadius: '100px'
        }}
      >
        {status}
      </div>
    );
  };



  const UserProfile: React.FC<UserProfileProps> = ({ user, onStatusChange , consultantUser, clientUser}) => {
    const [status, setStatus] = useState(user.status);

    const handleStatusChange = (newStatus: "Active" | "Suspended" | "Deactivated") => {
        setStatus(newStatus); // Update local state
        onStatusChange?.(newStatus); // Call the optional parent handler if defined
      };

    const [formData, setFormData] = useState({ ...consultantUser , ...clientUser });

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    };

    
   

    const renderStatusSwitcher = () => (
        <div>
            <div className="flex justify-end mt-4">
                <div className="bg-gray-100 rounded-full p-1 flex items-center">
                <Button
                    variant={status === "Deactivated" ? "default" : "ghost"}
                    className={status === "Deactivated" ? "bg-red-600 text-white" : "text-gray-500"}
                    onClick={() => handleStatusChange("Deactivated")}
                >
                    Deactivate
                </Button>
                <Button
                    variant={status === "Suspended" ? "default" : "ghost"}
                    className={status === "Suspended" ? "bg-orange-500 text-white" : "text-gray-500"}
                    onClick={() => handleStatusChange("Suspended")}
                >
                    Suspended
                </Button>
                <Button
                    variant={status === "Active" ? "default" : "ghost"}
                    className={status === "Active" ? "bg-green-600 text-white" : "text-gray-500"}
                    onClick={() => handleStatusChange("Active")}
                >
                    Activate
                </Button>
                </div>
            </div>
        </div>
      );
    
    
  


      const renderClientProfile = () => (
        <div>
            {renderStatusSwitcher()}
            <div className='flex items-start gap-10 pt-10'>
                <div>
                    <img
                        src={user.avatarUrl}
                        alt="Profile"
                        className="w-20 h-20 rounded-full mr-4"
                    />
                </div>
                  
                <div className="bg-white rounded-lg shadow p-6 pb-20 relative max-w-[912px] w-full">
                  <div className="flex items-center mb-6">

                    <div className='flex items-center gap-[560px] border-b-[1px] border-b-[#F1F1F1] pb-10'>
                      <h1 className='text-[#101828] text-[20px] leading-[30px] font-medium'>Client Profile</h1>

                        <div>
                          <Image width={24} height={24} src={EditPen} alt='EditPen' />
                        </div>
                    </div>

                  </div>
                  <div className="grid grid-cols-2 gap-6">
                        {/* First Name */}
                        <div>
                            <p className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">First Name</p>
                            <div className='pt-[10px]'>
                                <Input
                                    value={formData.firstName}
                                    onChange={(e) => handleChange("firstName", e.target.value)}
                                    placeholder="Enter First Name"
                                    className="w-[339px] border-none bg-[#F0F0F9]"
                                />
                            </div>
                        </div>

                        {/* Last Name */}
                        <div>
                            <p className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">Last Name</p>
                            <div className='pt-[10px]'>
                                <Input
                                    value={formData.lastName}
                                    onChange={(e) => handleChange("lastName", e.target.value)}
                                    placeholder="Enter Last Name"
                                    className="w-[339px] border-none bg-[#F0F0F9]"
                                />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div>
                            <p className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">Phone Number</p>
                            <div className='pt-[10px]'>
                                <Input
                                    value={formData.phoneNumber}
                                    onChange={(e) => handleChange("phoneNumber", e.target.value)}
                                    placeholder="Enter Phone Number"
                                    className="w-[339px] border-none bg-[#F0F0F9]"
                                />
                            </div>
                        </div>

                        {/* Gender */}
                        <div>
                            <p className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">Gender</p>
                            <div className='pt-[10px]'>
                                <Select
                                    onValueChange={(value) => handleChange("gender", value)}
                                >
                                    <SelectTrigger className="w-[339px] border-none bg-[#F0F0F9]">
                                        <SelectValue placeholder="Select Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Male">Male</SelectItem>
                                        <SelectItem value="Female">Female</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Nationality */}
                        <div>
                            <p className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">Nationality</p>
                            <div className='pt-[10px]'>
                                <Select
                                    onValueChange={(value) => handleChange("nationality", value)}
                                >
                                    <SelectTrigger className="w-[339px] border-none bg-[#F0F0F9]">
                                        <SelectValue placeholder="Select Nationality" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="USA">USA</SelectItem>
                                        <SelectItem value="Nigeria">Nigeria</SelectItem>
                                        <SelectItem value="India">India</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* State */}
                        <div>
                            <p className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">State</p>
                            <div className='pt-[10px]'>
                                <Select
                                    onValueChange={(value) => handleChange("state", value)}
                                >
                                    <SelectTrigger className="w-[339px] border-none bg-[#F0F0F9]">
                                        <SelectValue placeholder="Select State" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Lagos">Lagos</SelectItem>
                                        <SelectItem value="Abuja">Abuja</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* City */}
                        <div>
                            <p className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">City</p>
                            <div className='pt-[10px]'>
                                <Select
                                    onValueChange={(value) => handleChange("city", value)}
                                >
                                    <SelectTrigger className="w-[339px] border-none bg-[#F0F0F9]">
                                        <SelectValue placeholder="Select City" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Ikeja">Ikeja</SelectItem>
                                        <SelectItem value="Lekki">Lekki</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <p className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">Date of Birth</p>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <div className='pt-[10px]'>
                                        <Input
                                            value={formData.dateOfBirth}
                                            onClick={() => {}}
                                            placeholder="Select Date of Birth"
                                            readOnly
                                            className="w-[339px] border-none bg-[#F0F0F9] cursor-pointer"
                                        />
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent align="start">
                                    <Calendar
                                        mode="single"
                                        selected={formData.dateOfBirth ? new Date(formData.dateOfBirth) : undefined}
                                        onSelect={(date) => {
                                        if (date) {
                                            handleChange("dateOfBirth", format(date, "yyyy-MM-dd"));
                                        }
                                        }}
                                        className="rounded-md"
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* NIN */}
                        <div>
                            <p className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">Enter NIN</p>
                            <div className='pt-[10px]'>
                                <Input
                                    value={formData.nin}
                                    onChange={(e) => handleChange("nin", e.target.value)}
                                    placeholder="Enter NIN"
                                    className="w-[339px] border-none bg-[#F0F0F9]"
                                />
                            </div>
                        </div>

                        {/* Occupation */}
                        <div>
                            <p className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">Occupation</p>
                            <div className='pt-[10px]'>
                                <Input
                                    value={formData.occupation}
                                    onChange={(e) => handleChange("occupation", e.target.value)}
                                    placeholder="Enter Occupation"
                                    className="w-[339px] border-none bg-[#F0F0F9]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    


      const renderConsultantProfile = () => (
        <div>
            {renderStatusSwitcher()}
            <div className='flex pt-20 gap-10 items-start'>
                <div>
                    <img
                        width={112}
                        height={112}
                        src={user.avatarUrl}
                        alt="Profile"
                        className="w-20 h-20 rounded-full mr-4"
                    />

                    <div className='flex items-center gap-[4px] pt-[15px]'>
                        <Image src={ProfessionalPlanIcon} alt="ProfessionalPlanIcon" />

                        <h1 className='text-[#101828] text-[16px] leading-[24px] font-normal whitespace-nowrap'>Professional Plan</h1>
                    </div>

                    <div className='flex items-center gap-[4px] pt-[15px]'>
                        <Image src={ReportIcon} alt="ReportIcon" />

                        <h1 className='text-[#101828] text-[16px] leading-[24px] font-normal'>Report</h1>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 relative max-w-[912px] w-full">
                  {/* <button onClick={onBack} className="absolute top-4 left-4 text-blue-500">
                    Back
                  </button> */}
                  
                
                  <div className="flex items-center mb-6">
                    <div>
                        <h1 className="text-[#101828] text-[20px] leading-[30px] font-medium">Company Profile</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                        {/* Company Registration Number */}
                        <div>
                            <p className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Company Registration Number<span className='text-[#F87B24] font-bold'>*</span></p>
                            <div className='pt-[10px]'>
                                <Input
                                    value={formData.companyRegistrationNumber || ""}
                                    onChange={(e) => handleChange("companyRegistrationNumber", e.target.value)}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Years in Business */}
                        <div>
                            <p className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Years in Business<span className='text-[#F87B24] font-bold'>*</span></p>
                            <div className='pt-[10px]'>
                                <Input
                                    value={formData.yearsInBusiness || ""}
                                    onChange={(e) => handleChange("yearsInBusiness", e.target.value)}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Number of Staff */}
                        <div>
                            <p className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Number of Staff<span className='text-[#F87B24] font-bold'>*</span></p>

                            <div className='pt-[10px]'>
                                <Input
                                    value={formData.numberOfStaff || ""}
                                    onChange={(e) => handleChange("numberOfStaff", e.target.value)}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Business Email */}
                        <div>
                            <p className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Business Email<span className='text-[#F87B24] font-bold'>*</span></p>
                            <div className='pt-[10px]'>
                                <Input
                                    value={formData.businessEmail || ""}
                                    onChange={(e) => handleChange("businessEmail", e.target.value)}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Country of Operation */}
                        <div>
                            <p className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Country of Operation<span className='text-[#F87B24] font-bold'>*</span></p>
                            <div className='pt-[10px]'>
                                <Select
                                    value={formData.countryOfOperation || ""}
                                    onValueChange={(value) => handleChange("countryOfOperation", value)}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Nigeria">Nigeria</SelectItem>
                                        <SelectItem value="Ghana">Ghana</SelectItem>
                                        <SelectItem value="Kenya">Kenya</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* State */}
                        <div>
                            <p className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">State<span className='text-[#F87B24] font-bold'>*</span></p>
                            <div className='pt-[10px]'>
                                <Select
                                    value={formData.state || ""}
                                    onValueChange={(value) => handleChange("state", value)}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select State" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Lagos">Lagos</SelectItem>
                                        <SelectItem value="Abuja">Abuja</SelectItem>
                                        <SelectItem value="Kano">Kano</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* City */}
                        <div>
                            <p className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">City<span className='text-[#F87B24] font-bold'>*</span></p>
                            <div className='pt-[10px]'>
                                <Select
                                    value={formData.city || ""}
                                    onValueChange={(value) => handleChange("city", value)}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select City" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Ikeja">Ikeja</SelectItem>
                                        <SelectItem value="Maitama">Maitama</SelectItem>
                                        <SelectItem value="Sabon Gari">Sabon Gari</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <p className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Address<span className='text-[#F87B24] font-bold'>*</span></p>
                            <div className='pt-[10px]'>
                                <Input
                                    value={formData.address || ""}
                                    onChange={(e) => handleChange("address", e.target.value)}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Company Website */}
                        <div>
                            <p className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Company Website<span className='text-[#F87B24] font-bold'>*</span></p>
                            <div className='pt-[10px]'>
                                <Input
                                    value={formData.companyWebsite || ""}
                                    onChange={(e) => handleChange("companyWebsite", e.target.value)}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Year of Registration */}
                        <div>
                            <p className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">
                                Year of Registration<span className="text-[#F87B24] font-bold">*</span>
                            </p>
                            <div className="pt-[10px]">
                                <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                                    <PopoverTrigger asChild>
                                        <Input
                                        value={formData.yearOfRegistration || ""}
                                        readOnly
                                        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                                        className="w-full cursor-pointer"
                                        />
                                    </PopoverTrigger>
                                    <PopoverContent align="start">
                                        <Calendar
                                        mode="single"
                                        selected={formData.yearOfRegistration ? new Date(formData.yearOfRegistration) : undefined}
                                        onSelect={(date) => {
                                            if (date) {
                                            const formattedYear = format(date, "yyyy");
                                            handleChange("yearOfRegistration", formattedYear);
                                            setIsPopoverOpen(false);
                                            }
                                        }}
                                        className="rounded-md"
                                        />
                                    </PopoverContent>
                                </Popover>
                                </div>
                            </div>
                        </div>

                        {/* NIN */}
                        <div>
                            <p className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Enter NIN<span className='text-[#F87B24] font-bold'>*</span></p>
                            <div className='pt-[10px]'>
                                <Input
                                    value={formData.nin || ""}
                                    onChange={(e) => handleChange("nin", e.target.value)}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* BVN */}
                        <div>
                            <p className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Enter BVN<span className='text-[#F87B24] font-bold'>*</span></p>
                            <div className='pt-[10px]'>
                                <Input
                                    value={formData.bvn || ""}
                                    onChange={(e) => handleChange("bvn", e.target.value)}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Brief About Your Company */}
                        <div className="col-span-2">
                            <p className="text-[14px] text-[#A9A9AE] leading-[21px] font-medium">Brief About Your Company<span className='text-[#F87B24] font-bold'>*</span></p>
                            <div className='pt-[10px]'>
                                <Textarea
                                    value={formData.briefAboutCompany || ""}
                                    onChange={(e) => handleChange("briefAboutCompany", e.target.value)}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      );
    
      return (
        <div>
          {user.type === "Client"
            ? renderClientProfile()
            : renderConsultantProfile()}
        </div>
      );
    };
  
 
    



const DashboardContent: React.FC<UserManagementTableProps> = ({
    users = SAMPLE_USERS,
    customStyles = {},
    setActiveComponent
  }) => {
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     const [activeTab, setActiveTab] = useState<string>('All Users');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [page, setPage] = useState<number>(0);
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [rowsPerPage, setRowsPerPage] = useState<number>(15);
    
        const [view, setView] = useState<'table' | 'profile'>('table');
        const [selectedUserProfile, setSelectedUserProfile] = useState<User | null>(null);
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [selectedTab, setSelectedTab] = useState<'client' | 'consultant'>('client');
      
        // Tab labels
        // const tabs = ['All Users', 'Active Users', 'Suspended', 'Deactivated'];
      
        // Filter users based on active tab
        const filteredUsers = users.filter(user => {
          switch (activeTab) {
            case 'All Users':
              return true;
            case 'Active Users':
              return user.status === 'Active';
            case 'Suspended':
              return user.status === 'Suspended';
            case 'Deactivated':
              return user.status === 'Deactivated';
            default:
              return true;
          }
        });
      
        // Pagination slice
        const paginatedUsers = filteredUsers.slice(
          page * rowsPerPage, 
          page * rowsPerPage + rowsPerPage
        );
      
        // const handleChangePage = (
        //   event: React.MouseEvent<HTMLButtonElement> | null, 
        //   newPage: number
        // ) => {
        //   setPage(newPage);
        // };
      
        // const handleChangeRowsPerPage = (
        //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        // ) => {
        //   setRowsPerPage(parseInt(event.target.value, 10));
        //   setPage(0);
        // };
    
    
        // For Users Selection
        const [selectedUser, setSelectedUser] = useState<string | null>(null);
    
        const handleViewClick = (userId: string) => {
            setSelectedUser(selectedUser === userId ? null : userId);
        };
    
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (selectedUser && !(event.target as Element).closest('.relative')) {
                    setSelectedUser(null);
                }
            };
        
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, [selectedUser]);

        const handleViewAllClick = () => {
          setActiveComponent("UserManagement"); 
        };
  return (
    <div>
      {/* Header for the Dashboard Screen */}
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-10">
            <h1 className="text-[20px] leading-[30px] text-[#101828] font-bold whitespace-nowrap">Super Admin</h1>
            <div>
              <div className="relative flex items-center w-[479px] h-[40px] mx-auto">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pr-10 pl-10 py-2 border-none bg-[#F0F0F9] rounded-[100px]  w-full text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
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



      <div>
        {view === 'table' ? (
        <>
          <div className='pt-[20px]'>
            <h1 className='text-[#101828] text-[20px] leading-[30px] font-normal'>Welcome to Consultia,   <span className='font-bold'>Super Admin</span></h1>
          </div>


          <div className="pt-10">
            <div className="grid grid-cols-4 gap-[8px]">

              <div className="bg-[#FFFFFF] rounded-[8px] border-[1px] shadow-custom  border-[#F0F0F9] max-w-[260px] p-[16px] w-full">
                <div className="flex items-center gap-[5px]">
                  <Image width={37} height={37} src={TotalUsersIcon} alt="TotalUsersIcon" />
                  <h1 className="text-[24px] leading-[28.8px] font-bold text-[#101828]">2,850</h1>
                </div>
                <h1 className="text-[#7B91B0] pt-[20px] text-left text-[16px] leading-[24px] font-normal">Total Users</h1>
              </div>

              <div className="bg-[#FFFFFF] rounded-[8px] border-[1px] shadow-custom  border-[#F0F0F9] max-w-[260px] p-[16px] w-full">
                <div className="flex items-center gap-[5px]">
                  <Image width={37} height={37} src={TotalSubscribersIcon} alt="TotalSubscribersIcon" />
                  <h1 className="text-[24px] leading-[28.8px] font-bold text-[#101828]">1,800</h1>
                </div>
                <h1 className="text-[#7B91B0] pt-[20px] text-left text-[16px] leading-[24px] font-normal">Total Subscribers</h1>
              </div>

              <div className="bg-[#FFFFFF] w-full rounded-[8px] border-[1px] shadow-custom  border-[#F0F0F9] max-w-[260px] p-[16px]">
                <div className="flex items-center gap-[5px]">
                  <Image width={37} height={37} src={TotalSubValueIcon} alt="TotalSubValueIcon" />
                  <h1 className="text-[24px] leading-[28.8px] font-bold text-[#101828]">₦400,000,000</h1>
                </div>
                <h1 className="text-[#7B91B0] pt-[20px] text-left text-[16px] leading-[24px] font-normal">Total Subscription Value</h1>
              </div>

              <div className="bg-[#FFFFFF] rounded-[8px] w-full border-[1px] shadow-custom  border-[#F0F0F9] max-w-[260px] p-[16px]">
                <div className="flex items-center gap-[5px]">
                  <Image width={37} height={37} src={TotalWithdrawalValueIcon} alt="TotalWithdrawalValueIcon" />
                  <h1 className="text-[24px] leading-[28.8px] font-bold text-[#101828]">₦320,000,000</h1>
                </div>
                <h1 className="text-[#7B91B0] pt-[20px] text-left text-[16px] leading-[24px] font-normal">Total Withdrawal Value</h1>
              </div>
            </div>
          </div>


          <div className='pt-10'>
            <IncomeAnalyticsChart />
          </div>


     
            <div>
              <div className='pt-10 flex items-center justify-between'>
                <h1 className='text-[#101828] text-[20px] leading-[30px] font-bold'>Recent User Registration</h1>
        
                <button 
                  onClick={handleViewAllClick}
                  className='bg-[#5B52B6] text-[14px] leading-[16.8px] font-normal text-white w-[96px] p-[10px] rounded-[8px]'>
                  View All
                </button>
              </div>

            </div>

            <div className='pt-10'>
                <Paper style={{  ...customStyles.container }}>
                    <TableContainer>
                        <Table style={customStyles.table}>
                        <TableHead>
                            <TableRow>
                            <TableCell><h1 className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>User Name</h1></TableCell>
                            <TableCell><h1 className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Email</h1></TableCell>
                            <TableCell><h1 className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold whitespace-nowrap'>Phone Number</h1></TableCell>
                            <TableCell><h1 className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Date/Time</h1></TableCell>
                            <TableCell><h1  className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Type</h1></TableCell>
                            <TableCell><h1 className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Status</h1></TableCell>
                            <TableCell><h1  className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>View</h1></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedUsers.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Avatar
                                    src={user.avatarUrl}
                                    alt={user.name}
                                    sx={{ width: 40, height: 40 }}
                                    />
                                    <div>
                                    <div style={{ fontWeight: 'bold' }} className='max-w-[150px]'>{user.name}</div>
                                    <div style={{ color: 'gray', fontSize: '0.8em' }}>
                                        {user.location}
                                    </div>
                                    </div>
                                </div>
                                </TableCell>
                                <TableCell><h1 className='max-w-[135px]'>{user.email}</h1></TableCell>
                                <TableCell>{user.phoneNumber}</TableCell>
                                <TableCell>{user.dateTime}</TableCell>
                                <TableCell><h1 className="max-w-[100px] truncate">{user.type}</h1></TableCell>
                                <TableCell>
                                <StatusChip status={user.status} />
                                </TableCell>
                                <TableCell className='relative'>
                                    <IconButton  onClick={() => handleViewClick(user.id)}>
                                        <Image src={EyeIcon} alt='EyeIcon' />
                                    </IconButton>

                                    {selectedUser === user.id && (
                                        <div className="absolute right-2 top-full mt-2 bg-white shadow-lg rounded-lg w-[134px] z-50 border border-gray-200">
                                            <div className="py-2 px-2 space-y-2">
                                                <button 
                                                    className="text-[#101828] text-[13px] leading-[19.5px] font-normal flex items-center gap-[10px] "
                                                    onClick={() => {
                                                        setView('profile');
                                                        setSelectedUserProfile(user);
                                                        setSelectedUser(null);
                                                    }}
                                                >
                                                    <Image src={EyeIcon} alt='View' width={24} height={24} />
                                                    View Profile
                                                </button>
                                                
                                                <button 
                                                    className="text-[#101828] text-[13px] leading-[19.5px] font-normal flex items-center gap-[10px] "
                                                    onClick={() => {/* Add your edit handler */}}
                                                >
                                                    <Image src={PlusCircleIconNormal} alt='{PlusCircleIconNormal' width={24} height={24} />
                                                    {`Add New ${user.type}`}
                                                </button>
                                                
                                                <button 
                                                    className="text-[#101828] text-[13px] leading-[19.5px] font-normal flex items-center gap-[10px] "
                                                    onClick={() => {/* Add your delete handler */}}
                                                >
                                                    <Image src={CancelIcon} alt='CancelIcon' width={24} height={24} />
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
              
            
        </>
        ) : (
          <UserProfile 
                  user={selectedUserProfile!}
                  onBack={() => {
                      setView('table');
                      setSelectedUserProfile(null);
                  } } consultantUser={{
                      companyRegistrationNumber: undefined,
                      yearsInBusiness: undefined,
                      numberOfStaff: undefined,
                      businessEmail: undefined,
                      countryOfOperation: undefined,
                      state: undefined,
                      city: undefined,
                      address: undefined,
                      companyWebsite: undefined,
                      yearOfRegistration: undefined,
                      nin: undefined,
                      bvn: undefined,
                      briefAboutCompany: undefined
                  }} clientUser={{
                      state: undefined,
                      city: undefined,
                      nin: undefined,
                      firstName: undefined,
                      lastName: undefined,
                      phoneNumber: undefined,
                      gender: undefined,
                      nationality: undefined,
                      dateOfBirth: undefined,
                      occupation: undefined
                  }}                     />
      )}
  
      </div>
    </div>
  )
}

export default DashboardContent