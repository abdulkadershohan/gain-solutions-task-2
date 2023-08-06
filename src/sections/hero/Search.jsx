import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClearSearch, setSearchFilter } from "../../features/filterSearch/FilterSearchSlice";
import { Button, Input } from "../../utils";

export default function Search({ setPage }) {
    const dispatch = useDispatch()
    const filterSearch = useSelector(state => state.filterSearch)

    const [search, setSearch] = React.useState(filterSearch?.text)
    const [loaction, setLocation] = React.useState(filterSearch?.location)
    const [startDate, setStartDate] = React.useState(filterSearch?.start_date)
    const [endDate, setEndDate] = React.useState(filterSearch?.end_date)
    const [isFilter, setIsFilter] = React.useState(false)

    const handleSubmit = () => {
        dispatch(setSearchFilter({
            text: search,
            location: loaction,
            start_date: startDate,
            end_date: endDate
        }))

    }
    const handleClearFilter = () => {
        setSearch('')
        setLocation('')
        setStartDate('')
        setEndDate('')
        dispatch(setClearSearch())
        setPage(1)
    }
    return <div
    // className="pl-0 pr-4 py-4 md:p-8 "
    >
        <div
            className="flex justify-between items-center "
        >
            <div
                className="w-full  px-4"
            >
                <Input
                    className='font-jose p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent '
                    type="text"
                    placeholder="Search by Title"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}

                />
            </div>
            <Button
                mt='0'
                bgColor={isFilter ? 'bg-green-400' : 'bg-white'}
                hoverBgColor={isFilter ? 'hover:bg-green-500' : 'hover:bg-gray-100'}
                py='py-2'
                onClick={() => setIsFilter(!isFilter)}


            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 6.5H16" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6.5H2" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 17.5H18" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 17.5H2" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </Button>
        </div>
        <div
            className="pl-4 pr-0"
        >
            {
                isFilter && (<Input
                    label={'Location'}
                    type={'text'}
                    placeholder={'Location'}
                    value={loaction}
                    onChange={(e) => setLocation(e.target.value)}

                />)
            }
            {
                isFilter && <Input
                    label={'Start Date'}
                    type={'datetime-local'}
                    placeholder={'Start Date'}
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            }
            {
                isFilter && <Input
                    label={'End Date'}
                    type={'datetime-local'}
                    placeholder={'End Date'}
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            }
            <div
                className="flex justify-between items-center"
            >
                <Button
                    text={'Search'}
                    onClick={handleSubmit}
                />

                {
                    isFilter && <Button
                        text={'Clear Filter'}
                        className="mt-2 bg-[#ff3366] text-white px-4 py-[0.4rem] md:py-2 rounded-md font-play"
                        onClick={handleClearFilter}

                    />
                }
            </div>
        </div>
    </div>;
}
