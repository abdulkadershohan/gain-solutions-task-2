import React from "react";
import EventList from "../../sections/hero/EventList";
import Search from "../../sections/hero/Search";

export default function Home() {
    const [page, setPage] = React.useState(1)
    return <>
        <Search
            setPage={setPage}
        />
        <EventList
            page={page}
            setPage={setPage}
        />

    </>
}
