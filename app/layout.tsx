import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Divider } from "@nextui-org/divider";
import * as Craft from "@/components/craft";
import clsx from "clsx";
import Footer from "@/components/footer";

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
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark",children }}>
					<Craft.Section>
						<Craft.Container>
							<div className="flex flex-col h-screen">
								<Navbar />
								<Divider className="my-4" />
								{children}
								<Divider className="my-4" />
								<Footer/>
							</div>
						</Craft.Container>
					</Craft.Section>
				</Providers>
			</body>
		</html>
	);
}
