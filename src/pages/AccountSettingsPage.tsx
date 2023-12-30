// components/AccountSettingsPage.jsx
import React from 'react';
import UserProfileUpdate from '../components/UserProfileUpdate'; // Import UserProfileUpdate component
import PasswordChange from '../components/PasswordChange'; // Import PasswordChange component
import SubscriptionManagement from '../components/SubscriptionManagement'; // Import SubscriptionManagement component
import ThirdPartyAccountsLink from '../components/ThirdPartyAccountsLink'; // Import ThirdPartyAccountsLink component
import UsageStatisticsView from '../components/UsageStatisticsView'; // Import UsageStatisticsView component

const AccountSettingsPage = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
      {/* Render separate components for each account setting section */}
      <div className="mb-6">
        <UserProfileUpdate />
      </div>
      <div className="mb-6">
        <PasswordChange />
      </div>
      <div className="mb-6">
        <SubscriptionManagement />
      </div>
      <div className="mb-6">
        <ThirdPartyAccountsLink />
      </div>
      <div>
        <UsageStatisticsView />
      </div>
    </div>
  );
};

export default AccountSettingsPage;
