import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const role = useLocation().state?.role || "Guest";

  
  useEffect(() => {
    if (role === "Guest") {
      navigate("/home"); // ✅ Now it's legal
    }
  }, [navigate]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await fetch("http://localhost:8000/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, role }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Signup successful!");
        navigate("/");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during signup.");
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
          <h2 className="text-3xl font-bold font-quicksand-600">Welcome to Our Society</h2>
          <p className="text-gray-700 font-quicksand-600 font-semibold">Where Community Meets Comfort.</p>

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
            <span className="mx-2 text-gray-700 font-bold text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-6">
            <FloatingInput
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <FloatingPasswordInput
              label="Confirm Password"
              value={confirmPassword}
              show={showConfirm}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onToggle={() => setShowConfirm((v) => !v)}
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Create Your Account
            </button>
          </form>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/" className="underline font-medium text-black">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:block w-1/2 relative">
        <video
          src="/assets/video/nuke.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-end p-8">
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

// Floating label input
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

// Floating label password with eye toggle
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
