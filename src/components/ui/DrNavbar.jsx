// import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from '@/components/ui/button'

import { CircleUserRound  } from "lucide-react";


const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-900 via-indigo-900 to-indigo-700
     flex items-center justify-between h-15 shadow-2xl'>
      <h1 className='text-white flex items-center justify-between h-15 ml-4'>
        Tumcho Dothor
      </h1>
      <div className="bg-amber-50">
        {/* <UserButton showName={true} /> */}
      </div>
    </div>
  )
}

export default Navbar