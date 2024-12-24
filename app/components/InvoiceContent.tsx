import React from 'react'
import InvoiceTable from './Tables/InvoiceTable';
import DashboardHeader from './DashboardHeader';




const InvoiceContent = () => {
  return (
    <div>
      <DashboardHeader 
        title="Invoices" 
        mobileTitle="Invoices"
      />



      <div  className='pt-16'>
        <InvoiceTable />
      </div>
    </div>
  )
}

export default InvoiceContent