import DeleteConfirmAlert from "@/components/DeleteConfirmAlert"
import AddDivisionModal from "@/components/modules/admin/division/addDivisionModal"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGetAllDivisionQuery } from "@/redux/features/division/division.api"
import { Trash2 } from "lucide-react"

export default function AddDivision() {

  const {data} = useGetAllDivisionQuery(undefined)

  const handleDelete = (id : string)=>{
    console.log(id)
  }
  
  return (
    <div  className='w-3xl mx-auto'>
    
          <div className='flex items-center justify-between w-full py-5'>
            <h1 className='text-2xl'>Tour type</h1>
            <AddDivisionModal/>
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
                data?.map((division : {name : string, _id: string}) => (
                  <TableRow key={division?.name}>
                    <TableCell>{division?.name}</TableCell>
                    <TableCell className='text-right'>
                      <DeleteConfirmAlert onConfirm={()=> handleDelete(division._id)}>
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
