import FilterButtons from "@/components/FilterButtons";
import ListCard from "@/components/ListCard";

import Image from "next/image";

export default function Home() {
  return (
    <main className="w-3/4  min-h-[calc(100vh-96px)] mx-auto flex flex-col items-center justify-start bg-background px-24">
     <FilterButtons/>
         <ListCard/>
        
    </main>
  );
}
