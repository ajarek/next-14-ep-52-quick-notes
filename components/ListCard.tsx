'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Ellipsis, Trash2, FilePenLine } from 'lucide-react'

import { Button } from './ui/button'
const options: any = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
import { newNoteStore, useFilterButtons } from '@/store/notesStore'
import type { Note } from '@/store/notesStore'
import Link from 'next/link'

const ListCard = ({notes}:{notes:Note[]}) => {

  
  const { btnFilter } = useFilterButtons()
  
  
  
  return (
    <div className='w-full grid grid-cols-3 gap-4 '>
      {notes && notes
      .filter((item) => item.category == btnFilter || btnFilter == 'All')
      .map((item, index) => (
        <Card
          key={index}
          className=''
        >
          
          <CardHeader>
            <CardDescription className='flex justify-between'>
              <span>
                {new Date(item.createdAt).toLocaleString('en-US', options)}
              </span>
              <Popover>
                <PopoverTrigger>
                  <Ellipsis />
                </PopoverTrigger>
                <PopoverContent className='flex justify-center  gap-2 w-36'>
                  <Button
                    size={'icon'}
                    variant={'outline'}
                  >
                    <FilePenLine />
                  </Button>
                  <Button
                    size={'icon'}
                    variant={'outline'}
                    className='hover:bg-red-500'
                  >
                    <Trash2 />
                  </Button>
                </PopoverContent>
              </Popover>
            </CardDescription>
           
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <Link href={`/note?id=${item.id}&title=${item.title}&content=${item.content}&category=${item.category}&createdAt=${item.createdAt}`}>
          <CardContent>
            <p>{item.content.slice(0, 80)}...</p>
          </CardContent>
          <CardFooter className='flex gap-2'>
            <Button
              key={index}
              className='hover:bg-primary cursor-default'
            >
              {item.category}
            </Button>
          </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  )
}

export default ListCard
