import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from './Profile';

const CardStack = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        // Replace with your API endpoint for fetching nearby profiles
        const response = await axios.get('http://localhost:5000/api/profiles');
        setProfiles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfiles();
  }, []);

  const handleSwipe = (direction, id) => {
    // Implement swipe logic and API calls for swipes
    console.log(`Swiped ${direction} on profile ${id}`);
  };

  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile._id}>
          <Profile user={profile} />
          <button onClick={() => handleSwipe('left', profile._id)}>Swipe Left</button>
          <button onClick={() => handleSwipe('right', profile._id)}>Swipe Right</button>
        </div>
      ))}
    </div>
  );
};

export default CardStack;
