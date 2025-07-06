export default function AnnouncementCard({ announcement }) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-lg font-semibold">{announcement.title}</h2>
        <p className="text-gray-600">📅 {announcement.date}</p>
        <p>{announcement.details}</p>
      </div>
    );
  }
  