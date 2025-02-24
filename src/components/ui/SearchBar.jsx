import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <>
    <div className='flex p-4 bg-amber-50 align-middle justify-center' >
        <input className='h-9 w-2xl rounded-2xl bg-amber-200' type="text" />
        <button ><Search className='size-9 fill-amber-400 stroke-amber-400'/></button>
    </div>

    <div className='flex h-9 w-screen justify-center bg-amber-100'>
        <p>TEXT</p>
    </div>


    <div className="bg-amber-500 h-0.5"></div>


    <div>
        
    </div>
    </>
  )
}

export default SearchBar