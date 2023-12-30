// pages/CreateNewGraphPage.tsx
import React from 'react';
import GraphForm from '../components/GraphForm';
import PapersUploadSection from '../components/PapersUploadSection';
import GraphSettings from '../components/GraphSettings';
import GraphPreview from '../components/GraphPreview';

const CreateNewGraphPage = () => {
  return (
    <div>
      <GraphForm />
      <PapersUploadSection />
      <GraphSettings />
      <GraphPreview />
    </div>
  );
};

export default CreateNewGraphPage;
