import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from '@clerk/clerk-react';

export default function Dashboard() {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [buttons, setButtons] = useState([]); // New state to manage buttons
  const { user, isLoaded, isSignedIn } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      setUserData(user);
    }
  }, [isLoaded, isSignedIn, user]);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result); // Set the uploaded image as the profile photo
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleAddButtonClick = () => {
    setButtons([...buttons, `Button ${buttons.length + 1}`]); // Add new button to state
  };

  // Accessing phone number (assuming it's stored in phoneNumbers array)
  const phoneNumber = userData?.phoneNumbers?.[0]?.phoneNumber || 'Phone number not provided';

  return (
    <div className="flex items-center space-x-4">
      <Card className="w-full h-[250px] flex items-center p-4, bg-green-500 p-6 rounded-lg shadow-md">
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
            placeholder={phoneNumber} // Display phone number
            className="h-10 w-[200px] bg-gray-200 rounded"
          />
        </div>

        <Tabs defaultValue="account" className="w-[400px] absolute top-80 left-110">
          <TabsList>
            <TabsTrigger value="account">Description</TabsTrigger>
            <TabsTrigger value="password">Achivements</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <input type="text" />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
