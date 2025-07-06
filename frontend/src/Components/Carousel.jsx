import { useState, useEffect } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const images = [
  "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg",
  "https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg",
  "/Carousel/4-compressed.jpeg"
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Prevent spam clicks

  // Function to move to the next image
  const nextImage = () => {
    if (isButtonDisabled) return; // Ignore clicks if disabled
    setTransitionEnabled(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    handleUserInteraction();
  };

  // Function to move to the previous image
  const prevImage = () => {
    if (isButtonDisabled) return; // Ignore clicks if disabled
    setTransitionEnabled(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    handleUserInteraction();
  };

  // Prevent multiple clicks by disabling the button temporarily
  const handleUserInteraction = () => {
    setIsButtonDisabled(true);
    setAutoPlay(false); // Pause auto-play when user interacts

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000); // Re-enable button after 1 sec

    setTimeout(() => {
      setAutoPlay(true); // Resume auto-play after 5 sec of inactivity
    }, 5000);
  };

  // Auto-play logic
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden mt-20 mb-0">
      {/* Image Slider with Smooth Transitions */}
      <div
        className={`flex transition-transform duration-1000 ease-in-out ${transitionEnabled ? "" : "duration-0"}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[600px] object-cover flex-shrink-0 transition-opacity duration-1000"
            loading="lazy"
          />
        ))}
      </div>

      {/* Navigation Buttons with Delay */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-40 disabled:opacity-50"
        onClick={prevImage}
        disabled={isButtonDisabled} // Prevents rapid clicks
      >
        <MdNavigateBefore size={30} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-40 disabled:opacity-50"
        onClick={nextImage}
        disabled={isButtonDisabled} // Prevents rapid clicks
      >
        <MdNavigateNext size={30} />
      </button>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Green Valley Society
        </h1>
      </div>
    </div>
  );
}
