'use client'
import { Button } from "@/components/ui/button";
import { useFilterButtons } from '@/store/notesStore'

const FilterButtons = () => {
  const { updateButton } = useFilterButtons()
  return (
    <div className="w-full flex items-center justify-start gap-4 py-4">
    <Button variant="outline" className="btn-filter" onClick={()=>updateButton('All')}>All</Button>
    <Button variant="outline" className="btn-filter" onClick={()=>updateButton('Recipe')}>Recipe</Button>
    <Button variant="outline" className="btn-filter" onClick={()=>updateButton('Cooking')}>Cooking</Button>
    <Button variant="outline" className="btn-filter" onClick={()=>updateButton('Travel')}>Travel</Button>
    <Button variant="outline" className="btn-filter" onClick={()=>updateButton('Vacation')}>Vacation</Button>
    <Button variant="outline" className="btn-filter" onClick={()=>updateButton('Adventure')}>Adventure</Button>
  </div>
  )
}

export default FilterButtons