import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Sukrit",
  description: "Generated by create next app",
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
          </ThemeProvider>
      </body>
    </html>
  );
}
