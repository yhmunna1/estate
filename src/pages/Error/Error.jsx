import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-600">
            404
          </h1>
          <p class="mb-4 text-lg  text-gray-700">
            Something's missing. Sorry, we can't find that page. You'll find
            lots to explore on the home page.{" "}
          </p>
          <Link
            to="/"
            className="text-2xl tracking-tight font-bold text-red-500 md:text-4xl"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
