import moment from "moment/moment";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChangeStatus from "../../components/form/event/ChangeStatus";
import ModalM from "../../components/modal/Modal";
import { useGetAllEventsQuery } from "../../features/event/eventApi";
import { Button, Loading } from "../../utils";

const LIMIT = 2

export default function EventList() {
    const navigate = useNavigate()
    const [page, setPage] = React.useState(1)
    const { data: tableData, isLoading, isError, error } = useGetAllEventsQuery(page)
    // const [eventListData, setTableData] = React.useState([])
    console.log(tableData)
    const auth = useSelector(state => state.auth)
    const tableRow = ['Title', 'Location', 'Start Date', 'End Date', 'RSVP', 'Show Details', 'Action']

    // deside what to render
    let content = null
    if (isLoading) {
        content = <Loading type={'fatch'} />
    }
    if (!isLoading && isError) {
        content = <p>{error.data}</p>
    }
    if (!isLoading && !isError && tableData?.length === 0) {
        content = <p>No Event Found</p>
    }
    if (!isLoading && !isError && tableData?.length > 0) {
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
                        tableData.map((item, index) => <tr
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
                                {/* <Button
                                    className={`
                                        px-2  pt-1 rounded-lg
                                        ${item.attendees?.find(item => item.user_id === auth.user.id) ? 'bg-red-500' : 'bg-green-500'}
                                        ${item.attendees?.find(item => item.user_id === auth.user.id) ? 'hover:bg-red-600' : 'hover:bg-green-600'}
                                       text-white
                                    `}
                                    title={item.attendees?.find(item => item.user_id === auth.user.id) ? 'Change to not Going' : 'Change to Going'}
                                >
                                    {
                                        //  auth.user.id
                                        item.attendees?.find(item => item.user_id === auth.user.id) ? 'Going' : 'Not Go'


                                    }
                                </Button> */}
                                {/* drop down menu  */}
                                {/* <div className="relative inline-block text-left">
                                    <div>
                                        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
                                            {
                                                item.attendees?.find(item => item.user_id === auth.user.id) ? 'Going' : 'Not Go'
                                            }
                                           
                                            <svg className="-mr-1 ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">

                                                <path fillRule="evenodd" d="M5.293 6.707a1 1 0 010 1.414L2.414 11H17a1 1 0 110 2H2.414l2.879 2.879a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd" />

                                            </svg>
                                        </button>
                                    </div>
                                </div> */}
                                <ChangeStatus
                                    data={item}
                                />

                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-white">
                                <ModalM
                                    data={item}
                                />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-white">
                                {
                                    item?.createdBy?.id === auth.user.id && (
                                        <Button
                                            className="px-2  py-2 rounded-lg bg-blue-200 hover:bg-blue-300 text-white"
                                            onClick={() => {
                                                navigate(`/edit-event/${item?.id}`)
                                            }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3 22H21" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Button>
                                    )
                                }



                            </td>


                        </tr>
                        )
                    }

                </tbody>
            </table>
            <nav className="flex items-center justify-between py-4" aria-label="Table navigation">
                <ul className=" -space-x-px text-sm h-8 gap-1 flex items-center justify-between py-4">
                    <li
                        onClick={() => {
                            if (page > 1) {
                                setPage(prev => prev - 1)
                            }
                        }}
                    >
                        <p className="flex cursor-pointer items-center justify-center px-3 h-8 ml-0 leading-tight   border  rounded-l-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">Previous</p>
                    </li>
                    <li
                        onClick={() => { setPage(prev => prev + 1) }}
                    >
                        <p className="flex cursor-pointer items-center justify-center px-3 h-8 leading-tight rounded-r-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">Next</p>
                    </li>
                </ul>
            </nav>
        </div >
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
