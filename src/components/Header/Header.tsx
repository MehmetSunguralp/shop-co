"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { SlBasket } from "react-icons/sl";
import { RiUserLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import mainLogo from "@/public/common/main-logo.svg";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
	const mobileSearchRef = useRef<HTMLInputElement>(null);
	const [shopPopUp, setShopPopUp] = useState("none");
	const [mobileInput, setMobileInput] = useState("none");
	const handleMobileInput = () => {
		setMobileInput((prevVisibility) => (prevVisibility == "none" ? "flex" : "none"));
	};
	useEffect(() => {
		if (mobileInput === "flex") {
			mobileSearchRef.current?.focus();
		}
	}, [mobileInput]);
	const hideMobileSearchInput = () => {
		handleMobileInput();
	};
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
		<>
			<header className={styles.header}>
				<span className={styles.hamburgerIcon} onClick={handleHamburgerMenu}>
					<RxHamburgerMenu />
				</span>
				<Link href={"/"} className={styles.mainLogo}>
					<Image src={mainLogo} alt="shop.co logo" priority />
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

				<div className={styles.inputWrapper}>
					<span>
						<GoSearch className={styles.icons} />
					</span>
					<input type="text" placeholder="Search for products..." />
				</div>
				<div className={styles.accountProccesesIcons}>
					<span onClick={handleMobileInput}>
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
			<div className={styles.mobileInputWrapper} style={{ display: mobileInput }}>
				<input type="text" placeholder="Search for products..." ref={mobileSearchRef} onBlur={hideMobileSearchInput} />
			</div>
			<div className={styles.hamburgerNavbar} style={{ transform: hamburgerMenu }}>
				<span className={styles.hamburgerCloseIcon} onClick={handleHamburgerMenu}>
					<IoMdClose />
				</span>
				<nav className={styles.navbar}>
					<ul>
						<li>
							<Link href={"/womens-clothing"} onClick={handleHamburgerMenu}>
								Women's Clothing
							</Link>
						</li>
						<li>
							<Link href={"/mens-clothing"} onClick={handleHamburgerMenu}>
								Men's Clothing
							</Link>
						</li>
						<li>
							<Link href={"/cosmetics"} onClick={handleHamburgerMenu}>
								Cosmetics
							</Link>
						</li>
						<li>
							<Link href={"/accesories"} onClick={handleHamburgerMenu}>
								Accesories
							</Link>
						</li>
						<li>
							<Link href={"/on-sale"} onClick={handleHamburgerMenu}>
								On Sale
							</Link>
						</li>
						<li>
							<Link href={"/new-arrivals"} onClick={handleHamburgerMenu}>
								New Arrivals
							</Link>
						</li>
						<li>
							<Link href={"/brands"} onClick={handleHamburgerMenu}>
								Brands
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};
