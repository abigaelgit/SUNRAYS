import React from "react";

import { Link } from "react-router-dom";

import Leftbar from "../components/Leftbar";

import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { useEffect } from 'react'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'

const Inventory = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals 
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }


  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }


  return (
    <div>
      <div>
        {/* component */}
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r   transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
          <div>
            <div className="-mx-6 px-6 py-4">
              <Link
                to="/"
                className="flex items-center font-bold text-2xl text-green-600   "
              >
                Sunray Solar ltd.
              </Link>
            </div>
            <div className="mt-8 text-center"></div>

            <Leftbar />
          </div>
          <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
            <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-red-400 group">
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
        </aside>

        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <div className="sticky z-10 top-0 h-16 py-3  border-b bg-white shadow-">
            <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <section className="heading">
                <h1>Welcome To Admin Dashboard {user && user.name}</h1>
               
              </section>
              <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div className="flex space-x-4">
                {/*/search bar */}
                <button
                  aria-label="search"
                  className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
                >
                  <svg
                    xmlns="http://ww50w3.org/2000/svg"
                    className="w-4 mx-auto fill-current text-gray-600"
                    viewBox="0 0 35.997 36.004"
                  >
                    <path
                      id="Icon_awesome-search"
                      data-name="search"
                      d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                    />
                  </svg>
                </button>
                <button
                  aria-label="chat"
                  className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 m-auto text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </button>
                <button
                  aria-label="notification"
                  className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 m-auto text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/*/SECOND SECTION */}

          <div className="flex flex-col space-y-4 2xl:container  m-2 ">
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="w-full  bg-gradient-to-br from-green-300 to-green-800 py-8 items-center justify-center flex text-white rounded-xl">
                Inventory Module
              </div>
            </div>
          </div>

          {/*/THIRD SECTION */}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
