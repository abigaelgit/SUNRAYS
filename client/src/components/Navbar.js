import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col fixed top-0 left-0 right-0 border-b border-gray-300">
        <div>
          <p className="flex h-8 items-center justify-center bg-green-400 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over Ksh 10,000.00
          </p>
        </div>
        <div className="flex flex-row justify-between items-center bg-white px-4 py-3 sm:px-6 lg:px-8">
          <div className="w-1/4 flex flex-row items-center justify-start">
            <div className="ml-4 flex lg:ml-0">
              <Link to="/">
                <h1
                  className=" cursor-pointer text-green-500 dark:text-white  font-bold text-xl"
                  aria-label="MATT."
                >
                  Sunrays Solar Ltd.{" "}
                </h1>
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex flex-row items-center justify-center gap-3">
            <Link to="/marketplace">
              <p className=" cursor-pointer hover:text-green-600 dark:text-white  ">
                marketplace{" "}
              </p>
            </Link>
            <Link to="/about">
              <p className=" cursor-pointer hover:text-green-600 dark:text-white  ">
                About{" "}
              </p>
            </Link>
            <Link to="/blog">
              <p className=" cursor-pointer hover:text-green-600 dark:text-white  ">
                Blog{" "}
              </p>
            </Link>
            <Link to="/support">
              <p className=" cursor-pointer hover:text-green-600 dark:text-white  ">
                Support{" "}
              </p>
            </Link>
          </div>
          <div className="w-1/4 flex flex-row items-center justify-end gap-4">
            <input className="bg-gray-200   py-1 px-4" placeholder="Search " />

            <Link to="/cart">
              <BsCart4
                size="25px"
                className=" cursor-pointer hover:text-green-600 dark:text-white  "
              />
            </Link>

            <Link to="/login">
              <p className=" cursor-pointer hover:text-green-600 dark:text-white  ">
                Login{" "}
              </p>
            </Link>
            <Link to="/register">
              <p className=" cursor-pointer hover:text-green-600 dark:text-white  ">
                Register{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
