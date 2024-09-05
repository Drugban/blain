import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/main.scss"
import { Header } from "@/components/shared"
import { ReactNode } from "react"
import { Sidebar } from "@/components/shared/sidebar/sidebar"

const inter = Inter({
	subsets: ["latin", "cyrillic", "cyrillic-ext"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
	title: "Blain",
	description:
		"Blain это прототип копии YouTube который находится в разработке",
	// icons: [
	// 	"/favicon.ico",
	// 	"/favicon-16x16.png",
	// 	"/favicon-32x32.png",
	// 	"/apple-touch-icon.png",
	// 	"/android-chrome-192x192.png",
	// 	"/android-chrome-512x512.png",
	// ],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<Sidebar />
				<main>{children}</main>
			</body>
		</html>
	)
}
