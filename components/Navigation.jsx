'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,NavbarMenuToggle,NavbarMenu,NavbarMenuItem} from "@nextui-org/react";
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/sukrit.svg'

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "work",
    "about",
    "contact",
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={true} className="">

      <NavbarContent>
        <NavbarBrand>
            <Link href='/'>
                <Image
                    src={logo}
                    alt="Picture of the author"
                    width={150}
                    height={50}
                    />
            </Link>
        </NavbarBrand>

      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            justify="end"
            />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 font-semibold" justify="end">
        <NavbarItem>
          <Link href="/work">
            work
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/about" >
            about
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">
            contact
          </Link>
        </NavbarItem>
        
      </NavbarContent>
      <NavbarMenu >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
          <Link href={`/${item}`} passHref>
              {item}
          </Link>
      </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Navigation
