import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4 text-center">
      <h1 className="text-7xl font-bold text-primary">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>
      <p className="text-base-content mt-2 max-w-md">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>

      <Link to="/" className="btn btn-primary mt-6">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
