import React from "react";
import EditEventFrom from "../../components/form/event/EditEventFrom";

export default function EditEvents() {

    return (
        <section className=" bg-[#f1f1f1]">
            <div
                className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
            >
                <div
                // className="flex flex-col w-full "
                >
                    <h1
                        className="text-xl md:text-3xl font-play font-[900] uppercase mb-4"
                    >
                        Edit event
                    </h1>
                    <EditEventFrom />
                </div>

            </div>
        </section >
    )
}
