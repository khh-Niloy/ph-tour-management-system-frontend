import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useGetAllDivisionQuery } from '@/redux/features/division/division.api';
import { useGetTourTypeQuery } from '@/redux/features/tour/tour.api';
import { useState } from 'react';

export default function TourFilter() {

    const {data: allDivision, isLoading: divisionIsLoading} = useGetTourTypeQuery(undefined)
    const {data : allTourType, isLoading: tourTypeIsLoading} = useGetAllDivisionQuery(undefined)

    const [selectedDivision, setSelectedDivision] = useState("")
    const [selectedTourType, setSelectedTourType] = useState("")

    // console.log(selectedDivision)


    const divisionOption = allDivision?.map(
    (item: { _id: string; name: string }) => ({
      label: item.name,
      value: item._id,
    })
  );

    const tourTypeOptions = allTourType?.map(
    (item: { _id: string; name: string }) => ({
      label: item.name,
      value: item._id,
    })
  );

    const handleClearFilter = ()=>{

    }

    const handleDivisionChange = ()=>{

    }

    const handleTourTypeChange = ()=>{

    }



  return (
   <div className="col-span-3 w-full h-[500px] border border-muted rounded-md p-5 space-y-4">
      <div className="flex justify-between items-center">
        <h1>Filters</h1>
        <Button size="sm" variant="outline" onClick={handleClearFilter}>
          Clear Filter
        </Button>
      </div>
      <div>
        <p className="mb-2">Division to visit</p>
        <Select
          onValueChange={(value) => setSelectedDivision(value)}
          value={selectedDivision ? selectedDivision : ""}
          disabled={divisionIsLoading}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Divisions</SelectLabel>
              {divisionOption?.map((item: { value: string; label: string }) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <p className="mb-2">Tour Type</p>
        <Select
          onValueChange={handleTourTypeChange}
          value={selectedTourType ? selectedTourType : ""}
          disabled={tourTypeIsLoading}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Divisions</SelectLabel>
              {tourTypeOptions?.map(
                (item: { value: string; label: string }) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                )
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
