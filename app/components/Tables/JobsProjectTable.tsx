import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Button,
} from '@mui/material';


import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet";

import BrandingAssets from "../../../public/assets/BrandingAssets.svg";

import GuidelinesPdf from "../../../public/assets/GuidelinesPdf.svg";

import Plus from "../../../public/assets/Plus.svg";

import ClientConsultantIcon from "../../../public/assets/ClientConsultantIcon.svg";

import DoraPicture from "../../../public/assets/DoraPicture.svg";

import MediumSvg from "../../../public/assets/MediumSvg.svg";

import ExportIcon from "../../../public/assets/ExportIcon.svg"

import EyeIcon from "../../../public/assets/EyeIcon.svg"

import wallet from "../../../public/assets/wallet.svg"

import Timer from "../../../public/assets/Timer.svg"

import HourGlass from "../../../public/assets/HourGlass.svg"
import timerClock from "../../../public/assets/timerClock.svg"


import TypeIcon from "../../../public/assets/TypeIcon.svg"

import PriorityIcon from "../../../public/assets/PriorityIcon.svg"

import Dora from "../../../public/assets/Dora.svg";

import Bankole from "../../../public/assets/Bankole.svg";
// import David from "../../../public/assets/David.svg";


import Folder from "../../../public/assets/Folder.svg"

import Image from "next/image"

import TodoList from "../../components/TodoList";
import more from "../../../public/assets/more.svg";

// Types
interface Job {
  clientImage: string;
  clientName: string;
  location: string;
  serviceType: string;
  startDate: string;
  dueDate: string;
  status: 'New' | 'Ongoing' | 'Completed' | 'Rejected';
}

interface Project {
  clientImage: string;
  clientName: string;
  location: string;
  serviceType: string;
  startDate: string;
  dueDate: string;
  status: 'Ongoing' | 'Completed';
}

const jobsData: Job[] = [
  {
    clientImage: '/assets/David.svg',
    clientName: 'Femi Akingbola',
    location: 'Lagos, Nigeria',
    serviceType: 'Financial and Accounting Consulting',
    startDate: 'Jan 20, 2024',
    dueDate: 'May 19, 2024',
    status: 'New',
  },
  {
    clientImage: '/assets/David.svg',
    clientName: 'Femi Akingbola',
    location: 'Lagos, Nigeria',
    serviceType: 'Financial and Accounting Consulting',
    startDate: 'Jan 20, 2024',
    dueDate: 'May 19, 2024',
    status: 'Ongoing',
  },
  {
    clientImage: '/assets/David.svg',
    clientName: 'Femi Akingbola',
    location: 'Lagos, Nigeria',
    serviceType: 'Financial and Accounting Consulting',
    startDate: 'Jan 20, 2024',
    dueDate: 'May 19, 2024',
    status: 'Completed',
  },
  {
    clientImage: '/assets/David.svg',
    clientName: 'Femi Akingbola',
    location: 'Lagos, Nigeria',
    serviceType: 'Financial and Accounting Consulting',
    startDate: 'Jan 20, 2024',
    dueDate: 'May 19, 2024',
    status: 'Rejected',
  },
  {
    clientImage: '/assets/David.svg',
    clientName: 'Femi Akingbola',
    location: 'Lagos, Nigeria',
    serviceType: 'Financial and Accounting Consulting',
    startDate: 'Jan 20, 2024',
    dueDate: 'May 19, 2024',
    status: 'Ongoing',
  },
  {
    clientImage: '/assets/David.svg',
    clientName: 'Femi Akingbola',
    location: 'Lagos, Nigeria',
    serviceType: 'Financial and Accounting Consulting',
    startDate: 'Jan 20, 2024',
    dueDate: 'May 19, 2024',
    status: 'Rejected',
  },
];

const projectsData: Project[] = [
  {
    clientImage: '/assets/Dora.svg',
    clientName: 'Dora Consulting',
    location: 'Lagos, Nigeria',
    serviceType: 'Financial and Accounting Consulting',
    startDate: 'Jan 20, 2024',
    dueDate: 'May 19, 2024',
    status: 'Completed',
  },
  {
    clientImage: '/assets/Dora.svg',
    clientName: 'Dora Consulting',
    location: 'Lagos, Nigeria',
    serviceType: 'Financial and Accounting Consulting',
    startDate: 'Jan 20, 2024',
    dueDate: 'May 19, 2024',
    status: 'Ongoing',
  },
  {
    clientImage: '/assets/Dora.svg',
    clientName: 'Dora Consulting',
    location: 'Lagos, Nigeria',
    serviceType: 'Financial and Accounting Consulting',
    startDate: 'Jan 20, 2024',
    dueDate: 'May 19, 2024',
    status: 'Completed',
  },
  {
    clientImage: '/assets/Dora.svg',
    clientName: 'Dora Consulting',
    location: 'Lagos, Nigeria',
    serviceType: 'Financial and Accounting Consulting',
    startDate: 'Jan 20, 2024',
    dueDate: 'May 19, 2024',
    status: 'Ongoing',
  },
  {
    clientImage: '/assets/Dora.svg',
    clientName: 'Dora Consulting',
    location: 'Lagos, Nigeria',
    serviceType: 'Financial and Accounting Consulting',
    startDate: 'Jan 20, 2024',
    dueDate: 'May 19, 2024',
    status: 'Completed',
  },
];


const JobsProjectTable: React.FC = () => {
  const [activeView, setActiveView] = useState<'jobs' | 'projects'>('jobs');
  const [activeJobsTab, setActiveJobsTab] = useState<'Client Jobs' | 'New Jobs' | 'Ongoing Jobs' | 'Completed Jobs' | 'Rejected Jobs'>('Client Jobs');
  const [activeProjectsTab, setActiveProjectsTab] = useState<'All Projects' | 'Ongoing Projects' | 'Completed Projects'>('All Projects');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const jobStatusMap: { [key: string]: Job['status'] } = {
    'New Jobs': 'New',
    'Ongoing Jobs': 'Ongoing',
    'Completed Jobs': 'Completed',
    'Rejected Jobs': 'Rejected',
  };

  const filteredJobs = jobsData.filter((job) =>
    activeJobsTab === 'Client Jobs' ? true : job.status === jobStatusMap[activeJobsTab]
  );

  const projectStatusMap: { [key: string]: Project['status'] } = {
    'Ongoing Projects': 'Ongoing',
    'Completed Projects': 'Completed',
  };

  const filteredProjects = projectsData.filter((project) =>
    activeProjectsTab === 'All Projects' ? true : project.status === projectStatusMap[activeProjectsTab]
  );

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'New':
        return { backgroundColor: '#E3F2FD', color: '#1565C0', padding: '4px 8px', borderRadius: '4px' };
      case 'Ongoing':
        return { backgroundColor: '#FFF3E0', color: '#F57C00', padding: '4px 8px', borderRadius: '4px' };
      case 'Completed':
        return { backgroundColor: '#E8F5E9', color: '#388E3C', padding: '4px 8px', borderRadius: '4px' };
      case 'Rejected':
        return { backgroundColor: '#FFEBEE', color: '#D32F2F', padding: '4px 8px', borderRadius: '4px' };
      default:
        return {};
    }
  };


  const EditedProject: React.FC = () => {
    return (
        <div className="pt-10">
        <div className='grid grid-cols-2'>
          <div className='flex-1'>
            <h1 className='text-[#101828] text-[20px] leading-[30px] font-medium'>{projectsData[0].serviceType}</h1>
            <div className='flex items-center justify-start gap-[10px] pt-[10px]'>
              <h1 className='bg-[#F0F0F9] text-[#807ACC] text-[13px] leading-[19.5px] font-normal w-[87px] p-[2px] rounded-[8px] flex items-center justify-center'>Fintech</h1>
              <h1 className='bg-[#F0F0F9] text-[#807ACC] text-[13px] leading-[19.5px] font-normal w-[87px] p-[2px] rounded-[8px] flex items-center justify-center'>Consultation</h1>
              <h1 className='bg-[#F0F0F9] text-[#807ACC] text-[13px] leading-[19.5px] font-normal w-[87px] p-[2px] rounded-[8px] flex items-center justify-center'>Accounting</h1>
            </div>
            <div className='pt-[20px]'>
              <h1 className='text-[#101828] text-[16.5px] leading-[24.75px] font-semibold'>Description</h1>
              <p className='pt-[10px] text-[#A3A2AB] text-[16px] leading-[24px] font-normal max-w-[357px]'>Lorem ipsum dolor sit amet consectetur. Varius blandit ornare erat imperdiet felis turpis morbi. Maecenas diam malesuada hac enim. Porttitor magna odio tincidunt viverra. In commodo nisi neque in. Eget tristique ornare viverra convallis venenatis est fames. Porttitor cum lacinia quis est ut. Nam ante fames faucibus congue phasellus nisl lorem facilisis suscipit.</p>
            </div>
          
            <div className='pt-10'>
              <div className="pt-[25px] bg-white max-w-[412px] w-full">
                <div className='flex items-center justify-between px-[20px]'>
                  <h1 className='text-[#101828] text-[20px] leading-[30px] font-bold mb-[20px]'>To-Do List</h1>
                  <Image src={more} alt='more' />
                </div>
                <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                  <TodoList label="Clients Meetings and Calls" />
                </div>
              <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                <TodoList label="Strategy Development" />
              </div>
              <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                <TodoList label="Report Writing & Documentation" />
              </div>
              <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                <TodoList label="Team Collaboration" />
              </div>
              <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                <TodoList label="Client Communication" />
              </div>
              <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                <TodoList label="Market & Industry Research" />
              </div>
              <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                <TodoList label="Attend NAPCO Conference" />
              </div>
            </div>
          </div>
        </div>




         

        <div>
          <div className='pt-10'>
            <h1 className='text-[#101828] text-[16.5px] leading-[24.75px] font-medium'>Details</h1>

            <div className='space-y-[15px] pt-[15px]'>
              <div className='flex items-center gap-[8px]'>
                <Image src={Folder} alt='Folder' />
                <h1 className='text-[#A9A9AE] flex items-center gap-[30px] text-[16px] leading-[22.4px] font-normal'>Project ID<span className='text-[#5B52B6] leading-[24px]'>FN-5467-435</span></h1>
              </div>
              <div  className='flex items-center  gap-[8px]'>
                <Image src={HourGlass} alt='HourGlass' />
                <h1 className='text-[#A9A9AE] text-[16px]  flex items-center gap-[30px] leading-[22.4px] font-normal'>Status<span className='text-[#5B52B6]'>Ongoing</span></h1>
              </div>
              <div  className='flex items-center  gap-[8px]'>
                <Image src={PriorityIcon} alt='PriorityIcon' />
                <h1 className='text-[#A9A9AE] text-[16px] flex items-center gap-[30px] leading-[22.4px] font-normal'>Priority<span className='text-[#F87B24] bg-[#FAD9C2] p-[10px] rounded-[100px]'>Medium</span></h1>
              </div>
              <div  className='flex items-center  gap-[8px]'>
                <Image src={timerClock} alt='timerClock' />
                <h1 className='text-[#A9A9AE] text-[16px] flex items-center gap-[30px] leading-[22.4px] font-normal'>Due Date<span className='text-[#5B52B6]'>Sept 24,2024</span></h1>
              </div>
              <div  className='flex items-center  gap-[8px]'>
                <Image src={wallet} alt='wallet' />
                <h1 className='text-[#A9A9AE] text-[16px] flex items-center gap-[30px] leading-[22.4px] font-normal'>Budget<span className='text-[#5B52B6]'>₦500,000</span></h1>
              </div>
              <div  className='flex items-center  gap-[8px]'>
                <Image src={ClientConsultantIcon} alt='ClientConsultantIcon' />
                <h1 className='text-[#A9A9AE] text-[16px] flex items-center gap-[30px] leading-[22.4px] font-normal'>Consultant<span className='text-[#5B52B6]'><Image src={Dora} alt="Dora" /></span></h1>
              </div>
              <div  className='flex items-center  gap-[8px]'>
                <Image src={ClientConsultantIcon} alt='ClientConsultantIcon' />
                <h1 className='text-[#A9A9AE] text-[16px] flex items-center gap-[30px] leading-[22.4px] font-normal'>Client<span className='text-[#5B52B6]'><Image src={Bankole} alt="Bankole" /></span></h1>
              </div>
            </div>
          </div>


          <div className='pt-10'>
            <div className='flex items-center gap-[10px]'> 
              <h1 className='text-[#101828] text-[16.5px] leading-[24.75px] font-medium'>Attachments</h1>
              <h1 className='text-[#101828] text-[16.5px] leading-[24.75px] font-medium'>Uploaded</h1>
            </div>

            <div className='flex items-center gap-[10px]'>
              <Image src={GuidelinesPdf} alt='GuidelinesPdf' />

              <Image src={BrandingAssets} alt='BrandingAssets' />

              <Image src={Plus} alt='Plus' />
            </div>
          </div>
        </div>

      </div>
    </div>
    );
};

    const [showEditedProject, setShowEditedProject] = useState(false);

    const handleMoreClick = () => {
        setShowEditedProject(true);
    };

  
  

  return (
    <div>
         {showEditedProject ? (
        <EditedProject />
      ) : (
        <>
        <div className='flex  items-start flex-col lg:flex-row lg:justify-between'>
          <div className='flex flex-col sm:flex-row items-start justify-between mb-[16px]'>
            <div className='flex flex-wrap gap-[16px]'>
              {activeView === 'jobs' && (
                ['Client Jobs', 'New Jobs', 'Ongoing Jobs', 'Completed Jobs', 'Rejected Jobs'].map((tab) => (
                  <div
                    key={tab}
                    onClick={() => setActiveJobsTab(tab as typeof activeJobsTab)}
                    style={{
                        cursor: 'pointer',
                        paddingBottom: '10px',
                        borderBottom: activeJobsTab === tab ? '2px solid #5B52B6' : '2px solid transparent',
                        fontWeight: activeJobsTab === tab ? 'bold' : 'normal',
                        color: activeJobsTab === tab ? '#101828' : '#41404B',
                        transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    {tab}
                  </div>
                ))
              )}
              {activeView === 'projects' && (
                ['All Projects', 'Ongoing Projects', 'Completed Projects'].map((tab) => (
                  <div
                    key={tab}
                    onClick={() => setActiveProjectsTab(tab as typeof activeProjectsTab)}
                    style={{
                        cursor: 'pointer',
                        paddingBottom: '10px',
                        borderBottom: activeProjectsTab === tab ? '2px solid #5B52B6' : '2px solid transparent',
                        fontWeight: activeProjectsTab === tab ? 'bold' : 'normal',
                        color: activeProjectsTab === tab ? '#101828' : '#41404B',
                        transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    {tab}
                  </div>
                ))
              )}
            </div>
          
          </div>
            <div className='flex items-center gap-[20px] pb-[20px]'>
                <button
                  className='w-[177px] h-[40px] bg-[#F0F0F9] text-[#5B52B6] text-[16.5px] leading-[19.8px] font-bold'
                  onClick={() => setActiveView(activeView === 'jobs' ? 'projects' : 'jobs')}
                >
                  {activeView === 'jobs' ? 'View Projects' : 'Job Orders'}
                </button>
                <div>
                    <button className='flex items-center text-white bg-[#5B52B6] border-[0.6px] border-[#5B52B6] max-w-[121px] w-full h-[32px] p-[10px] rounded-[4px] gap-[8px] whitespace-nowrap'>
                        <Image src={ExportIcon} alt='ExportIcon' />
                        Export CSV
                    </button>
                </div>
            </div>
        </div>

      <TableContainer component={Paper} className='scrollbar-hide'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Client Name
                </div>
              </TableCell>
              <TableCell>Service Type</TableCell>
              <TableCell>Start/Due Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>
                View
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(activeView === 'jobs' ? filteredJobs : filteredProjects)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className='flex items-start gap-[10px]'>
                        <Image width={36} height={36} src={row.clientImage} alt="clientImage"/>
                        <div>
                            <p>{row.clientName}</p> 
                            <p style={{ fontSize: '12px', color: 'gray' }}>{row.location}</p>
                        </div>
                    </div>
                  </TableCell>
                  <TableCell>{row.serviceType}</TableCell>
                  <TableCell>{row.startDate}/{row.dueDate}</TableCell>
                  <TableCell>
                    <span style={getStatusStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell>
                    {activeView === 'projects' && (
                        <Sheet>
                            <SheetTrigger>
                                <Button variant="text" size="small">
                                <Image src={EyeIcon} alt="Eye Icon" width={20} height={20} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className='overflow-y-auto scrollbar-hide'>
                                <SheetHeader>
                                    <SheetTitle className='flex items-center justify-between pt-10'>
                                        <h1 className='text-[#101828] text-[24px] leading-[36px]  font-bold'>Project Overview</h1>
                                        <div className="cursor-pointer">
                                            <Image onClick={handleMoreClick}  src={more} alt="more" />
                                        </div>
                                    </SheetTitle>

                                    <div className='pt-[10px] bg-[#FAD9C2] text-[#F87B24] w-[96px] p-[10px] rounded-[100px] flex items-center gap-[10px] text-[13px] leading-[19.5px] font-normal'>
                                        <Image src={MediumSvg} alt='MediumSvg' />
                                        Medium
                                    </div>
                                </SheetHeader>


                          


                                
                                <div className='pt-[15px]'>
                                    <h1 className='text-[#101828] text-[20px] leading-[30px] font-medium'>{row.serviceType}</h1>

                                    <div className='flex items-center gap-[15px] pt-[15px]'>
                                        <h1 className='flex items-center justify-center text-[#807ACC] text-[13px] leading-[19.5px] font-normal bg-[#F0F0F9] w-[87px] p-[2px] rounded-[8px]'>Fintech</h1>

                                        <h1 className='flex items-center justify-center text-[#807ACC] text-[13px] leading-[19.5px] font-normal bg-[#F0F0F9] w-[87px] p-[2px] rounded-[8px]'>Consultation</h1>

                                        <h1 className='flex items-center justify-center text-[#807ACC] text-[13px] leading-[19.5px] font-normal bg-[#F0F0F9] w-[87px] p-[2px] rounded-[8px]'>Accounting</h1>
                                    </div>

                                    <p className='pt-[15px] text-[#A3A2AB] text-[16px] leading-[24px] font-normal'>Lorem ipsum dolor sit amet consectetur. Varius blandit ornare erat imperdiet felis turpis morbi. Maecenas diam malesuada hac enim. Porttitor magna odio tincidunt viverra. In commodo nisi neque in. Eget tristique ornare viverra convallis venenatis est fames. Porttitor cum lacinia quis est ut. Nam ante fames faucibus congue phasellus nisl lorem facilisis suscipit.</p>
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


                                <div className='pt-10 flex flex-col items-start lg:flex-row md:flex-row gap-[1px]'>
                                    <Image src={GuidelinesPdf} alt='GuidelinesPdf' />

                                    <Image src={BrandingAssets} alt='BrandingAssets' />
                                    
                                    <Image src={Plus} alt='Plus' />
                                </div>
                                    
                                    
                                <div className='pt-10'>
                                    <h1 className='text-[#101828] text-[20px] leading-[30px] font-bold'>To-Do List</h1>
                                    <div className="pt-[25px] bg-white">
                                    <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                        <TodoList label="Clients Meetings and Calls" />
                                    </div>
                                    <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <TodoList label="Strategy Development" />
                                    </div>
                                    <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <TodoList label="Report Writing & Documentation" />
                                    </div>
                                    <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <TodoList label="Team Collaboration" />
                                    </div>
                                    <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <TodoList label="Client Communication" />
                                    </div>
                                    <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <TodoList label="Market & Industry Research" />
                                    </div>
                                    <div className="py-[10.75px] px-[7.17px] shadow-custom-two border-b-[7px]">
                                    <TodoList label="Attend NAPCO Conference" />
                                    </div>
                                </div>
                                </div>


                                    

                            </SheetContent>
                        </Sheet>
                    )}
                    {activeView === 'jobs' && (
                        <Sheet>
                        <SheetTrigger>
                            <Button variant="text" size="small">
                            <Image src={EyeIcon} alt="Eye Icon" width={20} height={20} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className='overflow-y-auto scrollbar-hide'>
                            <SheetHeader className='pt-[20px]'>
                                <SheetTitle className='text-[#101828] text-[20px] leading-[30px] font-bold'>Job Order Summary!</SheetTitle>
                                <p className='text-[#41404B] text-[16px] leading-[22.4px] font-normal'>Here is the summary page showing the chosen Consultants and the project details.</p>
                            </SheetHeader>

                            <div className='pt-10'>
                                <h1 className='text-[20px] leading-[30px] text-[#101828] font-bold'>Project Assigned to:</h1>

                                <div className='pt-[15px]'>
                                    <Image src={DoraPicture} alt='DoraPicture' />
                                </div>
                            </div>

                            <div className='pt-8'>
                                <h1 className='text-[#101828] text-[20px] leading-[30px] font-bold'>Project Description</h1>

                                <p className='pt-[10px] text-[#41404B] text-[16px] leading-[24px] font-normal'>Lorem ipsum dolor sit amet consectetur. Varius blandit ornare erat imperdiet felis turpis morbi. Maecenas diam malesuada hac enim. Porttitor magna odio tincidunt viverra. In commodo nisi neque in. Eget tristique ornare viverra convallis venenatis est fames. Porttitor cum lacinia quis est ut. Nam ante fames faucibus congue phasellus nisl lorem facilisis suscipit.</p>
                            </div>



                            <div>
                                <div className='pt-[20px] flex items-center gap-[10px]'>
                                    <h1 className='text-[#757678] text-[20px] leading-[30px] font-normal'>ATTACHMENTS</h1>
                                    <p className='text-[#5B52B6] text-[20px] leading-[30px] font-medium'>Upload</p>
                                </div>
                                <div className='flex flex-col   items-start gap-[1px]'>
                                  <Image src={GuidelinesPdf} alt='GuidelinesPdf' />
                                  <Image src={BrandingAssets} alt='BrandingAssets' />
                              
                                  <Image src={Plus} alt='Plus' />
                                </div>
                            </div>
                            
                            {/* <p>Client Name: {row.clientName}</p>
                            <p>Service Type: {row.serviceType}</p>
                            <p>Start Date: {row.startDate}</p>
                            <p>Due Date: {row.dueDate}</p>
                            <p>Status: {row.status}</p> */}
                        </SheetContent>
                    </Sheet>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        
        <TablePagination
          className='scrollbar-hide'
          component="div"
          count={(activeView === 'jobs' ? filteredJobs : filteredProjects).length}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </TableContainer>
      </>
    )}
    </div>

  );
};

export default JobsProjectTable;
