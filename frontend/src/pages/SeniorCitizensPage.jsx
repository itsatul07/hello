export default function SeniorCitizensPage() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">👴 Senior Citizens' Care</h1>
        <p className="text-lg mt-2">We ensure the well-being of our elderly residents.</p>
  
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold">📅 Monthly Medical Check-up</h2>
            <p className="text-gray-600">Next Check-up: 10th March 2025</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold">💊 Free Medicines for Senior Citizens</h2>
            <p className="text-gray-600">Contact Society Office for Details</p>
          </div>
        </div>
      </div>
    );
  }
  