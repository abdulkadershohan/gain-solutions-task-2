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

            </ div>

        </div>
    )
}
