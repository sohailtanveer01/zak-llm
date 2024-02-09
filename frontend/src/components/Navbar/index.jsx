import React from 'react';
import Link from 'next/link';
import SigninWG from '@/components/SigninWG';


const Navbar = () => {



  return (
    // <nav className="bg-gray-800 text-white px-4 rounded-2xl">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <div className="flex items-center">
    //       <Link href="/">
    //         <span className="text-lg cursor-pointer">Zak-llm</span>
    //       </Link>
    //     </div>
    //     <div className="flex items-center space-x-12">
    //       {/* Wrap right-aligned links in their own div to push them to the right */}
    //       {/* <Link href="/dashboard">
    //         <span className="text-lg cursor-pointer">Desktop App</span>
    //       </Link> */}
    //       <Link href="/pricing">
    //         <span className="text-lg cursor-pointer">Pricing</span>
    //       </Link>
    //       <Link href="#doc">
    //         <span className="text-lg cursor-pointer">Documentation</span>
    //       </Link>
    //       <Link href="#git">
    //         <span className="text-lg cursor-pointer">Github</span>
    //       </Link>
    //       <SigninWG />
    //     </div>
    //   </div>
    // </nav>

    <div className="navbar bg-base-100 border-4 rounded-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href="/dashboard">
                <span className="text-lg cursor-pointer">Desktop App</span>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <span className="text-lg cursor-pointer">Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="#git">
                <span className="text-lg cursor-pointer">Github</span>
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Zak-llm</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/dashboard">
              <span className="text-lg cursor-pointer">Desktop App</span>
            </Link>
          </li>          
          <li>
            <Link href="/pricing">
              <span className="text-lg cursor-pointer">Pricing</span>
            </Link>

          </li>
          <li>
            <Link href="#git">
              <span className="text-lg cursor-pointer">Github</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <SigninWG />
      </div>
    </div>
  );
};

export default Navbar;
