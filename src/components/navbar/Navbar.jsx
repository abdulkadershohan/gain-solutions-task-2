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
    const [selected, setSelected] = React.useState(1)
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div
            className="container-md  bg-white shadow-md"
        >
            <div
                className="flex justify-between items-center py-4 px-4 md:px-8 gap-2 "
            >
                {/* logo section */}
                <div
                    className="flex gap-2 items-center"

                >
                    <img src={logo} alt="logo" className="inline-block h-8 w-8 md:h-12 md:w-12 rounded-full ring-2 ring-white" />
                    <h1 className="font-play font-[900] text-md lg:text-2xl uppercase">Dream Events</h1>

                </div>
                {/* nav links  desktop*/}
                <div
                    className="hidden md:flex gap-2 items-center "
                >
                    {
                        navbardata.map(nav => (
                            <a
                                key={nav.id}
                                href={nav.url}

                                className={`
                                ${selected === nav.id && ' underline '}
                                font-play font-medium text-lg text-gray-600 hover:text-gray-800 hover:bg-green-200 px-4 py-2 rounded-md
                                `}
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
                    <img src={logo} alt="profile_img" className="inline-block  h-8 w-8  md:h-10 md:w-10  rounded-full ring-1 md:ring-2 ring-blue-500" />
                    <div>
                        <Button
                            text={'Logout'}
                            className="bg-[#ff3366] text-white px-4 py-[0.4rem] md:py-2 rounded-md font-play"

                        />
                    </div>
                </div>
                {
                    !isOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="md:hidden"
                            onClick={() => setIsOpen(true)}
                        >
                            <path d="M3 7H21" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M3 12H21" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M3 17H21" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />

                        </svg>

                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onClick={() => setIsOpen(false)}
                            className="md:hidden"

                        >
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.16998 14.83L14.83 9.17004" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.83 14.83L9.16998 9.17004" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )
                }

            </div>


            {/* nav link mobile */}

            {
                isOpen && (
                    <div
                        className="flex flex-col md:hidden gap-2 items-start ml-2"
                    >
                        {
                            navbardata.map(nav => (
                                <a
                                    key={nav.id}
                                    href={nav.url}

                                    className={`
                                    ${selected === nav.id && ' underline '}
                                    font-play font-medium text-lg text-gray-600 hover:text-gray-800 hover:bg-green-200 px-4 py-2 rounded-md
                                    `}
                                >
                                    {nav.title}
                                </a>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
