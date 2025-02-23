import { SignInButton, SignedIn, SignedOut, UserButton, useAuth } from '@clerk/react-router';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


export default function App() {
  const navigate = useNavigate(); // Initialize navigate function
  const { isSignedIn } = useAuth(); // Get the authentication state

  useEffect(() => {
    // Redirect to Dashboard when signed in
    if (isSignedIn) {
      navigate('/Dashboard');
    }
  }, [isSignedIn, navigate]); // Run effect when isSignedIn changes

  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        {/* User is signed in, handled by useEffect */}
      </SignedIn>
    </header>
  );
}