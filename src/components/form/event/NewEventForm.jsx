import React, { useState } from "react";
import { Button, Input } from "../../../utils";

export default function NewEventForm() {
    const [title, setTitle] = useState('')
    const [description, setDdescription] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')
    const [location, setLocation] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            title, description, start_date, end_date, location
        }
        console.log(body)
    }
    return (
        <form onSubmit={handleSubmit}
            className="w-full md:w-1/2 px-4"
        >
            <div>
                <Input required label={'Event Title'} type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <Input required label='Description' textArea type="text" placeholder="Description here..." value={description} onChange={e => setDdescription(e.target.value)} />
                <Input required label='Start date' type="datetime-local" placeholder="Start date" value={start_date} onChange={e => setStartDate(e.target.value)} />
                <Input required label='End date' type="datetime-local" placeholder="End date" value={end_date} onChange={e => setEndDate(e.target.value)} />
                <Input required label='Location' type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
            </div>

            <Button
                className="mt-2 bg-[#ff3366] text-white px-4 py-2 rounded-md"
                text={'Create'}
                type='submit'
            />
        </form>
    )
}
