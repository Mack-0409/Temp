import { MapPin } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';


const Navbar = ({location}) => {
    // const toggleDropdown = () => {
    //     setOpenDropdown(!openDropdown)
    // }
    return (
        <div className="bg-white  py-3 shadow-2xl">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* logo section */}
                <div className="flex gap-7 items-center">
                    <Link to={'/'}><h1 className="font-bold texr-3xl"><span className="text-red-500 font-serif">M</span>-Cart</h1></Link>
                    <div className="flex gap-1 cursor-ponter text-gray-700 items-center">
                        <MapPin className="text-red-500"/>
                        <span className="font-semibold">{location ? <div className="-space-y-2">
                            <p>{location.county}</p>
                            <p>{location.state}</p>
                        </div>:"Add Address"}</span>
                        {/* <FaCaretDown/> */}
                    </div>
                    {/* {
                        openDropdown ? <div className="w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5  bordr-gray-100 rounded-md">
                            <h1 className="font-semibold mb-4 text-4xl flex justify-between">Change Location</h1>

                        </div> : null
                    } */}
                </div>
                {/* menu section */}
                <nav className="flex gap-7 items-center">
                    <ul className="flex gap-7 items-center text-xl font-semibold">
                        <li><NavLink to={'/'} 
                                     className={({isActive}) => 
                                     `${isActive 
                                     ? "border-b-3 transition-all border-red-500" 
                                     : "text-black"} 
                                     cursor-pointer`}
                                     >Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/products'} 
                                     className={({isActive}) => 
                                     `${isActive 
                                     ? "border-b-3 transition-all border-red-500" 
                                     : "text-black"} 
                                     cursor-pointer`}
                                     >Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'} className={({isActive}) => 
                                     `${isActive 
                                     ? "border-b-3 transition-all border-red-500" 
                                     : "text-black"} 
                                     cursor-pointer`}
                                     >About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'} className={({isActive}) => 
                                     `${isActive 
                                     ? "border-b-3 transition-all border-red-500" 
                                     : "text-black"} 
                                     cursor-pointer`}
                                     >Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/cart'} className={({isActive}) => 
                                     `${isActive 
                                     ? "border-b-3 transition-all border-red-500" 
                                     : "text-black"} 
                                     cursor-pointer`}
                                     >Cart
                            </NavLink>
                        </li>
                    </ul>
                    <div>
                        <SignedOut>
                            <SignInButton className="bg-red-500 text-white px-3 py-1 cursor-pointer"/>
                        </SignedOut>
                        {/* Show the user button when the user is signed in */}
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar

