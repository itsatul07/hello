export default function EmergencyButton() {
    const handleEmergency = () => {
      alert("🚨 Emergency Alert Sent to All Members!");
    };
  
    return (
      <button 
        className="fixed bottom-5 right-5 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition"
        onClick={handleEmergency}
      >
        🚨 Emergency
      </button>
    );
  }
  