import React from "react";
import NewEventForm from "../../components/form/event/NewEventForm";

export default function NewEvents() {

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
                        Create new event
                    </h1>
                    <NewEventForm />
                </div>

            </div>
        </section >
    )
}
