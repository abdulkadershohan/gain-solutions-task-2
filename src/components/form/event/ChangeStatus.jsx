import React from "react";
import { useSelector } from "react-redux";
import { useChangeStatusEventMutation } from "../../../features/event/eventApi";

export default function ChangeStatus({ data, }) {
    const [changeStatusEvent, { isError, isLoading, isSuccess, error }] = useChangeStatusEventMutation()
    const auth = useSelector(state => state.auth)
    const findMe = data.attendees?.find(item => item.user_id === auth.user.id) ? 'going' : 'notGoging'
    const [status, setStatus] = React.useState(findMe)

    const handleStatus = (e) => {
        setStatus(e.target.value)
        const body = {
            ...data,
            // if found me in attendees array then remove me from attendees array else add me to attendees array
            attendees: findMe === 'going' ? data.attendees.filter(item => item.user_id !== auth.user.id) : [...data.attendees, {
                user_id: auth.user.id,
                email: auth.user.email,
                name: auth.user.name,
            }]
        }
        changeStatusEvent({
            id: data.id,
            data: body
        })

    }
    React.useEffect(() => {

    }, [isSuccess])
    return (
        <div>
            <select
                value={status}
                onChange={handleStatus}
                className=" rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <option value="going"

                >Going</option>
                <option value="notGoging"

                >Not Going</option>

            </select>
        </div>
    )
}