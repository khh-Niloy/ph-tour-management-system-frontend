import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { ITourPackage } from "@/types/tour.type";

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
                url: `/tour/tour-types/${tourId}`,
                method: "DELETE",
                // data: tourType
            }),
            invalidatesTags: ["TOUR"]
        }),


        addTour: builder.mutation({
            query: (tourInfo)=>({
                url: "/tour/create",
                method: "POST",
                data: tourInfo
            }),
            invalidatesTags: ["TOUR"]
        }),


        getAllTour: builder.query<ITourPackage[], unknown>({
            query: (params)=>({
                url: "/tour",
                method: "GET",
                params
            }),
            providesTags: ["TOUR"],
            transformResponse: (response: IResponse<ITourPackage[]>)=> response.data
        }),

        getSingleTour: builder.query({
            query: (id)=>({
                url: `/tour/${id}`,
                method: "GET",
            }),
            providesTags: ["TOUR"],
            transformResponse: (response)=> response.data
        }),
        
    })
})

export const { useAddTourTypeMutation, useGetTourTypeQuery, useDeleteTourTypeMutation, useAddTourMutation, useGetAllTourQuery, useGetSingleTourQuery } = tourApi