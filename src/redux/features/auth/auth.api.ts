import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder)=> ({
        login: builder.mutation({
            query: (userInfo)=>({
                url: "/auth/login",
                method: "POST",
                data: userInfo
            })
        }),
        register: builder.mutation({
            query: (userInfo)=>({
                url: "/user/register",
                method: "POST",
                data: userInfo
            })
        }),
        sendOTP: builder.mutation({
            query: (email)=>({
                url: "/otp/send",
                method: "POST",
                data: email
            })
        }),
        verifyOTP: builder.mutation({
            query: (payload)=>({
                url: "/otp/verify",
                method: "POST",
                data: payload
            })
        })
    })
})

export const { useRegisterMutation, useLoginMutation, useSendOTPMutation, useVerifyOTPMutation } = authApi