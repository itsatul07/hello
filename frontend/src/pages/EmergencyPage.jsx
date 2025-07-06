export default function EmergencyPage() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">🚨 आपातकालीन सेवाएँ | Emergency Services</h1>
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold">🚑 एम्बुलेंस | Ambulance</h2>
            <p className="text-gray-600">Call: <strong>108</strong></p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold">🚔 पुलिस | Police</h2>
            <p className="text-gray-600">Call: <strong>100</strong></p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold">🔥 अग्निशमन विभाग | Fire Brigade</h2>
            <p className="text-gray-600">Call: <strong>101</strong></p>
          </div>
        </div>
      </div>
    );
  }
  