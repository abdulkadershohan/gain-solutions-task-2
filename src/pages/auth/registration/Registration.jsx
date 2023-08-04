import React from "react";
import logo from "../../../assets/images/logo.png";
import { Button, Input } from "../../../utils";
import RegisterForm from "../../../components/form/RegisterForm";

export default function Registration() {
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
                <RegisterForm />

            </div>

        </section>
    )
}
