// UserProfile.js
import React, { useState } from 'react';

const UserProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfilePicture(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-picture">
        {profilePicture ? (
          <img src={profilePicture} alt="Profile" />
        ) : (
          <div className="placeholder">Upload Profile Picture</div>
        )}
      </div>
      <input type="file" accept="image/*" onChange={handleProfilePictureUpload} />
    </div>
  );
};

export default UserProfile;