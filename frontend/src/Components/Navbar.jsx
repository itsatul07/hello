import { useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current page is the home page
  const isHomePage = location.pathname === "/home";
  const handleLogout = async ()=>{
    try {
      const res = await fetch('http://localhost:8000/api/user/logout',{
        method:"POST",
        credentials:"include",
      });
      console.log(res.json());
      if(res.ok){
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");

        alert("Logout Successfully");
        navigate('/');
      }
      else {
        alert("User Not Logged In");
      }
      
    } catch (error) {
      console.log("Logout Error:",error);
      alert("Logout error");
    }
  }

  return (
    <div className="w-full">
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full  z-50 p-6 ${
          isHomePage
            ? "bg-olive text-[var(--accent-color)]"
            : "bg-sage text-olive"
        }`}
      >
        
        <div className="max-w-full mx-auto flex gap-0  items-center">
        <button
            className="text-3xl focus:outline-none z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          <h1 className="text-3xl font-bold">
            🏡 Green Valley Society
          </h1>
        
        </div>
      </div>

      {/* ✅ Space Below Fixed Navbar to Prevent Overlapping */}
      <div className="pt-0"></div>

      {/* Sidebar Menu */}
      {menuOpen && (
        <>
          <div
            id="sidebarOverlay"
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg flex flex-col space-y-6 p-6 text-lg z-50">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <AiOutlineClose />
            </button>
            <Link
              to="/profile"
              className="hover:text-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </Link>
            <Link
              to="/home"
              className="hover:text-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/events"
              className="hover:text-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/shops"
              className="hover:text-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              Shops
            </Link>
            <Link
              to="/announcements"
              className="hover:text-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              Announcements
            </Link>
            <Link
              to="/rent-flats"
              className="hover:text-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              Rent Flats
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-500"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-left text-red-500 hover:text-red-700"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/")}
                className="text-left text-red-500 hover:text-red-700"
              >
                Log In
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
