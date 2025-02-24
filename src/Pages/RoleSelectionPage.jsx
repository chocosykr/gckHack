import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const RoleSelectionPage = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-blue-900'>
      <div className="flex  justify-center items-center flex-col gap-2 bg-amber-50 px-12 py-12 rounded-2xl shadow-2xl">
        <Link to="/PatientVer">
        <Button>Patient</Button>
        </Link>
        <Link to="/Dr_Verification">
        <Button>Doctor</Button>
        </Link>
      </div>
    </div>
  )
}

export default RoleSelectionPage