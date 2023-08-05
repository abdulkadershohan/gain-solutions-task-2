import React from "react";
import { useSelector } from "react-redux";
import { Input } from "../../utils";

export default function UserProfile() {
    const auth = useSelector(state => state.auth)

    return (
        <div
            className="w-full py-4  px-8"
        >
            <img src={auth.user.profileImage} alt=""
                className="w-64 h-64 mx-auto rounded-full"
            />
            <div
                //  onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-8"
            >
                <Input
                    label={'Name'}

                    type={'text'}
                    required
                    value={auth.user.name}
                    disabled
                />
                <Input

                    label={'Email'}
                    type={'email'}
                    required
                    value={auth.user.email}
                    disabled

                />

                <Input
                    label={'Phone'}
                    type={'text'}
                    required
                    value={auth.user.phoneNumber}
                    disabled
                />

                {/* <div
                    className="flex flex-col gap-4 mt-4"
                >
                    <Button
                        type="submit"
                        text="Create Account"
                        disabled={isLoading}
                    />
                    <button className="text-sm font-semibold leading-6 text-gray-900"
                        onClick={() => navigate('/login')}
                    >
                        Already have an account? <span className="text-indigo-600 hover:underline">Login</span>
                        <span aria-hidden="true">→</span></button>

                </div> */}
            </ div>

        </div>
    )
}
