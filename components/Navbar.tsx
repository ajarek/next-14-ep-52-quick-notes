import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"


const Navbar = () => {
  return (
    <div className="w-3/4 mx-auto h-16 flex items-center justify-between px-4 border-b border-primary bg-background ">
      <Link href="/" className="flex items-center gap-2">
      <Image
              src="/images/logo.png"
              alt="Notes Logo"
              className="flex items-center gap-2"
              width={48}
              height={48}
              priority
            />
            <h1 className="text-2xl"><span className="font-bold">Quick</span> Notes</h1>

      </Link>
      <Link href='/add-note'  className="text-primary text-lg border border-primary py-1 px-4 rounded-sm hover:bg-primary hover:text-white ">Add a note</Link>
        
    </div>
  )
}

export default Navbar