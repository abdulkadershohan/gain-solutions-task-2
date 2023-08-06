import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    text: '',
    location: '',
    start_date: '',
    end_date: '',
}

export const FilterSearchSlice = createSlice({
    name: 'filterSearch',
    initialState,
    reducers: {
        setSearchFilter: (state, action) => {
            state.text = action.payload.text
            state.location = action.payload.location
            state.start_date = action.payload.start_date
            state.end_date = action.payload.end_date
        },
        setClearSearch: (state) => {
            state.text = ''
            state.location = ''
            state.start_date = ''
            state.end_date = ''
        }

    }
})
export const { setSearchFilter, setClearSearch } = FilterSearchSlice.actions