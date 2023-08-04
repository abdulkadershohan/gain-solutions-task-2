import React from "react";
import NewEventForm from "../../components/form/event/NewEventForm";

export default function NewEvents() {

    return (
        <section className="container mx-auto px-4 bg-[#f1f1f1]">
            <div
                className="flex flex-col h-screen  justify-center items-center"
            >
                <h1
                    className="text-3xl font-play font-[900] uppercase mb-4"
                >
                    Create new event
                </h1>
                <NewEventForm />

            </div>
        </section >
    )
}
