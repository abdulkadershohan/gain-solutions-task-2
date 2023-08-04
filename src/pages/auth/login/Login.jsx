import React from "react";
import logo from "../../../assets/images/logo.png";
import { Button, Input } from "../../../utils";

export default function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            email,
            password,
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


                    <div
                        className="flex flex-col gap-4 mt-4"
                    >
                        <Button
                            type="submit"
                            text="Login"
                        />
                        <button className="
                    
                    text-sm font-semibold leading-6 text-gray-900">
                            Don't have an account? <span className="text-indigo-600 hover:underline">Sign up</span>
                            <span aria-hidden="true">→</span></button>

                    </div>
                </form>
            </div>

        </section>
    )
}
