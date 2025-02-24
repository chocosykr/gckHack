import { Link } from 'react-router-dom'
import React from 'react'
import { Avatar } from '@radix-ui/react-avatar'
import gckHackathon from '/src/assets/gckAvatar.jpeg'

const Navbar = () => {
  return (
    <>
    <div className='bg-amber-600 flex allign justify-around items-center h-12'>
        <img src={gckHackathon} alt="img not found" className='h-8 rounded-3xl' />
        <h1 > 
            Title
        </h1>
        <div>
        <Link to ="/ui/Login.jsx"  > <p>Login</p> </Link>
        </div>
        <div>
        <Link to ="/modal" className='hover:underline' >jiwe </Link> 
        </div>
        <div className='flex align-middle'>
        <Link to ="/services&products" className='hover:underline' > Services & Products</Link>
        </div>
        <div>
        <Link to ="/help" className='hover:underline' > Help </Link>
        </div>
    </div>

     
    </>
  )
}

export default Navbar