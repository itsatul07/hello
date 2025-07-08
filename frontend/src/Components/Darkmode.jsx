// Theme.jsx
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md hover:scale-110 transition"
      >
        {darkMode ? (
          <Sun size={24} className="text-yellow-400" />
        ) : (
          <Moon size={24} className="text-gray-100" />
        )}
      </button>
    </div>
  );
}
