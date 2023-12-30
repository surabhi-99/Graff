import React from 'react';

interface UserProfileDetailsProps {
  name: string;
  email: string;
  profilePhoto: string;
  bio: string;
}

const UserProfileDetails: React.FC<UserProfileDetailsProps> = ({
  name,
  email,
  profilePhoto,
  bio,
}) => {
  return (
    <div className="bg-custom shadow-md p-4 rounded-md">
      <div className="flex items-center">
      <img src={profilePhoto} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-500">{email}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">Bio</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default UserProfileDetails;
