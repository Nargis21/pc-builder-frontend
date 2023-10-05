import Link from 'next/link';
import React from 'react';
import { FaComputer } from "react-icons/fa";

const Navbar = () => {

    const menuItems = (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li tabIndex={0}>
                <details>
                    <summary>Categories</summary>
                    <ul className="w-52 rounded">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>
            <li>
                <Link
                    href="/"
                    className="border border-white text-white rounded px-4 py-2 hover:bg-white ml-2"
                >
                    PC Builder
                </Link>
            </li>

            {/* <li>
                {user ? (
                    <button
                        onClick={handleLogout}
                        className="border border-white rounded px-4 py-2 hover:bg-white ml-2"
                    >
                        Logout <PiSignOutBold></PiSignOutBold>
                    </button>
                ) : (
                    <Link
                        to="/login"
                        className="border border-white rounded px-4 py-2 hover:bg-white ml-2"
                    >
                        Login <PiSignInBold></PiSignInBold>
                    </Link>
                )}
            </li> */}
        </>
    );

    return (
        <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  lg:px-6 md:px-4 sm:px-2 shadow-lg sticky top-0 z-10 ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-green-200 rounded w-64 font-bold"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link href="/" className=" hidden lg:flex">
                    <div className="flex items-center">
                        <h1 className="normal-case text-2xl font-thin text-white flex items-center gap-2">
                            {/* <FaComputer className="text-3xl"></FaComputer> */}
                            <span className="font-bold">PC</span> Net
                        </h1>
                    </div>
                </Link>

            </div>

            <div className="navbar-end ">
                <ul className="menu menu-horizontal px-1 hidden lg:flex text-gray-700 font-semibold text-[16px]">
                    {menuItems}
                </ul>
                <Link href="/" className=" lg:hidden">
                    <div className="flex items-center">
                        <h1 className="normal-case text-2xl font-thin text-white flex items-center gap-2">
                            {/* <FaComputer className="text-3xl"></FaComputer> */}
                            <span className="font-bold">PC</span> Net
                        </h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;

