'use client'

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import React, { useState } from 'react';
import { ThemeSwitch } from "@/components/theme-switch";
import Logo from "./logo";


export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<NextUINavbar  
			position='sticky'
			isMenuOpen={isMenuOpen}
      		onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
						<Link
							color="primary"
							isBlock
							href="/" 
							onClick={() => setIsMenuOpen(false)}
						>
							<Logo />
						</Link>
				</NavbarBrand>
				<ul className="hidden md:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<Link
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								isBlock
								color="primary"
								href={item.href}
							>
								{item.label}
							</Link>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>
			<NavbarContent className="hidden md:flex" justify="end">
				<ThemeSwitch />
			</NavbarContent>


			<NavbarContent className="flex md:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				/>
			</NavbarContent>

			<NavbarMenu >
				<div className="pt-12 px-6 flex flex-col gap-2" >
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								href={item.href}
								size="lg"
								isBlock
								className="text-foreground w-full"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
