import ListCard from "@/components/ListCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-3/4  min-h-[calc(100vh-96px)] mx-auto flex flex-col items-center justify-start bg-background px-24">
      <div className="w-full flex items-center justify-start gap-4 py-4">
        <Button variant="outline" className="btn-filter">All</Button>
        <Button variant="outline" className="btn-filter">Recipe</Button>
        <Button variant="outline" className="btn-filter">Cooking</Button>
        <Button variant="outline" className="btn-filter">Travel</Button>
        <Button variant="outline" className="btn-filter">Vacation</Button>
        <Button variant="outline" className="btn-filter">Adventure</Button>
      </div>
         <ListCard/>
        
    </main>
  );
}
