export default function EventCard({ event }) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <img src={`/assets/${event.img}`} alt={event.name} className="w-full h-40 object-cover rounded-lg" />
        <h2 className="text-xl font-semibold mt-2">{event.name}</h2>
        <p className="text-gray-600">📅 {event.date}</p>
        <p className="text-gray-700">📍 {event.location}</p>
      </div>
    );
  }
  
