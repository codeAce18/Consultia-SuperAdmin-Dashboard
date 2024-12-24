import React from 'react'
import TotalInflowIcon from "../../public/assets/TotalInflowIcon.svg";
import TotalOutflowIcon from "../../public/assets/TotalOutflowIcon.svg";
import TransactionCountIcon from "../../public/assets/TransactionCountIcon.svg";
import Image from 'next/image';
import TransactionMonitoringTable from './Tables/TransactionMonitoringTable';
import DashboardHeader from './DashboardHeader';





const TransactionMonitoringContent = () => {
  return (
    <div>

      <DashboardHeader 
        title="Transactions" 
        mobileTitle="Transactions"
      />



      <div className='pt-[20px]'>
        <div className='flex items-center justify-center'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1  gap-[32px]'>
            <div className='bg-[#FFFFFF] shadow-custom max-w-[324px] w-full p-[16px] rounded-[8px]'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[15px]'>
                  <Image width={37} height={37} src={TotalInflowIcon} alt='TotalInflowIcon' />
                  <h1 className='text-[#101828] text-[24px] leading-[28.8px] font-bold'>₦2,000,000</h1>
                </div>
                <p className='text-[#1ED11E] text-[14px] leading-[21px] font-normal bg-[#D3FED3] w-[57px] p-[10px] rounded-[100px]'>
                  +20%
                </p>
              </div>
              <h1 className='pt-[20px] text-[#7B91B0] text-[16px] leading-[24px] font-normal'>Total Inflow</h1>
            </div>
            <div className='bg-[#FFFFFF] shadow-custom max-w-[324px] w-full p-[16px] rounded-[8px]'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[15px]'>
                  <Image width={37} height={37} src={TotalOutflowIcon} alt='TotalOutflowIcon' />
                  <h1 className='text-[#101828] text-[24px] leading-[28.8px] font-bold'>₦1,800,000</h1>
                </div>
                <p className='text-[#F87B24] text-[14px] leading-[21px] font-normal bg-[#FAD9C2] w-[57px] p-[10px] rounded-[100px]'>
                  -13%
                </p>
              </div>
              <h1 className='pt-[20px] text-[#7B91B0] text-[16px] leading-[24px] font-normal'>Total Outflow</h1>
            </div>
            <div className='bg-[#FFFFFF] shadow-custom max-w-[324px] w-full p-[16px] rounded-[8px]'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[15px]'>
                  <Image width={37} height={37} src={TransactionCountIcon} alt='TransactionCountIcon' />
                  <h1 className='text-[#101828] text-[24px] leading-[28.8px] font-bold'>455</h1>
                </div>
                <p className='text-[#5B52B6] text-[14px] leading-[21px] font-normal bg-[#5B52B61A] w-[57px] p-[10px] rounded-[100px]'>
                  -5%
                </p>
              </div>
              <h1 className='pt-[20px] text-[#7B91B0] text-[16px] leading-[24px] font-normal'>Transaction Count</h1>
            </div>
          </div>
        </div>
      </div>
      

      <TransactionMonitoringTable />
    </div>
  )
}

export default TransactionMonitoringContent;