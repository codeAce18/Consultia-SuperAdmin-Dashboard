import React from 'react'
import JobsProjectTable from './Tables/JobsProjectTable';
import DashboardHeader from './DashboardHeader';



const ProjectManagementContent = () => {
  return (
    <div>
      <DashboardHeader 
        title="Projects" 
        mobileTitle="Projects"
      />


      <div className='pt-10'>
        <JobsProjectTable />
      </div>
    </div>
  )
}

export default ProjectManagementContent;