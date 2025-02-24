import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'


const PatientVer = () => {
  return (
     <div className='h-screen bg-gray-700 backdrop-blur-md flex justify-center items-center'>
          <div className="bg-amber-50 h-5/12 w-2/12 rounded-2xl shadow-2xl flex flex-col justify-center items-center gap-3">
            <h1>Enter your details</h1>
            <input type="text" placeholder='age' className='bg-gray-300'/>
            <input type="text" placeholder='gender' className='bg-gray-300 '/>
            <Link to="/">
            <Button className="bg-green-500">Submit</Button>
            </Link>
          </div>
        </div>
  )
}

export default PatientVer