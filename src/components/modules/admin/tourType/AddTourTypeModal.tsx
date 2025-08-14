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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAddTourTypeMutation } from "@/redux/features/tour/tour.api"
import { Plus } from "lucide-react"
import { useState } from "react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { toast } from "sonner"

export default function AddTourTypeModal() {

  const form = useForm()
  const [open, setOpen] = useState(false)

  const [addTourType] = useAddTourTypeMutation()

  const tourTypeSubmit: SubmitHandler<FieldValues> = async(data)=>{
    console.log(data)
    const res = await addTourType({name: data.tourType}).unwrap()
    if(res.success){
      toast.success("tour type added")
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form onSubmit={form.handleSubmit(tourTypeSubmit)}>
        <DialogTrigger asChild>
          <Button className='mb-5' size={"sm"}><Plus/> Add Tour Type</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Tour Type</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <form id="tourTypeSubmit">
              <Form {...form}>

              <FormField
            control={form.control}
            name="tourType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tour type</FormLabel>
                <FormControl>
                  <Input placeholder="hiking" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
              </Form>
            </form>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" form="tourTypeSubmit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
