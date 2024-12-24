import { useState } from 'react';

import SettingsAuthenticationSection from './SettingsAuthenticationSection';
import SettingsAlertSection from './SettingsAlertSection';
import SettingsManageRolesSection from './SettingsManageRolesSection';
import DashboardHeader from './DashboardHeader';






const SettingsContent = () => {

    const [activeTab, setActiveTab] = useState('authentication');

    const renderContent = () => {
        switch (activeTab) {
        case 'authentication':
            return <SettingsAuthenticationSection />;
        case 'alerts':
            return <SettingsAlertSection />;
        case 'roles':
            return <SettingsManageRolesSection />;
        default:
          return <SettingsAuthenticationSection />;
        }
    };

    return (
        <div>
           <DashboardHeader 
                title="Settings" 
                mobileTitle="Settings"
            />


            <div className="pt-10">
                <div className="flex  items-center justify-between">
                    <div className="flex flex-wrap  items-start lg:items-center space-x-6 lg:space-x-10">
                        <button
                            onClick={() => setActiveTab('authentication')}
                            className={`pb-2 ${
                            activeTab === 'authentication'
                                ? 'border-b-[#5B52B6] border-b-[4px] font-medium'
                                : 'text-gray-600'
                            }`}
                        >
                            Authentication
                        </button>

                        <button
                            onClick={() => setActiveTab('alerts')}
                            className={`pb-2 ${
                            activeTab === 'alerts'
                                ? 'border-b-[#5B52B6] border-b-[4px] font-medium'
                                : 'text-gray-600'
                            }`}
                        >
                            Alerts
                        </button>

                        <button
                            onClick={() => setActiveTab('roles')}
                            className={`pb-2 ${
                            activeTab === 'roles'
                                ? 'border-b-[#5B52B6] border-b-[4px] font-medium'
                                : 'text-gray-600'
                            }`}
                        >
                            Manage Roles
                        </button>
                    </div>
                </div>


                <div className="pt-16">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
} 


export default SettingsContent;