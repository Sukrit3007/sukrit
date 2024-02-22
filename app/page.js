import MainCard from "@/components/MainCard";
import ModeToggle from "@/components/ModeToggle";
import WorkCard from "@/components/WorkCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-24">
  
        <div className="flex flex-row flex-wrap-reverse h-full m-2 md:m-12 ">
            <WorkCard/>
            <MainCard />
        </div>

    </main>
  );
}
