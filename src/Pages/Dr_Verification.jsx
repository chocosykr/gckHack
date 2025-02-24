import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const Dr_Verification = () => {
  return (
    <div className='h-screen bg-gray-700 backdrop-blur-md flex justify-center items-center'>
      <div className="bg-amber-50 h-5/12 w-2/12 rounded-2xl shadow-2xl flex flex-col justify-center items-center gap-3">
        <h1>Enter your details</h1>
        <input type="text" placeholder='name' className='bg-gray-300'/>
        <input type="text" placeholder='ID' className='bg-gray-300 '/>
        <Link to="/Dr_Dashboard">
        <Button className="bg-green-500">Submit</Button>
        </Link>
      </div>
    </div>
  )
}

export default Dr_Verification