'use client'

import FilterButtons from '@/components/FilterButtons'
import ListCard from '@/components/ListCard'
import { newNoteStore } from '@/store/notesStore'
import data from '../data/notes.json'

export default function Home() {
  const { notes } = newNoteStore()
  return (
    <main className='max-lg:w-full w-3/4  min-h-[calc(100vh-96px)] mx-auto flex flex-col items-center justify-start bg-background px-24 max-lg:px-4'>
      <FilterButtons />
      <div className='w-full flex flex-col  max-h-96 overflow-y-auto scrollbar gap-4'>
        <ListCard
          notes={notes}
          isPopover={true}
        />
        <ListCard
          notes={data}
          isPopover={false}
        />
      </div>
    </main>
  )
}
