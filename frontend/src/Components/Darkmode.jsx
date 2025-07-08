import { useEffect, useState } from "react";

export default function Theme(darkMode) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);    localStorage.setItem("theme", theme);
  }, [theme]);
console.log("Theme:", theme);
  return (
    <div className="min-h-screen">
       <div className="fixed bottom-6 left-6 z-50">

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md hover:scale-110 transition"
        >
          {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-100" />}
        </button>
    </div>
</div>
  );
}
