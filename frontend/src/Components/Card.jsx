import { Card, CardContent, CardHeader, CardTitle } from "./CardComponent";
import SellItemForm from "./Forms";
export const ShopCard = ({ name, status, timing, imgSrc }) => {
  return (
    <Card className="shadow-lg rounded-xl hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
          <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <CardTitle className="text-lg">{name}</CardTitle>
        <p className={`text-sm font-semibold ${status === "Open" ? "text-green-600" : "text-red-600"}`}>
          Status: {status}
        </p>
        <p className="text-gray-600">Timings: {timing}</p>
      </CardContent>
    </Card>
  );
};



export const FlatCard = ({ type, rent, contact, imgSrc }) => {
  return (
    <Card className="shadow-lg rounded-xl hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
          <img src={imgSrc} alt={type} className="w-full h-full object-cover" />
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <CardTitle className="text-lg">{type}</CardTitle>
        <p className="text-gray-600">Rent: {rent}</p>
        <p className="text-gray-700 font-medium">Contact: {contact}</p>
      </CardContent>
    </Card>
  );
};



export const ProductCard = ({ name, price, seller, contact, imgSrc }) => {
  return (
    <Card className="shadow-lg rounded-xl hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
          <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <CardTitle className="text-lg">{name}</CardTitle>
        <p className="text-gray-600 font-medium">{price}</p>
        <p className="text-gray-700">👤 {seller}</p>
        <p className="text-gray-600">📞 {contact}</p>
        <button
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => alert(`Contact ${seller} at ${contact}`)}
        >
          Contact Seller
        </button>
      </CardContent>
    </Card>
  );
};



export const LostItemCard = ({ item, found, contact, imgSrc }) => {
  return (
    <Card className="shadow-lg rounded-xl hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
          <img src={imgSrc} alt={item} className="w-full h-full object-cover" />
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <CardTitle className="text-lg">{item}</CardTitle>
        <p className={`text-sm font-semibold ${found === "Yes" ? "text-green-600" : "text-red-600"}`}>
          Status: {found === "Yes" ? "Found" : "Lost"}
        </p>
        <p className="text-gray-600">Contact: {contact}</p>
      </CardContent>
    </Card>
  );
};

export const EventCard = ({ name, date, location, img }) => {
  return (
    <Card className="shadow-lg rounded-xl hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <p className="text-sm text-gray-700">Date: {date}</p>
        <p className="text-sm text-gray-700">Location: {location}</p>
      </CardContent>
    </Card>
  );
};

export const VolunteerCard = ({ title, date, location, description ,img}) => {
  return (
    <Card className="shadow-md rounded-xl hover:shadow-lg transition duration-300">
      <CardHeader>
        <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl font-semibold text-indigo-700">{title}</CardTitle>
        <p className="text-sm text-gray-600 mb-1">📅 <span className="font-medium">{date}</span></p>
        <p className="text-sm text-gray-600 mb-3">📍 <span className="font-medium">{location}</span></p>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};



