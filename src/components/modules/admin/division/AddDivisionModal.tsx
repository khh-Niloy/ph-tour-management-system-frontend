import FileUpload from "@/components/FileUpload"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCreateDivisionMutation } from "@/redux/features/division/division.api"
import { Plus } from "lucide-react"
import { useState } from "react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { toast } from "sonner"

export default function AddDivisionModal() {

  const form = useForm()
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState<File | null>(null)

  const [createDivision] = useCreateDivisionMutation()
  
  const divisionSubmit: SubmitHandler<FieldValues> = async(data)=>{
    try {
        const formData = new FormData()
    formData.append("data", JSON.stringify(data))
    formData.append("file", image as File)

    const res = await createDivision(formData).unwrap()
    if(res.success){
        toast.success("new division created")
        setOpen(false)
    }
    } catch (error) {
        console.log(error)
        toast.error((error as Error).message)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form id="divisionSubmit" onSubmit={form.handleSubmit(divisionSubmit)}>
        <DialogTrigger asChild>
          <Button className='mb-5' size={"sm"}><Plus/> Add Division</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Division</DialogTitle>
          </DialogHeader>
          <div className="grid gap-7">
              <Form {...form}>
              <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Division Name</FormLabel>
                <FormControl>
                  <Input placeholder="dhaka" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
              <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Division description</FormLabel>
                <FormControl>
                  <Textarea placeholder="description" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

                <FileUpload onChange={setImage}/>

              </Form>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" form="divisionSubmit">Add</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
