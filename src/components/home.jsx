import React from 'react'
import Navbar from './ui/navbar'
import SearchBar from './ui/SearchBar'
import Card from './ui/card'


const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
    <SearchBar/>




    <div className='grid grid-cols-3 p-3' >

    <Card/>
    {/* <Card
    // title="hi"
    // desc="eo"
    // cont="wehf"
    // footer="ojf"
    /> */}

    </div>

    

    
    </>
  )
}

export default Home