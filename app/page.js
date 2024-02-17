import Image from "next/image";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSwitcher/>
    </main>
  );
}
