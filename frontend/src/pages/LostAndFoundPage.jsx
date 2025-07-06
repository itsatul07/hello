import { useState } from "react";
import { LostItemCard } from "../Components/Card";
import { FoundForm } from "../Components/Forms";

export default function LostAndFoundPage() {
  const [showForm, setShowForm] = useState(false);

  const lostItems = [
    { item: "Gold Ring", found: "Yes", contact: "Rahul - 9876543210" },
    { item: "Blue Backpack", found: "No", contact: "Sneha - 8765432109" },
    { item: "Mobile Phone (Samsung)", found: "Yes", contact: "Amit - 7654321098" },
  ];

  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">🔍 Lost & Found</h1>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lostItems.map((item, index) => (
            <div key={index} className="p-4 rounded-lg">
              <LostItemCard item={item.item} found={item.found} contact={item.contact} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-6">
          <button
          onClick={() => setShowForm(!showForm)}
          className="mb-6 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-blue-700 transition-colors justify-center"
        >
          {showForm ? "Close" : "Report Found Item"}
        </button>
        </div> 
        

        {showForm && (
          <div className="mt-10">
            <FoundForm />
          </div>
        )}
      </div>
    </>
  );
}
