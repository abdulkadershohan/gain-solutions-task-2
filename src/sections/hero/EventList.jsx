import React from "react";
import ModalM from "../../components/modal/Modal";
import { Button } from "../../utils";

export default function EventList() {
    const tableRow = ['Title', 'Location', 'Start Date', 'End Date', 'RSVP']
    const tableData = [

        {
            id: 1,
            title: 'Title',
            location: 'Location',
            startDate: 'Start Date',
            endDate: 'End Date',
            rsvp: 'RSVP'
        },
        {
            id: 2,
            title: 'Title 2',
            location: 'Location',
            startDate: 'Start Date',
            endDate: 'End Date',
            rsvp: 'RSVP'
        },
        {
            id: 1,
            title: 'Title',
            location: 'Location',
            startDate: 'Start Date',
            endDate: 'End Date',
            rsvp: 'RSVP'
        },
        {
            id: 2,
            title: 'Title 2',
            location: 'Location',
            startDate: 'Start Date',
            endDate: 'End Date',
            rsvp: 'RSVP'
        },
        {
            id: 1,
            title: 'Title',
            location: 'Location',
            startDate: 'Start Date',
            endDate: 'End Date',
            rsvp: 'RSVP'
        },
        {
            id: 2,
            title: 'Title 2',
            location: 'Location',
            startDate: 'Start Date',
            endDate: 'End Date',
            rsvp: 'RSVP'
        },
        {
            id: 1,
            title: 'Title',
            location: 'Location',
            startDate: 'Start Date',
            endDate: 'End Date',
            rsvp: 'RSVP'
        },
        {
            id: 2,
            title: 'Title 2',
            location: 'Location',
            startDate: 'Start Date',
            endDate: 'End Date',
            rsvp: 'RSVP'
        },
    ]
    return (
        <div
            className="pl-0 pr-4 py-2 md:p-8"
        >
            <h1
                className="text-2xl font-bold mb-4"
            >
                Event List
            </h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left  text-gray-400">
                    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                        <tr>
                            {
                                tableRow.map((item, index) => <th
                                    key={Math.random()}
                                    scope="col" className="px-6 py-3 font-medium tracking-wider">
                                    {item}
                                </th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((item, index) => <tr
                                key={Math.random()}
                                className={`
                                ${index % 2 === 0 ? ' bg-gray-800' : 'bg-gray-900'}
                                border-b border-gray-700  hover:bg-gray-600
                                `}>
                                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                    {item.title}
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap text-white">
                                    {item.location}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-white">
                                    {item.startDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-white">
                                    {item.endDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-white">
                                    <Button
                                        className="px-2  pt-1 rounded-lg bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        {item.rsvp}
                                    </Button>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
                <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-400">Showing <span className="font-semibold text-gray-900 ">1-10</span> of <span className="font-semibold text-gray-900 ">1000</span></span>
                    <ul className="inline-flex -space-x-px text-sm h-8 gap-1">
                        <li>
                            <p className="flex cursor-pointer items-center justify-center px-3 h-8 ml-0 leading-tight   border  rounded-l-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">Previous</p>
                        </li>

                        <li>
                            <p className="flex cursor-pointer items-center justify-center px-3 h-8 leading-tight rounded-r-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">Next</p>
                        </li>
                    </ul>
                </nav>
            </div>

            <ModalM />

        </div>
    )
}
