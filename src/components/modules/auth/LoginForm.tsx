import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Password from "@/components/ui/Password"
import { useLoginMutation, useSendOTPMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"
import { useNavigate } from "react-router"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const form = useForm()
  const navigate = useNavigate()
  const [login] = useLoginMutation()
  const [sendOTP] = useSendOTPMutation()

  const loginSubmit : SubmitHandler<FieldValues> = async(data) =>{
    try {
      const res = await login(data).unwrap()
      if(res.data.status === 200){
        toast.success("login successfull")
      }
      navigate("/")
      console.log(res)
    } catch (err) {
      console.error(err.data.message);

      if (err.data.message === "password did not match!") {
        toast.error("Invalid credentials");
      }

      if (err.data.message === "user is not verified!") {
        toast.error("Your account is not verified");
        console.log(data.email)

        await sendOTP({email: data.email})
        toast.success("OTP send to your email")

        navigate("/verify", { state: data.email });
      }
    }
  } 

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={form.handleSubmit(loginSubmit)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input placeholder="niloy@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Password {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </Form>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="/register" className="underline underline-offset-4">
            Register
        </a>
      </div>
    </form>
  )
}
