import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import ShopsPage from "./pages/ShopsPage";
import VolunteeringPage from "./pages/VolunteeringPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import RentFlatsPage from "./pages/RentFlatsPage";
import EmergencyPage from "./pages/EmergencyPage";
import LostAndFoundPage from "./pages/LostAndFoundPage";
import BuyAndSellPage from "./pages/BuyAndSellPage";
import SeniorCitizensPage from "./pages/SeniorCitizensPage";
import SellItemPage from "./pages/SellitemPage";
import Contact from "./pages/Contacts";
import SignupAs from "./pages/SignUpAs";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

// Components
import FetchCookie from "./pages/fetchCookie";
import Profile from "./pages/Profile";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import EmergencyButton from "./Components/EmergencyButton";
import ThemeToggle from "./Components/Darkmode";

function AppContent() {
  const location = useLocation();

  // Paths where Navbar should be hidden
  const hideNavOn = ["/", "/signupas", "/signup"];
  const showNavbar = !hideNavOn.includes(location.pathname);
  const showFooter = !hideNavOn.includes(location.pathname);
  const showEmergencyButton = !hideNavOn.includes(location.pathname);
  return (
    <>
      {/* Conditionally show navbar */}
      {showNavbar && <Navbar />}
      {<ThemeToggle/>}

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Routes>
          {/* Auth-related Routes */}
          <Route path='/fetchCookie' element={<FetchCookie/>} />
          <Route path="/" element={<Login />} />
          <Route path="/signupas" element={<SignupAs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />

          {/* Other App Routes */}
          <Route path="/events" element={<EventsPage />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/volunteer" element={<VolunteeringPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/rent-flats" element={<RentFlatsPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/lost-and-found" element={<LostAndFoundPage />} />
          <Route path="/buy-and-sell" element={<BuyAndSellPage />} />
          <Route path="/senior-citizens" element={<SeniorCitizensPage />} />
          <Route path="/sell-item" element={<SellItemPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Floating Emergency Button and Footer */}
      {showEmergencyButton && <EmergencyButton />}
      {showFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
