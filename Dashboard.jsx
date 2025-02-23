import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';

export default function Dashboard() {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [buttons, setButtons] = useState([]);
  const [Description, setDescription] = useState(""); // State for description
  const { user, isLoaded, isSignedIn } = useUser();
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState(""); // State for messages

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      setUserData(user);
      fetchUserDescription(user.emailAddresses[0]?.emailAddress);
    }
  }, [isLoaded, isSignedIn, user]);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle description input change
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddButtonClick = () => {
    setButtons([...buttons, `Button ${buttons.length + 1}`]);
  };

  const phoneNumber = userData?.phoneNumbers?.[0]?.phoneNumber || 'Phone number not provided';

  const saveDescriptionToDatabase = async () => {
    if (isLoaded && isSignedIn && user) {
      // Check if email exists and send description to the API
      if (user.emailAddresses[0].emailAddress) {
        try {
          const response = await axios.post('http://localhost:5000/add-user', {
            email: user.emailAddresses[0].emailAddress,
            description: Description,
          });
          setMessage(response.data.message);
        } catch (error) {
          setMessage('Error saving description');
        }
      }
    }
  };

  const fetchUserDescription = async (email) => {
    if (email) {
      try {
        const response = await axios.get(`http://localhost:5000/get-user/${email}`);
        if (response.data && response.data.description) {
          setDescription(response.data.description);
        }
      } catch (error) {
        console.error('Error fetching user description:', error);
        setMessage('Error fetching description'); // Improved error message
      }
    }
  };


  return (
    <div className="flex items-center space-x-4">
      <Card className="w-full h-[250px] flex items-center p-6 bg-green-500 rounded-lg shadow-md">
        <div className="relative">
          <label htmlFor="profile-photo">
            <img
              src={profilePhoto ? profilePhoto : '/default-avatar.png'}
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover bg-gray-200"
            />
          </label>

          <input
            type="file"
            id="profile-photo"
            accept="image/*"
            onChange={handlePhotoChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        <div className="flex flex-col ml-4 space-y-2">
          <input
            type="text"
            placeholder={userData?.username || 'Username not available'}
            className="h-10 w-[200px] bg-gray-200 rounded"
          />
          <input
            type="text"
            placeholder={userData?.emailAddresses[0]?.emailAddress || 'Email not available'}
            className="h-10 w-[200px] bg-gray-200 rounded"
          />
          <input
            type="text"
            placeholder={phoneNumber}
            className="h-10 w-[200px] bg-gray-200 rounded"
          />
        </div>

        <Tabs defaultValue="account" className="w-[400px] absolute top-20 left-110">
          <TabsList>
            <TabsTrigger value="account">Description</TabsTrigger>
            <TabsTrigger value="password">Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Textarea
              value={Description}
              onChange={handleDescriptionChange}
              placeholder="Enter your description here"
              className="w-full h-20"
              
            
            />
            <button onClick={saveDescriptionToDatabase} className="mt-2 p-2 bg-blue-500 text-white rounded">
              Save Description
            </button>
            {message && <p className="text-green-600">{message}</p>} {/* Display success or error message */}
          </TabsContent>
          <TabsContent value="password">
            {/* Content for Achievements tab */}
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}