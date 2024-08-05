'use client'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useRef, useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { createNote } from '@/lib/action'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Link from 'next/link'

const FormNote = () => {
  const ref = useRef<HTMLFormElement>(null)
  return (
    <div className='  w-full  gap-8 items-center justify-center p-4 '>
      <div className=' flex flex-col  gap-4'>
        <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Add a note</h1>
          <Link href='/'>❌</Link>
        </div>

        <form
          ref={ref}
          className='w-full  flex flex-col gap-4 p-6 '
          action={async (formData) => {
            await createNote(formData)
            ref.current?.reset()
          }}
        >
          <Label htmlFor='title' className=' text-xl'>Note Title</Label>
          <Input
            type='text'
            placeholder='Title...'
            name='title'
            required
          />

          <Label htmlFor='content' className=' text-xl'>Note Content</Label>
          <Textarea
            placeholder='Content...'
            name='content'
            required
          />
          <Label htmlFor='category' className=' text-xl'>Categories</Label>
          <Select name='category'>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Categories' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Recipe'>Recipe</SelectItem>
              <SelectItem value='Cooking'>Cooking</SelectItem>
              <SelectItem value='Travel'>Travel</SelectItem>
              <SelectItem value='Vacation'>Vacation</SelectItem>
              <SelectItem value='Adventure'>Adventure</SelectItem>
            </SelectContent>
          </Select>

          <Button
            className=' flex self-end px-12 mt-4 '
            type='submit'
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  )
}

export default FormNote
