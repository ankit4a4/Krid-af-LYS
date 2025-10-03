import React from 'react'
import AdminSidebar from '../components/AdminPanel/AdminSidebar'
import ChangeHeroImage from '../components/AdminPanel/ChangeHeroImage'
import PortfolioAdmin from '../components/AdminPanel/AddPortfolio'

const Admin = () => {
    return (
        <>
            <div className='flex  bg-[#ddcfca]'>
                <div className='w-[40%] h-full'>
                    <AdminSidebar />
                </div>

                <div className='w-[60%] h-full relative'>
                    <ChangeHeroImage />
                    {/* <PortfolioAdmin /> */}
                </div>
            </div>
        </>
    )
}

export default Admin
