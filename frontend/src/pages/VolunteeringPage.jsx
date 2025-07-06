import { useState } from "react";
import { VolunteerCard } from "../Components/Card";
import { VolunteerForm } from "../Components/Forms"; // adjust the path as needed

export default function VolunteeringPage() {
  const [showForm,setShowForm] = useState(false);
  const opportunities = [
    { title: "Blood Donation Camp", date: "March 15, 2025", location: "Community Hall", description: "Donate blood and save lives. Free snacks provided!" },
    { title: "Tree Plantation Drive", date: "April 5, 2025", location: "Park Area", description: "Join hands to make our society greener!" },
    { title: "Teach Underprivileged Kids", date: "Every Saturday", location: "Society Clubhouse", description: "Volunteer to teach basic subjects to needy children." },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🤝 Volunteer Opportunities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {opportunities.map((opportunity, index) => (
          <VolunteerCard
            key={index}
            title={opportunity.title}
            date={opportunity.date}
            location={opportunity.location}
            description={opportunity.description}
          />
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          className="mb-6 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Volunteer Form" : "Become a Volunteer"}
        </button>
      </div>
      {showForm && <VolunteerForm />}

    </div>
  );
}
