import { useGetCategoriesQuery } from '@/redux/api/apiSlice';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { FaComputer } from "react-icons/fa";

const Navbar = () => {
    const { data: session } = useSession()
    const { data, error, isLoading } = useGetCategoriesQuery()

    const menuItems = (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li tabIndex={0}>
                <details>
                    <summary>Categories</summary>
                    <ul className="w-52 rounded z-20">
                        {
                            data?.data?.map((category) => (
                                <li key={category._id}><Link href={`/products/${category?._id}`}>{category.category}</Link></li>
                            ))
                        }
                    </ul>
                </details>
            </li>
            <li className='lg:mb-0 mb-2'>
                <Link
                    href="/category"
                    className="border border-white text-white rounded px-4 py-2 hover:bg-white ml-2"
                >
                    PC Builder
                </Link>
            </li>
            <li>
                {
                    !session?.user ? <Link
                        href="/login"
                        className="border border-white text-white rounded px-4 py-2 hover:bg-white ml-2"
                    >
                        Login
                    </Link> : <p className="border border-white text-white rounded px-4 py-2 hover:bg-white ml-2" onClick={() => signOut()}>Logout</p>
                }

            </li>
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
                        className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-indigo-300 rounded w-64 font-bold shadow-lg"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link href="/" className=" hidden lg:flex">
                    <div className="flex items-center">
                        <h1 className="normal-case text-2xl font-thin text-white flex items-center gap-1">
                            {/* <FaComputer className="text-3xl"></FaComputer> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                            </svg>

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

