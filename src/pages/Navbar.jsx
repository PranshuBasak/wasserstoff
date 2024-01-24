import React, { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { IoOptionsOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState('/');
    useEffect(() => {
        const pathname = window.location.pathname;
        setActive(pathname);
    }, []);

    return (
        <div className="flex justify-between items-center  bg-white sticky top-0 space-x-4 w-screen">
            <div className='flex justify-between items-center md:mx-2 flex-none'>
                <img className='w-10 md:ml-9 shadow-md rounded-2xl' src={'https://www.thewasserstoff.com/images/logo-top.png'} alt=''></img>
                <p className='inline mx-1 text-sm relative top-0.5 text-black font-medium '>WASSERSTOFF</p>
            </div>

            <div className='flex justify-end items-center bg-gray-200 m-2 rounded grow max-w-80'>
                <input type="text" className="w-fit bg-transparent border-none grow" />
                <CiSearch className="mx-2" size={15} />
            </div>

            <div className="hidden md:flex items-center h-full">
                <Link to="#" className='mx-3  text-gray-500'>Statistics</Link>
                <Link to="/overview" onClick={() => setActive('/overview')} className={`mx-3 p-4 ${active === '/overview' ? 'text-black  border-b-4 border-[#5756B3]' : 'text-gray-500'}`}>Overview</Link>
                <Link to='/' onClick={() => setActive('/')} className={`mx-3 p-4 ${active === '/' ? 'text-black   border-b-4 border-[#5756B3]' : 'text-gray-500'}`}>Dashboard</Link>
                <Link className='mx-3 text-gray-500'>Analytics</Link>
            </div>
            <span className='hidden md:flex px-3 text-[#A1A3D4]'><FiUser size={22} /></span>
            <div className="flex items-center md:hidden">
                <span className='mx-3 text-[#A1A3D4]'><FiUser size={22} /></span>
                <span className='text-[#A1A3D4]'><IoOptionsOutline size={22} /></span>
            </div>
        </div>
    )
}

export default Navbar;
