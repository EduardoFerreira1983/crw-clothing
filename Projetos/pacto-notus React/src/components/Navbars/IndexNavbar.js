/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
            >
              Packto
            </Link>
            
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            
              <li className="flex items-center">

              <a href="/auth/login">  
                <div
                  className="bg-blue-500 text-white active:bg-blue-600 text-xs 
                  font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg 
                  outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 
                  ease-linear transition-all duration-150"
                  
                >
                  
                  LOGIN
                  
                </div>
              </a>
              <a href="/auth/register">
                <div
                  className="bg-gray-700 text-white active:bg-dark-600 text-xs 
                  font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg 
                  outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 
                  ease-linear transition-all duration-150"
                >
                  REGISTRE-SE
                </div>
              </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
