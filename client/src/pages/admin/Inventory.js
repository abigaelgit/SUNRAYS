import React from "react";

import { Link } from "react-router-dom";

import Leftbar from "../../components/Leftbar";

import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { useEffect } from "react";
import GoalForm from "../../components/GoalForm";
import GoalItem from "../../components/GoalItem";
import Spinner from "../../components/Spinner";

const Inventory = () => {


  



  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
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
                className="flex items-center font-bold text-2xl text-green-600 "
              >
                Sunray Solar ltd.
              </Link>
            </div>
            <div className="mt-8 text-center"></div>

            <Leftbar />
          </div>
        </aside>

        <div className=" ml-64 mb-6 lg:w-[75%]">
          <div className="sticky z-10 top-0 h-16 py-3  border-b bg-white shadow">
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

          <div className="flex flex-row ">
            <div className="flex flex-col lg:flex-row gap-5  w-full p-2">
              <div className=" w-1/4 bg-gradient-to-br from-green-500 to-green-900 py-8 flex items-center justify-center p-auto text-white ">
                67 Products in stock
              </div>

              <div className=" w-1/4 bg-gradient-to-br from-green-500 to-green-900 py-8 flex items-center justify-center p-auto text-white ">
                67 Products in stock
              </div>

              <div className=" w-1/4 bg-gradient-to-br from-green-500 to-green-900 py-8 flex items-center justify-center p-auto text-white ">
                67 Products in stock
              </div>

              <div className=" w-1/4 bg-gradient-to-br from-green-500 to-green-900 py-8 flex items-center justify-center p-auto text-white ">
                67 Products in stock
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full ">
            <div className="w-1/2">
              <form className="  p-4">
                <div className="flex flex-wrap -mx-3 mb-6 ">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Product Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Solar panel 1"
                    />
                    <p className="text-gray-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      stock
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="number"
                      placeholder="20"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Description of the product
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="text"
                      placeholder="A short description of the product"
                    />
                    <p className="text-gray-600 text-xs italic">
                      Make it as short and as crazy as you'd like
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-city"
                    >
                      Price
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="number"
                      placeholder="19900"
                    />
                  </div>


                  <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-city"
                    >
                      Image of the product
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="number"
                      placeholder="19900"
                    />
                  </div>

                </div>
              </form>
            </div>
            <div className="w-1/2 ">
              <div className="flex flex-col ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border text-center">
                        <thead className="border-b">
                          <tr className="bg-green-300 border-b">
                            <td
                              colSpan={2}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r"
                            >
                              Name Of The Product
                            </td>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Stock
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white-300 border-b">
                            <td
                              colSpan={2}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r"
                            >
                              Name Of The Product
                            </td>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Stock
                            </th>
                          </tr>
                          <tr className="bg-white-300 border-b">
                            <td
                              colSpan={2}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r"
                            >
                              Name Of The Product
                            </td>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Stock
                            </th>
                          </tr>
                          <tr className="bg-white-300 border-b">
                            <td
                              colSpan={2}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r"
                            >
                              Name Of The Product
                            </td>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Stock
                            </th>
                          </tr>
                          <tr className="bg-white-300 border-b">
                            <td
                              colSpan={2}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r"
                            >
                              Name Of The Product
                            </td>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Stock
                            </th>
                          </tr>
                          <tr className="bg-white-300 border-b">
                            <td
                              colSpan={2}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r"
                            >
                              Name Of The Product
                            </td>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Stock
                            </th>
                          </tr>
                          <tr className="bg-white-300 border-b">
                            <td
                              colSpan={2}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r"
                            >
                              Name Of The Product
                            </td>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Stock
                            </th>
                          </tr>
                          <tr className="bg-white-300 border-b">
                            <td
                              colSpan={2}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r"
                            >
                              Name Of The Product
                            </td>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Stock
                            </th>
                          </tr>
                          <tr className="bg-white-300 border-b">
                            <td
                              colSpan={2}
                              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r"
                            >
                              Name Of The Product
                            </td>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                            >
                              Stock
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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
