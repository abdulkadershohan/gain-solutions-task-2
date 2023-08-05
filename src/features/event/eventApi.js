import { apiSlice } from "../api/apiSlice";

export const eventApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllEvents: builder.query({
            query: () => ({
                url: '/events',
                method: 'GET',
            })
        }),
        getEventsById: builder.query({
            query: (id) => ({
                url: `/events/${id}`,
                method: 'GET',
            }),
            //  providesTags: (result, error, arg) => [{ type: 'video', id: arg }]
        }),
        createEvent: builder.mutation({
            query: (body) => ({
                url: '/events',
                method: 'POST',
                body,
            }),
            //  pessimistic update 
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const event = await queryFulfilled;
                    // pessimistically update the cache
                    if (event?.data?.id) {
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getAllEvents",
                                undefined,
                                (draft) => {
                                    draft.push(event?.data);
                                }
                            )
                        );
                    }
                }
                catch (err) {
                }
            },
        }),
        editEvent: builder.mutation({
            query: ({ id, data }) => ({
                url: `/events/${id}`,
                method: "PUT",
                body: data
            }),
            // invalidate the get video by id query when we edit a video
            // invalidatesTags: (result, error, arg) => [
            //     'quiz',
            //     { type: 'quiz', id: arg.id }
            // ],
            //  pessimistic update 
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const event = await queryFulfilled;
                    // pessimistically update the cache
                    if (event?.data?.id) {
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getAllEvents",
                                undefined,
                                (draft) => {
                                    const draftEvent = draft.find((item) => item.id == arg.id);
                                    draftEvent = arg.data;

                                }
                            )
                        );
                    }
                }
                catch (err) {
                }
            }
        }),

    }),
});
export const { useCreateEventMutation, useGetAllEventsQuery, useGetEventsByIdQuery, useEditEventMutation } = eventApi;