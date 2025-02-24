import { Link } from 'react-router-dom'
import React from 'react'
import { Avatar } from '@radix-ui/react-avatar'
import gckHackathon from '/src/assets/gckAvatar.jpeg'

const Navbar = () => {
  return (
    <>
    <div className='bg-amber-600 flex justify-between items-center h-12'>
        {/* <img src={gckHackathon} alt="img not found" className='h-8 rounded-3xl' /> */}
        <h1 > 
            <p>Tumcho Dotor Healthcare App</p>
        </h1>

        <button className='bg-blue-600 p-1.5 rounded-3xl'>
          Login
        </button>
        </div>
        {/* <div>
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
        </div> */}

     
    </>
  )
}

export default Navbar