import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Bio: {user.bio}</p>
      <div>
        {user.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
