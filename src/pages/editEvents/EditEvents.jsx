import React from "react";
import EditEventFrom from "../../components/form/event/EditEventFrom";

export default function EditEvents() {

    return (
        <section className="container mx-auto px-4 bg-[#f1f1f1]">
            <div
                className="flex flex-col h-screen  justify-center items-center"
            >
                <h1
                    className="text-3xl font-play font-[900] uppercase mb-4"
                >
                    Edit Events
                </h1>
                <EditEventFrom />

            </div>
        </section >
    )
}
