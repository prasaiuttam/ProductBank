import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"

 function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} ProductBank. All rights reserved.
        </p>

        {/* Center Links */}
        <div className="flex space-x-6 my-4 md:my-0">
          <a href="#" className="hover:text-white text-sm">Home</a>
          <a href="#" className="hover:text-white text-sm">About</a>
          <a href="#" className="hover:text-white text-sm">Contact</a>
          <a href="#" className="hover:text-white text-sm">Privacy</a>
        </div>

        {/* Right Socials */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white text-sm">Twitter</a>
          <a href="#" className="hover:text-white text-sm">GitHub</a>
          <a href="#" className="hover:text-white text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
