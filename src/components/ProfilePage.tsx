import React from 'react';
import UserProfileDetails from './UserProfileDetails';
import AccountDetails from './AccountDetails';
import UsageMetrics from './UsageMetrics';
import RecentActivityFeed from './RecentActivityFeed';
import SavedGraphsList from './SavedGraphsList';
import LinksToFavouritesAndCollections from './LinksToFavouritesAndCollections';

const ProfilePage = () => {
  return (
    <div>
      <UserProfileDetails />
      <AccountDetails />
      <UsageMetrics />
      <RecentActivityFeed />
      <SavedGraphsList />
      <LinksToFavouritesAndCollections />
    </div>
  );
};

export default ProfilePage;
