import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Button({ text,
    link,
    blank, onClick, borderRadius, bgColor, px, py,
    fontWeight, fontSize, textColor, hoverBgColor,
    loading

}) {
    return (
        <>
            {loading ? <ClipLoader color="#36d7b7" /> : (
                <a href={link}
                    className={
                        `${borderRadius || 'rounded-md'}
                    ${bgColor || 'bg-indigo-600'}
                    ${px || 'px-3.5'}
                    ${py || 'py-2.5'}
                    ${fontSize || 'text-sm'}
                    ${fontWeight || 'font-semibold'}
                    ${textColor || 'text-white'}
                    shadow-sm
                    ${hoverBgColor || 'hover:bg-indigo-500'}
                     focus-visible:outline focus-visible:outline-2 
                     focus-visible:outline-offset-2
                    focus-visible:outline-indigo-600
                    `
                    }
                    onClick={onClick}
                    target={blank ? "_blank" : "_self"} rel="noreferrer"
                >
                    {text}
                </a>
            )}
        </>
    )
}
