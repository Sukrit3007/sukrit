'use client'


import Link from "next/link"
import { Button,  } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"


export function SiteHeader() {
  return (
    <header className="top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 relative">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-normal md:text-base text-primary"
          >
            sukrit.dev
            <span className="sr-only">sukrit</span>
          </Link>
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="rounded-b-2xl bg-primary font-primart-foreground">
            <nav className="grid gap-6 text-lg font-medium rounded-b-xl">
              <Link
                href="#"
                className="flex items-center justify-center gap-2 text-lg font-semibold"
              >
                <h1>sukrit.dev</h1>
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="/"
              >
                Work
              </Link>
              <Link
                href="/about"
              >
                About
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="absolute right-0">
          <ThemeToggle/>
        </div>
      </header>
  )
}
