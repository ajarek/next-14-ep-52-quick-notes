'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRef, useState } from 'react'
import type { Note } from '@/store/notesStore'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { revalidatePath } from 'next/cache'
import { newNoteStore } from '@/store/notesStore'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter } from 'next/navigation'
const EditNote = ({
  searchParams,
}: {
  searchParams: {
    id: string
    title: string
    content: string
    category: string
    createdAt: string
  }
}) => {
  const ref = useRef<HTMLFormElement>(null)
  const { updateNote } = newNoteStore()
  const router = useRouter()
  return (
    <div className='w-3/4  min-h-[calc(100vh-96px)] mx-auto flex flex-col items-center justify-start bg-background px-24'>
      <form
        ref={ref}
        className='w-full  flex flex-col gap-4 p-6 '
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target as HTMLFormElement)

          try {
            const title = formData.get('title')?.toString()
            const content = formData.get('content')?.toString()
            const category = formData.get('category')?.toString()

            const note: Note = {
              id: Number(searchParams.id),
              title: title ?? '',
              content: content ?? '',
              category: category ?? '',
              createdAt: new Date(),
            }
            updateNote(note.id, note)
          } catch (err) {
            console.log(err)
          } finally {
            router.push('/')
          }
          ref.current?.reset()
        }}
      >
        <Label
          htmlFor='title'
          className=' text-xl'
        >
          Note Title
        </Label>
        <Input
          type='text'
          defaultValue={searchParams.title}
          name='title'
          required
        />

        <Label
          htmlFor='content'
          className=' text-xl'
        >
          Note Content
        </Label>
        <Textarea
          defaultValue={searchParams.content}
          name='content'
          required
        />
        <Label
          htmlFor='category'
          className=' text-xl'
        >
          Categories
        </Label>
        <Select
          name='category'
          defaultValue={searchParams.category}
        >
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
  )
}

export default EditNote
