import Image from "next/image";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import WorkCards from "@/components/WorkCards";
import MainCards from "@/components/MainCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex flex-row gap-4 flex-wrap-reverse">
        <WorkCards/>
        
        <div>
          <MainCards/>
          <div>
            <Footer/>
          </div>
        </div>
    
      </div>

    </main>
  );
}
