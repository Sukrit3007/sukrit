import {Plus_Jakarta_Sans} from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['300'],
 });

export const metadata = {
  title: "sukrit",
  description: "🙏🏻namaste. this is sukrit portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
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

