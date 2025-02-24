import { Link } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-amber-600 flex allign justify-around h-10'>
        <h1 > 
            Title
        </h1>
        <a href="/ui/Login">login</a>
        <a href="gckHack/src/components/ui/modal.jsx">modal</a>
        <Link to ="gckHack/src/components/ui/Login.jsx" className='hover:underline' > <p>home</p> </Link>
        <Link to ="/ui/modal" className='hover:underline' > <li>jiwe</li> </Link> 
        <Link to ="/services&products" className='hover:underline' > <span>Services & Products</span> </Link>
        <Link to ="/help" className='hover:underline' > Help </Link>

    </div>
  )
}

export default Navbar