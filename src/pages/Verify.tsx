import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Dot } from "lucide-react"
import { toast } from "sonner"
import { useSendOTPMutation, useVerifyOTPMutation } from "@/redux/features/auth/auth.api"

export default function Verify() {
    const location = useLocation()
    const navigate = useNavigate()
    const [sendOTP] = useSendOTPMutation()
    const [verifyOTP] = useVerifyOTPMutation()
    const [email] = useState(location.state)
    console.log("email",email)
    // console.log(location)
    useEffect(()=>{
        if(!location.state){
            navigate("/login")
        }
    }, [])

    const form = useForm({
        defaultValues: {
            pin: ""
        }
    })
    const { reset } = form;
    
    const onSubmit: SubmitHandler<FieldValues> = async(data) => {
        try {
        // const toastID = toast.loading("OTP is verifying")
        console.log(data)
        const payload = {
        email: email,
        otp: data.pin
        }
        const res = await verifyOTP(payload).unwrap()
        console.log(res)
        toast.success("OTP verified")
        navigate("/")
        } catch (error) {
            console.log(error)
            toast.error(error.data.message)
        }
    }

    const handleResendOTP: SubmitHandler<FieldValues> = async()=>{
        try {
            await sendOTP({email: email}).unwrap()
            toast.success("OTP send to your email")
            reset({ pin: "" });
            // navigate("/")
        } catch (error) {
            console.log(error)
            toast.error(error.data.message)
        }
    }

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Verify OTP</CardTitle>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <CardContent>
                            <FormField
                                control={form.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <InputOTP 
                                                maxLength={6} 
                                                {...field}
                                                
                                            >
                                                <InputOTPGroup><InputOTPSlot index={0} /></InputOTPGroup>
                                                    <InputOTPGroup><InputOTPSlot index={1} /></InputOTPGroup>
                                                    <InputOTPGroup><InputOTPSlot index={2} /></InputOTPGroup>
                                                    <Dot/>
                                                    <InputOTPGroup><InputOTPSlot index={3} /></InputOTPGroup>
                                                    <InputOTPGroup><InputOTPSlot index={4} /></InputOTPGroup>
                                                    <InputOTPGroup><InputOTPSlot index={5} /></InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormDescription>
                                            Didn't receive the code?
                                            <Button 
                                                size="sm" 
                                                className="ml-3"
                                                type="button"
                                                onClick={handleResendOTP}
                                            >
                                                resend
                                            </Button>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full">
                                Verify OTP
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    )
}
