import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import ProfilePage from "./pages/ProfilePage";
import CreateNewGraphPage from "./pages/CreateNewGraphPage";
import GraphDetailsPage from "./pages/GraphDetailsPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <div>
      <Header />
      <ProfilePage />
      <CreateNewGraphPage />
      <GraphDetailsPage />
      <AccountSettingsPage />
      <PricingPage />
    </div>
  );
}

export default App;
