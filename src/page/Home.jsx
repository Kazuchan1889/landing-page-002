import React from "react";
import { Button } from "@mui/material";
import { FaRocket } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl text-center bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
          <FaRocket className="text-blue-500 mr-2" /> Welcome to Our Landing Page
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Discover the best services and products with us. Join our community today!
        </p>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
