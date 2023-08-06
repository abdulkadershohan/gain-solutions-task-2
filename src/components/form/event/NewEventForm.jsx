import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateEventMutation } from "../../../features/event/eventApi";
import { Button, Input } from "../../../utils";
import Toastify from "../../../utils/Toastify";

export default function NewEventForm() {
    const [createEvent, { isLoading, isSuccess, isError, error }] = useCreateEventMutation()
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDdescription] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')
    const [location, setLocation] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            title, description, start_date, end_date, location,
            createdBy: auth?.user,
            attendees: []
        }
        // end date cant be grater then start date
        if (new Date(start_date) > new Date(end_date)) {
            Toastify({
                type: "error",
                message: "Can finish before the event starts "
            })
            return
        }
        // location at least 4 characters
        if (location.length < 4) {
            Toastify({
                type: "error",
                message: "Location must be more than 4 characters"
            })
            return
        }
        createEvent(body)
    }
    React.useEffect(() => {
        if (isSuccess) {
            setTitle('')
            setDdescription('')
            setStartDate('')
            setEndDate('')
            setLocation('')
            Toastify({
                type: "success",
                message: "Event Created"
            })
            navigate('/')
        }
    }, [isSuccess, navigate])

    React.useEffect(() => {
        if (isError) {
            Toastify({
                type: "error",
                message: error.data
            })
            console.log(error)

        }
    }, [isError, error])
    return (
        <form onSubmit={handleSubmit}
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
                disabled={isLoading}
            />
        </form>
    )
}
