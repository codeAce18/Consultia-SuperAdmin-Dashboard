import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import Image from "next/image";


import EyeIcon from "../../../public/assets/EyeIcon.svg"

import InvoiceLogo from "../../../public/assets/InvoiceLogo.svg"

// Define the types for the data
type Invoice = {
  id: string;
  subscriber: {
    name: string;
    location: string;
    image: string;
  };
  amount: string;
  date: string;
  time: string;
  status: "Paid" | "Pending" | "Failed";
};

const invoices: Invoice[] = [
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Paid",
  },
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Pending",
  },
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Failed",
  },
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Pending",
  },
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Failed",
  },
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Paid",
  },
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Paid",
  },
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Pending",
  },
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Failed",
  },
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Paid",
  },
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Pending",
  },
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Pending",
  },
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Failed",
  },
  {
    id: "#234567",
    subscriber: {
      name: "Dora Consulting",
      location: "Lagos, Nigeria",
      image: "/assets/Dora.svg",
    },
    amount: "₦114,000.00",
    date: "July 24, 2024",
    time: "10:00am",
    status: "Pending",
  },
];

const statusStyles: Record<string, { backgroundColor: string; color: string }> = {
  Paid: { backgroundColor: "#DFF6DD", color: "#27AE60" },
  Pending: { backgroundColor: "#FFECD3", color: "#F2994A" },
  Failed: { backgroundColor: "#FFD5D5", color: "#EB5757" },
};

const InvoiceTable: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"All" | "Paid" | "Pending" | "Failed">(
    "All"
  );

  const [detailedInvoice, setDetailedInvoice] = useState<Invoice | null>(null);

  const filteredInvoices =
    selectedTab === "All"
      ? invoices
      : invoices.filter((invoice) => invoice.status === selectedTab);

  return (
    <div>
         {detailedInvoice ? (
            <div className="max-w-[769px] w-full border-b-[#5B52B6] border-b-[15px] bg-white shadow-custom px-10 py-12 min-h-[1043px] mx-auto rounded-[8px]">
                <div className="flex items-start justify-between px-[10px] py-[12px] bg-[#F8F8FF]">

                    <div className="flex items-start">
                        <div>
                            <Image src={InvoiceLogo} alt="InvoiceLogo" />
                        </div>
                        
                        <div>
                            <h1 className="text-[#101828] text-[16px] leading-[24px] font-semibold">Consultia Technologies Ltd.</h1>

                            <p className="text-[#A3A2AB] text-[16px]  leading-[24px] font-normal max-w-[199px]">10, Olagimeji Street,  
                            Off Majekodunmi Street, Victoria Island, 
                            Lagos, Nigeria.</p>
                        </div>
                    </div>


                    <div>
                        <h1 className="text-[#101828] text-[39px] leading-[46.8px] font-bold">Invoice</h1>

                        <p className="text-[#101828] text-[16px] leading-[24px] font-medium text-right">{detailedInvoice.id}</p>

                        <div className="pt-[16px]">
                            <h1 className="text-[#83838A] text-[14px] leading-[21px] font-medium text-right">Balance Due</h1>
                            <h1  className="text-[#101828] text-[20px] leading-[30px] font-normal text-right">₦0.00</h1>
                        </div>
                    </div>
                </div>

                <div className="pt-20 flex items-start justify-between">
                    <div>
                        <h1 className="text-[#A9A9AE] text-[14px] leading-[21px] font-normal">Invoice To:</h1>

                        <div className="pt-[15px]">
                            <h1 className="text-[#101828] text-[16px] leading-[24px] font-normal">Dora Consulting Ltd.</h1>
                            <p className="text-[#A3A2AB] text-[16px] leading-[21px] font-normal">1a, Hughes Avenue, Yaba, Lagos, Nigeria.</p>
                            <p className="text-[#A3A2AB] text-[16px] leading-[21px] font-normal">Phone: +234 800 987 6543</p>
                        </div>
                    </div>


                    <div>
                        <div className="flex items-center justify-between">
                            <h1 className="text-[#41404B] text-[14px] leading-[21px] font-normal">Date Issued:</h1>

                            <h1 className="text-[#101828] text-[16px] leading-[24px] font-normal">July 24, 2024</h1>
                        </div>

                        <div className="flex items-center justify-between">
                            <h1 className="text-[#41404B] text-[14px] leading-[21px] font-normal">Terms</h1>

                            <h1 className="text-[#101828] text-[16px] leading-[24px] font-normal">Due on Receipt</h1>
                        </div>

                        <div className="flex items-center justify-between">
                            <h1 className="text-[#41404B] text-[14px] leading-[21px] font-normal">Due Date</h1>

                            <h1  className="text-[#101828] text-[16px] leading-[24px] font-normal">July 24, 2025</h1>
                        </div>

                        <div className="flex items-center justify-between">
                            <h1 className="text-[#41404B] text-[14px] leading-[21px] font-normal">User Email</h1>

                            <h1 className="text-[#101828] text-[16px] leading-[24px] font-normal  text-right ">doraconsulting@<br />dora.com</h1>
                        </div>
                    </div>
                </div>

                <div className="pt-10">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#A9A9AE] text-[14px] leading-[21px] font-normal">Item</h1>

                        <h1 className="text-[#A9A9AE] text-[14px] leading-[21px] font-normal">Description</h1>

                        <h1 className="text-[#A9A9AE] text-[14px] leading-[21px] font-normal">Quantity</h1>

                        <h1 className="text-[#A9A9AE] text-[14px] leading-[21px] font-normal">Unit Price</h1>

                        <h1 className="text-[#A9A9AE] text-[14px] leading-[21px] font-normal">Amount</h1>
                    </div>

                    <div className="pt-10 flex items-center justify-between border-b-[1px] border-b-[#F1F1F1] pb-10">
                        <h1 className="text-[#101828] text-[16px] leading-[24px] font-normal">Subscription</h1>

                        <h1 className="whitespace-nowrap text-[#101828] text-[16px] leading-[24px] font-normal">Professional Plan</h1>

                        <h1 className="text-[#101828] text-[16px] leading-[24px] font-normal">1</h1>

                        <h1 className="text-[#101828] text-[16px] leading-[24px] font-normal">₦114,000.00</h1>

                        <h1 className="text-[#101828] text-[16px] leading-[24px] font-normal">₦114,000.00</h1>
                    </div>
                </div>


                <div>
                    <div className="pt-10 flex items-center justify-between border-b-[1px] border-b-[#F1F1F1] pb-10">
                        <h1 className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">Subtotal</h1>
                        <h1 className="text-[#101828] text-[16px] leading-[24px] font-medium">₦114,000.00</h1>
                    </div>

                    <div className="pt-10 flex items-center justify-between border-b-[1px] border-b-[#F1F1F1] pb-10">
                        <h1 className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">Discount</h1>
                        <h1 className="text-[#101828] text-[16px] leading-[24px] font-medium">-₦10,000.00</h1>
                    </div>

                    <div className="pt-10 flex items-center justify-between border-b-[1px] border-b-[#F1F1F1] pb-10">
                        <h1 className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">VAT</h1>
                        <h1 className="text-[#101828] text-[16px] leading-[24px] font-medium">7.5%</h1>
                    </div>

                    <div className="pt-10 flex items-center justify-between border-b-[1px] border-b-[#F1F1F1] pb-10">
                        <h1 className="text-[#A9A9AE] text-[14px] leading-[21px] font-medium">Total</h1>
                        <h1 className="text-[#101828] text-[24px] leading-[36px] font-semibold">₦111,800.00</h1>
                    </div>
                </div>

                <div className="pt-[20px]">
                    <h1 className="text-[#83838A] text-[14px] leading-[21px] font-normal">Notes:</h1>

                    <p className="text-[#101828] text-[16px] leading-[24px] font-normal">This payment was charged from the credit card ending with 4778</p>
                </div>

                <div className="pt-10">
                    <h1 className="text-[#83838A] text-[14px] leading-[21px] font-normal">Terms & Condition</h1>

                    <p className="text-[#101828] text-[16px] leading-[24px] font-normal">This is a computer-generated invoice, no signature is required.</p>
                </div>
            </div>
             
        ) : (
        <>
      {/* Tabs */}
      <div className="flex flex-wrap gap-[20px] mb-[20px]">
        {["All", "Paid", "Pending", "Failed"].map((tab) => (
          <div
            key={tab}
            onClick={() => setSelectedTab(tab as "All" | "Paid" | "Pending" | "Failed")}
            style={{
              cursor: "pointer",
              fontWeight: selectedTab === tab ? "bold" : "normal",
              borderBottom: selectedTab === tab ? "2px solid #5B52B6" : "none",
              paddingBottom: "10px",
            }}
          >
            {tab} Invoices
          </div>
        ))}
      </div>

      {/* Table */}
      <TableContainer component={Paper} className="scrollbar-hide">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Invoice ID</TableCell>
              <TableCell>Subscribers</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInvoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Image
                      src={invoice.subscriber.image}
                      alt={invoice.subscriber.name}
                      width={40}
                      height={40}
                      style={{ borderRadius: "50%" }}
                    />
                    <div>
                      <div>{invoice.subscriber.name}</div>
                      <div style={{ fontSize: "12px", color: "#6B7280" }}>
                        {invoice.subscriber.location}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.time}</TableCell>
                <TableCell>
                  <span
                    style={{
                      padding: "5px 10px",
                      borderRadius: "5px",
                      ...statusStyles[invoice.status],
                    }}
                  >
                    {invoice.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Image 
                    src={EyeIcon} 
                    alt="View" 
                    width={24} 
                    height={24} 
                    style={{ cursor: "pointer" }}
                    onClick={() => setDetailedInvoice(invoice)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     
      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <span>Showing 1 to 20 of 200 entries</span>
        <div>
          <Button variant="outlined" size="small" style={{ marginRight: "10px" }}>
            Previous
          </Button>
          <Button variant="outlined" size="small">
            Next
          </Button>
        </div>
      </div>
      </>
        )}
    </div>
  );
};

export default InvoiceTable;
