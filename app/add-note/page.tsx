import FormNote from '@/components/FormNote'
import React from 'react'

const AddNote = () => {
  return (
    <div className='w-3/4  min-h-[calc(100vh-96px)] mx-auto flex flex-col items-center justify-start bg-background px-24'>
      <FormNote />
    </div>
  )
}

export default AddNote
