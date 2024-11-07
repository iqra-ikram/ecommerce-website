import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


export default function Navbar() {
    return (
        <div>
            <div className="grid xl:grid-cols-1">

                <div className="p-5">
                    <div className="py-3 px-3 rounded-xl border w-full">
                        <div className="flex justify-between items-center">
                            <div className="flex justify-center items-center gap-2">

                                {/*logo burger*/}
                                <IoFastFoodOutline className="w-10 h-10 text-orange-400 hover:text-pink-400" />

                                {/*Search Icon*/}
                                <div style={{ position: 'relative' }}>
                                    <input className="rounded-3xl py-3 px-3 outline none text-x5 w-[350px] pr-10 hidden lg:block md:block text-gray-600" placeholder="Search here" />

                                    <FaSearch className="w-5 h-5 text-orange-400 absolute right-3 top-1/2 transform-translate-y-1/2 hidden lg:block md:block" />


                                </div>
                                {/*Card Icon*/}
                                <FaCartShopping className="inline-block w-8 h-8   hover:ring-orange-400 text-orange-400" />
                                <img className="inline-block w-10 h-10  rounded-full ring-2 ring-orange-400" src="data:image/jpeg;base64,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" alt="mylogo" />








                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>


    )

}
