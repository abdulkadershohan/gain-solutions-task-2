import moment from "moment/moment";
import React from "react";
import ModalM from "../../components/modal/Modal";
import { useGetAllEventsQuery } from "../../features/event/eventApi";
import { Button, Loading } from "../../utils";

export default function EventList() {
    const { data: eventListData, isLoading, isError, error } = useGetAllEventsQuery()

    const tableRow = ['Title', 'Location', 'Start Date', 'End Date', 'RSVP', 'Show Details']

    // deside what to render
    let content = null
    if (isLoading) {
        content = <Loading type={'fatch'} />
    }
    if (!isLoading && isError) {
        content = <p>{error.data}</p>
    }
    if (!isLoading && !isError && eventListData?.length === 0) {
        content = <p>No Event Found</p>
    }
    if (!isLoading && !isError && eventListData?.length > 0) {
        content = <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                        eventListData.map((item, index) => <tr
                            key={Math.random()}
                            className={`${index % 2 === 0 ? ' bg-gray-800' : 'bg-gray-900'} border-b border-gray-700  hover:bg-gray-600 `}
                        >
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                {item.title}
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap text-white">
                                {item.location}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-white">
                                {
                                    moment(item.start_date).format('DD MMM YYYY hh:mm A')
                                }
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-white">
                                {
                                    moment(item.end_date).format('DD MMM YYYY hh:mm A')
                                }
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-white">
                                <Button
                                    className="px-2  pt-1 rounded-lg bg-green-500 hover:bg-green-600 text-white"
                                >
                                    RSVP
                                </Button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-white">
                                <ModalM
                                    data={item}
                                />
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
    }
    return (
        <div
            className="pl-0 pr-4 py-2 md:p-8"
        >
            <h1
                className="text-2xl font-bold mb-4"
            >
                Event List
            </h1>
            {content}


        </div>
    )
}
