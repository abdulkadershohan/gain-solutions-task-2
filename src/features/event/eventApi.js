import { apiSlice } from "../api/apiSlice";

export const eventApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllEvents: builder.query({
            query: (page) => ({
                url: `/events?_page=${page}&_limit=2`,
                method: 'GET',
            })
        }),
        getEventsById: builder.query({
            query: (id) => ({
                url: `/events/${id}`,
                method: 'GET',
            }),
            providesTags: (result, error, arg) => [{ type: 'event', id: arg }]
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
                                1,
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
            invalidatesTags: (result, error, arg) => [
                'event',
                { type: 'event', id: arg.id }
            ],
            //  pessimistic update 
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const event = await queryFulfilled;
                    // pessimistically update the cache
                    if (event?.data?.id) {
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getAllEvents",
                                1,
                                (draft) => {
                                    // find and replace the edited event
                                    const draftEvent = draft.find((as) => as.id == arg.id);
                                    draftEvent.title = arg?.data?.title;
                                    draftEvent.description = arg?.data?.description;
                                    draftEvent.start_date = arg?.data?.start_date;
                                    draftEvent.end_date = arg?.data?.end_date;
                                    draftEvent.location = arg?.data?.location;
                                }
                            )
                        );
                    }
                }
                catch (err) {
                }
            },
        }),
        changeStatusEvent: builder.mutation({
            query: ({ id, data }) => ({
                url: `/events/${id}`,
                method: "PUT",
                body: data
            }),
            // invalidate the get video by id query when we edit a video

            //  pessimistic update 
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const event = await queryFulfilled;
                    // pessimistically update the cache
                    if (event?.data?.id) {
                        dispatch(
                            apiSlice.util.updateQueryData(
                                "getAllEvents",
                                1,
                                (draft) => {
                                    // find and replace the edited event
                                    const draftEvent = draft.find((as) => as.id == arg.id);
                                    draftEvent.attendees = arg?.data?.attendees;

                                }
                            )
                        );
                    }
                }
                catch (err) {
                }
            },
        }),

    }),
});
export const { useCreateEventMutation, useGetAllEventsQuery, useGetEventsByIdQuery, useEditEventMutation, useChangeStatusEventMutation } = eventApi;