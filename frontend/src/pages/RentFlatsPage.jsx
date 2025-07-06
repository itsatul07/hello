import { FlatCard } from "../Components/Card";

export default function RentFlatsPage() {
    const flats = [
      { type: "2BHK", rent: "₹15,000/month", contact: "Mr. Sharma - 9876543210" },
      { type: "3BHK", rent: "₹20,000/month", contact: "Mrs. Verma - 8765432109" },
      { type: "1BHK", rent: "₹10,000/month", contact: "Ravi - 7654321098" },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">🏠 Available Flats for Rent</h1>
        <div className="mt-10 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flats.map((flat, index) => (
            <div key={index} className="p-4 rounded-lg ">
              <FlatCard type={flat.type} rent={flat.rent} contact={flat.contact} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  