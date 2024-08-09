'use client'

import FilterButtons from "@/components/FilterButtons";
import ListCard from "@/components/ListCard";
import { newNoteStore, useFilterButtons } from '@/store/notesStore'
import data from '../data/notes.json' 
import type { Note } from '@/store/notesStore'

export default function Home() {
  const { notes } = newNoteStore()
  return (
    <main className="w-3/4  min-h-[calc(100vh-96px)] mx-auto flex flex-col items-center justify-start bg-background px-24">

     <FilterButtons/>
     <div className='w-full flex flex-col  max-h-96 overflow-y-auto scrollbar gap-4'>

         <ListCard notes={notes} isPopover={true}/>
         <ListCard notes={data} isPopover={false}/>


     </div>
        
    </main>
  );
}
