import React from "react";
import Footer from "@/components/Footer";
import MainCard from "@/components/MainCard";
import WorkCard from "@/components/WorkCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-6 md:px-24 pt-28 m-auto h-screen ">
            <div className="grid gap-8 xl:grid-cols-6 xl:grid-rows-10 w-[100%] lg:w-[80%] h-full rounded-2xl ">
                <div className="lg:col-span-4 xl:row-span-10 order-2 xl:order-none rounded-xl">
                    <WorkCard/>
                </div>
                <div className="lg:col-span-2 xl:row-span-8 order-1 xl:order-none xl:overflow-auto rounded-xl w-full">
                    <MainCard/>
                </div>
                <div className="lg:col-span-2 xl:row-span-2 order-3 rounded-xl">
                    <Footer/>
                </div>
            </div>
        </main>
  );
}
