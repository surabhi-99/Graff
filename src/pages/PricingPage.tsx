import React, { useState } from 'react';

interface PlanDetails {
  price: string;
  graphs: string;
  queries: string;
  support?: string;
  customPDF?: string;
}

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<'Basic' | 'Pro' | 'Enterprise'>('Basic');

  const handlePlanSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPlan(event.target.value as 'Basic' | 'Pro' | 'Enterprise');
  };

  const planDetails = {
    Basic: {
      price: '$4/month/user',
      graphs: 'Up to 10',
      queries: 'Up to 500',
    },
    Pro: {
      price: '$8/month/user',
      graphs: 'Up to 50',
      queries: 'Up to 1000',
      support: 'Email + live chat',
    },
    Enterprise: {
      price: 'Contact for price',
      graphs: 'Unlimited',
      queries: 'Unlimited',
      support: '24/7 phone + email',
      customPDF: 'Ability to upload custom PDFs',
    },
  } as Record<'Basic' | 'Pro' | 'Enterprise', PlanDetails>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Choose a Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.keys(planDetails).map((plan) => (
          <div
            key={plan}
            className={`bg-gray-100 rounded-md p-6 ${
              selectedPlan === plan ? "border-2 border-blue-500" : ""
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">{plan} Plan</h2>
            <input
              type="radio"
              id={plan.toLowerCase()}
              name="plan"
              value={plan}
              checked={selectedPlan === plan}
              onChange={handlePlanSelection}
            />
            <label htmlFor={plan.toLowerCase()}>Select</label>
            <div className="mt-4">
              {/* Plan details */}
              <p>Price: {planDetails[plan].price}</p>
              <p>Graphs: {planDetails[plan].graphs}</p>
              <p>Queries: {planDetails[plan].queries}</p>
              {/* Additional plan details */}
              {plan === "Pro" && <p>Support: {planDetails[plan].support}</p>}
              {plan === "Enterprise" && (
                <>
                  <p>Support: {planDetails[plan].support}</p>
                  <p>{planDetails[plan].customPDF}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Display selected plan details */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Selected Plan Details</h2>
        <div className="bg-gray-100 rounded-md p-6">
          <h3 className="text-lg font-semibold mb-2">
            {selectedPlan} Plan Details
          </h3>
          <p>Price: {planDetails[selectedPlan].price}</p>
          <p>Graphs: {planDetails[selectedPlan].graphs}</p>
          <p>Queries: {planDetails[selectedPlan].queries}</p>
          {selectedPlan === "Pro" && (
            <p>Support: {planDetails[selectedPlan].support}</p>
          )}
          {selectedPlan === "Enterprise" && (
            <>
              <p>Support: {planDetails[selectedPlan].support}</p>
              <p>{planDetails[selectedPlan].customPDF}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
