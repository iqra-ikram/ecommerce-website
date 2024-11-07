import React from "react";

export default function Banner() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7">
            <div className="absolute inset-0 opacity-20">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqxblUCytv_3FcErsPcP8oQe_0iK9kezGHw&s" alt="delicious food" className="w-full h-full object-cover" />

            </div>
            <div className="relative z-10 container mx-auto flex flex-column justify-center items-center text-center">
                <h2 className="text-white sm:text-5xl font-bold mb-7">  Discover Our Menu</h2>
                <p className="text-white text-lg text-center mb-0 mr-4 ml-6 p-4 max-w-xl bg-gradient-to-bl ">
                Satisfy Your Every Craving Now!
                </p>

                <div><button type="button" className="bg-orange-600 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 mt-5 mb-0 mr-0 ml-7 ">
                    Order Now!

                </button> 

                </div>
            </div>

        </div>
    )
}
