import React from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/images/logo.png";
import { userLoggedOut } from "../../features/auth/authSlice";
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
    const dispatch = useDispatch()
    const [selected, setSelected] = React.useState(1)
    const handleLogout = () => {
        dispatch(userLoggedOut())
        localStorage.removeItem('auth')
    }
    return (
        <div
            className="container-md  bg-white shadow-md"
        >
            {/* navbar section */}
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
                {/* profile image */}
                <img src={logo} alt="profile_img" className="inline-block  h-8 w-8  md:h-10 md:w-10  rounded-full ring-1 md:ring-2 ring-blue-500" />


            </div>
            {/* header */}

            <div
                className="flex justify-between items-center py-4 px-4 md:px-8 gap-2 bg-[#f1f1f1] "
            >
                <div
                    className="flex gap-2 items-center "
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
                <Button
                    text={'Logout'}
                    className="bg-[#ff3366] text-white px-4 py-[0.4rem] md:py-2 rounded-md font-play"
                    onClick={handleLogout}
                />
            </div>

        </div>
    )
}
