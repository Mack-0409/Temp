import { MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
        const location = false
    return (
        <div className="bg-white  py-3 shadow-2xl">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* logo section */}
                <div className="">
                    <Link to={'/'}><h1 className="font-bold texr-3xl"><span className="text-red-500 font-serif">M</span>-Cart</h1></Link>
                    <div className="flex gap-1 cursor-ponter text-gray-700 items-center">
                        <MapPin className="text-red-500"/>
                        <span className="font-semibold">{location ? <div></div>:"Add Address"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar