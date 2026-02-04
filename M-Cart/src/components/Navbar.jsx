import { MapPin } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
        const location = false
    return (
        <div className="bg-white  py-3 shadow-2xl">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* logo section */}
                <div className="flex gap-7 items-center">
                    <Link to={'/'}><h1 className="font-bold texr-3xl"><span className="text-red-500 font-serif">M</span>-Cart</h1></Link>
                    <div className="flex gap-1 cursor-ponter text-gray-700 items-center">
                        <MapPin className="text-red-500"/>
                        <span className="font-semibold">{location ? <div></div>:"Add Address"}</span>
                        {/* <FaCaretDown/> */}
                    </div>
                </div>
                {/* menu section */}
                <nav>
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
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar