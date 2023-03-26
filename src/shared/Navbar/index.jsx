import React from "react";
import logo from "../../assets/img/MMT_Master_Logo-Primary.png";

const Navbar = () => {
  return (
    <div className="navbar z-10 fixed top-0 bg-[#FFFFFF] py-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden mr-4">
            <i className="fa-solid fa-bars fa-2x text-[#330523]"></i>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a href="/" className="ml-12">
          <img src={logo} className="w-[80%]" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold text-[#330523] ">
          <li className="hover:text-[#FF0044]">
            <a href="/about">ABOUT</a>
          </li>
          <li tabIndex={0} className="hover:text-[#FF0044]">
            <a>
              SERVICES
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li className="hover:text-[#FF0044]">
            <a>CLIENT</a>
          </li>
          <li className="hover:text-[#FF0044]">
            <a>INSIGHTS</a>
          </li>
          <li className="hover:text-[#FF0044]">
            <a>EVENTS</a>
          </li>
          <li tabIndex={0} className="hover:text-[#FF0044]">
            <a>
              CAREERS
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="/contact"
          className="btn bg-[#FF0044] hover:bg-red-400 border-none text-lg px-10 mr-20"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default Navbar;
