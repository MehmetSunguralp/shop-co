"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { SlBasket } from "react-icons/sl";
import { RiUserLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import mainLogo from "@/public/common/main-logo.svg";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
	const [shopPopUp, setShopPopUp] = useState("none");
	const [hamburgerMenu, setHamburgerMenu] = useState("translateY(-120vh)");
	const handleHamburgerMenu = () => {
		setHamburgerMenu((prevPlace) => (prevPlace == "translateY(-120vh)" ? "translateY(0)" : "translateY(-120vh)"));
	};

	const handleMouseEnter = (): void => {
		setShopPopUp("flex");
	};

	const handleMouseLeave = (): void => {
		setShopPopUp("none");
	};

	return (
		<header className={styles.header}>
			<span className={styles.hamburgerIcon} onClick={handleHamburgerMenu}>
				<RxHamburgerMenu />
			</span>
			<Link href={"/"}>
				<Image src={mainLogo} alt="shop.co logo" />
			</Link>

			<nav className={styles.navbar}>
				<ul>
					<div className={styles.shopWrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						<li className={styles.popUpMenu}>
							Shop
							<span className={styles.downArrow}>
								<IoIosArrowDown />
							</span>
							<ul style={{ display: shopPopUp }}>
								<li>
									<Link href={"/womens-clothing"}>Women's Clothing</Link>
								</li>
								<li>
									<Link href={"/mens-clothing"}>Men's Clothing</Link>
								</li>
								<li>
									<Link href={"/cosmetics"}>Cosmetics</Link>
								</li>
								<li>
									<Link href={"/accesories"}>Accesories</Link>
								</li>
							</ul>
						</li>
					</div>
					<li>
						<Link href={"/on-sale"}>On Sale</Link>
					</li>
					<li>
						<Link href={"/new-arrivals"}>New Arrivals</Link>
					</li>
					<li>
						<Link href={"/brands"}>Brands</Link>
					</li>
				</ul>
			</nav>
			<nav className={styles.hamburgerNavbar} style={{ transform: hamburgerMenu }}>
				{" "}
				<span className={styles.hamburgerIcon} onClick={handleHamburgerMenu}>
					<RxHamburgerMenu />
				</span>
			</nav>
			<div className={styles.inputWrapper}>
				<span>
					<GoSearch className={styles.icons} />
				</span>
				<input type="text" placeholder="Search for products..." />
			</div>
			<div className={styles.accountProccesesIcons}>
				<span>
					<GoSearch />
				</span>
				<span>
					<Link href={"/cart"}>
						<SlBasket />
					</Link>
				</span>
				<span>
					<Link href={"/profile"}>
						<RiUserLine />
					</Link>
				</span>
			</div>
		</header>
	);
};
