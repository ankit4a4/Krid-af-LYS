import React from 'react';
import { useLocation } from 'react-router-dom';

import AdminSidebar from '../components/AdminPanel/AdminSidebar';
import ChangeHeroImage from '../components/AdminPanel/ChangeHeroImage';
import ProjectTable from '../components/AdminPanel/projectTable';

const Admin = () => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  return (
    <div className='flex justify-start items-start bg-[#ddcfca] min-h-screen'>
      {/* ✅ Sidebar */}
      <div className='w-[20%] h-full'>
        <AdminSidebar />
      </div>

      {/* ✅ Main Content */}
      <div className='w-[80%] h-full relative p-4'>
        {currentPath === '/admin' && (
          <ChangeHeroImage />
        )}

        {currentPath === '/addportfolio' && (
          <ProjectTable />
        )}
      </div>
    </div>
  );
};

export default Admin;
