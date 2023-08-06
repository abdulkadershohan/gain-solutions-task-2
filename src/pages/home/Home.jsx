import React from "react";
import EventList from "../../sections/hero/EventList";
import Search from "../../sections/hero/Search";

export default function Home() {
    const [page, setPage] = React.useState(1)
    return <div
        className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"

    >
        <Search
            setPage={setPage}
        />
        <EventList
            page={page}
            setPage={setPage}
        />

    </div>
}
