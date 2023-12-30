import React from 'react';

interface AccountDetailsProps {
  subscriptionPlan: string;
  subscriptionStatus: string;
}

const AccountDetails: React.FC<AccountDetailsProps> = ({ subscriptionPlan, subscriptionStatus }) => {
  return (
    <div className="bd-gray-800 shadow-md p-4 rounded-md mt-4">
      <h2 className="text-xl font-semibold mb-2">Account Details</h2>
      <div>
        <p><strong>Subscription Plan:</strong> {subscriptionPlan}</p>
        <p><strong>Status:</strong> {subscriptionStatus}</p>
        {/* Add more account-related details if needed */}
      </div>
    </div>
  );
};

export default AccountDetails;
