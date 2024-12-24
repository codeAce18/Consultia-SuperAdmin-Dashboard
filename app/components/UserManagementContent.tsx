import React from 'react'
import UserManagementTable from './Tables/UserManagementTable';
import DashboardHeader from './DashboardHeader';





const UserManagementContent = () => {
  return (
    <div>
      {/* Dashboard Header for Usermanagement*/}
      <DashboardHeader 
        title="User Manage" 
        mobileTitle="Users"
      />



      <UserManagementTable />
    </div>
  )
}

export default UserManagementContent