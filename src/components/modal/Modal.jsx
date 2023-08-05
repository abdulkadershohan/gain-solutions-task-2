import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../utils';

export default function ModalM({ data, }) {
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const { attendees } = data || {}

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <Button
                onClick={onOpenModal}
                className='bg-red-500 text-white px-4 py-2 rounded-md'
            >
                View Details
            </Button>
            <Modal open={open} onClose={onCloseModal} center >
                <div
                    className='p-2 flex flex-col h-screen w-full '
                >
                    <div
                        className='flex flex-col gap-2  pb-4'
                    >
                        <div
                            className='flex items-center gap-4 py-2'
                        >
                            <h1 className="font-play font-[900] text-3xl md:text-4xl pb-2 ">Details about the event</h1>
                            {
                                (auth?.user.id === data?.createdBy?.id) && <Button
                                    className='bg-[#F1F1F1] p-2 rounded-full'
                                    onClick={() => {
                                        navigate(`/edit-event/${data?.id}`)
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3 22H21" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Button>

                            }

                        </div>

                        <h4
                            className='text-2xl font-bold font-play border-b-2 border-black'
                        >
                            Event Title :
                        </h4>
                        <p
                            className='text-xl font-normal '
                        >{data.title}</p>

                        <h4
                            className='text-2xl font-bold font-play border-b-2 border-black'

                        >
                            Event Location :
                        </h4>
                        <p
                            className='text-xl font-normal '
                        >
                            {data.location}
                        </p>
                        <h4
                            className='text-2xl font-bold font-play border-b-2 border-black'

                        >
                            Event Description :
                        </h4>
                        <p className='text-xl font-normal '>{data.description}</p>
                        <h4
                            className='text-2xl font-bold font-play border-b-2 border-black'

                        >
                            Event Start Date :
                        </h4>
                        <p className='text-xl font-normal '>{moment(data.start_date).format('DD MMM YYYY hh:mm A')}</p>
                        <h4
                            className='text-2xl font-bold font-play border-b-2 border-black'

                        >
                            Event End Date :
                        </h4>
                        <p className='text-xl font-normal '>{moment(data.end_date).format('DD MMM YYYY hh:mm A')}</p>
                    </div>

                    {/* attendance list table  */}
                    <div className='flex flex-col gap-2  pb-4'>
                        <h1 className="text-2xl font-bold font-play ">Attendance List</h1>
                        <table className="table-auto border-collapse border border-black">
                            <thead>
                                <tr>
                                    <th className="border border-black ...">Name</th>
                                    <th className="border border-black ...">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendees.map((item) => (
                                    <tr key={item.id}>
                                        <td className="border border-black ...">{item.name}</td>
                                        <td className="border border-black ...">{item.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div >

            </Modal >
        </div >
    );
}
