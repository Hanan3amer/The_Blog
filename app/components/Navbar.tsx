"use client";
import React, { useState } from "react";
import Link from "next/link";
import Darkmode from "./Darkmode";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="relative px-4 py-2 flex justify-between items-center bg-white dark:bg-[#0b0c14f6] shadow-sm">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-600 dark:text-white"
        >
          The Blog
        </Link>
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="flex items-center text-gray-600 dark:text-gray-100 p-1"
          >
            <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-2">
          <Darkmode />
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="navbar-menu fixed inset-0 z-50 bg-white dark:bg-gray-700 p-4">
          <div className="flex justify-between items-center mb-4">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-600 dark:text-white"
            >
              The Blog
            </Link>
            <button onClick={toggleMobileMenu} className="cursor-pointer">
              <svg
                className="h-6 w-6 text-gray-400 hover:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Darkmode />
        </div>
      )}
    </div>
  );
}
