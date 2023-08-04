import React from "react";
import logo from "../../assets/images/logo.png";
import { Button } from "../../utils";
const navbardata = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Create Event',
        url: '/events'
    },
    {
        id: 3,
        title: 'Profile',
        url: '/about'
    },

]
export default function Navbar() {
    return (
        <div
            className="container-md  bg-white"
        >
            <div
                className="flex justify-between items-center py-4 px-4 md:px-8"
            >
                {/* logo section */}
                <div
                    className="flex gap-2 items-center"

                >
                    <img src={logo} alt="logo" className="inline-block h-12 w-12  rounded-full ring-2 ring-white" />
                    <h1 className="font-play font-[900] text-xl md:text-2xl uppercase">Dream Events</h1>

                </div>
                {/* nav links */}
                <div
                    className="flex gap-2 items-center"
                >
                    {
                        navbardata.map(nav => (
                            <a
                                key={nav.id}
                                href={nav.url}

                                className="font-play font-medium text-lg text-gray-600 hover:text-gray-800 bg-green-200 px-4 py-2 rounded-md"
                            >
                                {nav.title}
                            </a>
                        ))
                    }
                </div>
                {/* logout sec */}
                <div
                    className="flex gap-4 items-center justify-center"
                >
                    <img src={logo} alt="profile_img" className="inline-block h-10 w-10  rounded-full ring-2 ring-blue-500" />
                    <div>
                        <Button
                            text={'Logout'}
                            className="bg-[#ff3366] text-white px-4 py-2 rounded-md font-play"

                        />
                    </div>
                </div>
            </div>


        </div>
    )
}
