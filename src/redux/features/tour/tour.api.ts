import { baseApi } from "@/redux/baseApi";

export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder)=> ({
        addTourType: builder.mutation({
            query: (tourType)=>({
                url: "/tour/create-tour-type",
                method: "POST",
                data: tourType
            }),
            invalidatesTags: ["TOUR"]
        }),
        
        getTourType: builder.query({
            query: ()=>({
                url: "/tour/tour-types",
                method: "GET",
            }),
            providesTags: ["TOUR"],
            transformResponse: (response)=> response.data
        }),

        deleteTourType: builder.mutation({
            query: (tourId)=>({
                url: `tour/tour-types/${tourId}`,
                method: "DELETE",
                // data: tourType
            }),
            invalidatesTags: ["TOUR"]
        }),
        
    })
})

export const { useAddTourTypeMutation, useGetTourTypeQuery, useDeleteTourTypeMutation } = tourApi