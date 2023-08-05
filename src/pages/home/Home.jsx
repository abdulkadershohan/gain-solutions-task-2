import React from "react";
import Navbar from "../../components/navbar/Navbar";
import EventList from "../../sections/hero/EventList";
import Search from "../../sections/hero/Search";

export default function Home() {
    return <>
        <Navbar />
        <Search />
        <EventList />

    </>
}
