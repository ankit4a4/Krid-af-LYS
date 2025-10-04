import React from 'react'
import AdminSidebar from '../components/AdminPanel/AdminSidebar'
import ChangeHeroImage from '../components/AdminPanel/ChangeHeroImage'
import ProjectTable from '../components/AdminPanel/projectTable'

const Admin = () => {
    return (
        <>
            <div className='flex justify-start items-center  bg-[#ddcfca]'>
                <div className='w-[20%] h-full'>
                    <AdminSidebar />
                </div>
                <div className='w-[80%] h-full relative'>
                    {/* <ChangeHeroImage /> */}
                    <ProjectTable />
                </div>
            </div>
        </>
    )
}

export default Admin
