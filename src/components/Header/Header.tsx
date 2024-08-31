import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { SlBasket } from "react-icons/sl";
import { RiUserLine } from "react-icons/ri";
import mainLogo from "@/public/common/main-logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
	return (
		<header className={styles.header}>
			<div>
				<Image src={mainLogo} alt="shop.co logo" />
			</div>
			<nav className={styles.navbar}>
				<ul>
					<li>
						Shop
						<span className={styles.downArrow}>
							<IoIosArrowDown />
						</span>
					</li>
					<li>On Sale</li>
					<li>New Arrivals</li>
					<li>Brands</li>
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
					<SlBasket />
				</span>
				<span>
					<RiUserLine />
				</span>
			</div>
		</header>
	);
};
