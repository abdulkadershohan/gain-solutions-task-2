import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../sections/hero/Search";
import EventList from "../../sections/hero/EventList";

export default function Home() {
    return <>
        <Navbar />
        <Search />
        <EventList />

    </>
}
