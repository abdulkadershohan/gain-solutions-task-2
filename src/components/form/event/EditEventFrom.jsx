import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEditEventMutation, useGetEventsByIdQuery } from "../../../features/event/eventApi";
import { Button, Input, Loading } from "../../../utils";
import Toastify from "../../../utils/Toastify";

export default function EditEventFrom() {
    const param = useParams()
    const { data: singleData, isLoading, isSuccess, isError, error } = useGetEventsByIdQuery(param?.id)
    const [editEvent, { isLoading: editIsloading, isSuccess: editIsSuccess, isError: editIsError, error: editError }] = useEditEventMutation()
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
            ...singleData,
            title,
            description,
            start_date,
            end_date,
            location,
            user_id: auth?.user?.id
        }
        editEvent({
            id: param?.id,
            data: body
        })
    }
    React.useEffect(() => {
        if (isSuccess) {
            setTitle(singleData?.title)
            setDdescription(singleData?.description)
            setStartDate(singleData?.start_date)
            setEndDate(singleData?.end_date)
            setLocation(singleData?.location)
        }
    }, [isSuccess, singleData])

    React.useEffect(() => {
        if (isError) {
            Toastify({
                type: "error",
                message: error.data
            })
            console.log(error)

        }
    }, [isError, error])

    // put data to server
    React.useEffect(() => {
        if (editIsSuccess) {
            Toastify({
                type: "success",
                message: "Event updated successfully"
            })
            navigate('/')
        }
        if (editIsError) {
            Toastify({
                type: "error",
                message: editError.data
            })
            console.log(editError)
        }

    }, [editIsSuccess, editIsError, editError, navigate])

    // deside what to render
    let content = null
    if (isLoading) {
        content = <Loading type={'fatch'} />
    }
    if (!isLoading && isError) {
        content = <p className="text-red-500">{error?.error}</p>
    }
    if (!isLoading && !isError && isSuccess) {
        content = <form onSubmit={handleSubmit}
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
                disabled={isLoading || editIsloading}
            />
        </form>
    }
    return (
        <>
            {content}
        </>
    )
}
