import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { userLoggedOut } from "../../features/auth/authSlice";
import { Button } from "../../utils";
const defaultImg = 'https://cdn-icons-png.flaticon.com/512/1246/1246314.png?w=740&t=st=1691230836~exp=1691231436~hmac=dbf1950a8b58ca6372ec7e118279fbeb4e041d3d9b8d2b1df89a96149dcdecaa'
const navbardata = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Create Event',
        url: '/new-event'
    },
    {
        id: 3,
        title: 'Profile',
        url: '/profile'
    },

]
export default function Navbar() {
    const dispatch = useDispatch()
    //route path name
    const pathName = window.location.pathname
    const activPath = pathName === '/' ? 1 : pathName === '/new-event' ? 2 : pathName === '/profile' ? 3 : 1
    const [selected, setSelected] = React.useState(activPath)
    const auth = JSON.parse(localStorage.getItem('auth'))

    const handleLogout = () => {
        dispatch(userLoggedOut())
        localStorage.removeItem('auth')
    }
    return (
        <div
            className=" bg-white shadow-md sticky top-0 z-50  "
        >
            <div
                className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 "
            >

                {/* navbar section */}
                <div
                    className="flex justify-between items-center py-4  gap-2"
                >
                    {/* logo section */}
                    <div
                        className="flex gap-2 items-center"

                    >
                        <img src={logo} alt="logo" className="inline-block h-8 w-8 md:h-12 md:w-12 rounded-full ring-2 ring-white" />
                        <h1 className="font-play font-[900] text-md lg:text-2xl uppercase">Dream Events</h1>

                    </div>
                    {/* profile image */}
                    <img src={auth?.user?.profileImage ? auth.user.profileImage : defaultImg}
                        alt="profile_img" className="inline-block  h-8 w-8  md:h-10 md:w-10  rounded-full ring-1 md:ring-2 ring-blue-500" />


                </div>
                {/* header */}

                <div
                    className="flex justify-between items-center py-4 gap-2  "
                >
                    <div
                        className="flex flex-col md:flex-row gap-2 items-center "
                    >
                        {
                            navbardata.map(nav => (
                                <Link
                                    key={nav.id}
                                    to={nav.url}
                                    onClick={() => setSelected(nav.id)}
                                    className={`
                                ${selected === nav.id && ' underline '}
                                font-play font-medium text-lg text-gray-600 hover:text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md
                                `}
                                >
                                    {nav.title}
                                </Link>
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
        </div>
    )
}
