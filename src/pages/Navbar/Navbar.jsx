import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-07.png";
import { FaCircleUser } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .than((result) => {
        console.log("Sign out Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const menus = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <details>
          <summary>PROPERTY</summary>
          <ul className="p-2 bg-red-600 w-40">
            <li>
              <Link to="/">FAMILY HOUSE</Link>
            </li>
            <li>
              <Link to="/">TOWNHOUSE</Link>
            </li>
            <li>
              <Link to="/">APARTMENTS</Link>
            </li>
            <li>
              <Link to="/">STUDENT HOUSE</Link>
            </li>
            <li>
              <Link to="/">RENTAL</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="/about">ABOUT US</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT</Link>
      </li>
    </>
  );
  return (
    <div className=" bg-red-600 z-10">
      <div className="navbar max-w-6xl mx-auto py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-red-600 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menus}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} className="w-16" alt="" />
          </Link>
        </div>
        <div className="navbar-center text-white  font-bold hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menus}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center space-x-4">
              <img
                src={user.photoURL || "default-profile.png"}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-white">{user.displayName}</span>
              <button
                onClick={handleSignOut}
                className="btn btn-ghost border-2 border-white text-white ms-2"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-ghost border-2 border-white text-white  ms-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
