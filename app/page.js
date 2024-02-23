import Footer from "@/components/Footer";
import MainCard from "@/components/MainCard";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import WorkCard from "@/components/WorkCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-6 grid-row-5 lg:grid-rows-10">
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
