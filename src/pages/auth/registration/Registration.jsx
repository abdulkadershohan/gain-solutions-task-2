import React from "react";
import logo from "../../../assets/images/logo.png";
import { Input } from "../../../utils";

export default function Registration() {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('')
    const [profileImage, setProfileImage] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            name,
            email,
            password,
            passwordConfirmation,
            profileImage,
            phoneNumber
        }
        console.log(body)
    }

    return (
        <section className="container-md  bg-[#f1f1f1]">
            <div
                className="flex flex-col h-screen w-screen justify-center items-center"
            >
                <div
                    className="flex gap-2 items-center pb-4"
                >
                    <img src={logo} alt="logo" className="inline-block h-16 w-16  rounded-full ring-2 ring-white" />
                    <div>
                        <h1 className="font-play font-[900] text-3xl md:text-4xl uppercase">Dream Events</h1>
                        <p>
                            welcome to our website
                        </p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="
                    w-full md:w-1/2
                    px-4
                    "
                >
                    <Input
                        placeholder={'Enter your name'}
                        label={'Name'}
                        type={'text'}
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input

                        placeholder={'Enter your email'}
                        label={'Email'}
                        type={'email'}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input

                        placeholder={'Enter your password'}
                        label={'Password'}
                        type={'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        placeholder={'Confirm your password'}
                        label={'Confirm Password'}
                        type={'password'}
                        required
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    <Input
                        placeholder={'Enter your phone number'}
                        label={'Phone Number'}
                        type={'text'}
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <Input
                        placeholder={'Paste your profile image link'}
                        label={'Profile Image'}
                        type={'text'}
                        required
                        value={profileImage}
                        onChange={(e) => setProfileImage(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                    >
                        Create an account
                    </button>
                </form>
            </div>

        </section>
    )
}
