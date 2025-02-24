import React from 'react'
import { Button } from '@/components/ui/button'

const Cards = ({ Full_name, isPatient }) => {
    if(isPatient)
    {
        return (
            <div id='patients' className=' rounded-2xl h-20  w-[90%] flex items-center
                        justify-between bg-white hover:bg-amber-100 shadow-2xl'>
                <h1 className='ml-5'>{Full_name}</h1>
                <div className='mr-5'>
                    <Button className='bg-green-700 hover:bg-green-600'>View Patient</Button>
                </div>
            </div>
        )
    }
    else{
        return (
            <div id='patients' className=' rounded-2xl h-20  w-[90%] flex items-center
                        justify-between bg-white hover:bg-amber-100 shadow-2xl'>
                <h1 className='ml-5'>{Full_name}</h1>
                <div className='mr-5'>
                    <Button className='bg-green-700 hover:bg-green-600'>Accept</Button>
                    <Button className='bg-red-700 hover:bg-red-600'>Reject</Button>
                </div>
            </div>
        )

    }
}

export default Cards