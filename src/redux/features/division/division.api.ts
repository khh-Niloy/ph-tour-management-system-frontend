import { baseApi } from "@/redux/baseApi";

export const divisionApi = baseApi.injectEndpoints({
    endpoints: (builder)=> ({
        createDivision: builder.mutation({
            query: (divisionInfo)=>({
                url: "/division/create",
                method: "POST",
                data: divisionInfo
            }),
            invalidatesTags: ["DIVISION"]
        }),
        
        getAllDivision: builder.query({
            query: ()=>({
                url: "/division",
                method: "GET",
            }),
            providesTags: ["DIVISION"],
            transformResponse: (response)=> response.data
        }),
        
        getSingleDivision: builder.query({
            query: (slug)=>({
                url: `/division/${slug}`,
                method: "GET",
            }),
            providesTags: ["DIVISION"],
            // transformResponse: (response)=> response.data
        }),

        deleteDivision: builder.mutation({
            query: (id)=>({
                url: `/division/${id}`,
                method: "DELETE",
                // data: tourType
            }),
            invalidatesTags: ["DIVISION"]
        }),
    })
})

export const { useGetAllDivisionQuery, useCreateDivisionMutation, useGetSingleDivisionQuery } = divisionApi