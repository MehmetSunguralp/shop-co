import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { SlBasket } from "react-icons/sl";
import { RiUserLine } from "react-icons/ri";
import mainLogo from "@/public/common/main-logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link href={"/"}>
				<Image src={mainLogo} alt="shop.co logo" />
			</Link>

			<nav className={styles.navbar}>
				<ul>
					<li>
						Shop
						<span className={styles.downArrow}>
							<IoIosArrowDown />
						</span>
					</li>
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
