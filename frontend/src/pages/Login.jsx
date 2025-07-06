import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") navigate("/");
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials:"include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(data.user));
        alert("Login successful!");
        navigate("/profile");
      } else {
        alert(data.message || "Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("An error occurred during login.");
    }
  };

  const handleGoogleSignup = () => {
    alert("Google sign-in is not yet integrated.");
    // Later: integrate Google OAuth via Firebase or react-oauth/google
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-gray-700">Login to continue your journey.</p>

          {/* Social Login Icons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => alert("Facebook login not yet integrated")}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <img
                src="../src/assets/fb.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
            </button>

            <button
              onClick={() => alert("Apple login not yet integrated")}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <img
                src="../src/assets/apple.svg"
                alt="Apple"
                className="w-5 h-5"
              />
            </button>

            <button
              onClick={handleGoogleSignup}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <img
                src="../src/assets/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
            </button>
          </div>

          <div className="flex items-center my-2">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-700 text-sm font-bold">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <FloatingInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FloatingPasswordInput
              label="Password"
              value={password}
              show={showPassword}
              onChange={(e) => setPassword(e.target.value)}
              onToggle={() => setShowPassword((v) => !v)}
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Login
            </button>
          </form>

          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signupAs" className="underline font-medium text-black">
                Sign Up
              </Link>
            </p>
          </div>
          {/* Continue as Guest Button */}
          <div className="mt-6">
            <button
              type="button"
              className="w-full bg-gray-300 text-black py-2 rounded-lg font-medium hover:bg-gray-400 transition"
              onClick={() => navigate("/home")}
            >
              Continue as Guest
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Video Visual */}
      <div className="hidden lg:block w-1/2 relative">
        <video
          src="/assets/video/nuke.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-8">
          <h2 className="text-4xl font-bold text-white leading-tight">
            Welcome to <span className="text-green-300">Green Valley</span>
          </h2>
          <p className="mt-2 text-white text-lg">
            Experience a peaceful community lifestyle...
          </p>
        </div>
      </div>
      
    </div>
  );
}

// Reusable Input Component
function FloatingInput({ label, type = "text", value, onChange }) {
  return (
    <div className="relative mt-6">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="peer w-full border-b-2 border-gray-300 bg-transparent placeholder-transparent focus:outline-none focus:border-black py-2"
        required
      />
      <label
        className="absolute left-0 -top-3.5 bg-white px-1 text-sm text-gray-500 transition-all
        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
        peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black"
      >
        {label}
      </label>
    </div>
  );
}

// Reusable Password Input with Toggle
function FloatingPasswordInput({ label, value, onChange, show, onToggle }) {
  return (
    <div className="relative mt-6">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="peer w-full border-b-2 border-gray-300 bg-transparent placeholder-transparent focus:outline-none focus:border-black py-2 pr-10"
        required
      />
      <label
        className="absolute left-0 -top-3.5 bg-white px-1 text-sm text-gray-500 transition-all
        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
        peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black"
      >
        {label}
      </label>
      <span
        onClick={onToggle}
        className="absolute right-2 top-2 cursor-pointer text-gray-600"
      >
        {show ? <EyeOff size={21} /> : <Eye size={21} />}
      </span>
    </div>
  );
}
