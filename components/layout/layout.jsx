import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Router from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === "/") {
      Router.push("/avatar");
    }
  }, [Router]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileView, setProfileView] = useState(false);
  const [theme, setTheme] = useState(false);
  const [themeColor, setThemeColor] = useState("indigo-600");

  const getLocation = (currentLocation) => {
    return (currentLocation).trim() === (router.pathname).trim()
      ? "text-white hover:text-opacity-100 bg-" + themeColor
      : " hover:text-opacity-75 text-" + themeColor;
  };

  return (
    <div className="layout-wrapper">
      <div className="flex h-screen bg-gray-200">
        <div
          onClick={() => setSidebarOpen(false)}
          className={`${
            sidebarOpen ? "block" : "hidden"
          } fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden`}
        ></div>

        <div
          className={`${
            sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
          } fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-white overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}
        >
          <div className="flex items-center justify-center mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className={"h-6 w-6 stroke-current  text-" + themeColor}
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                ></path>
              </svg>
            </div>
            <span className="text-gray-900  text-2xl mx-2 font-semibold">
              NEO-KIT
            </span>
          </div>
          <nav className="mt-10 px-5 side-nav overflow-y-hidden hover:overflow-y-auto custom-scroll-bar pb-10 ">
            <Link href="/accordion">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/accordion"
                )} `}
              >
                <span className="mx-3">Accordion</span>
              </a>
            </Link>
            <Link href="/avatar">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/avatar"
                )} `}
              >
                <span className="mx-3">Avatar</span>
              </a>
            </Link>
            <Link href="/avatar-group">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/avatar-group"
                )} `}
              >
                <span className="mx-3">Avatar Group</span>
              </a>
            </Link>

            <Link href="/badge">
              <a
                href="/badge"
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/badge"
                )} `}
              >
                <span className="mx-3">Badge</span>
              </a>
            </Link>
            <Link href="/banner">
              <a
                href="/banner"
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50 hover:text-opacity-75  rounded ${getLocation(
                  "/banner"
                )} `}
              >
                <span className="mx-3">Banner</span>
              </a>
            </Link>

            <Link href="/breadcrumb">
              <a
                href="/breadcrumbs"
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/breadcrumb"
                )} `}
              >
                <span className="mx-3">Breadcrumbs</span>
              </a>
            </Link>

            <Link href="/button">
              <a
                href="/button"
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/button"
                )} `}
              >
                <span className="mx-3">Button</span>
              </a>
            </Link>

            <Link href="/cards">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/cards"
                )} `}
              >
                <span className="mx-3">Cards</span>
              </a>
            </Link>
            <Link href="/checkbox">
              <a
                href="/checkbox"
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/checkbox"
                )} `}
              >
                <span className="mx-3">Checkbox</span>
              </a>
            </Link>

            <Link href="/code">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/code"
                )} `}
              >
                <span className="mx-3">Code</span>
              </a>
            </Link>
            <Link href="/datetime-picker">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/datetime-picker"
                )} `}
              >
                <span className="mx-3">Date time picker</span>
              </a>
            </Link>
            <Link href="/dropdown ">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/dropdown  "
                )} `}
              >
                <span className="mx-3">Dropdown menu</span>
              </a>
            </Link>

            <Link href="/empty-state">
              <a
                href="/empty-state"
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/empty-state"
                )} `}
              >
                <span className="mx-3">Empty-state</span>
              </a>
            </Link>

            <Link href="/lozenge">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/lozenge"
                )} `}
              >
                <span className="mx-3"> Lozenge </span>
              </a>
            </Link>
            <Link href="/modal-dialog">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/modal-dialog"
                )} `}
              >
                <span className="mx-3">Modal dialog</span>
              </a>
            </Link>
            <Link href="/pagination">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/pagination"
                )} `}
              >
                <span className="mx-3">Pagination</span>
              </a>
            </Link>
            <Link href="/progress-bar">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/progress-bar"
                )} `}
              >
                <span className="mx-3">Progress bar</span>
              </a>
            </Link>
            <Link href="/progress-indicator">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/progress-indicator"
                )} `}
              >
                <span className="mx-3">Progress indicator</span>
              </a>
            </Link>
            <Link href="/range">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/range"
                )} `}
              >
                <span className="mx-3">Range</span>
              </a>
            </Link>
            <Link href="/radio">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/radio"
                )} `}
              >
                <span className="mx-3">Radio</span>
              </a>
            </Link>
            <Link href="/section-message">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/section-message"
                )} `}
              >
                <span className="mx-3">Section message</span>
              </a>
            </Link>
            <Link href="/select">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/select"
                )} `}
              >
                <span className="mx-3">Select</span>
              </a>
            </Link>
            <Link href="/spinner">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/spinner"
                )} `}
              >
                <span className="mx-3">Spinner</span>
              </a>
            </Link>
            <Link href="/tabs">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/tabs"
                )} `}
              >
                <span className="mx-3">Tabs</span>
              </a>
            </Link>
            <Link href="/tag">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/tag"
                )} `}
              >
                <span className="mx-3">Tag</span>
              </a>
            </Link>
            <Link href="/textarea">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/textarea"
                )} `}
              >
                <span className="mx-3">Text area</span>
              </a>
            </Link>
            <Link href="/textfield">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/textfield"
                )} `}
              >
                <span className="mx-3">Text field</span>
              </a>
            </Link>
            <Link href="/toggle">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/toggle"
                )} `}
              >
                <span className="mx-3">Toggle</span>
              </a>
            </Link>
            <Link href="/toast">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/toast"
                )} `}
              >
                <span className="mx-3">Toast</span>
              </a>
            </Link>
            <Link href="/tooltip">
              <a
                className={`flex items-center mt-4 py-2 px-6 focus:outline-none   bg-opacity-50  rounded ${getLocation(
                  "/tooltip"
                )} `}
              >
                <span className="mx-3">Tooltip</span>
              </a>
            </Link>
          </nav>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <header
            className={`flex justify-between items-center py-4 px-6 bg-white border-b-4  ${
              "border-" + themeColor
            }`}
          >
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className={
                  "text-gray-500 group focus:outline-none lg:hidden  p-2 flex  item-center justify-center rounded border border-gray-100 shadow hover:bg-" +
                  themeColor
                }
              >
                <svg
                  className={
                    "h-6 w-6 fill-current group-hover:text-white text-" +
                    themeColor
                  }
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>

              <div className="relative mx-4 lg:mx-0"></div>
            </div>

            <div className="flex items-center">
              <div className="relative">
                <button
                  onClick={() => {
                    setTheme(!theme);
                    setProfileView(false);
                  }}
                  className={
                    "flex mx-4  focus:outline-none cursor-pointer z-30 text-" +
                    themeColor
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z" />
                    <path
                      fill-opacity=".76"
                      d="M0 20h24v4H0z"
                      className={"fill-current text-" + themeColor}
                    />
                  </svg>
                </button>

                <div
                  onClick={() => setTheme(false)}
                  className={`${
                    theme ? "fixed" : "hidden"
                  } inset-0 h-full w-full z-10 `}
                ></div>

                <div
                  className={`${
                    theme ? "absolute" : "hidden"
                  } right-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden z-10 `}
                >
                  <ul>
                    <li
                      onClick={() => {
                        setThemeColor("purple-600");
                        setTheme(false);
                      }}
                      className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2 cursor-pointer"
                    >
                      <span className="w-5 h-5 rounded-full bg-purple-600 mr-2 border-2 border-white"></span>
                      Purple
                    </li>
                    <li
                      onClick={() => {
                        setThemeColor("green-600 ");
                        setTheme(false);
                      }}
                      className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2 cursor-pointer"
                    >
                      <span className="w-5 h-5 rounded-full  bg-green-600 mr-2 border-2 border-white"></span>
                      Green
                    </li>
                    <li
                      onClick={() => {
                        setThemeColor("pink-600");
                        setTheme(false);
                      }}
                      className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2 cursor-pointer"
                    >
                      <span className="w-5 h-5 rounded-full bg-pink-600 mr-2 border-2 border-white"></span>
                      Pink
                    </li>
                    <li
                      onClick={() => {
                        setThemeColor("indigo-600");
                        setTheme(false);
                      }}
                      className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2 cursor-pointer"
                    >
                      <span className="w-5 h-5 rounded-full bg-indigo-600 mr-2 border-2 border-white"></span>
                      Indigo
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <button
                  className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none z-20"
                  onClick={() => {
                    setProfileView(!profileView);
                    setTheme(false);
                  }}
                >
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                    alt="Your avatar"
                  />
                </button>

                <div
                  className={`${
                    profileView ? "fixed" : "hidden"
                  } inset-0 h-full w-full z-10 `}
                  onClick={() => setProfileView(false)}
                ></div>

                <div
                  className={`${
                    profileView ? "absolute" : "hidden"
                  } right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10`}
                >
                  <ul className="list-none">
                    <li
                      className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                      onClick={() => setProfileView(false)}
                    >
                      Profile
                    </li>
                    <li
                      className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                      onClick={() => setProfileView(false)}
                    >
                      Appearence
                    </li>
                    <li
                      className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                      onClick={() => setProfileView(false)}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1  bg-gray-200 ">
            <div className=" layout-height overflow-x-hidden overflow-y-auto">
              <div className="bg-white shodow rounded h-auto p-8 m-6 ">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
