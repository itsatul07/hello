import { EventCard } from "../Components/Card";
export default function EventsPage() {
    const events = [
      { name: "Diwali Celebration", date: "Nov 1, 2025", location: "Clubhouse", img: "diwali.jpg" },
      { name: "Ganesh Chaturthi", date: "Sept 15, 2025", location: "Temple Area", img: "ganesh.jpg" },
      { name: "Christmas Eve", date: "Dec 24, 2025", location: "Park", img: "christmas.jpg" },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">🎉 Society Events & Festivals</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {events.map((event, index) => (
            <EventCard  name ={event.name} date={event.date} location ={event.location} img = {event.img} />
          ))}
        </div>
      </div>
    );
  }
  