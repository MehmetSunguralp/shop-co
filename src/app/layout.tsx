import type { Metadata } from "next";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";
import { SignUpWarner } from "@/components/SignUpWarner/SignUpWarner";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "./global.module.scss";

export const metadata: Metadata = {
	title: "SHOP.CO",
	description: "E-Commerce Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={styles.body}>
				<NextTopLoader color="#808080" />
				<Providers>
					<SignUpWarner />
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
