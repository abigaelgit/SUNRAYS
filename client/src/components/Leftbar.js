import React from "react";

import { NavLink, Link } from "react-router-dom";

import { FaMoneyBillWave } from "react-icons/fa";

import { MdInventory } from "react-icons/md";

import { MdOutlineMiscellaneousServices } from "react-icons/md";

import { TbReportAnalytics } from "react-icons/tb";

import { GrDeliver } from "react-icons/gr";

import { AiFillDashboard, AiOutlineFundProjectionScreen } from "react-icons/ai";

import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const activeClassName =
  "bg-green-100 dark:bg-orange-900 dark:text-gray-300 text-green-900 flex items-center pl-3 py-3 pr-4  rounded";

const Leftbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <div>


        
        <NavLink
         to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "text-black flex items-center pl-3 py-3 pr-4   rounded hover:bg-slate-200 hover:rounded "
          }
        >
          <AiFillDashboard className="mr-6" size="25px" />
          <span>Dashboard </span>
        </NavLink>


               
        <NavLink
          to="/inventory"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "text-black flex items-center pl-3 py-3 pr-4   rounded hover:bg-slate-200 hover:rounded "
          }
        >
          <MdInventory className="mr-6" size="25px" />
          <span>Inventory </span>
        </NavLink>

        <NavLink
          to="/delivery"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "text-black flex items-center pl-3 py-3 pr-4   rounded hover:bg-slate-200 hover:rounded "
          }
        >
          <GrDeliver className="mr-6" size="25px" />
          <span>Delivery </span>
        </NavLink>



        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "text-black flex items-center pl-3 py-3 pr-4   rounded hover:bg-slate-200 hover:rounded "
          }
        >
          <AiOutlineFundProjectionScreen className="mr-6" size="25px" />
          <span>Projects </span>
        </NavLink>

        <NavLink
          to="/finance"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "text-black flex items-center pl-3 py-3 pr-4   rounded hover:bg-slate-200 hover:rounded "
          }
        >
          <FaMoneyBillWave className="mr-6" size="25px" />
          <span>Finance </span>
        </NavLink>

       

        <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "text-black flex items-center pl-3 py-3 pr-4   rounded hover:bg-slate-200 hover:rounded "
          }
        >
          <MdOutlineMiscellaneousServices className="mr-6" size="25px" />
          <span>Services </span>
        </NavLink>

        <NavLink
          to="/report"
          className={({ isActive }) =>
            isActive
              ? activeClassName
              : "text-black flex items-center pl-3 py-3 pr-4   rounded hover:bg-slate-200 hover:rounded "
          }
        >
          <TbReportAnalytics className="mr-6" size="25px" />
          <span>Reports </span>
        </NavLink>
      </div>

      <div className="px-6 -mx-6 mt-16 pt-4 flex justify-between items-center border-t">
        <button
          onClick={onLogout}
          className="px-4 py-3 flex items-center space-x-4 rounded-md text-red-400 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="group-hover:text-red-500 ">Logout</span>
        </button>
      </div>
    </>
  );
};

export default Leftbar;
