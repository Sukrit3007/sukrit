import Footer from "@/components/Footer";
import MainCard from "@/components/MainCard";
import WorkCard from "@/components/WorkCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-6 md:px-24">
            <div className="grid gap-8 lg:grid-cols-6 lg:grid-rows-10 w-full">
                <div className="lg:col-span-4 lg:row-span-10 order-2 lg:order-none">
                    <WorkCard/>
                </div>
                <div className="lg:col-span-2 lg:row-span-9 order-1 lg:order-none">
                    <MainCard/>
                </div>
                <div className="lg:col-span-2 lg:row-span-1 order-3">
                    <Footer/>
                </div>
            </div>
        </main>
  );
}
