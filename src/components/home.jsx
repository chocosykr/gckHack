import React from 'react'
import Navbar from './ui/navbar'
import SearchBar from './ui/SearchBar'
import doct from '/src/assets/doctor1.jpeg'
import chat from '/src/assets/doct2.avif'
import { Link } from 'react-router-dom'
// import chat from '/src/assets/chat1.jpeg'

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"



const Home = () => {
  return (
    <>
      <div className='bg-blue-600 flex justify-between items-center h-12 text-amber-50 p-7 font-bold text-lg'>
        {/* <img src={gckHackathon} alt="img not found" className='h-8 rounded-3xl' /> */}
        <h1 > 
            <p>Tumcho Dotor</p>
        </h1>
        <Link to ="/RoleSelectionPage"  > <p>Login</p> </Link>

        {/* <Link to="/RoleSelectionPage">
        <button className='bg-blue-600 p-2 rounded-3xl hover:bg-blue-900'>
          Login
        </button>
        </Link> */}
        </div>
      {/* <SearchBar/> */}



<div className='flex flex-col'>
      <div className='flex bg-blue-200 justify-between p-1' >
        <div className=' h-96 w-3xl flex flex-col justify-evenly m-1 bg-blue-400 p-5.5 rounded'>
          <div>
            <p className='text-white font-extrabold text-lg'>Bridge the gap between you and doctors.</p>
            {/* <p className='w-1/3 text-gray-950'>Patients from rural areas often suffer from lack of clinics and other medical facilities. Our mission is to bridge this gap by connecting the patient and doctors through our website.</p> */}
          </div>
          <div>
            <p className='text-white text-lg font-extrabold'>Personalise healthcare experience</p>
            {/* <p className='w-1/3 text-gray-950'>choose who their doctor is and switch if they feel the need to do so.</p> */}
          </div>
          <div>
            <p className='text-white text-lg font-extrabold'>Save medical bills</p>
            {/* <p className='w-1/3 text-gray-950'>Medical bills can amount to a huge sum due to frequent visits to hospitals, we aim to provide early diagnosis to save cost.</p> */}
          </div>
        </div>
        <div className='m-1'>
          {/* <h2>Image goes here</h2> */}
        <img src={doct} alt="img not found" className='h-96 w-3xl rounded' />

        </div>
      
      </div>

      <div className='flex bg-blue-200 justify-between p-1' >
      <div className='m-1'>
          {/* <h2>Image goes here</h2> */}
        <img src={chat} alt="img not found" className='h-96 w-2xs rounded' />

        </div>
        <div className=' h-96 w-6xl flex flex-col justify-evenly m-1 bg-amber-50 p-5.5 rounded'>
          <div>
            <p className='text-blue-400 font-extrabold text-lg'>Wide range of health professionals.</p>
            {/* <p className='w-1/3 text-gray-950'>Patients from rural areas often suffer from lack of clinics and other medical facilities. Our mission is to bridge this gap by connecting the patient and doctors through our website.</p> */}
          </div>
          <div>
            <p className='text-blue-400 text-lg font-extrabold'>Medical records maintained.</p>
            {/* <p className='w-1/3 text-gray-950'>choose who their doctor is and switch if they feel the need to do so.</p> */}
          </div>
          <div>
            <p className='text-blue-400 text-lg font-extrabold'>One-on-one conversations.</p>
            {/* <p className='w-1/3 text-gray-950'>Medical bills can amount to a huge sum due to frequent visits to hospitals, we aim to provide early diagnosis to save cost.</p> */}
          </div>
        </div>
     
      
      </div>

      <div className='bg-gray-900 grow w-full h-40 flex items-center justify-center'>
        <p className='text-amber-50'>@Team Egghead</p>
      </div>
      </div>







      {/* <div className='flex bg-b justify-evenly p-4 ' >
        <div className='m-2'>
          
        <img src={gckHackathon} alt="img not found" className='h-96 w-3xl rounded-2xl' />

        </div>
        <div className=' h-96 flex flex-col justify-evenly m-2 bg-blue-400 p-2.5 rounded-2xl'>
          <div>
            <p className='text-blue-800 font-extrabold text-lg'>Bridge the gap between you and doctors.</p>
          </div>
          <div>
            <p className='text-blue-800 text-lg font-extrabold'>Personalise healthcare experience</p>
          </div>
          <div>
            <p className='text-blue-800 text-lg font-extrabold'>Save medical bills</p>
          </div>
        </div>
      </div> */}

      {/* <Card
    // title="hi"
    // desc="eo"
    // cont="wehf"
    // footer="ojf"
    /> */}





    </>
  )
}

export default Home