import React from "react";

export default function Input({ textArea, placeholder, label, type, errorMessage, onChange, value, ...rest }) {
    return (
        <div
            className="flex flex-col gap-1 font-play "
        >
            <label
                className="text-lg font-normal text-black"
            >
                {label}
            </label>
            {
                textArea ? (
                    <textarea rows="4" cols="50"
                        className='font-jose p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent '
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        {...rest}
                    />

                ) : (
                    <input
                        placeholder={placeholder}
                        type={type || "text"}
                        onChange={onChange}
                        value={value}
                        className='font-jose p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent '
                        {...rest}

                    />
                )
            }
            {/* error */}
            <span className="text-red-500 text-sm">{errorMessage}</span>
        </div>
    )
}
