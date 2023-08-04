import React from "react";

export default function Input({ placeholder, type, errorMessage, onChange, value, ...rest }) {
    return (
        <div
            className="flex flex-col gap-1 font-play items-cente p-8"
        >
            <label
                className="text-lg font-normal text-black"
            >First name</label>
            <input
                placeholder={placeholder}
                type={type || "text"}
                onChange={onChange}
                value={value}
                className='font-jose p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent '
                {...rest}

            />
            {/* error */}
            <span className="text-red-500 text-sm">{errorMessage}</span>
        </div>
    )
}
