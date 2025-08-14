import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGetTourTypeQuery } from '@/redux/features/tour/tour.api'
import { Button } from '@/components/ui/button'
import { Trash2 } from "lucide-react"
import AddTourTypeModal from "@/components/modules/admin/tourType/AddTourTypeModal"

export default function AddTourType() {

  const {data} = useGetTourTypeQuery(undefined)

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
          data?.map((tour : {name : string}) => (
            <TableRow key={tour?.name}>
              <TableCell>{tour?.name}</TableCell>
              <TableCell className='text-right'><Button className='bg-red-400 text-white' size={"sm"}><Trash2/></Button></TableCell>
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
