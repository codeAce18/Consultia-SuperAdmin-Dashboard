import React, { useState } from 'react';
import Image from "next/image";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { 
  Table, 
  TableBody, 
  TableCell,  
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  TablePagination,
  IconButton
} from '@mui/material';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


// import MyProfile from "../../public/assets/MyProfile.svg"

// import LogOutIcon from "../../public/assets/LogOutIcon.svg"

import EyeIcon from "../../public/assets/EyeIcon.svg"

import CancelIcon from "../../public/assets/CancelIcon.svg"

import MediumSvg from "../../public/assets/MediumSvg.svg"


import wallet from "../../public/assets/wallet.svg"

import Timer from "../../public/assets/Timer.svg"

import HourGlass from "../../public/assets/HourGlass.svg"

import TypeIcon from "../../public/assets/TypeIcon.svg"



import Folder from "../../public/assets/Folder.svg"

import more from "../../public/assets/more.svg"

import PriorityIcon from "../../public/assets/PriorityIcon.svg"
import Dora from "../../public/assets/Dora.svg";

import Bankole from "../../public/assets/Bankole.svg";
import DashboardHeader from './DashboardHeader';


// Define types
interface ComplianceData {
  image: string;
  name: string;
  subtext: string;
  projectId: string;
  title: string;
  serviceType: string;
  dueDate: string;
  status: number;
}

// Circular Progress Component with Percentage
const CircularProgressWithLabel: React.FC<{ value: number }> = ({ value }) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress 
        variant="determinate" 
        value={100} 
        size={40}
        sx={{
          color: '#E0E0E0', // Light grey background track
          position: 'absolute',
        }}
      />
      <CircularProgress 
        variant="determinate" 
        value={value} 
        size={40}
        sx={{
          color: "#5B52B6"
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontSize: '14px' }}>{`${Math.round(value)}%`}</span>
      </Box>
    </Box>
  );
};

// Dummy Data
const dummyData: ComplianceData[] = [
  {
    image: '/assets/Dora.svg',
    name: 'Dora Consulting',
    subtext: 'Lagos, Nigeria',
    projectId: 'FN-6785-24',
    title: 'Consulting',
    serviceType: 'Financial and Accounting Consulting',
    dueDate: 'Jan 20, 2024',
    status: 86,
  },
  {
    image: '/assets/Dora.svg',
    name: 'Dora Consulting',
    subtext: 'Lagos, Nigeria',
    projectId: 'FN-6786-24',
    title: 'Consulting',
    serviceType: 'Financial and Accounting Consulting',
    dueDate: 'Feb 15, 2024',
    status: 70,
  },

  {
    image: '/assets/Dora.svg',
    name: 'Dora Consulting',
    subtext: 'Lagos, Nigeria',
    projectId: 'FN-6787-24',
    title: 'Consulting',
    serviceType: 'Financial and Accounting Consulting',
    dueDate: 'Mar 10, 2024',
    status: 90,
  },

  {
    image: '/assets/Dora.svg',
    name: 'Dora Consulting',
    subtext: 'Lagos, Nigeria',
    projectId: 'FN-6788-24',
    title: 'Consulting',
    serviceType: 'Financial and Accounting Consulting',
    dueDate: 'Jan 20, 2024',
    status: 75,
  },

  {
    image: '/assets/Dora.svg',
    name: 'Dora Consulting',
    subtext: 'Lagos, Nigeria',
    projectId: 'FN-6789-24',
    title: 'Consulting',
    serviceType: 'Financial and Accounting Consulting',
    dueDate: 'Jan 20, 2024',
    status: 82,
  },

  {
    image: '/assets/Dora.svg',
    name: 'Dora Consulting',
    subtext: 'Lagos, Nigeria',
    projectId: 'FN-6790-24',
    title: 'Consulting',
    serviceType: 'Financial and Accounting Consulting',
    dueDate: 'Mar 10, 2024',
    status: 65,
  },

  {
    image: '/assets/Dora.svg',
    name: 'Dora Consulting',
    subtext: 'Lagos, Nigeria',
    projectId: 'FN-6791-24',
    title: 'Consulting',
    serviceType: 'Financial and Accounting Consulting',
    dueDate: 'Mar 10, 2024',
    status: 78,
  },

  {
    image: '/assets/Dora.svg',
    name: 'Dora Consulting',
    subtext: 'Lagos, Nigeria',
    projectId: 'FN-6792-24',
    title: 'Consulting',
    serviceType: 'Financial and Accounting Consulting',
    dueDate: 'Jan 20, 2024',
    status: 88,
  },

  {
    image: '/assets/Dora.svg',
    name: 'Dora Consulting',
    subtext: 'Lagos, Nigeria',
    projectId: 'FN-678793-24',
    title: 'Consulting',
    serviceType: 'Financial and Accounting Consulting',
    dueDate: 'Jan 20, 2024',
    status: 72,
  },

  {
    image: '/assets/Dora.svg',
    name: 'Dora Consulting',
    subtext: 'Lagos, Nigeria',
    projectId: 'FN-6794-24',
    title: 'Consulting',
    serviceType: 'Financial and Accounting Consulting',
    dueDate: 'Jan 20, 2024',
    status: 85,
  },

  {
    image: '/assets/Dora.svg',
    name: 'Dora Consulting',
    subtext: 'Lagos, Nigeria',
    projectId: 'FN-6795-24',
    title: 'Consulting',
    serviceType: 'Financial and Accounting Consulting',
    dueDate: 'Jan 20, 2024',
    status: 77,
  },

  {
    image: '/assets/Dora.svg',
    name: 'Dora Consulting',
    subtext: 'Lagos, Nigeria',
    projectId: 'FN-6796-24',
    title: 'Consulting',
    serviceType: 'Financial and Accounting Consulting',
    dueDate: 'Jan 20, 2024',
    status: 68,
  },

  {
    image: '/assets/Dora.svg',
    name: 'Dora Consulting',
    subtext: 'Lagos, Nigeria',
    projectId: 'FN-6797-24',
    title: 'Consulting',
    serviceType: 'Financial and Accounting Consulting',
    dueDate: 'Jan 20, 2024',
    status: 80,
  },
];

const ComplianceTrackingContent: React.FC = () => {
  

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(25);
  const [dropdownState, setDropdownState] = useState<{ [key: number]: boolean }>({});
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  // const [isComplianceSheetOpen, setIsComplianceSheetOpen] = useState<boolean>(false);


  const toggleDropdown = (index: number) => {
    setDropdownState((prevState) => {
      const newState = { ...prevState };
      newState[index] = !prevState[index];
      return newState;
    });
  };




  const handlePreviewClick = () => {
    setIsSheetOpen(true); 
    setDropdownState({});
  };

  const handleCancelClick = () => {
    setDropdownState({});
  };


  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null, 
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      {/* Dashboard Header for Compliance Content */}
      <DashboardHeader 
        title="Compliance" 
        mobileTitle="Compliance"
      />

      <div className='pt-10'>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-[#101828] text-[16.5px] leading-[19.8px] font-bold border-b-[3px] border-b-[#5B52B6] pb-[10px]">All Compliance</h1>
          </div>
        </div>

        <div className="mt-6">
          <TableContainer component={Paper} className='scrollbar-hide'>
            <Table>
              <TableHead>
                <TableRow>
                <TableCell><div className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Consultant</div></TableCell>
                  <TableCell><div className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Project ID</div></TableCell>
                  <TableCell><div className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Title</div></TableCell>
                  <TableCell><div className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Service Type</div></TableCell>
                  <TableCell><div className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Due Date</div></TableCell>
                  <TableCell><div className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Status</div></TableCell>
                  <TableCell><div className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Action</div></TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="bg-[#F9FAFE]">
                {dummyData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Image
                            src={row.image} 
                            alt={row.name}
                            width={28}
                            height={28}
                          />
                          <div>
                            <div className="text-[#101828] text-[14px] leading-[21px] font-bold">{row.name}</div>
                            <div className="text-[#A3A2AB] text-[11px] leading-[16.5px] font-normal">{row.subtext}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell><h1 className="text-[#101828] text-[14px] leading-[21px] font-semibold">{row.projectId}</h1></TableCell>
                      <TableCell><h1 className="text-[#41404B] text-[14px] leading-[21px] font-normal max-w-[166px]">{row.title}</h1></TableCell>
                      <TableCell><h1 className="text-[#101828] text-[14px] leading-[21px] font-normal max-w-[166px]">{row.serviceType}</h1></TableCell>
                      <TableCell><h1 className="text-[#101828] text-[14px] leading-[21px] font-normal max-w-[166px]">{row.dueDate}</h1></TableCell>
                      <TableCell>
                        <CircularProgressWithLabel value={row.status} />
                      </TableCell>
                      <TableCell>
                        <div className="relative">
                          <IconButton onClick={() => toggleDropdown(index)}>
                            <Image width={24} height={24} src={EyeIcon} alt="EyeIcon" />
                          </IconButton>
                          {dropdownState[index] && (
                            <div className="absolute right-0 z-10 w-[124px] bg-white shadow-md rounded-md">
                              <div
                                className="flex items-center gap-[15px] p-2 cursor-pointer"
                                onClick={handlePreviewClick}
                              >
                                <Image width={24} height={24} src={EyeIcon} alt="EyeIcon" />
                                Preview
                              </div>
                              <div
                                className="flex items-center gap-[15px] p-2 cursor-pointer"
                                onClick={handleCancelClick}
                              >
                                <Image width={24} height={24} src={CancelIcon} alt="CancelIcon" />
                                Cancel
                              </div>
                            </div>
                          )}
                        </div>
                      </TableCell>
                          
                    </TableRow>
                  ))}
              </TableBody>
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetContent side="right" className="overflow-y-auto scrollbar-hide" >

                  <div className="pt-[20px]">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[24px] leading-[36px] font-bold">Project Overview</h2>

                      <Image src={more} alt="more" />
                    </div>

                    <div className="pt-[15px]">
                      <div className="bg-[#FAD9C2] w-[96px] rounded-[100px] justify-center flex items-center text-[#F87B24] text-[13px] leading-[19.5px]">
                        <Image width={10} height={14.33} src={MediumSvg} alt="MediumSvg" />
                        Medium
                      </div>
                    </div>

                    <div className="pt-[30px]">
                      <h1>{dummyData[0].title}</h1>

                      <p className="pt-[10px] max-w-[415px] text-[#A3A2AB] text-[16px] leading-[24px] font-normal">Financial and Accounting Consulting is a financial institution offering savings, investments, loans, and financial advisory services.</p>
                    </div>

                    <div className="pt-10 space-y-[15px]">

                      <div className="flex items-center gap-10">
                        <div className="text-[#A9A9AE] text-[16px] leading-[22.4px] font-normal flex items-center gap-[15px]">
                          <Image src={Folder} alt="Folder" />
                          Project ID
                        </div>

                        <h1 className="text-[#5B52B6] text-[16px] leading-[24px] font-normal">FN-5467-435</h1>
                      </div>

                      <div className="flex items-center gap-10">
                        <div className="text-[#A9A9AE] text-[16px] leading-[22.4px] font-normal flex items-center gap-[15px]">
                          <Image src={HourGlass} alt="HourGlass" />
                          Status
                        </div>

                        <h1 className="text-[#5B52B6] text-[16px] leading-[24px] bg-[#F0F0F9] w-[87px] rounded-[8px] p-[2px] flex items-center justify-center">New</h1>
                      </div>

                      <div className="flex items-center gap-10">
                        <div className="text-[#A9A9AE] text-[16px] leading-[22.4px] font-normal flex items-center gap-[15px]">
                          <Image src={PriorityIcon} alt="PriorityIcon" />
                          Priority
                        </div>

                        <span  className="bg-[#FAD9C2] w-[96px] rounded-[100px] justify-center flex items-center text-[#F87B24] text-[13px] leading-[19.5px]">
                          <Image src={MediumSvg} alt="MediumSvg" />
                          <h1>
                            Medium
                          </h1>
                        </span>
                      </div>

                      <div className="flex items-center gap-10">
                        <div className="text-[#A9A9AE] text-[16px] leading-[22.4px] font-normal flex items-center gap-[15px]">
                          <Image src={Timer} alt="Timer" />
                          Due Date
                        </div>

                        <h1 className="text-[#5B52B6] text-[16px] leading-[24px] font-normal">Sept 24,2024</h1>
                      </div>

                      <div className="flex items-center gap-10">
                        <div className="text-[#A9A9AE] text-[16px] leading-[22.4px] font-normal flex items-center gap-[15px]">
                          <Image src={wallet} alt="wallet" />
                          Budget
                        </div>

                        <h1 className="text-[#5B52B6] text-[16px] leading-[24px] font-normal">₦500,000</h1>
                      </div>

                      <div className="flex items-center gap-10">
                        <div className="text-[#A9A9AE] text-[16px] leading-[22.4px] font-normal flex items-center gap-[15px]">
                          <Image src={TypeIcon} alt="TypeIcon" />
                          Consultant
                        </div>

                        <Image src={Dora} alt="Dora" />
                      </div>

                      <div className="flex items-center gap-10">
                        <div className="text-[#A9A9AE] text-[16px] leading-[22.4px] font-normal flex items-center gap-[15px]">
                          <Image src={TypeIcon} alt="TypeIcon" />
                          Client
                        </div>

                        <Image src={Bankole} alt='Bankole' />
                      </div>
                    </div>
                    

                    <div>
                      <div className="pt-10 flex items-center justify-between">
                        <h1 className="text-[#101828] text-[20px] leading-[30px] font-bold">Compliance Requirements</h1>
                        <Image src={more} alt="more" />
                      </div>

                      <div className="space-y-[5px] pt-[20px]">

                        <div className="py-[10.75px] px-[10px] rounded-[10px] shadow-custom-two ">
                          <h1 className="text-[16px] leading-[24px] text-[#101828] font-normal">Financial Planning and Analysis</h1>

                          <p className="text-[#A3A2AB] pt-[10px] text-[14px] leading-[18.23px] font-normal">Monday, 2nd April</p>
                        </div>

                        <div className="py-[10.75px] px-[10px] shadow-custom-two rounded-[10px]">
                          <h1 className="text-[16px] leading-[24px] text-[#101828] font-normal">Tax Advisory and Compliance</h1>

                          <p className="text-[#A3A2AB]  pt-[10px] text-[14px] leading-[18.23px] font-normal">Monday, 2nd April</p>
                        </div> 

                        <div className="py-[10.75px] px-[10px] shadow-custom-two rounded-[10px]">
                          <h1 className="text-[16px] leading-[24px] text-[#101828] font-normal">Audit and Assurance Services</h1>

                          <p className="text-[#A3A2AB] pt-[10px] text-[14px] leading-[18.23px] font-normal">Monday, 2nd April</p>
                        </div>  

                        <div className="py-[10.75px] px-[10px] shadow-custom-two rounded-[10px]">
                          <h1 className="text-[16px] leading-[24px] text-[#101828] font-normal">Forensic Accounting</h1>

                          <p className="text-[#A3A2AB] pt-[10px] text-[14px] leading-[18.23px] font-normal">Monday, 2nd April</p>
                        </div>

                        <div className="py-[10.75px] px-[10px] shadow-custom-two rounded-[10px] ">
                          <h1 className="text-[16px] leading-[24px] text-[#101828] font-normal">Investment Advisory Services</h1>

                          <p className="text-[#A3A2AB] pt-[10px] text-[14px] leading-[18.23px] font-normal">Monday, 2nd April</p>
                        </div> 

                        <div className="py-[10.75px] px-[10px] shadow-custom-two rounded-[10px]">
                          <h1 className="text-[16px] leading-[24px] text-[#101828] font-normal">Fundraising Strategy and Execution</h1>

                          <p className="text-[#A3A2AB]  pt-[10px] text-[14px] leading-[18.23px] font-normal">Monday, 2nd April</p>
                        </div> 
                      </div>
                    </div>
                  </div>


                    
                  
                </SheetContent>
              </Sheet>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={dummyData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              className="bg-[#F9FAFE] scrollbar-hide"
            />
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default ComplianceTrackingContent