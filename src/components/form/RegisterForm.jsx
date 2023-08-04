import React from "react";
import { Button, Input } from "../../utils";

export default function RegisterForm() {
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
        <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 px-4"
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
            <div
                className="flex flex-col gap-4 mt-4"
            >
                <Button
                    type="submit"
                    text="Create Account"
                />
                <button className="text-sm font-semibold leading-6 text-gray-900">
                    Already have an account? <span className="text-indigo-600 hover:underline">Login</span>
                    <span aria-hidden="true">→</span></button>

            </div>
        </form>
    )
}