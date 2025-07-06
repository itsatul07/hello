export default function AnnouncementsPage() {
    const announcements = [
      { title: "Community Clean-up Drive", date: "Feb 20, 2025", details: "Join us for a park cleaning event at 8 AM." },
      { title: "Donation for Old Age Home", date: "Ongoing", details: "We are collecting clothes and food items for the elderly." },
      { title: "Annual General Meeting", date: "March 10, 2025", details: "All members are requested to attend." },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">📢 Announcements</h1>
        <ul className="mt-4 space-y-4">
          {announcements.map((announcement, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-lg shadow">
              <h2 className="text-lg font-semibold">{announcement.title}</h2>
              <p className="text-gray-600">📅 {announcement.date}</p>
              <p>{announcement.details}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  