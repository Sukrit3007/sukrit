import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sukrit",
  description: "Welcome to Sukrit's portfolio – where full stack development meets innovation. Explore projects showcasing expertise in front-end and back-end technologies. Experience the art of coding mastery firsthand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar/>
            {children}
            <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
