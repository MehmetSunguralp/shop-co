import type { Metadata } from "next";
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
			<body className={styles.body}>{children}</body>
		</html>
	);
}
