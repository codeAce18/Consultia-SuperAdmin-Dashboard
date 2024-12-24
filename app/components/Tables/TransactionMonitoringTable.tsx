import React, { useState } from 'react';
import 
{ Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Box, Typography } 
from '@mui/material';
import Image from 'next/image';
import EyeIcon from '../../../public/assets/EyeIcon.svg';

import {
    Sheet,
    SheetContent,
    SheetHeader,
} from "@/components/ui/sheet"

type Transaction = {
  id: string;
  amount: string;
  receivedBy: {
    image: string;
    name: string;
    subtext: string;
  };
  sentBy: {
    image: string;
    name: string;
    subtext: string;
  };
  channel: string;
  status: 'Successful' | 'Pending' | 'Failed';
};

// Sample transactions
const transactions: Transaction[] = [
  {
    id: 'FN-234567',
    amount: '-₦500,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 1:20 PM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 1:00 PM' },
    channel: 'Bank Transfer',
    status: 'Successful',
  },
  {
    id: 'FN-234568',
    amount: '-₦250,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 12:30 PM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 12:00 PM' },
    channel: 'Bank Transfer',
    status: 'Pending',
  },
  {
    id: 'FN-234569',
    amount: '-₦1,000,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 11:30 AM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 11:00 AM' },
    channel: 'Bank Transfer',
    status: 'Failed',
  },

  {
    id: 'FN-234570',
    amount: '-₦1,000,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 11:30 AM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 11:00 AM' },
    channel: 'Bank Transfer',
    status: 'Failed',
  },
  {
    id: 'FN-234571',
    amount: '-₦1,000,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 11:30 AM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 11:00 AM' },
    channel: 'Bank Transfer',
    status: 'Failed',
  },

  {
    id: 'FN-234572',
    amount: '-₦500,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 1:20 PM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 1:00 PM' },
    channel: 'Bank Transfer',
    status: 'Successful',
  },
  {
    id: 'FN-234573',
    amount: '-₦500,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 1:20 PM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 1:00 PM' },
    channel: 'Bank Transfer',
    status: 'Successful',
  },
  {
    id: 'FN-234574',
    amount: '-₦500,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 1:20 PM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 1:00 PM' },
    channel: 'Bank Transfer',
    status: 'Successful',
  },
  {
    id: 'FN-234575',
    amount: '-₦250,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 12:30 PM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 12:00 PM' },
    channel: 'Bank Transfer',
    status: 'Pending',
  },
  {
    id: 'FN-234576',
    amount: '-₦250,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 12:30 PM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 12:00 PM' },
    channel: 'Bank Transfer',
    status: 'Pending',
  },
  {
    id: 'FN-234577',
    amount: '-₦250,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 12:30 PM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 12:00 PM' },
    channel: 'Bank Transfer',
    status: 'Pending',
  },
  {
    id: 'FN-234578',
    amount: '-₦250,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 12:30 PM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 12:00 PM' },
    channel: 'Bank Transfer',
    status: 'Pending',
  },
  {
    id: 'FN-234579',
    amount: '-₦250,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 12:30 PM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 12:00 PM' },
    channel: 'Bank Transfer',
    status: 'Pending',
  },
  {
    id: 'FN-234580',
    amount: '-₦250,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 12:30 PM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 12:00 PM' },
    channel: 'Bank Transfer',
    status: 'Pending',
  },
  {
    id: 'FN-234581',
    amount: '-₦250,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 12:30 PM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 12:00 PM' },
    channel: 'Bank Transfer',
    status: 'Pending',
  },
  {
    id: 'FN-234582',
    amount: '-₦250,000',
    receivedBy: { image: '/assets/Dora.svg', name: 'Dora Consulting', subtext: 'Today, 12:30 PM' },
    sentBy: { image: '/assets/Bankole.svg', name: 'Bankole Onafuwa', subtext: 'Today, 12:00 PM' },
    channel: 'Bank Transfer',
    status: 'Pending',
  },
];

const statusStyles = {
  Successful: { color: '#008000', backgroundColor: '#D2F6D2' },
  Pending: { color: '#F87B24', backgroundColor: '#FAD9C2' },
  Failed: { color: '#DD2025', backgroundColor: '#F5BFC1' },
};

const TransactionMonitoringTable: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'All' | 'Successful' | 'Pending' | 'Failed'>('All');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 15));
    setPage(0);
  };

  const filteredTransactions =
    selectedTab === 'All'
      ? transactions
      : transactions.filter((transaction) => transaction.status === selectedTab);

  return (
    <div className='pt-10'>
        <Box>
          <Box>
            <div className='flex gap-4 mb-3 flex-wrap items-center lg:items-center'>
              {['All', 'Successful', 'Pending', 'Failed'].map((tab) => (
                <Typography
                  key={tab}
                  onClick={() => setSelectedTab(tab as 'All' | 'Successful' | 'Pending' | 'Failed')}
                  sx={{
                      cursor: 'pointer',
                      paddingBottom: '10px',
                      borderBottom: selectedTab === tab ? '2px solid #5B52B6' : '2px solid transparent',
                      fontWeight: selectedTab === tab ? 'bold' : 'normal',
                      color: selectedTab === tab ? '#101828' : '#41404B',
                      transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {tab} Transactions
                </Typography>
              ))}
            </div>
          </Box>
          <TableContainer component={Paper} className='scrollbar-hide'>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><h1 className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Transaction ID</h1></TableCell>
                  <TableCell><h1 className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Amount</h1></TableCell>
                  <TableCell><h1 className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Received By</h1></TableCell>
                  <TableCell><h1 className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Sent By</h1></TableCell>
                  <TableCell><h1 className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Channel</h1></TableCell>
                  <TableCell><h1 className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>Status</h1></TableCell>
                  <TableCell><h1  className='text-[#7B91B0] text-[16.5px] leading-[19.8px] font-semibold'>View</h1></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredTransactions
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell><h1 className='text-[#101828] text-[16px] leading-[22.4px] font-normal'>{transaction.id}</h1></TableCell>
                      <TableCell><h1 className='text-[#101828] text-[14px] leading-[21px] font-normal whitespace-nowrap'>{transaction.amount}</h1></TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Image
                            src={transaction.receivedBy.image}
                            alt={transaction.receivedBy.name}
                            width={32}
                            height={32}
                            style={{ borderRadius: '50%' }}
                          />
                          <Box>
                            <h1 className='text-[16px] text-[#101828] leading-[22.4px] font-normal'>{transaction.receivedBy.name}</h1>
                            <h1 className='text-[11px] text-[#A3A2AB] leading-[16.5px] font-normal'>
                              {transaction.receivedBy.subtext}
                            </h1>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Image
                            src={transaction.sentBy.image}
                            alt={transaction.sentBy.name}
                            width={32}
                            height={32}
                            style={{ borderRadius: '50%' }}
                          />
                          <Box>
                            <h1 className='text-[16px] text-[#101828] leading-[22.4px] font-normal'>{transaction.sentBy.name}</h1>
                            <h1 className='text-[11px] text-[#A3A2AB] leading-[16.5px] font-normal'>
                              {transaction.sentBy.subtext}
                            </h1>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>{transaction.channel}</TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            ...statusStyles[transaction.status],
                            width: '116px',
                            padding: '10px',
                            borderRadius: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          {transaction.status}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Image
                            src={EyeIcon}
                            alt="View"
                            width={24}
                            onClick={() => {
                              setSelectedTransaction(transaction);
                              setIsSheetOpen(true);
                            }}
                            style={{ cursor: 'pointer' }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              className='scrollbar-hide'
              component="div"
              count={filteredTransactions.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
           <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetContent side="right" className='overflow-y-auto scrollbar-hide'>
                    <SheetHeader className='pt-[20px] text-[#101828] text-[20px] leading-[30px] font-bold'>
                        Transaction Overview
                    </SheetHeader>
                    {selectedTransaction && (
                        <div className='pt-10'>
                        <div className='mx-auto flex items-center justify-center w-[80px] h-[80px] rounded-[100px] bg-white shadow-custom-circle'>
                            <Image
                                src={selectedTransaction.receivedBy.image}
                                alt={selectedTransaction.receivedBy.name}
                                width={58}
                                height={58}
                                style={{ borderRadius: '50%' }}
                            />
                        </div>

                        <div className='bg-[#F1F1F1] min-h-[364px] max-w-[412px] p-[16px] rounded-[8px]'> 
                            <div>
                                <div>
                                    <h1 className='text-[16px] leading-[22.4px] font-normal max-w-[296px] text-center'>
                                        Transfer from <span className='text-[16.5px] leading-[19.8px] font-bold'>{selectedTransaction.sentBy.name}</span>  to <span className='text-[16.5px] leading-[19.8px] font-bold'>{selectedTransaction.receivedBy.name}</span>
                                    </h1>

                                    <p  className='pt-[15px] text-[#101828] text-[25px] leading-[37.5px] font-bold text-center'>{selectedTransaction.amount}</p>

                                    <div className='pt-[15px]'>
                                        <Box
                                            sx={{
                                                ...statusStyles[selectedTransaction.status],
                                                width: '116px',
                                                padding: '10px',
                                                borderRadius: '100px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                margin: '0 auto',
                                            }}
                                        >
                                            {selectedTransaction.status}
                                        </Box>
                                    </div>

                                    <div className='pt-[20px] space-y-[30px]'>
                                        <div className='flex items-center justify-between'>
                                            <h1 className='text-[#A3A2AB] text-[13px] leading-[19.5px] font-normal'>Subtotal</h1>

                                            <h1  className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>{selectedTransaction.amount}</h1>
                                        </div>

                                        <div className='flex items-center justify-between'>
                                            <h1 className='text-[#A3A2AB] text-[13px] leading-[19.5px] font-normal'>Discount</h1>

                                            <h1  className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>-₦10,000.00</h1>
                                        </div>

                                        <div className='flex items-center justify-between'>
                                            <h1 className='text-[#A3A2AB] text-[13px] leading-[19.5px] font-normal'>VAT</h1>

                                            <h1  className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>7.5%</h1>
                                        </div>

                                        <div className='flex items-center justify-between'>
                                            <h1 className='text-[#A3A2AB] text-[13px] leading-[19.5px] font-normal'>Total</h1>

                                            <h1  className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>₦ 490,000.00</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-[25px]'>
                            <div className='bg-[#F1F1F1] min-h-[364px] max-w-[412px] p-[16px] rounded-[8px]'>
                                <div>
                                    <div>
                                        <h1 className='text-[#101828] text-[16.5px] leading-[19.8px] font-bold'>Transaction Details</h1>
                                        <div className='pt-[30px] space-y-[30px]'>
                                            <div className='flex items-center justify-between'>
                                                <h1 className='text-[#A3A2AB] text-[13px] leading-[19.5px] font-normal'>Recipient Bank</h1>
                                                <h1  className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>Access Bank</h1>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <h1 className='text-[#A3A2AB] text-[13px] leading-[19.5px] font-normal'>Recipient Name :</h1>
                                                <h1  className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>Dora Consulting Ltd.</h1>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <h1 className='text-[#A3A2AB] text-[13px] leading-[19.5px] font-normal'>Recipient Account Number :</h1>
                                                <h1  className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>0164440932</h1>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <h1 className='text-[#A3A2AB] text-[13px] leading-[19.5px] font-normal'>Transaction Type</h1>
                                                <h1  className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>Bank Transfer</h1>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <h1 className='text-[#A3A2AB] text-[13px] leading-[19.5px] font-normal'>Transaction ID</h1>
                                                <h1  className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>{selectedTransaction.id}</h1>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <h1 className='text-[#A3A2AB] text-[13px] leading-[19.5px] font-normal'>Transaction Date</h1>
                                                <h1  className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>Nov 15th, 2024</h1>
                                            </div>

                                            <div className='flex items-center justify-between'>
                                                <h1 className='text-[#A3A2AB] text-[13px] leading-[19.5px] font-normal'>Transaction Time</h1>
                                                <h1  className='text-[#101828] text-[13px] leading-[19.5px] font-normal'>07:50:32</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    )}

                </SheetContent>

            </Sheet>
                  
        </Box>
    </div>
  );
};

export default TransactionMonitoringTable;
