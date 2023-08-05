import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: undefined,
    user: undefined,
};

const studentAuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        studentUserLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        studentUserLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
        },
    },
});

export const { studentUserLoggedIn, studentUserLoggedOut } = studentAuthSlice.actions;
export default studentAuthSlice.reducer;