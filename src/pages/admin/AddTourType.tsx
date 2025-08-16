import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useDeleteTourTypeMutation, useGetTourTypeQuery } from '@/redux/features/tour/tour.api'
import AddTourTypeModal from "@/components/modules/admin/tourType/AddTourTypeModal"
import DeleteConfirmAlert from "@/components/DeleteConfirmAlert"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function AddTourType() {

  const {data} = useGetTourTypeQuery(undefined)

  const [deleteTour] = useDeleteTourTypeMutation()

  const handleDelete = async(id: string)=>{
    const toastId = toast.loading("removing")
    try {
      console.log(id)
        const res = await deleteTour(id).unwrap()
        console.log(res)
        if(res.success){
            toast.success("Tour deleted", {id: toastId})
        }
    } catch (error) {
      console.log(error)
      toast.error((error as Error).message, {id: toastId})
    }
  }
  

  return (
    <div  className='w-3xl mx-auto'>

      <div className='flex items-center justify-between w-full py-5'>
        <h1 className='text-2xl'>Tour type</h1>
        <AddTourTypeModal/>
      </div>

      <Table>
    <TableCaption>A list of your tour types</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="">Invoice</TableHead>
        <TableHead className='text-right'>Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>

        {
          data?.map((tour : {name : string, _id: string}) => (
            <TableRow key={tour?.name}>
              <TableCell>{tour?.name}</TableCell>
              <TableCell className='text-right'>
                <DeleteConfirmAlert onConfirm={()=> handleDelete(tour._id)}>
                  <Button className='bg-red-400 text-white' size={"sm"}><Trash2/></Button>
                </DeleteConfirmAlert>
                </TableCell>
            </TableRow>
          ))
        }

        {/* <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell className="text-right">$250.00</TableCell> */}
    </TableBody>
    </Table>    
    </div>
  )
}
