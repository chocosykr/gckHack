import React, { useState, useEffect } from 'react';

import { useUser } from '@clerk/clerk-react';
import axios from 'axios';


const Dashboard = () => {

    const { user, isLoaded, isSignedIn } = useUser();
    const [symptoms, setsymptoms] = useState("");
    const [duration, setduration] = useState("");
    const [message, setMessage] = useState("");
    const [photo, setPhoto] = useState("");
    const [filestring, setfilestring] = useState("");
    

   
    
    useEffect(() => {
        if (isLoaded && isSignedIn) {

          saveDetailsToDatabase(user.emailAddresses[0]?.emailAddress);
        }
      }, [isLoaded, isSignedIn, user]);
    
      const handleSymptomchange = (event) => {
        setsymptoms(event.target.value);
      };
      const handleDurationchange = (event) => {
        setduration(event.target.value);
      };

      const handlePhotochange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPhoto(reader.result);
          };
          reader.readAsDataURL(file);
         setfilestring(reader.readAsDataURL(file));
          
        }
      };
      
      const saveDetailsToDatabase = async () => {
        if (isLoaded && isSignedIn && user) {
          // Check if email exists and send description to the API
          if (user.emailAddresses[0].emailAddress) {
            try {
              const response = await axios.post('http://localhost:5000/add-user', {
                email: user.emailAddresses[0].emailAddress,
                symptoms: symptoms,
                duration: duration,
                filepath: filestring,
               
              
            
              });
              setMessage(response.data.message);
            } catch (error) {
              setMessage('');
            }
          }
        }
      };



  return (
    <>
        <div className = "flex items-center justify-center space-x-4 h-80 w-150 font-bold text-3xl" >
        Please Enter Your Details
    </div>
        <div className= "flex justify-center space-x-4 h-20 w-100 font-bold text-3xl">

            Symptoms:
           
            <input
            type="text"
            placeholder="Enter"
            value={symptoms}
            onChange = {handleSymptomchange}
            className="h-10 w-[200px] bg-gray-200 rounded"
          />
        </div>

        <div className= "flex justify-center space-x-4  font-bold text-3xl">

         
            Duration of Symptoms:
         
            <input
            type="text"
            placeholder="Enter the duration"
            value = {duration}
            onChange = {handleDurationchange}
            className="h-10 w-[300px] bg-gray-200 rounded"
          />
        </div>

        <div className= "flex justify-center space-x-4  font-bold text-3xl">

          
            Photo:
            <label htmlFor="profile-photo">
            <img
              src={photo ? photo : '/default-avatar.png'}
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover bg-gray-200"
            />
          </label>

          <input
            type="file"
            id="profile-photo"
            accept="image/*"
            onChange={handlePhotochange}
           
          />
        </div>

    <button onClick={saveDetailsToDatabase} className='hover:underline'>
       Submit
    </button>
    {message && <p className="text-green-600">{message}</p>} {/* Display success or error message */}
         

       
    </>
    
  )
}

export default Dashboard


