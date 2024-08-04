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
import {Ellipsis, Trash2, FilePenLine} from 'lucide-react'
import { Button } from './ui/button'

const ListCard = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className='w-full grid grid-cols-3 gap-4 max-h-96 overflow-y-auto scrollbar'>
      {array.map((item, index) => (
        <Card
          key={index}
          className=''
        >
          <CardHeader>
            <CardDescription className='flex justify-between'>
              <span>April 3, 2024</span>
              <Popover >
                <PopoverTrigger><Ellipsis /></PopoverTrigger>
                <PopoverContent className='flex justify-center  gap-2 w-36'>
                  <Button size={'icon'} variant={'outline'}><FilePenLine /></Button>
                  <Button size={'icon'} variant={'outline'} className='hover:bg-red-500'><Trash2 /></Button>
                </PopoverContent>
              </Popover>
            </CardDescription>
            <CardTitle>Spaghetti Bolognese</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Pasta Bolognese is a classic Italian dish where al dente pasta
              meets a hearty ground beef sauce slow-cooked with onions, garlic,
              and tomatoes.
            </p>
          </CardContent>
          <CardFooter className='flex gap-2'>
            <Button>Recipe</Button>
            <Button>Cooking</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default ListCard
