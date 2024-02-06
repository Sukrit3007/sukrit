import {Inter} from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = inter({ 
  subsets: ["latin"],
 });

export const metadata = {
  title: "sukrit",
  description: "🙏🏻namaste. this is sukrit portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
            <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}

