const Note = ({
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
  return (
    <div className='max-lg:w-full w-3/4  min-h-[calc(100vh-96px)] mx-auto grid grid-cols-2 max-lg:grid-cols-1 place-items-center bg-background px-24 max-lg:px-4'>
      <div>
        <span className='span'>Title:</span>
        <h1 className='h1'>{searchParams.title}</h1>
        <span className='span'>Category:</span>
        <h1 className='h1'>{searchParams.category}</h1>
        <span className='span'>Id:</span>
        <h1 className='h1'>{searchParams.id}</h1>
        <span className='span'>Created :</span>
        <h1 className='h1'>{searchParams.createdAt.slice(0, 10)}</h1>
      </div>
      <div>
        <span className='span'>Content:</span>
        <p className='tracking-wide'>{searchParams.content}</p>
      </div>
    </div>
  )
}

export default Note
