import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import {Divider} from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import * as Craft from "@/components/craft";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
				<Craft.Section>
                <Craft.Container>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<Divider className="my-4" />
							{children}
						<Divider className="my-4" />
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://github.com/Sukrit3007/sukrit"
								title="nextui.org homepage"
							>
								<span className="text-default-600">🌐 Built by</span>
								<p className="text-primary">Sukrit</p>
							</Link>
						</footer>
					</div>
					</Craft.Container>
              </Craft.Section>
				</Providers>
			</body>
		</html>
	);
}
