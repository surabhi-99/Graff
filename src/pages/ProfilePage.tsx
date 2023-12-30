import React from "react";
import UserProfileDetails from "../components/UserProfileDetails";
import AccountDetails from "../components/AccountDetails";
import UsageMetrics from "../components/UsageMetrics";
import RecentActivityFeed from "../components/RecentActivityFeed";
import SavedGraphsList from "../components/SavedGraphsList";
import Buttons from '../components/Buttons';
import LinksToFavouritesAndCollections from "../components/LinksToFavouritesAndCollections";
import profilePhoto from '../img/profile2.jpg';

const savedGraphsData = [
  { id: 1, title: "Graph 1", dateCreated: "Dec 20, 2023" },
  { id: 2, title: "Graph 2", dateCreated: "Dec 22, 2023" },
  // Add more saved graph objects as needed
];

const ProfilePage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <UserProfileDetails
        name="John Doe"
        email="john@example.com"
        profilePhoto={profilePhoto}
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <AccountDetails
        subscriptionPlan="Premium Plan"
        subscriptionStatus="Active"
      />

      <UsageMetrics graphsCreated={25} graphsShared={10} papersCollected={15} />

      <RecentActivityFeed />

      <SavedGraphsList savedGraphs={savedGraphsData} />

      <Buttons />

      <LinksToFavouritesAndCollections />

    </div>
  );
};

export default ProfilePage;