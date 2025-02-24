import Cards from '@/components/ui/cards'
import Navbar from '@/components/ui/DrNavbar'
import React from 'react'

const Dr_Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className='h-screen flex '>
                <div className="h-svh w-[60%] flex flex-col gap-3 items-center">
                    <h1 className='text-xl'>Patient requests</h1>
                    <Cards Full_name={"Sparsh Verenkar"}/>
                    <Cards Full_name={"Shivank Kun"}/>
                </div>
                <div className="h-svh w-[40%] bg-gray-500 flex flex-col gap-3 items-center">
                    <h1 className='text-xl text-white'>Patients</h1>
                    <Cards isPatient={true} Full_name={"Sparsh Verenkar"}/>
                    <Cards isPatient={true} Full_name={"Shivank Kun"}/>
                </div>
            </div>
        </>
    )
}

export default Dr_Dashboard