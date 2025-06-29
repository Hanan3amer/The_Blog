"use client";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";

export default function Darkmode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem("mode") === "dark";
    setIsDark(mode);
    document.documentElement.classList.toggle("dark", mode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("mode", !isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", !isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 m-1 rounded-full border bg-gray-100 border-amber-300 dark:border-purple-300 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
    >
      {isDark ? (
        <IoMoonOutline className="text-purple-400 cursor-pointer" />
      ) : (
        <FiSun className="text-amber-400 cursor-pointer" />
      )}
    </button>
  );
}
