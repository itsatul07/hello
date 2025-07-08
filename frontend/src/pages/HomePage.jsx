import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from "../Components/Carousel";

const FeatureCard = ({ to, imgSrc, title, description }) => (
  <Link
    to={to}
    className="flex flex-col items-center p-6 rounded-lg shadow-md bg-[var(--bg-color)] text-[var(--text-color)] hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-4/5 md:w-full"
  >
    <div className="w-full h-48  rounded-lg overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="text-center mt-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  </Link>
);

export default function HomePage() {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setContentVisible(true), 100);
  }, []);

  return (
    <>
      <Carousel />
      <div
        id="homepage-content"
        className={`p-6 transition-opacity duration-700 ${
          contentVisible ? "opacity-100" : "opacity-0"
        } bg-[var(--bg-color)] text-[var(--accent-color)]`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-8">
          <FeatureCard
            to="/events"
            imgSrc="https://images.pexels.com/photos/8819459/pexels-photo-8819459.jpeg"
            title="🎉 Events & Festivals"
            description="Check out upcoming and past events in our society."
          />
          <FeatureCard
            to="/shops"
            imgSrc="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg"
            title="🛍️ Shops & Services"
            description="See which shops are open today."
          />

          <FeatureCard
            to="/rent-flats"
            imgSrc="https://images.pexels.com/photos/6238614/pexels-photo-6238614.jpeg"
            title="🏠 Rent Flats"
            description="Find available apartments for rent."
          />

          <FeatureCard
            to="/buy-and-sell"
            imgSrc="https://images.pexels.com/photos/6613915/pexels-photo-6613915.jpeg"
            title="📌 Buy And Sell Items"
            description="Buy and Sell anything you want."
          />

          <FeatureCard
            to="/lost-and-found"
            imgSrc="https://dxan6czxprkid.cloudfront.net/images/_1200x630_crop_center-center_82_none/broadway-lostandfound.jpg?mtime=1653420756"
            title="🔍 Lost And Found"
            description="Find your lost items here."
          />
          <FeatureCard
            to="/volunteer"
            imgSrc="https://images.pexels.com/photos/6646778/pexels-photo-6646778.jpeg"
            title="🤝 Volunteer With Us"
            description="Join our community efforts and make a difference."
          />
        </div>
      </div>
    </>
  );
}
