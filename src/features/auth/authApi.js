import { apiSlice } from "../api/apiSlice";
import { studentUserLoggedIn } from "./studentAuthSlice";

export const studentAuthApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        "studentAuth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );

                    dispatch(
                        studentUserLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),

        studentLogin: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    if (result.data) {
                        localStorage.setItem(
                            "auth",
                            JSON.stringify({
                                accessToken: result.data.accessToken,
                                user: result.data.user,
                            })
                        );
                        dispatch(
                            studentUserLoggedIn({
                                accessToken: result.data.accessToken,
                                user: result.data.user,
                            })
                        );
                    }

                } catch (err) {
                    // do nothing
                }
            },
        }),
    }),
});

export const { useRegisterMutation, useStudentLoginMutation } = studentAuthApi;